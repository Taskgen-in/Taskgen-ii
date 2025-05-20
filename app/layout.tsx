import './globals.css'
import { Inter, Montserrat, Playfair_Display } from 'next/font/google'
// app/layout.tsx or app/page.tsx (only in server components)
// import { checkDbConnection } from "@/lib/checkDbConnection";

// checkDbConnection();

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Taskgen',
  description: 'Professional Work-From-Home Platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
