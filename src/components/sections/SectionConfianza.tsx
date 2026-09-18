import { Award, Hammer, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { IMAGES } from "@/lib/site";

const values = [
  { icon: Award, label: "Experiencia" },
  { icon: Hammer, label: "Oficio" },
  { icon: HeartHandshake, label: "Trato humano" },
  { icon: Sparkles, label: "Trabajo artesanal" },
  { icon: ShieldCheck, label: "Responsabilidad" },
];

export function SectionConfianza() {
  return (
    <section id="confianza" className="bg-secondary/60 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <img
              src={IMAGES.confianza}
              alt="Herramientas de mano sobre una mesa de trabajo"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-warm-lg"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Un emprendimiento familiar
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Trabajo hecho con experiencia y dedicación.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Detrás de cada arreglo hay años de experiencia, oficio y atención
              personalizada. Nos gusta escuchar qué necesitás y buscar una
              solución práctica para cada trabajo.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <li
                    key={v.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-sm shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    {v.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
