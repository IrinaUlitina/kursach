"use client";

import { useEffect, useState } from "react";
import {
  DEMO_AUTH_EVENT,
  readDemoUser,
  type DemoUser,
} from "@/lib/demo-session";

export function useDemoUser() {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      setUser(readDemoUser());
      setReady(true);
    };
    sync();
    window.addEventListener(DEMO_AUTH_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(DEMO_AUTH_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return { user, ready, isLoggedIn: ready && user !== null };
}
