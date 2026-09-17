export const WA_NUMBER = "62895801503259";
export const WA_DISPLAY = "+62 895-8015-03259";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MSG =
  "Halo Byte & Bite! Saya mau konsultasi gratis untuk usaha kuliner saya.";
