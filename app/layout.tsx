import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex & Diane — 22 November 2026",
  description: "Wedding invitation — Alex & Diane",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
