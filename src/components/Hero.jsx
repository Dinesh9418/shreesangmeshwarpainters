import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import IllustrationBlob from './IllustrationBlob.jsx'
import StatBadge from './StatBadge.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const heroT = t.hero
  return (
    <section id="top" className="relative overflow-hidden bg-creamdeep pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-wide text-orange"
          >
            {heroT.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-bold leading-[1.15] text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {heroT.titleLine1} <span className="text-orange">{heroT.titleHighlight}</span>
            <br />
            {heroT.titleLine2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink/70"
          >
            {heroT.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-dark"
            >
              {heroT.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <IllustrationBlob pose="roller" size={340} />
          <StatBadge
            value={heroT.badgeProjects.value}
            label={heroT.badgeProjects.label}
            className="left-0 top-2 sm:-left-4"
            delay={0.5}
          />
          <StatBadge
            value={heroT.badgeYears.value}
            label={heroT.badgeYears.label}
            className="bottom-6 right-0 sm:-right-4"
            delay={0.65}
          />
        </div>
      </div>
    </section>
  )
}
