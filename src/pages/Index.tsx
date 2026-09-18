import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionCarpinteria } from "@/components/sections/SectionCarpinteria";
import { SectionComo } from "@/components/sections/SectionComo";
import { SectionConfianza } from "@/components/sections/SectionConfianza";
import { SectionCostura } from "@/components/sections/SectionCostura";
import { SectionCtaFinal } from "@/components/sections/SectionCtaFinal";
import { SectionPagos } from "@/components/sections/SectionPagos";
import { SectionUbicacion } from "@/components/sections/SectionUbicacion";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";

const Index = () => (
  <div className="min-h-screen bg-background font-sans text-foreground">
    <Header />
    <main>
      <Hero />
      <SectionCostura />
      <SectionCarpinteria />
      <SectionComo />
      <SectionConfianza />
      <SectionPagos />
      <SectionUbicacion />
      <SectionCtaFinal />
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
