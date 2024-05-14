import i18next from "i18next";

interface formatValueOptions {
  decimalPlace?: number;
}

export function formatValue(
  value: number,
  { decimalPlace }: formatValueOptions = { decimalPlace: 0 }
) {
  if (!Number.isFinite(value)) {
    value = 0;
  }
  const decimalPlaceOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimalPlace ?? 0,
  };

  return i18next.language === "en"
    ? value.toLocaleString("en-us", decimalPlaceOptions)
    : value.toLocaleString("pt-br", decimalPlaceOptions);
}
