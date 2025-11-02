import { motion, useScroll, useTransform } from 'framer-motion';

const avatars = [
  'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558222217-8b408bfa0e00?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=300&auto=format&fit=crop',
];

export default function CommunityStrip() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section id="community" className="relative w-full overflow-hidden bg-stone-950 py-24 text-stone-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-stone-950" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-[-0.02em]">La communauté au centre</h2>
          <p className="max-w-md text-stone-400">Des drop parties aux stories quotidiennes — un mouvement porté par celles et ceux qui le vivent.</p>
        </div>

        <motion.div style={{ x }} className="mb-6 flex gap-4" aria-hidden>
          {avatars.concat(avatars).map((src, i) => (
            <img
              key={`row1-${i}`}
              src={src}
              alt=""
              className="h-14 w-14 rounded-full object-cover opacity-90 ring-2 ring-stone-800"
              loading="lazy"
            />
          ))}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex gap-4" aria-hidden>
          {avatars.concat(avatars).map((src, i) => (
            <img
              key={`row2-${i}`}
              src={src}
              alt=""
              className="h-14 w-14 rounded-full object-cover opacity-90 ring-2 ring-stone-800"
              loading="lazy"
            />
          ))}
        </motion.div>

        <div className="mt-10 max-w-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const email = new FormData(form).get('email');
              alert(`Merci ! Newsletter activée pour: ${email}`);
              form.reset();
            }}
            className="group relative flex items-center gap-2 rounded-2xl border border-stone-800 bg-stone-900/60 p-2 ring-1 ring-stone-800 backdrop-blur-sm focus-within:ring-stone-600"
            aria-label="Inscription newsletter"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Ton e-mail pour les drops"
              className="w-full rounded-xl border-0 bg-transparent px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none"
              aria-label="Adresse e-mail"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex min-w-[9rem] items-center justify-center rounded-xl bg-stone-100 px-4 py-3 text-stone-900 transition-colors hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              S'abonner
            </motion.button>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
          </form>
        </div>
      </div>
    </section>
  );
}
