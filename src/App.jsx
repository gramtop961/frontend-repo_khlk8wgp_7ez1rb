import { useEffect } from 'react';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import CommunityStrip from './components/CommunityStrip';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function App() {
  useEffect(() => {
    document.title = 'Nude-inspired — Streetwear Authentique';
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-800/60 bg-stone-950/70 backdrop-blur">
        <div className="mx-auto flex h-14 items-center justify-between px-6 sm:h-16 max-w-7xl">
          <a href="#" className="font-black tracking-[-0.04em] text-xl">RAW.</a>
          <nav className="hidden gap-6 sm:flex">
            <a href="#shop" className="text-sm text-stone-300 hover:text-amber-200">Boutique</a>
            <a href="#community" className="text-sm text-stone-300 hover:text-amber-200">Communauté</a>
            <a href="#contact" className="text-sm text-stone-300 hover:text-amber-200">Contact</a>
          </nav>
          <a
            href="#shop"
            className="rounded-full bg-stone-100 px-4 py-1.5 text-sm font-medium text-stone-900 transition-colors hover:bg-amber-200"
            aria-label="Aller à la boutique"
          >
            Shop
          </a>
        </div>
      </header>

      <main className="relative">
        <div className="h-14 sm:h-16" />
        <Hero />
        <ProductGallery />
        <CommunityStrip />
        <Contact />
      </main>

      <footer className="border-t border-stone-800/60 bg-stone-950 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-stone-400">© {new Date().getFullYear()} RAW Movement — Tous droits réservés.</p>
            <div className="flex gap-4 text-sm text-stone-400">
              <a href="#" className="hover:text-stone-200">Mentions légales</a>
              <a href="#" className="hover:text-stone-200">Confidentialité</a>
            </div>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="mt-6 h-px bg-gradient-to-r from-stone-800 via-stone-600 to-stone-800"
          />
          <p className="mt-6 text-xs text-stone-500">
            Démo conceptuelle inspirée par l'esprit Nude Project — design original, non affilié.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
