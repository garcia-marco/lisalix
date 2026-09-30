import { onRequestPost } from './contact'

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> }
  RESEND_API_KEY: string
  CONTACT_TO_EMAIL: string
  CONTACT_FROM_EMAIL: string
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url)

    if (pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', {
          status: 405,
          headers: { Allow: 'POST' },
        })
      }
      return onRequestPost({ request, env })
    }

    // Tout le reste est servi depuis l'export statique (out/).
    return env.ASSETS.fetch(request)
  },
}
