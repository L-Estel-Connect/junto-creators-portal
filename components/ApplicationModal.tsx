"use client";

import { useEffect, useRef, useState } from "react";
import type { Mission } from "@/lib/missions";
import { paymentChoices } from "@/lib/payment-options";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ApplicationModal({
  mission,
  onClose,
}: {
  mission: Mission | null;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [paymentChoice, setPaymentChoice] = useState(paymentChoices[0]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const isOpen = mission !== null;

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const focusTimeout = window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 0);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => el.offsetParent !== null);

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimeout);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, mission?.id]);

  if (!mission) return null;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-modal-title"
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:max-w-lg sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Junto
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {!submitted ? (
          <>
            <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-ink/40">
              Has elegido
            </p>
            <h2
              id="application-modal-title"
              lang="en"
              className="mt-1 text-2xl font-extrabold uppercase tracking-tight text-ink"
            >
              {mission.title}
            </h2>
            <p className="mt-2 text-sm font-bold text-coral">
              Recompensa: {mission.reward}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <h3 className="text-base font-extrabold text-ink">
                Cuéntanos tu idea
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="applicant-name"
                    className="mb-1.5 block text-sm font-semibold text-ink/70"
                  >
                    Nombre
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="applicant-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-2xl border border-ink/10 px-4 py-3 text-base text-ink outline-none transition-colors focus:border-coral"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="applicant-social"
                    className="mb-1.5 block text-sm font-semibold text-ink/70"
                  >
                    Instagram / TikTok
                  </label>
                  <input
                    id="applicant-social"
                    name="social"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-ink/10 px-4 py-3 text-base text-ink outline-none transition-colors focus:border-coral"
                    placeholder="@tu_usuario"
                  />
                </div>

                <div>
                  <label
                    htmlFor="applicant-email"
                    className="mb-1.5 block text-sm font-semibold text-ink/70"
                  >
                    Email
                  </label>
                  <input
                    id="applicant-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-2xl border border-ink/10 px-4 py-3 text-base text-ink outline-none transition-colors focus:border-coral"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="applicant-idea"
                    className="mb-1.5 block text-sm font-semibold text-ink/70"
                  >
                    Tu idea
                  </label>
                  <textarea
                    id="applicant-idea"
                    name="idea"
                    required
                    rows={3}
                    className="w-full resize-none rounded-2xl border border-ink/10 px-4 py-3 text-base text-ink outline-none transition-colors focus:border-coral"
                    placeholder="Cuéntanos brevemente cómo la contarías…"
                  />
                </div>
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-ink/70">
                  Método de pago
                </legend>
                <div className="space-y-2">
                  {paymentChoices.map((choice) => (
                    <label
                      key={choice}
                      className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                        paymentChoice === choice
                          ? "border-coral bg-coral/5 text-ink"
                          : "border-ink/10 text-ink/70 hover:border-ink/20"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={choice}
                        checked={paymentChoice === choice}
                        onChange={() => setPaymentChoice(choice)}
                        className="h-4 w-4 accent-coral"
                      />
                      {choice}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                className="junto-gradient w-full rounded-full px-6 py-4 text-base font-extrabold tracking-wide text-white shadow-lg shadow-coral/25 transition-transform active:scale-95"
              >
                ENVIAR SOLICITUD
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <h2
              id="application-modal-title"
              className="text-2xl font-extrabold tracking-tight text-ink"
            >
              ¡Solicitud enviada! 🧡
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-ink/60">
              Revisaremos tu perfil y tu idea. Si encaja con la misión,
              recibirás una invitación para continuar.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="junto-gradient mt-8 w-full rounded-full px-6 py-4 text-base font-extrabold tracking-wide text-white shadow-lg shadow-coral/25 transition-transform active:scale-95 sm:w-auto"
            >
              VOLVER A LAS MISIONES
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
