'use client'
import Link from 'next/link'
import { Search, User } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/90 to-transparent fixed w-full z-50">
      <Link href="/" className="text-2xl font-bold text-blue-400">KHFlow</Link>
      <div className="hidden md:flex gap-6 items-center text-gray-200">
        <Link href="/">Home</Link>
        <Link href="/movies">Movies</Link>
        <Link href="/tv">TV Shows</Link>
        <Search className="cursor-pointer" />
        <Link href="/login"><User /></Link>
      </div>
    </nav>
  )
}
