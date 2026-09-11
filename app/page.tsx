import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import MissionsSection from "@/components/MissionsSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <MissionsSection />
      </main>
      <SiteFooter />
    </>
  );
}
