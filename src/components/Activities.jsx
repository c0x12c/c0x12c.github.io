import { useState, useEffect } from 'react'

const CATEGORY_COLORS = {
  tech_talk: '#3b82f6',
  workshop: '#8b5cf6',
  product_sharing: '#22c55e',
  brown_bag: '#f59e0b',
  hackathon: '#ef4444',
  knowledge_share: '#06b6d4',
  other: '#64748b',
}

const CATEGORY_LABELS = {
  tech_talk: 'Tech Talk',
  workshop: 'Workshop',
  product_sharing: 'Product',
  brown_bag: 'Brown Bag',
  hackathon: 'Hackathon',
  knowledge_share: 'Knowledge Share',
  other: 'Other',
}

const API_URL = 'https://service-insight.platform.spartan-dev.io/api/v1/public/activities'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatTime(dateStr) {
  return new Date(dateStr).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

function getCountdown(dateStr) {
  const diff = new Date(dateStr) - new Date()
  if (diff <= 0) return null
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  if (days > 0) return `in ${days}d ${hours}h`
  if (hours > 0) return `in ${hours}h`
  return `in ${Math.floor((diff % 3600000) / 60000)}m`
}

function isSameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

function isToday(dateStr) {
  return isSameDay(new Date(dateStr), new Date())
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function getEventUrl(activity) {
  return activity.online_url || `https://platform.spartan-dev.io/p/activities/${activity.slug}`
}

/* ── Calendar ── */
function Calendar({ activities, selectedDate, onSelectDate, currentMonth, onChangeMonth }) {
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7 // Monday = 0
  const today = new Date()

  const eventsByDate = {}
  activities.forEach((a) => {
    if (!a.scheduled_at) return
    const d = new Date(a.scheduled_at)
    if (d.getFullYear() === year && d.getMonth() === month) {
      const key = d.getDate()
      if (!eventsByDate[key]) eventsByDate[key] = []
      eventsByDate[key].push(a)
    }
  })

  const cells = []
  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={`e-${i}`} className="cal-day empty" />)
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d)
    const isDayToday = isSameDay(date, today)
    const isSelected = selectedDate && isSameDay(date, selectedDate)
    const events = eventsByDate[d] || []

    cells.push(
      <div
        key={d}
        className={[
          'cal-day',
          isDayToday && 'today',
          isSelected && 'selected',
          events.length > 0 && 'has-events',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={() => events.length > 0 && onSelectDate(isSelected ? null : date)}
      >
        <span className="cal-day-num">{d}</span>
        {events.length > 0 && (
          <div className="cal-dots">
            {events.slice(0, 3).map((e, i) => (
              <span
                key={i}
                className="cal-dot"
                style={{ background: CATEGORY_COLORS[e.category] || CATEGORY_COLORS.other }}
              />
            ))}
          </div>
        )}
      </div>,
    )
  }

  const monthLabel = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="calendar">
      <div className="cal-header">
        <button className="cal-nav" onClick={() => onChangeMonth(-1)} aria-label="Previous month">
          &#8249;
        </button>
        <span className="cal-month">{monthLabel}</span>
        <button className="cal-nav" onClick={() => onChangeMonth(1)} aria-label="Next month">
          &#8250;
        </button>
      </div>
      <div className="cal-weekdays">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
          <div key={d} className="cal-weekday">
            {d}
          </div>
        ))}
      </div>
      <div className="cal-grid">{cells}</div>
    </div>
  )
}

/* ── Up Next Card ── */
function UpNextCard({ activity }) {
  const [countdown, setCountdown] = useState(getCountdown(activity.scheduled_at))
  const color = CATEGORY_COLORS[activity.category] || CATEGORY_COLORS.other
  const label = CATEGORY_LABELS[activity.category] || 'Event'
  const happeningToday = isToday(activity.scheduled_at)

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown(activity.scheduled_at)), 60000)
    return () => clearInterval(timer)
  }, [activity.scheduled_at])

  return (
    <div className="upnext-card">
      <div className="upnext-glow" style={{ background: `radial-gradient(ellipse at top left, ${color}18 0%, transparent 60%)` }} />
      <div className="upnext-header">
        <span className={`upnext-label ${happeningToday ? 'live' : ''}`}>
          {happeningToday && <span className="upnext-live-dot" />}
          {happeningToday ? 'Happening Today' : 'Up Next'}
        </span>
        {!happeningToday && countdown && (
          <span className="upnext-countdown" style={{ color }}>
            {countdown}
          </span>
        )}
      </div>
      <h3 className="upnext-title">{activity.title}</h3>
      <div className="upnext-details">
        <span className="upnext-date">
          {formatDate(activity.scheduled_at)} &middot; {formatTime(activity.scheduled_at)}
        </span>
        <span className="upnext-badge" style={{ color, borderColor: `${color}40` }}>
          {label}
        </span>
        <span className="upnext-location">
          {activity.location_type === 'online' ? '🌐' : '📍'} {activity.location_type}
        </span>
      </div>
      {activity.registration_count > 0 && (
        <div className="upnext-registrations">{activity.registration_count} registered</div>
      )}
      <a href={getEventUrl(activity)} target="_blank" rel="noreferrer" className="btn btn-primary upnext-btn">
        Join Event
        <ArrowIcon />
      </a>
    </div>
  )
}

