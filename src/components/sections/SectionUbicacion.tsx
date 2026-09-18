import { ExternalLink, MapPin } from "lucide-react";
import { ADDRESS, MAPS_EMBED_URL, MAPS_LINK, WA_MESSAGES, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function SectionUbicacion() {
  return (
    <section id="ubicacion" className="bg-background py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              ¿Dónde estamos?
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {ADDRESS}
            </h2>
            <p className="mt-4 flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              Podés acercarnos tu trabajo o consultarnos para coordinar según
              el tipo de servicio.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Consultar antes de venir
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-warm transition hover:bg-secondary"
              >
                Ver en Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-warm">
            <iframe
              src={MAPS_EMBED_URL}
              title="Mapa: Mara & Don Agusto, San Luis 964, Oberá, Misiones"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
