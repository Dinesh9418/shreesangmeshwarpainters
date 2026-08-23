import { motion } from 'framer-motion'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

const cardColors = ['#F2703C', '#3B7DD8', '#E8368F']

export default function Blog() {
  const { t } = useLanguage()
  const blogT = t.blog
  return (
    <section id="blog" className="bg-creamdeep py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-orange">{blogT.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{blogT.title}</h2>
          <p className="mt-4 text-base text-ink/65">{blogT.body}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogT.posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white/70"
            >
              <div
                className="flex h-40 items-center justify-center"
                style={{ backgroundColor: cardColors[i] + '22' }}
              >
                <div
                  className="h-14 w-14 rounded-full"
                  style={{ backgroundColor: cardColors[i] }}
                />
              </div>
              <div className="p-6">
                <p className="flex items-center gap-1.5 text-xs text-ink/45">
                  <CalendarDays className="h-3.5 w-3.5" /> {post.meta}
                </p>
                <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange hover:text-orange-dark"
                >
                  {blogT.readMore}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
