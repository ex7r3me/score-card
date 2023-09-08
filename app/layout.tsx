import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Score Card',
  description: 'Keeps scores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={inter.className + ' h-full'}>
        <Navigation />
        <main className='h-full pt-12 mx-auto max-w-3xl bg-golfing bg-no-repeat bg-[-4rem] bg-cover'>
          {children}
        </main>  
      </body>
    </html>
  )
}
