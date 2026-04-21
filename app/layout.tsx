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

const SITE_URL = 'https://esmuzikatolye.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ES Müzik Atölyesi | Piyano, Yaylı ve Gitar Bakım, Onarım, Akort — İzmir',
    template: '%s | ES Müzik Atölyesi',
  },
  description:
    'İzmir Konak\'ta piyano akortu, keman-viyola-viyolonsel onarımı, arşe kıl değişimi ve gitar bakımı. Lüthiyer Sonat Tufan yönetiminde titiz işçilik, güvenilir süreç.',
  applicationName: 'ES Müzik Atölyesi',
  authors: [{ name: 'Sonat Tufan' }],
  creator: 'ES Müzik Atölyesi',
  publisher: 'ES Müzik Atölyesi',
  keywords: [
    'piyano akort izmir',
    'piyano akordu',
    'piyano tamiri izmir',
    'piyano bakımı',
    'keman tamiri izmir',
    'keman onarımı',
    'viyola tamiri',
    'viyolonsel tamiri',
    'yaylı enstrüman onarımı',
    'arşe kıl değişimi izmir',
    'gitar bakımı izmir',
    'gitar tamiri',
    'gitar setup',
    'lüthiye izmir',
    'lüthiyer izmir',
    'müzik atölyesi izmir',
    'konak piyano akort',
    'ES Müzik Atölyesi',
    'Sonat Tufan',
  ],
  category: 'music',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: 'ES Müzik Atölyesi',
    title: 'ES Müzik Atölyesi | Piyano, Yaylı ve Gitar Bakım, Onarım, Akort — İzmir',
    description:
      'İzmir Konak\'ta piyano akortu, keman-viyola-viyolonsel onarımı, arşe kıl değişimi ve gitar bakımı. Lüthiyer Sonat Tufan yönetiminde titiz işçilik.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ES Müzik Atölyesi | Piyano, Yaylı ve Gitar Bakım, Onarım, Akort',
    description:
      'İzmir Konak\'ta piyano akortu, yaylı enstrüman onarımı, arşe kıl değişimi ve gitar bakımı.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/atolye_logo.png',
    apple: '/atolye_logo.png',
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
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
