"use client";

import { useState, type FormEvent } from "react";
import { Button, Icon } from "@/components/ui";

type Status = "idle" | "submitting" | "success" | "error";

const MESSAGE_MAX_LENGTH = 2000;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Une erreur est survenue, merci de réessayer.");
      }

      setStatus("success");
      form.reset();
      setMessageLength(0);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue, merci de réessayer."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[10px] border border-brand bg-white p-6 text-brand">
        <p className="font-semibold">Merci, votre demande a bien été envoyée !</p>
        <p className="mt-1 text-sm">Nous revenons vers vous rapidement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Champ piège anti-spam, invisible pour les humains */}
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Si vous voyez ce champ, laissez-le vide.
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-bold text-neutral-600">
          Nom*
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-[10px] border border-brand bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-brand/30"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-bold text-neutral-600">
          Adresse e-mail*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-[10px] border border-brand bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-brand/30"
        />
      </div>

      <div>
        <div className="mb-1 flex items-baseline justify-between">
          <label htmlFor="message" className="text-sm font-bold text-neutral-600">
            Message*
          </label>
          <span className="text-xs text-neutral-500">
            {messageLength} sur {MESSAGE_MAX_LENGTH} caractères
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={MESSAGE_MAX_LENGTH}
          onChange={(event) => setMessageLength(event.target.value.length)}
          className="w-full rounded-[10px] border border-brand bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-brand/30"
        />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}

      <Button type="submit" variant="solid" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            Envoi...
            <Icon name="progress_activity" size={18} />
          </>
        ) : (
          <>
            Envoyer
            <Icon name="send" size={18} />
          </>
        )}
      </Button>
    </form>
  );
}
