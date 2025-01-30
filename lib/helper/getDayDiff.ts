export function getDayDiff(shipDateStr: string, estimatedDeliveryDateStr: string): number {
  const shipDate = new Date(shipDateStr);
  const estimatedDeliveryDate = new Date(estimatedDeliveryDateStr);

  const diffInMs = estimatedDeliveryDate.getTime() - shipDate.getTime();

  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return Math.floor(diffInDays);
}
