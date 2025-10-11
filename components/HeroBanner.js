'use client'
import { motion } from 'framer-motion'

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <img src="/posters/banner.svg" className="object-cover w-full h-full opacity-80" alt="Banner" />
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="absolute bottom-10 left-8 max-w-xl">
        <h1 className="text-4xl font-bold mb-3">Welcome to KHFlow</h1>
        <p className="text-lg mb-4 text-gray-300">Watch the best movies and series anywhere, anytime.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold">Start Watching</button>
      </motion.div>
    </div>
  )
}
