"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingPage from "app/loading";

export default function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return <LoadingPage />;
  }

  return <>{children}</>;
}
