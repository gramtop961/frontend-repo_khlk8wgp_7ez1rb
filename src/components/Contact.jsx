import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-stone-950 py-24 text-stone-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-[-0.02em]">Contact & FAQ</h2>
            <p className="mt-4 max-w-md text-stone-400">
              Une question sur les tailles, les retours, un drop ? Écris-nous ou consulte la FAQ.
            </p>
            <a
              href="#faq"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-stone-700/60 px-5 py-2.5 text-sm hover:border-stone-500"
            >
              <MessageSquare className="h-4 w-4" />
              Voir la FAQ
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              const data = Object.fromEntries(new FormData(e.currentTarget));
              alert(`Message envoyé — ${data.name} / ${data.email}`);
              e.currentTarget.reset();
            }}
            className="rounded-2xl border border-stone-800 bg-stone-900/60 p-6 ring-1 ring-stone-800 backdrop-blur-sm"
            aria-label="Formulaire de contact"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-stone-400">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border-0 bg-stone-950/60 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-600"
                  placeholder="Prénom Nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-stone-400">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border-0 bg-stone-950/60 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-600"
                  placeholder="ton@mail.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1 block text-sm text-stone-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border-0 bg-stone-950/60 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-600"
                placeholder="Raconte-nous tout"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-stone-100 px-5 py-3 text-stone-900 transition-colors hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              <Mail className="h-4 w-4" />
              Envoyer
            </motion.button>
          </motion.form>
        </div>

        <div id="faq" className="mt-10">
          <details className="group rounded-xl border border-stone-800 p-5">
            <summary className="cursor-pointer list-none font-semibold">
              Tailles et coupes
              <span className="ml-2 text-stone-500 font-normal">(ouvrir)</span>
            </summary>
            <p className="mt-2 text-stone-400 text-sm">Coupe légèrement oversized. Réfère-toi au guide des tailles sur chaque page produit.</p>
          </details>
          <details className="group mt-4 rounded-xl border border-stone-800 p-5">
            <summary className="cursor-pointer list-none font-semibold">
              Retours et échanges
              <span className="ml-2 text-stone-500 font-normal">(ouvrir)</span>
            </summary>
            <p className="mt-2 text-stone-400 text-sm">30 jours. Pièces non portées, dans leur emballage. Process simple et rapide.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
