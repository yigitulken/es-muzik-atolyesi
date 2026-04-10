import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { PhotoUploadProvider } from '@/components/photo-upload-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ES Atölye | Piyano, Yaylı ve Gitar Enstrümanları için Bakım, Onarım ve Akort',
  description: 'ES Atölye; piyano, keman, viyola, viyolonsel ve gitar gibi enstrümanlar için bakım, onarım, ayar ve akort hizmetleri sunar. Titiz işçilik, doğru müdahale, güvenilir süreç.',
  generator: 'v0.app',
  icons: {
    icon: '/atolye_logo.png',
    apple: '/atolye_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <PhotoUploadProvider>
          {children}
        </PhotoUploadProvider>
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
