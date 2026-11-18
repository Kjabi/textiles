"use client";

import { useEffect } from "react";
import { StatusPanel } from "@/components/ui/StatusPanel";

/**
 * Route-level error boundary. It catches anything that goes wrong while a
 * page renders and offers a calm, one-click way to try again.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log for the site owner; nothing is shown to the visitor.
    console.error("Page error:", error?.message ?? error);
  }, [error]);

  return (
    <StatusPanel
      eyebrow="S"
      title="This page did not load"
      message="Something went wrong on our side while opening this page. Nothing you did caused it, and nothing has been lost. A quick try usually sorts it out."
      primaryLabel="Try again"
      onPrimary={reset}
      secondaryLabel="Back to home"
      secondaryHref="/"
    />
  );
}
