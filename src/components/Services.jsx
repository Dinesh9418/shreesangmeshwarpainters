import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Home, Building2, Layers, Hammer } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import IllustrationBlob from './IllustrationBlob.jsx'

const icons = [Home, Building2, Layers, Hammer]

export default function Services() {
  const { t } = useLanguage()
  const svcT = t.services
  return (
    <section id="services" className="bg-creamdeep py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-wide text-orange"
          >
            {svcT.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            {svcT.title}
          </motion.h2>
          <p className="mt-4 text-base text-ink/65">{svcT.body}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1fr_1fr]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {svcT.items.slice(0, 2).map((s, i) => (
              <ServiceCard key={s.title} item={s} Icon={icons[i]} index={i} />
            ))}
          </div>

          <IllustrationBlob pose="shout" size={300} dashes={['pink', 'blue']} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {svcT.items.slice(2, 4).map((s, i) => (
              <ServiceCard key={s.title} item={s} Icon={icons[i + 2]} index={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ item, Icon, index }) {
  const navigate = useNavigate()

  function handleClick() {
    if (item.slug) navigate(`/services/${item.slug}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onClick={handleClick}
      role={item.slug ? 'button' : undefined}
      tabIndex={item.slug ? 0 : undefined}
      onKeyDown={(e) => {
        if (item.slug && (e.key === 'Enter' || e.key === ' ')) handleClick()
      }}
      className="group cursor-pointer rounded-2xl bg-white/70 p-6 text-ink transition-colors duration-300 hover:bg-orange hover:text-white"
    >
      <Icon className="h-8 w-8 text-orange transition-colors duration-300 group-hover:text-white" strokeWidth={1.75} />
      <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65 transition-colors duration-300 group-hover:text-white/85">
        {item.body}
      </p>
    </motion.div>
  )
}
