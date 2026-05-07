function Dashboard() {
  return (
    <div className="mt-24 bg-zinc-900 rounded-3xl p-6 w-full">

      <h2 className="text-3xl font-bold mb-8">
        Student Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-black p-6 rounded-2xl min-h-[180px]">
          <h3 className="text-xl font-semibold break-words">
            Today's Tasks
          </h3>

          <p className="text-zinc-400 mt-4">
            5 Tasks Pending
          </p>
        </div>

        <div className="bg-black p-6 rounded-2xl min-h-[180px]">
          <h3 className="text-xl font-semibold break-words">
            Study Hours
          </h3>

          <p className="text-zinc-400 mt-4">
            4.5 Hours Completed
          </p>
        </div>

        <div className="bg-black p-6 rounded-2xl min-h-[180px]">
          <h3 className="text-xl font-semibold break-words">
            Productivity
          </h3>

          <p className="text-zinc-400 mt-4">
            82% Focus Score
          </p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard