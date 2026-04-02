const ROW_1 = [
  { src: 'assets/logo-bird.svg', alt: 'BIRD' },
  { src: 'assets/logo-pura.svg', alt: 'Pura' },
  { src: 'assets/logo-ziprecruiter.svg', alt: 'ZipRecruiter' },
  { src: 'assets/logo-puzzle.svg', alt: 'Puzzle' },
  { src: 'assets/logo-onlook.svg', alt: 'Onlook' },
  { src: 'assets/logo-volta.svg', alt: 'Volta' },
  { src: 'assets/logo-chargefuze.svg', alt: 'ChargeFuze' },
  { src: 'assets/logo-ninesuns.svg', alt: 'Nine Suns' },
  { src: 'assets/logo-wellpoint.svg', alt: 'Wellpoint' },
]

const ROW_2 = [
  { src: 'assets/logo-atrix.png', alt: 'Atrix' },
  { src: 'assets/logo-sfox.svg', alt: 'sFOX' },
  { src: 'assets/logo-veraset.svg', alt: 'Veraset' },
  { src: 'assets/logo-jdpower.svg', alt: 'J.D. Power' },
  { src: 'assets/logo-mobolize.svg', alt: 'Mobolize' },
  { src: 'assets/logo-ursa.svg', alt: 'URSA' },
  { src: 'assets/logo-sabio.png', alt: 'Sabio' },
  { src: 'assets/logo-agora.svg', alt: 'Agora' },
  { src: 'assets/logo-rapattoni.svg', alt: 'Rapattoni' },
]

function MarqueeRow({ logos, direction }) {
  // Duplicate logos for seamless loop
  const items = [...logos, ...logos]

  return (
    <div className={`marquee-row ${direction === 'left' ? 'scroll-left' : 'scroll-right'}`}>
      {items.map((logo, i) => (
        <div className="logo-item" key={`${logo.alt}-${i}`}>
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  )
}

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients-header">
        <p>Chosen by Visionaries</p>
      </div>
      <div className="marquee-wrapper">
        <MarqueeRow logos={ROW_1} direction="left" />
        <MarqueeRow logos={ROW_2} direction="right" />
      </div>
    </section>
  )
}
