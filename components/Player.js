'use client'
import { useEffect } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default function Player({ src }) {
  useEffect(() => {
    const player = videojs('khflow-player', { fluid: true })
    return () => player.dispose()
  }, [])

  return (
    <video id="khflow-player" className="video-js vjs-big-play-centered w-full max-w-4xl" controls>
      <source src={src} type="application/x-mpegURL" />
    </video>
  )
}
