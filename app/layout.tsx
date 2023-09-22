import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation/navigation'
import ThreeBackground from '@/components/three-background/three-background'

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
        <ThreeBackground />
        <main className='relative z-20 h-full pt-14 pl-4 pr-4 mx-auto max-w-3xl'>
          {children}
        </main>  
      </body>
    </html>
  )
}
