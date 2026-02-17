import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Worst Website Ever",
  description: "A full anti-UX internet relic designed to be gloriously terrible.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Lore" },
  { href: "/gallery", label: "Pixels" },
  { href: "/downloads", label: "Danger" },
  { href: "/guestbook", label: "Shoutbox" },
  { href: "/contact", label: "Fax Us" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="site-bg min-h-screen pb-10">
          <header className="sticky top-0 z-40 border-y-4 border-black bg-yellow-300/95 p-2 backdrop-blur-sm">
            <p className="blink text-center text-xs font-black uppercase tracking-[0.35em]">
              100% unofficial portal of confusion since 2004
            </p>
            <nav className="top-nav mt-2 flex flex-wrap justify-center gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="bad-link">
                  {item.label}
                </Link>
              ))}
              <a href="#" className="bad-link">Broken Link</a>
            </nav>
          </header>

          {children}

          <footer className="mx-auto mt-12 max-w-6xl border-4 border-black bg-cyan-200 p-4 text-center text-xs font-bold uppercase">
            <p>Accessibility score: no. Visual chaos score: yes.</p>
            <p className="mt-1">Best viewed with 37 browser tabs and 2 fan noises.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}