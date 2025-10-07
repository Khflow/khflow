import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Poppins } from "@/utils/fonts";
import "../styles/globals.css";
import "../styles/lightbox.css";
import Providers from "./providers";
import TopNavbar from "@/components/ui/layout/TopNavbar";
import BottomNavbar from "@/components/ui/layout/BottomNavbar";
import Sidebar from "@/components/ui/layout/Sidebar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/utils/helpers";
import { IS_PRODUCTION, SpacingClasses } from "@/utils/constants";
import dynamic from "next/dynamic";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";
import Script from "next/script";

const Disclaimer = dynamic(() => import("@/components/ui/overlay/Disclaimer"));

/* ✅ Full SEO metadata */
export const metadata: Metadata = {
  title: {
    default: "KFlix – Watch Movies & TV Shows Online",
    template: "%s | KFlix",
  },
  applicationName: "KFlix",
  description:
    "Your only choice for a free movies and TV shows streaming website. Watch HD dramas, series, and films online.",
  manifest: "/manifest.json",
  icons: {
    icon: siteConfig.favicon,
  },
  openGraph: {
    type: "website",
    siteName: "KFlix",
    title: "KFlix – Watch Movies & TV Shows Online",
    description:
      "Stream movies and TV shows for free on KFlix. HD quality with subtitles.",
    url: "https://kflix.co",
    images: [
      {
        url: "https://kflix.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KFlix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KFlix – Watch Movies & TV Shows Online",
    description:
      "Your only choice for a free movies and TV shows streaming website.",
    images: ["https://kflix.co/og-image.jpg"],
  },
  formatDetection: {
    telephone: false,
  },
};

/* ✅ Theme color for mobile UI */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0C0F" },
  ],
};

/* ✅ Root layout */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en">
      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MGM1B6KYTE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MGM1B6KYTE');
        `}
      </Script>

      {/* ✅ JSON-LD Structured Data (lets Google show "KFlix" instead of kflix.co) */}
      <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "KFlix",
          alternateName: "KFlix.co",
          url: "https://kflix.co/",
        })}
      </Script>

      <body className={cn("bg-background min-h-dvh antialiased select-none", Poppins.className)}>
        <Suspense>
          <NuqsAdapter>
            <Providers>
              {IS_PRODUCTION && <Disclaimer />}
              <TopNavbar />
              <Sidebar>
                <main className={cn("container mx-auto max-w-full", SpacingClasses.main)}>
                  {children}
                </main>
              </Sidebar>
              <BottomNavbar />
            </Providers>
          </NuqsAdapter>
        </Suspense>

        {/* ✅ Vercel tools */}
        <SpeedInsights debug={false} />
        <Analytics debug={false} />
      </body>
    </html>
  );
}
