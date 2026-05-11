import Navbar from "./components/Navbar"
import FeatureCard from "./components/FeatureCard"
import Dashboard from "./components/Dashboard"
import Stats from "./components/Stats"
import { motion } from "framer-motion"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-16 py-20"
      >

        <p className="text-zinc-400 uppercase tracking-widest">
          Smart Learning Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight mt-6">
          Organize Your Study Life Efficiently
        </h1>

        <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-8">
          Plan your tasks, track productivity, and stay focused with a modern study dashboard built for students.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition">
            Learn More
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

          <FeatureCard
            title="Task Planning"
            desc="Organize your daily study schedule efficiently."
          />

          <FeatureCard
            title="Progress Tracking"
            desc="Track your completed tasks and productivity."
          />

          <FeatureCard
            title="Focus Sessions"
            desc="Stay focused using smart study timers."
          />

        </div>

        <Stats />

        <Dashboard />

      </motion.div>
      <Footer />

    </div>
  )
}

export default App