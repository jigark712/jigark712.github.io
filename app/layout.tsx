import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FloatingNav } from "@/components/floating-nav";
import { LanguageProvider } from "@/components/language-provider";
import { PageTransition } from "@/components/page-transition";
import { ThemeProvider, themeBootstrapScript } from "@/components/theme-provider";
import { getRequestLocale } from "@/data/request-locale";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Jigar Kanakhara · AI Engineer", template: "%s · Jigar Kanakhara" },
  description:
    "Jigar Kanakhara builds production agentic AI systems. Three multi-agent platforms live, five hackathon wins in one year, one publication in press. MS Computer Science at Boston University.",
  applicationName: "Jigar Kanakhara Portfolio",
  creator: "Jigar Kanakhara",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090909" },
  ],
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getRequestLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {themeBootstrapScript}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider initialLocale={locale}>
            <PageTransition>{children}</PageTransition>
            <FloatingNav />
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
