import { WA_MESSAGES, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function SectionCtaFinal() {
  return (
    <section id="consultar" className="relative overflow-hidden bg-primary py-16 sm:py-24">
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-whatsapp/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-3xl px-4 text-center">
        <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
          ¿Tenés algo para arreglar? Mandanos una foto.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-primary-foreground/90">
          No hace falta que sepas exactamente qué reparación necesitás.
          Mostranos el problema y vemos juntos qué solución podemos darte.
        </p>

        <div className="mt-8">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 items-center gap-3 rounded-full bg-card px-8 text-lg font-semibold text-primary shadow-warm-lg transition hover:-translate-y-0.5 hover:bg-card/95"
          >
            <WhatsAppIcon className="h-7 w-7 text-whatsapp" />
            Consultar ahora por WhatsApp
          </a>
        </div>

        <p className="mt-8 text-sm text-primary-foreground/80">
          Mara &amp; Don Agusto · Oberá, Misiones
        </p>
      </div>
    </section>
  );
}
