import NavBar from '@/components/NavBar'
import './globals.css'
import BottomFooter from '@/components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'Chaparty | Buy Tote bags, stickers, greeting cards of funny indian sayings',
  description: 'Buy hilarious Indian sayings in the form of tote bags, clothing, stickers, greeting cards and many more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
      <Script id="gtag-script" async src="https://www.googletagmanager.com/gtag/js?id=G-6Y843D020P" />
      <Script id="gtag-data">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){
          window.dataLayer.push(arguments)
          }
          gtag('js', new Date());
          gtag('config', 'G-6Y843D020P');`}
      </Script>
      <NavBar></NavBar>
      <img src="/banner.png" style={{ height: "auto", width: "100%" }} />
        {children}
      <BottomFooter></BottomFooter>
      </body>
      
    </html>
  )
}
