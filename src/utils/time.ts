export function formatAttributeDate(date: Date): string {
  return date.toISOString();
}

export function formatContentDate(date: Date, spacing: boolean): string {
  return formatAttributeDate(date)
    .substring(0, 10)
    .replace(/-/g, spacing ? " / " : "/");
}
