'use client'
import Link from 'next/link'

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="relative w-[160px] shrink-0 cursor-pointer hover:scale-105 transition">
        <img src={movie.thumbnail} alt={movie.title} className="rounded-lg object-cover w-full h-[240px]" />
        <p className="text-sm mt-2 text-gray-300 truncate">{movie.title}</p>
      </div>
    </Link>
  )
}
