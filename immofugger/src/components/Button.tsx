import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'gold' | 'ghost' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-300 select-none'

const variants: Record<Variant, string> = {
  gold: 'bg-gold-gradient text-night shadow-gold-glow hover:shadow-gold-glow-lg hover:-translate-y-0.5',
  ghost: 'text-parchment-dim hover:text-parchment hover:bg-white/5 border border-transparent',
  outline: 'border border-gold/40 text-gold-light hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5',
}

type ButtonProps = {
  variant?: Variant
  className?: string
  children: ReactNode
  /** Interner Router-Link */
  to?: string
  /** Anker-/externer Link */
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  variant = 'gold',
  className = '',
  children,
  to,
  href,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-60 pointer-events-none' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
