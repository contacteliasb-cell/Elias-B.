import { AnimatePresence, motion } from 'framer-motion'
import type { Rank } from '../lib/ranks'
import { Button } from './Button'

/** Feierlicher Siegel-Moment beim Rang-Aufstieg. */
export function RankUpModal({ rank, onClose }: { rank: Rank | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {rank && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/80 p-5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Neuer Rang: ${rank.name}`}
        >
          <motion.div
            className="kontor-card relative w-full max-w-sm border-gold/50 p-8 text-center shadow-gold-glow"
            initial={{ scale: 0.85, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animiertes Siegel */}
            <motion.svg
              viewBox="0 0 100 100"
              className="mx-auto h-24 w-24"
              initial={{ rotate: -30, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 160, damping: 12 }}
              aria-hidden="true"
            >
              <circle cx="50" cy="50" r="44" fill="none" stroke="#C9A227" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="37" fill="none" stroke="#C9A227" strokeWidth="0.75" opacity="0.5" />
              <path d="M50 12 l4 7 h-8 Z" fill="#6E2B35" />
              <text
                x="50"
                y="62"
                textAnchor="middle"
                fontFamily="Cormorant Garamond, serif"
                fontSize="34"
                fontWeight="600"
                fill="#E3C567"
              >
                {rank.name[0]}
              </text>
            </motion.svg>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-gold">Rang-Aufstieg</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-parchment">{rank.name}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slateink">
              Glückwunsch — du hast eine neue Stufe des Fugger-Pfads erreicht. Weiter so im Kontor.
            </p>
            <Button onClick={onClose} variant="gold" className="mt-6 w-full">
              Weiter
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
