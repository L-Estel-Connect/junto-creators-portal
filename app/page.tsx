import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionsSection from "@/components/MissionsSection";
import HowItWorks from "@/components/HowItWorks";
import PaymentSection from "@/components/PaymentSection";
import CreativeSection from "@/components/CreativeSection";
import PublishingRequirements from "@/components/PublishingRequirements";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MissionsSection />
        <HowItWorks />
        <PaymentSection />
        <CreativeSection />
        <PublishingRequirements />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
