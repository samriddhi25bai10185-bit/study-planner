import Navbar from "./components/Navbar"
import FeatureCard from "./components/FeatureCard"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <Navbar />

      <div className="p-10">
        
        <h1 className="text-5xl md:text-7xl font-bold max-w-3xl">
          Organize Your Study Life
        </h1>

        <p className="mt-6 text-zinc-400 text-lg max-w-xl">
          Smart study planning for students who want to stay productive and focused.
        </p>

        <button className="mt-8 bg-white text-black px-6 py-3 rounded-2xl font-semibold">
          Get Started
        </button>
        <div className="grid md:grid-cols-3 gap-6 mt-20">

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
  <Dashboard />

</div>

      </div>

    </div>
  )
}

export default App