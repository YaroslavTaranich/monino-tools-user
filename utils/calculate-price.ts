export function calculatePrice(price: number, days: number) {
  if (days < 3) return price;
  if (days < 7) return Math.ceil((price / 100) * 0.8) * 100;
  if (days < 21) return Math.ceil((price / 100) * 0.7) * 100;
  return Math.ceil((price / 100) * 0.6) * 100;
}

export const calculateZalog = (zalog: number, price: number, days: number) => {
  const currentPrice = calculatePrice(price, zalog);
  const minZalog = Math.ceil((zalog / 100) * 0.2) * 100;
  const currentZalog = Math.ceil((zalog - currentPrice * days) / 100) * 100;
  return Math.max(currentZalog, minZalog);
};
