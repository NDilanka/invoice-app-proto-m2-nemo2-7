export type Line = { amount: number };

// ISO 4217 currency decimal places
// 3 decimals: BHD, IQD, JOD, KWD, LYD, OMR, TND
// 0 decimals: CLP, DJF, GNF, ISK, JPY, KMF, KRW, PYG, RWF, UGX, VND, VUV, XAF, XOF, XPF
// 2 decimals: default for all others
const CURRENCY_DECIMALS: Record<string, number> = {
  BHD: 3,
  IQD: 3,
  JOD: 3,
  KWD: 3,
  LYD: 3,
  OMR: 3,
  TND: 3,
  CLP: 0,
  DJF: 0,
  GNF: 0,
  ISK: 0,
  JPY: 0,
  KMF: 0,
  KRW: 0,
  PYG: 0,
  RWF: 0,
  UGX: 0,
  VND: 0,
  VUV: 0,
  XAF: 0,
  XOF: 0,
  XPF: 0,
};

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  const decimals = CURRENCY_DECIMALS[currency] ?? 2;
  return sum.toFixed(decimals);
}
