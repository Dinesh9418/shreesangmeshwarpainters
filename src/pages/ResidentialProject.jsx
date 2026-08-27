import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import IllustrationBlob from '../components/IllustrationBlob.jsx'

export default function ResidentialProject() {
  const { t } = useLanguage()
  const p = t.residentialProject

  return (
    <section className="bg-creamdeep pt-28 pb-24 sm:pt-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition hover:text-orange"
        >
          <ArrowLeft className="h-4 w-4" />
          {p.backLink}
        </Link>

        <div className="mt-8 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-bold uppercase tracking-wide text-orange">{p.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">{p.title}</h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">{p.intro}</p>
          </motion.div>

          <IllustrationBlob pose="roller" size={280} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {p.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl bg-white/70 p-6"
            >
              <CheckCircle2 className="h-6 w-6 text-orange" strokeWidth={1.75} />
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{h.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-ink px-8 py-12 text-center sm:px-16">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{p.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-md text-white/70">{p.ctaBody}</p>
          <Link
            to="/#contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-dark"
          >
            {p.ctaButton}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
