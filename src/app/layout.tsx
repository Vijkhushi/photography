import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "KRONOS 8K CINE | Master Cinema Imaging System",
  description: "Experience the next generation of cinematic motion picture capture. 8K Full-Frame CMOS architecture, 16.5+ stops dynamic range, dual native ISO, and titanium positive-lock PL mount.",
  keywords: ["cinema camera", "8K RAW", "full frame", "cinematography", "PL mount", "dynamic range", "color science"],
  authors: [{ name: "Kronos Cinema Labs" }],
  openGraph: {
    title: "KRONOS 8K CINE | Master Cinema Imaging System",
    description: "Precision engineered for the world's most demanding productions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050505] text-[#f5f5f7] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
