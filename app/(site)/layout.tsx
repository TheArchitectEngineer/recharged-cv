import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "react-hot-toast"
import { BsGithub, BsTwitter } from "react-icons/bs"

import "../globals.css"

import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Recharged CV",
  description: "AI Resume Builder",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full overflow-hidden bg-black text-white antialiased`}
      >
        <header className="fixed left-0 top-0 z-30 mx-auto w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <nav className="relative z-30 flex h-16 items-center justify-between">
            <h1 className="flex shrink-0 items-center font-bold ">
              <Link href="/">Recharged CV</Link>
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com/roberthgnz"
                target="_blank"
                aria-label="Roberth on Twitter"
                className="flex items-center gap-2"
              >
                <BsTwitter className="size-4" />
                <span>Follow</span>
              </Link>
              <Link
                href="https://github.com/roberthgnz/recharged-cv"
                target="_blank"
                aria-label="Roberth on GitHub"
                className="flex items-center gap-2"
              >
                <BsGithub className="size-4" />
                <span>Open Source</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex h-screen flex-col items-center justify-center overflow-hidden">
          {children}
        </main>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{ duration: 5000 }}
        />
        <Analytics />
      </body>
    </html>
  )
}
