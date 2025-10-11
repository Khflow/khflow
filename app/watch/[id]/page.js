'use client'
import { useParams } from 'next/navigation'
import Player from '../../components/Player'
import data from '/public/data/movies.json'

export default function WatchPage() {
  const params = useParams()
  const id = params?.id
  const movie = (data || []).find(m => m.id.toString() === id)

  if (!movie) return <p className="pt-24 text-center">Movie not found</p>

  return (
    <div className="pt-8 flex flex-col items-center">
      <h1 className="text-3xl mb-4">{movie.title}</h1>
      <Player src={movie.videoUrl} />
    </div>
  )
}
