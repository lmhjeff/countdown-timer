"use client";

import { useEffect, useState } from "react";
import "./globals.css";

const useHasHydrated = () => {
  const [hydrated, setHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasHydrated = useHasHydrated();

  return (
    <html lang="en">
      <body>{hasHydrated ? children : null}</body>
    </html>
  );
}
