import {
  Armchair,
  Box,
  Cog,
  DoorClosed,
  DoorOpen,
  Drill,
  Hammer,
  Home,
  LayoutGrid,
  Layers,
  MoveHorizontal,
  Package,
  Paintbrush,
  Ruler,
  SlidersHorizontal,
  Sparkles,
  Table,
  Wrench,
} from "lucide-react";
import { CARPINTERIA_SERVICES, IMAGES, WA_MESSAGES, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const icons = [
  Wrench,
  Paintbrush,
  Ruler,
  LayoutGrid,
  Table,
  Armchair,
  DoorClosed,
  DoorOpen,
  Box,
  Cog,
  MoveHorizontal,
  SlidersHorizontal,
  Hammer,
  Drill,
  Sparkles,
  Layers,
  Package,
  Home,
];

export function SectionCarpinteria() {
  return (
    <section id="carpinteria" className="bg-background py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <img
              src={IMAGES.carpinteria}
              alt="Persona cortando madera con una sierra"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-warm-lg"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Carpintería · Don Agusto
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              ¿Ese mueble está roto? Quizás no necesitás reemplazarlo.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Don Agusto realiza reparaciones, restauraciones y trabajos nuevos
              en madera, melamina y MDF.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {CARPINTERIA_SERVICES.map((service, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-sm shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    {service}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-primary/10 p-4 text-sm">
                <strong>Reparamos lo que ya tenés.</strong> Los muebles que
                fallan se pueden arreglar.
              </div>
              <div className="rounded-2xl bg-accent/10 p-4 text-sm">
                <strong>También construimos algo nuevo</strong> según tu
                necesidad.
              </div>
            </div>

            <div className="mt-6">
              <a
                href={waLink(WA_MESSAGES.carpinteria)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Consultale a Don Agusto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
