import RichText from "@/components/RichText";
import type { PaymentOption as PaymentOptionType } from "@/lib/payment-options";

export default function PaymentOption({
  option,
}: {
  option: PaymentOptionType;
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-ink/5 bg-white p-6 shadow-sm shadow-ink/[0.03] sm:p-7">
      <h3 className="text-base font-semibold uppercase tracking-tight text-ink sm:text-lg">
        {option.title}
      </h3>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-ink/60 sm:text-base">
        <RichText text={option.body} />
      </div>
    </div>
  );
}
