import { useState } from 'react'
import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Phone,
  User,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import Button from './ui/Button'
import Field, { fieldControl } from './ui/Field'
import Reveal from './ui/Reveal'
import { cn } from '../lib/cn'

const EMPTY_FORM = {
  name: '',
  phone: '',
  date: '',
  time: '',
  people: '',
}

function getTodayISO() {
  const now = new Date()
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 10)
}

const TODAY = getTodayISO()

const TIME_SLOTS = (() => {
  const slots = []

  for (let hour = 11; hour <= 22; hour += 1) {
    for (const minutes of ['00', '30']) {
      if (hour === 22 && minutes === '30') continue

      const displayHour = hour % 12 === 0 ? 12 : hour % 12
      const suffix = hour < 12 ? 'AM' : 'PM'

      slots.push({
        value: `${String(hour).padStart(2, '0')}:${minutes}`,
        label: `${displayHour}:${minutes} ${suffix}`,
      })
    }
  }

  return slots
})()

const PEOPLE_OPTIONS = Array.from({ length: 8 }, (_, index) => index + 1)

function validate(values) {
  const errors = {}
  const digits = values.phone.replace(/\D/g, '')

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else if (digits.length < 10 || digits.length > 13) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!values.date) {
    errors.date = 'Please choose a date.'
  } else if (values.date < TODAY) {
    errors.date = 'Please choose today or a future date.'
  }

  if (!values.time) {
    errors.time = 'Please choose a time.'
  }

  if (!values.people) {
    errors.people = 'Please select the number of guests.'
  }

  return errors
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`)
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function ReservationSection() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const handleChange = (field) => (event) => {
    const { value } = event.target

    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })

    if (status?.type === 'error') setStatus(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: 'error',
        title: 'Almost there',
        message: 'Please check the highlighted fields and try again.',
      })

      const firstInvalid = ['name', 'phone', 'date', 'time', 'people'].find(
        (field) => nextErrors[field],
      )

      window.requestAnimationFrame(() => {
        document.getElementById(`reservation-${firstInvalid}`)?.focus()
      })

      return
    }

    const selectedTime =
      TIME_SLOTS.find((slot) => slot.value === values.time)?.label ?? values.time
    const firstName = values.name.trim().split(' ')[0]

    setStatus({
      type: 'success',
      title: `Thank you, ${firstName}!`,
      message: `Your table request for ${values.people} ${
        Number(values.people) === 1 ? 'guest' : 'guests'
      } on ${formatDate(values.date)} at ${selectedTime} has been received. This is a demo website — no booking has been confirmed. Please call +91 98765 43210 to reserve for real.`,
    })

    setValues(EMPTY_FORM)
  }

  return (
    <section
      id="reservation"
      className="relative scroll-mt-20 overflow-hidden bg-ivory py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[36%] overflow-hidden md:block"
        aria-hidden="true"
      >
        <UtensilsCrossed
          className="absolute -left-24 top-1/2 h-[480px] w-[480px] -translate-y-1/2 -rotate-12 text-ochre/[0.13]"
          strokeWidth={0.55}
        />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-ivory" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10 xl:gap-24">
        <Reveal className="max-w-[470px] lg:pl-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-ochre">
            RESERVATION
          </p>
          <h2 className="mt-4 text-balance font-serif text-[42px] font-semibold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Book Your Table
          </h2>
          <p className="mt-5 max-w-[420px] text-[15px] leading-7 text-ink/60">
            Plan your visit and enjoy a wonderful dining experience with your
            loved ones.
          </p>

          <div className="mt-8 space-y-3.5">
            <div className="flex items-center gap-3 text-sm text-ink/70">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/60 text-ochre">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
              </span>
              <p>
                <span className="font-semibold text-ink">Open daily</span>
                <span className="text-ink/55"> · 11:00 AM – 11:00 PM</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-ink/70">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/60 text-ochre">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <p>
                <span className="font-semibold text-ink">Prefer to call?</span>{' '}
                <a
                  href="tel:+919876543210"
                  className="text-ink/60 underline-offset-4 transition hover:text-ochre hover:underline"
                >
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} y={28}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-ink/10 bg-white p-5 shadow-[0_35px_80px_-45px_rgba(16,16,16,0.5)] sm:p-7 lg:p-8"
          >
            <div className="mb-6 flex items-center gap-3 border-b border-ink/[0.08] pb-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 text-ochre">
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold leading-tight text-ink">
                  Reserve your spot
                </h3>
                <p className="mt-0.5 text-xs text-ink/45">
                  We’ll hold your table for 15 minutes.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="reservation-name"
                label="Your Name"
                icon={User}
                error={errors.name}
              >
                <input
                  id="reservation-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={values.name}
                  onChange={handleChange('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'reservation-name-error' : undefined}
                  className={fieldControl}
                />
              </Field>

              <Field
                id="reservation-phone"
                label="Phone Number"
                icon={Phone}
                error={errors.phone}
              >
                <input
                  id="reservation-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  value={values.phone}
                  onChange={handleChange('phone')}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'reservation-phone-error' : undefined}
                  className={fieldControl}
                />
              </Field>

              <Field
                id="reservation-date"
                label="Select Date"
                icon={CalendarDays}
                error={errors.date}
              >
                <input
                  id="reservation-date"
                  name="date"
                  type="date"
                  min={TODAY}
                  value={values.date}
                  onChange={handleChange('date')}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'reservation-date-error' : undefined}
                  className={fieldControl}
                />
              </Field>

              <Field
                id="reservation-time"
                label="Select Time"
                icon={Clock3}
                error={errors.time}
              >
                <select
                  id="reservation-time"
                  name="time"
                  value={values.time}
                  onChange={handleChange('time')}
                  aria-invalid={Boolean(errors.time)}
                  aria-describedby={errors.time ? 'reservation-time-error' : undefined}
                  className={cn(fieldControl, 'appearance-none pr-10')}
                >
                  <option value="">Select time</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
                  aria-hidden="true"
                />
              </Field>

              <Field
                id="reservation-people"
                label="Number of People"
                icon={Users}
                error={errors.people}
                className="sm:col-span-2"
              >
                <select
                  id="reservation-people"
                  name="people"
                  value={values.people}
                  onChange={handleChange('people')}
                  aria-invalid={Boolean(errors.people)}
                  aria-describedby={
                    errors.people ? 'reservation-people-error' : undefined
                  }
                  className={cn(fieldControl, 'appearance-none pr-10')}
                >
                  <option value="">Select number of guests</option>
                  {PEOPLE_OPTIONS.map((number) => (
                    <option key={number} value={number}>
                      {number} {number === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
                  aria-hidden="true"
                />
              </Field>

              <Button
                type="submit"
                size="lg"
                className="mt-1 w-full sm:col-span-2"
              >
                Book Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            {status && (
              <div
                role={status.type === 'error' ? 'alert' : 'status'}
                aria-live="polite"
                className={cn(
                  'mt-5 flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-xs leading-5',
                  status.type === 'error'
                    ? 'border-red-200 bg-red-50 text-red-800'
                    : 'border-emerald-200 bg-emerald-50 text-emerald-900',
                )}
              >
                {status.type === 'error' ? (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                ) : (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                )}
                <div>
                  <p className="font-semibold">{status.title}</p>
                  <p className="mt-0.5 opacity-85">{status.message}</p>
                </div>
              </div>
            )}

            <p className="mt-4 text-center text-[11px] leading-5 text-ink/38">
              Demo reservation form — no booking is confirmed until our team
              calls you.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
