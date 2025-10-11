'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MovieCard from './MovieCard'
import { useRef } from 'react'

export default function Carousel({ title, items }) {
  const ref = useRef(null)

  const scroll = (dir) => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir === 'left' ? -580 : 580, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex items-center">
        <button onClick={() => scroll('left')} className="absolute left-0 z-10 bg-black/60 p-2 rounded-full hover:bg-blue-500 transition hidden md:block">
          <ChevronLeft />
        </button>
        <div ref={ref} className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth py-2">
          {items && items.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        <button onClick={() => scroll('right')} className="absolute right-0 z-10 bg-black/60 p-2 rounded-full hover:bg-blue-500 transition hidden md:block">
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
