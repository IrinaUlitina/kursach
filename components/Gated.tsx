"use client";

import type { ReactNode } from "react";
import { useDemoUser } from "@/components/useDemoUser";
import { hasTariffCabinets } from "@/lib/demo-session";

export function Gated({
  guest,
  registered,
}: {
  guest: ReactNode;
  registered: ReactNode;
}) {
  const { isLoggedIn } = useDemoUser();
  return isLoggedIn ? registered : guest;
}

export function TariffGated({
  locked,
  unlocked,
}: {
  locked: ReactNode;
  unlocked: ReactNode;
}) {
  const { user } = useDemoUser();
  if (user && hasTariffCabinets(user.role)) return unlocked;
  return locked;
}
