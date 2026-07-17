/** Zahlen-Formatierung im deutschen Format (Kontor-Stil). */

export function formatEuro(value: number, fractionDigits = 0): string {
  return (
    value.toLocaleString('de-DE', {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }) + ' €'
  )
}

export function formatPercent(value: number, fractionDigits = 1): string {
  return (
    value.toLocaleString('de-DE', {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }) + ' %'
  )
}
