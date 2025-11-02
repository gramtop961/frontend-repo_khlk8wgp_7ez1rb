import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  // Ensure the scroll container has a non-static position (section has "relative")
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.9, 0.6]);

  return (
    <section ref={ref} className="relative h-[90vh] w-full overflow-hidden bg-stone-950 text-stone-100">
      <div className="absolute inset-0">
        {/* Updated to a valid Spline asset */}
        <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6">
        <motion.h1 style={{ y: y1, opacity }} className="text-center font-[800] tracking-[-0.04em]">
          <span className="block text-4xl sm:text-6xl md:text-7xl">Streetwear,</span>
          <span className="block bg-gradient-to-r from-amber-200 via-stone-100 to-stone-300 bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl leading-[1.05]">
            authentique et moderne
          </span>
        </motion.h1>

        <motion.p style={{ y: y2, opacity }} className="mt-6 max-w-2xl text-center text-stone-300/90 text-base sm:text-lg">
          Une direction artistique brute et premium. Des pièces essentielles, une communauté vibrante, un mouvement.
        </motion.p>

        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#shop"
            className="group inline-flex items-center justify-center rounded-full bg-stone-100 px-6 py-3 text-stone-900 transition-colors hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            Explorer la boutique
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#community"
            className="inline-flex items-center justify-center rounded-full border border-stone-700/60 px-6 py-3 text-stone-100/90 backdrop-blur-sm transition-colors hover:border-stone-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
          >
            Rejoindre le mouvement
          </a>
        </motion.div>
      </div>
    </section>
  );
}
