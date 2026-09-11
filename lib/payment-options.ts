export type PaymentOption = {
  id: string;
  title: string;
  body: string;
};

export const paymentOptions: PaymentOption[] = [
  {
    id: "invoice",
    title: "PUEDO EMITIR FACTURA",
    body: "Recibes el importe indicado para la misión + IVA cuando corresponda.",
  },
  {
    id: "gift-card",
    title: "PREFIERO UNA TARJETA REGALO",
    body: "¿No puedes emitir factura? Puedes elegir una tarjeta regalo por el valor de tu recompensa entre las opciones disponibles.",
  },
  {
    id: "other",
    title: "OTRA OPCIÓN",
    body: "¿Necesitas otro método? Cuéntanos qué necesitas y nuestro equipo revisará si podemos ofrecerlo.",
  },
];

export const paymentChoices = [
  "Puedo emitir factura",
  "Prefiero una tarjeta regalo",
  "Otra opción",
];
