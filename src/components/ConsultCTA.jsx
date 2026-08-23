import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import IllustrationBlob from './IllustrationBlob.jsx'

export default function ConsultCTA() {
  const { t } = useLanguage()
  const consultT = t.consult
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-ink px-8 py-14 sm:px-14 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{consultT.title}</h2>
            <p className="mt-4 max-w-md text-white/70">{consultT.body}</p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-dark"
            >
              {consultT.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <IllustrationBlob pose="pointUp" size={220} dashes={['leaf']} />
        </div>
      </div>
    </section>
  )
}
