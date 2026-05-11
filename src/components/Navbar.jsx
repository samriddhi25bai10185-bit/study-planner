import { FaGraduationCap } from "react-icons/fa"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-5 bg-zinc-900 border-b border-zinc-800">

      <div className="flex items-center gap-3">
        <FaGraduationCap className="text-2xl" />

        <h1 className="text-2xl font-bold">
          StudyPlanner
        </h1>
      </div>

      <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold">
        Login
      </button>

    </nav>
  )
}

export default Navbar