
import './Hero.css'

const Hero = () => {
  return (
    <>
      <video
        src="/blue.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "linear-gradient(rgba(0,0,0,0.16), rgba(0,0,0,0.55))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <section className="hero-background">
        <div className="hero-overlay">
          <div className="hero-panel">
            <div className="hero-brand">
              <span className="hero-brand-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="28" />
                  <path d="M18 46V22L30 34L38 26L46 46" />
                  <path d="M38 26L46 36" />
                  <path d="M18 46H30" />
                </svg>
              </span>
              <span className="hero-brand-text">Matrix</span>
            </div>

            <h1 className="hero-title">
              Think bold. Build smart <span style={{ color: '#7ff3ff' }}>Grow together</span>
            </h1>

            <p className="hero-subtitle">
              Where ideas connect, creators collaborate, and innovation begins. Building tech, creativity, and community under one matrix.
            </p>

            <div className="hero-actions">
              <button className="hero-button">Explore Now</button>
              <button className="hero-button">Join Us</button>
            </div>


            <div className="hero-footer">
              <strong>Visionary design</strong>
              "We imagined a realm with no ending"
              <span>Marcus Aurelio</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero