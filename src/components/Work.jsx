import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";

const cardColors = ["#F2703C", "#3B7DD8", "#E8368F"];

const Work = () => {
  const { t } = useLanguage();
  const testT = t.work;
  return (
    <>
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-orange">
              {testT.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              {testT.title}
            </h2>
            <p className="mt-4 text-base text-ink/65">{testT.body}</p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testT.items.map((item, i) => (
              <motion.figure
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white/70 p-7"
              >
                <Quote
                  className="h-7 w-7 text-orange"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <blockquote className="mt-4 text-sm leading-relaxed text-ink/75">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/10 pt-4">
                  <p className="font-display text-base font-bold text-ink">
                    {item.name}
                  </p>
                  <p className="text-xs text-ink/50">{item.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
