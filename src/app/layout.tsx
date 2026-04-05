import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../index.css'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Spelucin | Agency Growth Consultant',
  description: 'Consultoría estratégica para agencias de marketing y publicidad.',
  icons: {
    icon: '/img/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
