import { useEffect, useState, type ReactNode } from "react";
import { Toaster } from "sonner";
import { useAppStore } from "@/lib/store";
import { SEED_VERSION } from "@/lib/seed";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void useAppStore.persist.rehydrate().then(() => {
      if (useAppStore.getState().seedVersion !== SEED_VERSION) {
        useAppStore.getState().resetDemo();
      } else {
        useAppStore.getState().setHydrated();
      }
      setReady(true);
    });
  }, []);

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg text-muted">
        <p className="font-display text-xl tracking-tight text-ink">Direction Room</p>
      </div>
    );
  }

  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "font-sans shadow-lift bg-surface text-ink border-0",
        }}
      />
    </>
  );
}
