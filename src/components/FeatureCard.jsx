import { motion } from "framer-motion"

function FeatureCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 p-6 rounded-3xl"
    >

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-zinc-400 mt-4">
        {desc}
      </p>

    </motion.div>
  )
}

export default FeatureCard