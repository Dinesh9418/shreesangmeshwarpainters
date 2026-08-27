import { Link } from 'react-router-dom'
import { Paintbrush, Facebook, Twitter, Instagram } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const footerT = t.footer
  return (
    <footer className="bg-creamdeep pt-16 text-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link to="/#top" className="flex items-center gap-2 font-display text-lg font-bold">
              <Paintbrush className="h-5 w-5 text-orange" strokeWidth={2} />
              {t.brand}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-ink/60">{footerT.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:flex sm:gap-16">
            <div>
              <p className="font-display font-bold text-ink">{footerT.pageLinks}</p>
              <ul className="mt-3 space-y-2 text-ink/60">
                {footerT.links.map((l) => (
                  <li key={l.href}>
                    <Link to={`/${l.href}`} className="hover:text-orange">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-bold text-ink">{footerT.information}</p>
              <ul className="mt-3 space-y-2 text-ink/60">
                {footerT.info.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-bold text-ink">{footerT.contactInfo}</p>
              <ul className="mt-3 space-y-2 text-ink/60">
                <li>{t.contact.phone}</li>
                <li>{t.contact.email}</li>
                <li>{t.contact.address}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-orange py-4">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
          <p className="text-xs text-white/90">{footerT.copyright}</p>
          <div className="flex items-center gap-4 text-white">
            <Facebook className="h-4 w-4" />
            <Twitter className="h-4 w-4" />
            <Instagram className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  )
}
