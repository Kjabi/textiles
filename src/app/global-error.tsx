"use client";

import { useEffect } from "react";

/**
 * Last-resort error boundary. It replaces the whole document, so it must
 * render its own <html> and <body> and cannot rely on the root layout.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log for the site owner; nothing is shown to the visitor.
    console.error("Global error:", error?.message ?? error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fffaf0",
          color: "#302312",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "34rem", textAlign: "center" }}>
          <div
            aria-hidden="true"
            style={{
              width: "4rem",
              height: "4rem",
              margin: "0 auto",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(to left, #f8b500, #fceabb)",
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
            }}
          >
            S
          </div>

          <h1
            style={{
              margin: "1.75rem 0 0",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1.875rem",
              fontWeight: 500,
              lineHeight: 1.25,
            }}
          >
            Let&apos;s take a moment
          </h1>
          <p
            style={{
              margin: "1rem 0 0",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#8b7355",
            }}
          >
            The site hit an unexpected problem. Please try once more — and if it keeps happening,
            call the shop and we will help you directly.
          </p>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                border: 0,
                cursor: "pointer",
                borderRadius: "9999px",
                padding: "0.85rem 1.75rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "linear-gradient(to left, #f8b500, #fceabb)",
                color: "#302312",
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                borderRadius: "9999px",
                border: "1px solid #f8b500",
                padding: "0.85rem 1.75rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#594016",
              }}
            >
              Back to home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
