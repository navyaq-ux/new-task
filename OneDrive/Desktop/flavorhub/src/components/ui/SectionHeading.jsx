import { cn } from '../../lib/cn'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  tone = 'dark',
  align = 'center',
  className,
}) {
  const onDark = tone === 'dark'
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-[11px] font-semibold uppercase tracking-[0.32em]',
            onDark ? 'text-gold' : 'text-ochre',
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          'text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl',
          onDark ? 'text-white' : 'text-ink',
        )}
      >
        {parts[0]}
        {highlight && (
          <span className={onDark ? 'text-gold' : 'text-gold-deep'}>
            {highlight}
          </span>
        )}
        {parts[1] ?? ''}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'mx-auto mt-5 max-w-xl text-[15px] leading-7',
            onDark ? 'text-white/55' : 'text-ink/60',
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
