import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosApps } from "react-icons/io";
import { FaBlog } from "react-icons/fa";

const inter = Inter({ subsets: ['latin'] })

const siteName = "Yuta's Profile Site"
const description = '大学生エンジニアをしているYutaです。こちらのサイトではこれまでの経歴や技術ブログ、スキルセットなどについてまとめております。'
const url = 'https://my-blog-yuta-2001.vercel.app/'

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@yuta1984421',
    creator: '@yuta1984421',
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="text-gray-600 body-font fixed z-50 bg-white top-4 -translate-x-1/2 md:translate-x-0 left-1/2 md:left-4 rounded-full shadow-md">
          <div className="container mx-auto flex px-5 py-3 flex-col md:flex-row items-center">
            <nav className="md:mr-auto md:ml-6 md:py-1 flex items-center text-base justify-center">
              <Link href="/" className="mr-2 md:mr-5 hover:text-gray-900 text-md md:text-xl text-black transition duration-300 ease-in-out font-semibold flex items-center">
                <IoHome className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                HOME
              </Link>
              <Link href="/profile" className="mr-2 md:mr-5 hover:text-gray-900 text-md md:text-xl text-black transition duration-300 ease-in-out font-semibold flex items-center">
                <CgProfile className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                PROFILE
              </Link>
              <Link href="/works" className="mr-2 md:mr-5 hover:text-gray-900 text-md md:text-xl text-black transition duration-300 ease-in-out font-semibold flex items-center">
                <IoIosApps className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                WORKS
              </Link>
              <Link href="/blogs" className="md:mr-5 hover:text-gray-900 text-md md:text-xl text-black transition duration-300 ease-in-out font-semibold flex items-center">
                <FaBlog className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                BLOGS
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
