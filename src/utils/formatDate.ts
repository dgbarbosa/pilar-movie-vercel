export function formatDate(date: string) {
  const newDate = new Date(date);

  if (isNaN(newDate as unknown as number)) return;

  let day = String(newDate.getUTCDate()).padStart(2, "0");
  let month = String(newDate.getMonth() + 1).padStart(2, "0");
  let year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
}
