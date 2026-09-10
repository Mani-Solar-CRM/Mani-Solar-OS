import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mani Solar CRM OS",
  description: "Multi-role solar CRM, ERP and operations prototype for Mani Associates.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
