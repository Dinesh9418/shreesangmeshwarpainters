import { motion } from 'framer-motion'

export default function StatBadge({ value, label, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`absolute z-10 rounded-2xl bg-orange px-5 py-3.5 shadow-lg shadow-orange/25 ${className}`}
    >
      <p className="font-display text-2xl font-bold leading-none text-white">{value}</p>
      <p className="mt-1 text-xs font-medium leading-tight text-white/90">{label}</p>
    </motion.div>
  )
}
