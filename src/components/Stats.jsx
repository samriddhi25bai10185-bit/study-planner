function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

      <div className="bg-zinc-900 p-8 rounded-3xl text-center">
        <h1 className="text-4xl font-bold">
          10K+
        </h1>

        <p className="text-zinc-400 mt-3">
          Active Students
        </p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-3xl text-center">
        <h1 className="text-4xl font-bold">
          50K+
        </h1>

        <p className="text-zinc-400 mt-3">
          Tasks Completed
        </p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-3xl text-center">
        <h1 className="text-4xl font-bold">
          95%
        </h1>

        <p className="text-zinc-400 mt-3">
          Productivity Rate
        </p>
      </div>

    </div>
  )
}

export default Stats