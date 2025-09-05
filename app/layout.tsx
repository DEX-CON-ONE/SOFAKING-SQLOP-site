import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SQLOPTIMISE - SQL Performance Consulting & Database Optimization",
  description: "Expert SQL optimization and database performance consulting. Boost your database performance by 10x with guaranteed measurable results from senior SQL experts.",
  keywords: ["sql performance", "database tuning", "sql optimization", "query optimization", "database consulting", "sql server performance"],
  openGraph: {
    title: "SQLOPTIMISE - SQL Performance Consulting",
    description: "Expert SQL optimization and database performance consulting. Boost your database performance by 10x with guaranteed measurable results from senior SQL experts.",
    url: "https://sqloptimise.com",
    siteName: "SQLOPTIMISE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SQLOPTIMISE - SQL Performance Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQLOPTIMISE - SQL Performance Consulting",
    description: "Expert SQL optimization and database performance consulting. Boost your database performance by 10x with guaranteed measurable results from senior SQL experts.",
    site: "@sqloptimise",
    images: ["/og-image.png"],
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
