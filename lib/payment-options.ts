export type PaymentOption = {
  id: string;
  title: string;
  body: string;
};

export const paymentOptions: PaymentOption[] = [
  {
    id: "invoice",
    title: "PUEDO EMITIR FACTURA",
    body: "Emites tu factura a Junto.\n\n100 € + IVA cuando corresponda.",
  },
  {
    id: "gift-card",
    title: "PREFIERO UNA TARJETA REGALO",
    body: "¿No puedes emitir factura?\n\nPuedes elegir una tarjeta regalo de 100 € entre las opciones disponibles.",
  },
  {
    id: "other",
    title: "OTRA OPCIÓN",
    body: "¿Necesitas otro método?\n\nIndícalo al solicitar la misión y nuestro equipo revisará si podemos ofrecerlo.",
  },
];

export const paymentChoices = [
  "Puedo emitir factura",
  "Prefiero una tarjeta regalo",
  "Otra opción",
];
