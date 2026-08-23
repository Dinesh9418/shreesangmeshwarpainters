import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Contact() {
  const { t } = useLanguage()
  const contactT = t.contact
  const f = contactT.form
  const initial = { name: '', email: '', phone: '', service: f.services[0], message: '' }

  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(field, value) {
    setForm((s) => ({ ...s, [field]: value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = f.nameError
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = f.emailError
    if (!form.message.trim()) next.message = f.messageError
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
    setForm(initial)
  }

  return (
    <section id="contact" className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-orange">{contactT.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{contactT.title}</h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/65">{contactT.body}</p>

          <ul className="mt-8 space-y-4 text-sm text-ink/75">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-orange" /> {contactT.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-orange" /> {contactT.email}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-orange" /> {contactT.address}
            </li>
          </ul>
        </div>

        <div className="relative rounded-2xl bg-white/70 p-7 sm:p-9">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle2 className="h-10 w-10 text-orange" strokeWidth={1.5} />
                <p className="mt-4 font-display text-xl font-bold text-ink">{f.sentTitle}</p>
                <p className="mt-2 max-w-xs text-sm text-ink/60">{f.sentBody}</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-orange hover:text-orange-dark"
                >
                  {f.sendAnother}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label={f.name} error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={inputClass(errors.name)}
                      placeholder={f.namePh}
                    />
                  </Field>
                  <Field label={f.email} error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={inputClass(errors.email)}
                      placeholder={f.emailPh}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label={f.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputClass()}
                      placeholder={f.phonePh}
                    />
                  </Field>
                  <Field label={f.service}>
                    <select
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className={inputClass()}
                    >
                      {f.services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label={f.message} error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    rows={4}
                    className={inputClass(errors.message)}
                    placeholder={f.messagePh}
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full rounded-full bg-orange py-3.5 text-sm font-semibold text-white transition hover:bg-orange-dark sm:w-auto sm:px-8"
                >
                  {f.submit}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-ink/55">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-orange-dark">{error}</span>}
    </label>
  )
}

function inputClass(error) {
  return `w-full rounded-xl border bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-orange ${
    error ? 'border-orange-dark' : 'border-ink/10'
  }`
}
