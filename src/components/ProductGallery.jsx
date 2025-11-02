import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 'tee-raw',
    title: 'Tee RAW Heritage',
    price: 48,
    color: 'Sable',
    image:
      'https://images.unsplash.com/photo-1548883354-cb8f0bf0d58b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'hood-earth',
    title: 'Hoodie Earthweight',
    price: 98,
    color: 'Terre cuite',
    image:
      'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'cap-clay',
    title: 'Cap Clay Minimal',
    price: 38,
    color: 'Argile',
    image:
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'pants-wash',
    title: 'Denim Washed 90s',
    price: 120,
    color: 'Granit',
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductGallery() {
  return (
    <section id="shop" className="relative w-full bg-stone-950 py-20 text-stone-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-[-0.02em]">Sélection mise en avant</h2>
            <p className="mt-2 text-stone-400">Couleurs terreuses, coupes actuelles, qualité premium.</p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-stone-700/60 px-4 py-2 text-sm hover:border-stone-500"
            aria-label="Voir tout le catalogue"
          >
            Voir tout
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-stone-900 ring-1 ring-stone-800"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.color}`}
                  className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-stone-400">{p.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-stone-400">EUR</p>
                    <p className="text-lg font-semibold">{p.price}</p>
                  </div>
                </div>

                <button
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-stone-100 px-3 py-2 text-stone-900 transition-colors hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
                  aria-label={`Ajouter ${p.title} au panier`}
                  onClick={() => alert('Panier démo — intégration Stripe à venir')}
                >
                  <ShoppingBag className="h-4 w-4" />
                  Ajouter au panier
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
