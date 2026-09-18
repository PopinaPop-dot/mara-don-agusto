import {
  Bed,
  Blinds,
  Expand,
  Layers,
  Ruler,
  Scissors,
  Shirt,
  Shrink,
  Sparkles,
  Table,
  Wrench,
} from "lucide-react";
import { COSTURA_SERVICES, IMAGES, WA_MESSAGES, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const icons = [
  Scissors,
  Ruler,
  Shrink,
  Expand,
  Sparkles,
  Wrench,
  Shirt,
  Table,
  Blinds,
  Bed,
  Layers,
];

export function SectionCostura() {
  return (
    <section id="costura" className="bg-secondary/60 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Costura · Mara
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Tus prendas favoritas todavía pueden tener mucha vida.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mara realiza principalmente arreglos y modificaciones de prendas
              y textiles, buscando una solución práctica para que puedas seguir
              usando lo que ya tenés.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {COSTURA_SERVICES.map((service, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-sm shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    {service}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm">
              <strong>Importante:</strong> Mara no confecciona ropa desde cero.
              Su trabajo está enfocado en arreglos, modificaciones y
              reparaciones.
            </div>

            <div className="mt-6">
              <a
                href={waLink(WA_MESSAGES.costura)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Mandale una foto a Mara
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Contanos qué necesitás arreglar y, si podés, envianos una foto
                para orientarte mejor.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={IMAGES.costura}
              alt="Máquina de coser sobre mesa de madera con hilos"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-warm-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
