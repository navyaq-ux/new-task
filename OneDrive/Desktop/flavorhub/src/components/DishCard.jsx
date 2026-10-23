import { Plus } from 'lucide-react'
import { useCart } from '../context/cartStore'
import Button from './ui/Button'

export default function DishCard({ dish }) {
  const { addItem } = useCart()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.07] bg-[#fffdf9] shadow-[0_18px_50px_-32px_rgba(16,16,16,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(16,16,16,0.38)] motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
        <img
          src={dish.image}
          alt={dish.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-[22px] font-semibold leading-tight tracking-tight text-ink">
          {dish.name}
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-6 text-ink/55">
          {dish.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-2 border-t border-ink/[0.07] pt-4">
          <p className="text-lg font-bold tracking-tight text-ochre">
            ₹{dish.price}
          </p>
          <Button
            type="button"
            size="sm"
            onClick={() => addItem(dish)}
            aria-label={`Add ${dish.name} to cart`}
            className="gap-1.5 pl-3.5 pr-3 text-[12.5px]"
          >
            Order Now
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  )
}
