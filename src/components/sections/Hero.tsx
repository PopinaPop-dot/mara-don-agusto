import { ArrowRight, Camera } from "lucide-react";
import { IMAGES, WA_MESSAGES, waLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl px-4 pb-16 pt-14 sm:pb-20 sm:pt-20">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-accent sm:text-sm">
          Costura y Carpintería · Oberá, Misiones
        </p>

        <h1 className="mx-auto mt-4 max-w-3xl text-balance text-center font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Arreglamos, renovamos y damos nueva vida a lo que ya tenés.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-base text-muted-foreground sm:text-lg">
          Arreglos de costura y trabajos de carpintería en Oberá, con atención
          personalizada y años de experiencia.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <a
            href={waLink(WA_MESSAGES.costura)}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-warm transition duration-300 hover:-translate-y-1 hover:shadow-warm-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={IMAGES.heroCostura}
                alt="Manos trabajando en una máquina de coser"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                Costura · Mara
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl font-semibold leading-snug">
                Dale una segunda oportunidad a tus prendas favoritas.
              </h2>
              <span className="mt-4 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-warm transition group-hover:brightness-110">
                Consultar arreglo por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </a>

          <a
            href={waLink(WA_MESSAGES.carpinteria)}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-3xl border border-border bg-card shadow-warm transition duration-300 hover:-translate-y-1 hover:shadow-warm-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={IMAGES.heroCarpinteria}
                alt="Manos trabajando la madera"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                Carpintería · Don Agusto
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl font-semibold leading-snug">
                Reparamos, renovamos y construimos lo que tu hogar necesita.
              </h2>
              <span className="mt-4 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-warm transition group-hover:brightness-110">
                Consultar trabajo por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-balance text-center text-sm text-muted-foreground">
          <Camera className="h-4 w-4 shrink-0 text-accent" />
          <span>
            ¿No sabés si tiene arreglo?{" "}
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline underline-offset-4 hover:text-accent/80"
            >
              Mandanos una foto por WhatsApp
            </a>{" "}
            y contanos qué necesitás.
          </span>
        </p>
      </div>
    </section>
  );
}
