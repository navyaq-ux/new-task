export const fieldControl =
  'h-12 w-full rounded-xl border border-ink/10 bg-[#fcfaf6] pl-11 pr-3.5 text-sm text-ink placeholder:text-ink/35 transition focus:border-gold-deep focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/30 aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-200/60'

export default function Field({
  id,
  label,
  icon: Icon,
  error,
  children,
  className,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/60"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink/35"
          />
        )}
        {children}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}
