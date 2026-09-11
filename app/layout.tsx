import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/Mani-Solar-OS" : "";

export const metadata: Metadata = {
  title: "Mani Solar CRM OS",
  description: "Multi-role solar CRM, ERP and operations prototype for Mani Associates.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
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
