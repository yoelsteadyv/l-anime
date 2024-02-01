import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "L-Anime",
  description: "Showcase Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <navbar className="flex p-2 bg-gray-900">
          <div className="container flex mx-auto">
            <a href="/" className="text-white cursor-pointer">L-Anime</a>
            <ul className="flex gap-2 px-4 text-white">
              <a href="/" className="cursor-pointer">Home</a>
              <a href="/list" className="cursor-pointer">List</a>
              <a href="/about" className="cursor-pointer">About</a>
            </ul>
            <ul className="ml-auto">
              <a href="/search" className="text-red-400 cursor-pointer">Search</a>
            </ul>
          </div>
        </navbar>


        {children}
        <footer className="flex p-2 bg-gray-900">
          <div className="container flex mx-auto">
            <a href="/" className="text-white cursor-pointer">L-Anime</a>
            <ul className="flex gap-2 px-4 text-white">
              <a href="/" className="cursor-pointer">Home</a>
              <a href="/list" className="cursor-pointer">List</a>
              <a href="/about" className="cursor-pointer">About</a>
            </ul>
            <ul className="ml-auto">
              <a href="/search" className="text-red-400 cursor-pointer">Search</a>
            </ul>
          </div>
        </footer>
      </body>
    </html >
  );
}
