'use client'
import HeroBanner from '../components/HeroBanner'
import Carousel from '../components/Carousel'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get('/data/movies.json').then(res => setMovies(res.data)).catch(()=>{})
  }, [])

  return (
    <div>
      <HeroBanner />
      <section className="space-y-10 px-8 mt-10">
        <Carousel title="Trending Now" items={movies.slice(0, 10)} />
        <Carousel title="Top Rated" items={movies.slice(10, 20)} />
        <Carousel title="Action & Adventure" items={movies.slice(20, 30)} />
      </section>
    </div>
  )
}
