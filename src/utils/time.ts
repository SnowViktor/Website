export function formatAttributeDate(date: Date): string {
  return date.toISOString();
}

export function formatContentDate(date: Date, spacing: boolean = true): string {
  return date
    .toISOString()
    .substring(0, 10)
    .replace(/-/g, `${spacing ? " / " : "/"}`);
}
