import {Inter} from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
    title: 'Nahuel Basterretche Submission',
    description: 'Using React + Next + Tailwind + Flowbite + React Three Fiber + Drei',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body  className={inter.className}>{children}</body>
    </html>
  )
}
