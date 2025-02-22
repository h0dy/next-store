export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("en-SA", {
    style: "currency",
    currency: "SAR",
  }).format(value);
};
