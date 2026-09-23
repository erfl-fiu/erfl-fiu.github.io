import type { Metadata } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"

import { site } from "@content/site"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import "./globals.css"

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} (ERFL)`,
    template: `%s · ${site.shortName}`,
  },
  description:
    "The Environmental Risk & Finance Lab at Florida International University models how natural hazards move through engineered and financial systems.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
