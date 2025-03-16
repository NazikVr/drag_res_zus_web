"use client"
import { useDynamicImport } from "@/src/hooks/useDynamicImport";

const HeavyComponent = useDynamicImport(() => import("@/src/components/ListRender/ListRender"));

export default function btc() {
    return <HeavyComponent />;
  }