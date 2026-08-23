import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import IllustrationBlob from './IllustrationBlob.jsx'

export default function About() {
  const { t } = useLanguage()
  const aboutT = t.about
  return (
    <section id="about" className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1fr]">
        <IllustrationBlob pose="tipHat" size={300} dashes={['blue', 'leaf']} />

        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-wide text-orange"
          >
            {aboutT.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            {aboutT.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-md text-base leading-relaxed text-ink/70"
          >
            {aboutT.body}
          </motion.p>

          <ul className="mt-7 space-y-3">
            {aboutT.checklist.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-orange" strokeWidth={2} />
                <span className="text-sm font-medium text-ink/80">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
