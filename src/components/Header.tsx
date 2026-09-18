import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WA_MESSAGES, waLink } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex min-w-0 items-baseline gap-2">
          <span className="truncate font-display text-lg font-semibold tracking-tight sm:text-xl">
            Mara &amp; Don Agusto
          </span>
          <span className="hidden text-xs text-muted-foreground md:inline">
            Costura y Carpintería · Oberá
          </span>
        </a>
        <a
          href={waLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-whatsapp-foreground shadow-warm transition hover:brightness-110"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Consultar
        </a>
      </div>
    </header>
  );
}
