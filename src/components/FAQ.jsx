import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import IllustrationBlob from './IllustrationBlob.jsx'

export default function FAQ() {
  const { t } = useLanguage()
  const faqT = t.faq
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-creamdeep py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1fr]">
        <IllustrationBlob pose="thinking" size={300} dashes={['pink', 'blue']} />

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-orange">{faqT.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{faqT.title}</h2>

          <div className="mt-8 space-y-3">
            {faqT.items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.q} className="overflow-hidden rounded-xl bg-white/70">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm font-semibold text-ink sm:text-base">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-orange transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm leading-relaxed text-ink/65">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
