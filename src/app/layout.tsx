import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import '../index.css'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Spelucin - Consultor de Analítica Digital para Agencias',
  description: 'Ayudo a agencias de marketing en Latinoamérica a recuperar la certeza en su medición mediante infraestructura técnica avanzada, GTM Server-Side y Meta CAPI.',
  metadataBase: new URL('https://spelucin.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Alex Spelucin - Consultor de Analítica Digital para Agencias',
    description: 'Ayudo a agencias de marketing en Latinoamérica a recuperar la certeza en su medición mediante infraestructura técnica avanzada, GTM Server-Side y Meta CAPI.',
    type: 'website',
    url: 'https://spelucin.com',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alex Spelucin - Consultor de Analítica Digital'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Spelucin - Consultor de Analítica Digital para Agencias',
    description: 'Ayudo a agencias de marketing en Latinoamérica a recuperar la certeza en su medición mediante infraestructura técnica avanzada, GTM Server-Side y Meta CAPI.',
    images: ['/img/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
}

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alex Spelucin",
  "jobTitle": "Consultor de Analítica Digital",
  "url": "https://spelucin.com",
  "sameAs": [
    "https://www.linkedin.com/in/spelucin/",
    "https://github.com/spelucin"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-5X26DNSW" />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
