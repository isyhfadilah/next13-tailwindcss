import '@/shared/styles/app.css'
import '@/shared/styles/main.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next 13',
  description: 'Boilerplate Next js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon" 
          href="/static/icons/favicon.ico" 
          sizes='any' 
          type="image/x-icon"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
