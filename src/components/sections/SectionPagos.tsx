import { ArrowLeftRight, Banknote, Wallet } from "lucide-react";

const methods = [
  {
    icon: Banknote,
    title: "Efectivo",
    text: "Al retirar tu trabajo o coordinar la entrega.",
  },
  {
    icon: ArrowLeftRight,
    title: "Transferencia",
    text: "Podés pagar desde tu banco o billetera.",
  },
  {
    icon: Wallet,
    title: "Mercado Pago",
    text: "Pago rápido desde el celular.",
  },
];

export function SectionPagos() {
  return (
    <section id="medios-de-pago" className="bg-secondary/60 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Medios de pago
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Podés pagar con:
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-warm"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-balance text-sm text-muted-foreground">
          No publicamos precios porque cada trabajo se evalúa de forma
          individual.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-balance font-display text-lg text-accent">
          “Cada trabajo es diferente. Escribinos y te orientamos según lo que
          necesitás.”
        </p>
      </div>
    </section>
  );
}
