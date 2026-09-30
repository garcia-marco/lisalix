interface Env {
  RESEND_API_KEY: string
  CONTACT_TO_EMAIL: string
  CONTACT_FROM_EMAIL: string
}

interface ContactPayload {
  name?: string
  email?: string
  phone?: string
  message?: string
  company?: string // champ honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export const onRequestPost = async ({
  request,
  env,
}: {
  request: Request
  env: Env
}) => {
  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return json({ ok: false, error: 'Corps de requête invalide.' }, 400)
  }

  // Bot détecté via le honeypot : on répond succès sans rien envoyer.
  if (payload.company) {
    return json({ ok: true })
  }

  const name = payload.name?.trim() ?? ''
  const email = payload.email?.trim() ?? ''
  const phone = payload.phone?.trim() ?? ''
  const message = payload.message?.trim() ?? ''

  if (!name || !email || !message) {
    return json(
      { ok: false, error: 'Merci de remplir tous les champs obligatoires.' },
      400,
    )
  }

  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'Adresse email invalide.' }, 400)
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    return json(
      { ok: false, error: "Le service d'envoi d'email n'est pas configuré." },
      500,
    )
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `Nouvelle demande de devis — ${name}`,
      html: `
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone :</strong> ${escapeHtml(phone || 'Non renseigné')}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    }),
  })

  if (!resendResponse.ok) {
    return json(
      { ok: false, error: "Échec de l'envoi de l'email, merci de réessayer." },
      502,
    )
  }

  return json({ ok: true })
}
