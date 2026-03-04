import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arga Ardana | AI Professional & Web Developer",
  description: "Portofolio resmi Arga Ardana. Leveraging AI as a professional tool, not a replacement. Lihat profil, pengalaman, prestasi, dan proyek terbaru Arga.",
  keywords: ["Arga Ardana", "Siapa Arga Ardana", "Portofolio Arga Ardana", "AI Professional", "Web Developer Indonesia"],
  authors: [{ name: "Arga Ardana" }],
  openGraph: {
    title: "Arga Ardana - Portofolio Profesional",
    description: "Leveraging AI as a professional tool, not a replacement.",
    url: "https://domain-anda.vercel.app", // Ganti dengan domain Anda nanti
    siteName: "Arga Ardana Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.className} bg-slate-50 text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
