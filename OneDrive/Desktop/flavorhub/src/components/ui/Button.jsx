import { cn } from '../../lib/cn'

const variants = {
  gold: 'bg-gold text-ink shadow-[0_14px_34px_-14px_rgba(255,181,46,0.7)] hover:bg-[#ffc357] hover:shadow-[0_18px_38px_-14px_rgba(255,181,46,0.8)] active:bg-gold-deep',
  outline:
    'border border-gold/70 bg-black/20 text-white hover:border-gold hover:bg-gold hover:text-ink active:bg-gold-deep',
  dark: 'bg-ink text-white hover:bg-[#26231e] active:bg-black',
  light: 'bg-white text-ink shadow-sm hover:bg-ivory active:bg-[#efe9dc]',
  ghost: 'text-white/75 hover:bg-white/10 hover:text-white',
}

const sizes = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-[15px]',
}

export default function Button({
  href,
  type = 'button',
  variant = 'gold',
  size = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:transition-none',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
