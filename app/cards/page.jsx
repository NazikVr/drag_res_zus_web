"use client"
import { useDynamicImport } from "@/src/hooks/useDynamicImport";

export default function cards() {
  
  const HeavyComponent = useDynamicImport(() => import("@/src/components/DraggableCards/DraggableCards"));

    return (
    <HeavyComponent />
    );
  }