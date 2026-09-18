import { MapPin } from "lucide-react";
import { ADDRESS, WA_MESSAGES, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-28 pt-10 sm:pb-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
        <p className="font-display text-lg font-semibold text-foreground">
          Mara &amp; Don Agusto
        </p>
        <p className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-accent" />
          Costura y carpintería · {ADDRESS}
        </p>
        <p>
          Emprendimiento familiar · arreglamos, recuperamos y transformamos.
        </p>
        <a
          href={waLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-whatsapp underline underline-offset-4 hover:brightness-110"
        >
          Escribinos por WhatsApp
        </a>
      </div>
    </footer>
  );
}
