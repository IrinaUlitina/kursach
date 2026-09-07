"use client";

import { useState } from "react";

export function DemoAction({ label, done }: { label: string; done: string }) {
  const [ok, setOk] = useState(false);

  if (ok) {
    return <p className="text-sm font-medium text-primary">{done}</p>;
  }

  return (
    <button
      type="button"
      className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-[#0c667e]"
      onClick={() => setOk(true)}
    >
      {label}
    </button>
  );
}
