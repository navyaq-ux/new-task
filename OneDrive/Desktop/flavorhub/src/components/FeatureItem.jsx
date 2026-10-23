export default function FeatureItem({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-4 px-6 py-7 sm:px-7 lg:px-6 xl:px-8">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/25 bg-gold/10">
        <Icon className="h-[22px] w-[22px] text-gold" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-[15px] font-semibold leading-snug text-white">
          {title}
        </h3>
        <p className="mt-1 text-[12.5px] leading-5 text-white/45">{subtitle}</p>
      </div>
    </div>
  )
}
