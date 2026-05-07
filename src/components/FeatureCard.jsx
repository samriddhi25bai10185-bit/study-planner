function FeatureCard({ title, desc }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-3xl hover:scale-105 transition duration-300">
      
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-zinc-400 mt-4">
        {desc}
      </p>

    </div>
  )
}

export default FeatureCard
