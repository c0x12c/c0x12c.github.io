export default function Hero() {
  const stats = [
    { value: '75+', label: 'Client work' },
    { value: '10+', label: 'YC Companies' },
    { value: '70+', label: 'Head count' },
  ]

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-skyline" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          Open Source
        </div>
        <h1>
          We build tools<br />
          engineers are<br />
          proud of
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            Since 2022, we've collaborated with innovative startups in Silicon Valley to craft,
            develop, and deliver exceptional products. Now we open source the tools we build.
          </p>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="hero-stat-value">{stat.value}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
