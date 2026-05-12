import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Raj Mhetar",
  description: "Personal portfolio of Raj Mhetar - ECE & Business Honors Student at UT Austin",
  metadataBase: new URL("https://rajmhetar.github.io"),
  icons: {
    icon: '/images/RM.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}

