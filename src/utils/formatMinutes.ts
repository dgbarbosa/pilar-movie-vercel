export function formatMinutes(minutes: number) {
  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}