/* ── Event Card ── */
function EventCard({ activity }) {
  const color = CATEGORY_COLORS[activity.category] || CATEGORY_COLORS.other
  const label = CATEGORY_LABELS[activity.category] || 'Event'
  const past = new Date(activity.scheduled_at) < new Date()

  return (
    <div className={`event-card ${past ? 'past' : ''}`}>
      <div className="event-color-strip" style={{ background: color }} />
      <div className="event-content">
        <div className="event-meta">
          <span className="event-category" style={{ color, background: `${color}12` }}>
            {label}
          </span>
          <span className="event-location">
            {activity.location_type === 'online' ? '🌐' : '📍'}{' '}
            {activity.location_type}
          </span>
        </div>
        <h4 className="event-title">{activity.title}</h4>
        <div className="event-date">
          {formatDate(activity.scheduled_at)} &middot; {formatTime(activity.scheduled_at)}
        </div>
        <div className="event-footer">
          {activity.registration_count > 0 && (
            <span className="event-registrations">{activity.registration_count} joined</span>
          )}
          <a href={getEventUrl(activity)} target="_blank" rel="noreferrer" className="event-join">
            {past ? 'View recap' : 'Join event'}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

/* ── Main Section ── */
export default function Activities() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}?page=1&limit=100`)
      .then((r) => r.json())
      .then((data) => {
        setActivities(data.items || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleChangeMonth = (delta) => {
    setCurrentMonth((prev) => {
      const next = new Date(prev)
      next.setMonth(next.getMonth() + delta)
      return next
    })
    setSelectedDate(null)
  }

  // Next upcoming event (today or future)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const upNext = [...activities]
    .filter((a) => new Date(a.scheduled_at) >= now)
    .sort((a, b) => new Date(a.scheduled_at) - new Date(b.scheduled_at))[0]

  // Unique categories from data
  const categories = [...new Set(activities.map((a) => a.category))]

  // Apply filters
  let filtered = activities
  if (filter) filtered = filtered.filter((a) => a.category === filter)
  if (selectedDate) {
    filtered = filtered.filter((a) => isSameDay(new Date(a.scheduled_at), selectedDate))
  }
  filtered.sort((a, b) => new Date(b.scheduled_at) - new Date(a.scheduled_at))

  if (loading) return null

  return (
    <section className="activities" id="events">
      <div className="section-header">
        <h2>Community</h2>
        <h3>Engineering Pulse</h3>
      </div>

      {/* Category filters */}
      <div className="event-filters">
        <button
          className={`filter-pill ${!filter ? 'active' : ''}`}
          onClick={() => {
            setFilter(null)
            setSelectedDate(null)
          }}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${filter === cat ? 'active' : ''}`}
            onClick={() => {
              setFilter(filter === cat ? null : cat)
              setSelectedDate(null)
            }}
            style={
              filter === cat
                ? { borderColor: CATEGORY_COLORS[cat], color: CATEGORY_COLORS[cat], background: `${CATEGORY_COLORS[cat]}12` }
                : {}
            }
          >
            {CATEGORY_LABELS[cat] || cat}
          </button>
        ))}
      </div>

      {/* Up Next + Calendar */}
      <div className="activities-top">
        {upNext && <UpNextCard activity={upNext} />}
        <Calendar
          activities={filter ? activities.filter((a) => a.category === filter) : activities}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          currentMonth={currentMonth}
          onChangeMonth={handleChangeMonth}
        />
      </div>

      {/* Event cards grid */}
      <div className="event-grid">
        {filtered.map((activity) => (
          <EventCard key={activity.id} activity={activity} />
        ))}
      </div>

      {filtered.length === 0 && <p className="no-events">No events found for this selection.</p>}
    </section>
  )
}
