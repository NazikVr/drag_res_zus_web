"use client";

import dynamic from "next/dynamic";

export function useDynamicImport(importFunc) {
  return dynamic(importFunc, { ssr: false });
}
