import { useState } from 'react'

const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
]

function PreBooking() {
  const [request, setRequest] = useState(null)
  const today = new Date()
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset())
  const minDate = today.toISOString().slice(0, 10)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setRequest({
      name: formData.get('name'),
      date: formData.get('date'),
      time: formData.get('time'),
      guests: formData.get('guests'),
    })
  }

  return (
    <section
      className="prebooking"
      id="booking"
      aria-labelledby="prebooking-title"
    >
      <div className="prebooking__layout">
        <div className="prebooking__intro">
          <p className="menu__eyebrow">Make a little time for yourself</p>
          <h2 id="prebooking-title">Your table, your moment.</h2>
          <p className="prebooking__description">
            Planning a slow morning, a catch-up, or a little treat? Share your
            preferred time and we’ll have your request ready.
          </p>
          <ul className="prebooking__perks">
            <li>
              <span aria-hidden="true">01</span>
              <div>
                <strong>A cozy spot to settle in</strong>
                <p>Come for coffee, stay for a while.</p>
              </div>
            </li>
            <li>
              <span aria-hidden="true">02</span>
              <div>
                <strong>Good food, made with care</strong>
                <p>Make room for something from the kitchen.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="prebooking__panel">
          <div className="prebooking__panel-heading">
            <div>
              <p className="menu__eyebrow">A seat with your name on it</p>
              <h3>Request a table</h3>
            </div>
            <span className="prebooking__mark" aria-hidden="true">C&amp;H</span>
          </div>
          <form className="prebooking__form" onSubmit={handleSubmit}>
            <label className="prebooking__field">
              <span>Your name</span>
              <input
                autoComplete="name"
                name="name"
                placeholder="e.g. Sam Taylor"
                required
              />
            </label>
            <label className="prebooking__field">
              <span>Email address</span>
              <input
                autoComplete="email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
            <div className="prebooking__row">
              <label className="prebooking__field">
                <span>Date</span>
                <input min={minDate} name="date" required type="date" />
              </label>
              <label className="prebooking__field">
                <span>Time</span>
                <select defaultValue="" name="time" required>
                  <option disabled value="">Choose a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="prebooking__field">
              <span>Number of guests</span>
              <select defaultValue="2" name="guests">
                {[1, 2, 3, 4, 5, 6].map((guests) => (
                  <option key={guests} value={guests}>
                    {guests} {guests === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </label>
            <label className="prebooking__field">
              <span>Anything we should know? <em>Optional</em></span>
              <textarea
                name="notes"
                placeholder="A special occasion or seating preference"
                rows="3"
              />
            </label>
            <button className="prebooking__submit" type="submit">
              Prepare booking request <span aria-hidden="true">↗</span>
            </button>
          </form>
          <p className="prebooking__notice">
            Booking form preview. Requests are not sent or confirmed yet.
          </p>
          {request && (
            <p className="prebooking__status" role="status">
              Thanks, {request.name}. Your table request for {request.guests}{' '}
              {request.guests === '1' ? 'guest' : 'guests'} on {request.date} at{' '}
              {request.time} is ready in this preview, but has not been sent.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PreBooking
