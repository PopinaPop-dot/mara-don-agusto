import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WA_MESSAGES, waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(WA_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 items-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground shadow-warm-lg transition hover:brightness-110 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-5 w-5" />
      Consultar
    </a>
  );
}
