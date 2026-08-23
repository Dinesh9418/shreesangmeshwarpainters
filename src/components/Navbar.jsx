import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Paintbrush, Languages } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <Paintbrush className="h-5 w-5 text-orange" strokeWidth={2} />
          {t.brand}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {t.nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-ink/75 transition hover:text-orange">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle lang={lang} onToggle={toggleLang} />
          <a
            href="#contact"
            className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-dark"
          >
            {t.navCta}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LangToggle lang={lang} onToggle={toggleLang} compact />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-ink/10 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {t.nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded px-2 py-3 text-base font-medium text-ink/80 hover:bg-orange-light hover:text-orange"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-orange px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  {t.navCta}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function LangToggle({ lang, onToggle, compact = false }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/70 px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-orange hover:text-orange"
      aria-label={lang === 'en' ? 'Switch to Marathi' : 'इंग्रजीमध्ये बदला'}
    >
      <Languages className="h-3.5 w-3.5" />
      {!compact && (
        <span>
          <span className={lang === 'en' ? 'text-orange' : 'text-ink/40'}>EN</span>
          {' / '}
          <span className={lang === 'mr' ? 'text-orange' : 'text-ink/40'}>मराठी</span>
        </span>
      )}
      {compact && <span>{lang === 'en' ? 'मर' : 'EN'}</span>}
    </button>
  )
}
