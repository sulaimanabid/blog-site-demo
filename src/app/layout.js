import "./globals.css";
import Link from "next/link";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Fitness Blog Site</title>
        <meta
          name="description"
          content="Welcome to the Fitness Blog Site where you can find tips, workouts, and nutrition advice."
        />
      </Head>
      <body>
        <header className="bg-purple-600 p-4 sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center text-white">
            <h1 className="text-2xl font-bold">
              <Link href="/">Fitness Blog Site</Link>
            </h1>
            <div className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/api">API</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4 bg-[#ededed]">{children}</main>
        <footer className="p-4 mt-8 text-center">
          &copy; {new Date().getFullYear()} Blog Site. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
