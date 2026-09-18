import { CalendarCheck, ClipboardList, MessageCircle } from "lucide-react";
import { WA_MESSAGES, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const steps = [
  {
    icon: MessageCircle,
    title: "Mandanos una foto",
    text: "Escribinos por WhatsApp y contanos qué necesitás.",
  },
  {
    icon: ClipboardList,
    title: "Evaluamos el trabajo",
    text: "Vemos qué solución se puede realizar y coordinamos el presupuesto.",
  },
  {
    icon: CalendarCheck,
    title: "Coordinamos",
    text: "Podés acercarnos el trabajo o coordinamos según el tipo de servicio.",
  },
];

export function SectionComo() {
  return (
    <section id="como-trabajamos" className="bg-secondary/60 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Así de simple
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Cómo trabajamos
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-balance text-muted-foreground">
          En tres pasos, sin vueltas. Contanos el problema y nosotros buscamos
          la solución.
        </p>

        <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-warm"
              >
                <span className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-bold text-primary/10">
                  {i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-full bg-whatsapp px-8 text-base font-semibold text-whatsapp-foreground shadow-warm-lg transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Enviar foto por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
