import SectionHeader from "@/components/SectionHeader";
import PaymentOption from "@/components/PaymentOption";
import { paymentOptions } from "@/lib/payment-options";

export default function PaymentSection() {
  return (
    <section className="bg-ink/[0.02] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Tu recompensa"
          headline="Tú eliges cómo cobrar."
          description={<p>Tu método de pago queda confirmado antes de crear.</p>}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {paymentOptions.map((option) => (
            <PaymentOption key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
}
