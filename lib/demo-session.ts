export const DEMO_SESSION_KEY = "cu_demo_user";
export const DEMO_AUTH_EVENT = "cu-demo-auth";

export const demoRoles = ["person", "business", "specialist"] as const;
export type DemoRole = (typeof demoRoles)[number];

export type DemoUser = {
  role: DemoRole;
  name: string;
  email: string;
  phone: string;
  inn?: string;
};

export const roleLabels: Record<DemoRole, string> = {
  person: "Физлицо",
  business: "Бизнес",
  specialist: "Специалист (компания)",
};

export function isDemoRole(value: string): value is DemoRole {
  return demoRoles.includes(value as DemoRole);
}

export function hasTariffCabinets(role: DemoRole): boolean {
  return role === "business" || role === "specialist";
}

export function isDemoUser(value: unknown): value is DemoUser {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.role === "string" &&
    isDemoRole(record.role) &&
    typeof record.name === "string" &&
    typeof record.email === "string" &&
    typeof record.phone === "string"
  );
}

export function readDemoUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(DEMO_SESSION_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isDemoUser(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writeDemoUser(user: DemoUser): void {
  window.localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(user));
  notifyDemoAuth();
}

export function clearDemoUser(): void {
  window.localStorage.removeItem(DEMO_SESSION_KEY);
  notifyDemoAuth();
}

export function notifyDemoAuth(): void {
  window.dispatchEvent(new Event(DEMO_AUTH_EVENT));
}

export function shortName(user: DemoUser): string {
  return user.name.trim().split(/\s+/)[0] || user.email;
}
