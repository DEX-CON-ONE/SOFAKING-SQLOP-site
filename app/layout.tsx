import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SQL Server Performance & Cost Optimisation | SQLOPTIMISE",
  description: "Slow SQL hurting user experience? SQLOPTIMISE delivers measurable improvements with expert tuning, health checks, and best-practices automated & routine.",
  keywords: ["SQL Server performance", "Azure SQL", "cost optimisation", "performance tuning"],
  openGraph: {
    title: "SQL Server Performance & Cost Optimisation | SQLOPTIMISE",
    description: "Slow SQL hurting user experience? SQLOPTIMISE delivers measurable improvements with expert tuning, health checks, and best-practices automated & routine.",
    url: "https://SQLOPTIMISE.COM",
    siteName: "SQLOPTIMISE",
    images: [
      {
        url: "/assets/brand/OG_image.png",
        width: 1200,
        height: 630,
        alt: "SQLOPTIMISE - SQL Server Performance & Cost Optimisation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQL Server Performance & Cost Optimisation | SQLOPTIMISE",
    description: "Slow SQL hurting user experience? SQLOPTIMISE delivers measurable improvements with expert tuning, health checks, and best-practices automated & routine.",
    images: ["/assets/brand/OG_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
