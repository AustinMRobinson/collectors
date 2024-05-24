let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function formatPrice(price: number) {
  return USDollar.format(price);
}
