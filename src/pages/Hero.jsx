
import './Hero.css'
import DomeGallery from '../components/DomeGallery';

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
        <div className="hero-login-btn">
          <span className="hero-login-icon">
            <svg viewBox="0 0 64 64" fill="currentColor">
              <circle cx="32" cy="20" r="12" />
              <path d="M 8 56 Q 8 40 32 40 Q 56 40 56 56" />
            </svg>
          </span>
          <button className="hero-login-button">Login</button>
        </div>
        <div className="hero-social">
          <a href="https://www.linkedin.com/company/matrixclub-vitbhopal/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4.77 0 1.4.63 1.4 1.4v4.34h2.5M6.5 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-.5 1h1v6.5h-1v-6.5z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/thematrixclub_vitb/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.3 2c-2.1 0-3.8 1.7-3.8 3.8v8.4c0 2.1 1.7 3.8 3.8 3.8h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8c0-2.1-1.7-3.8-3.8-3.8H7.5m9.6 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5.1 1.5c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9m0 2c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9-1.3-2.9-2.9-2.9z" />
            </svg>
          </a>
          <a href="https://matrix-linktree.vercel.app/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="More Links">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="6" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="18" cy="12" r="2" />
            </svg>
          </a>
        </div>
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
      <section className="enter-matrix">
        <h2 className="enter-matrix-heading">Enter the Matrix</h2>
        <p className="enter-matrix-paragraph">
          We are a community of creators, innovators, and storytellers. From filmmaking and graphic design to animation and VFX, we explore every pixel of the digital world. Join us in pushing the boundaries of multimedia art and technology, where your creative vision becomes reality.
        </p>
        <div className="enter-matrix-actions">
          <button className="enter-matrix-button">Learn more</button>
        </div>
      </section>
      <section className="glimpse-section">
        <h2 className="glimpse-heading">Glimpse of Events</h2>
        <p className="glimpse-paragraph">
          Discover the best moments from our events, where creativity meets community and every experience becomes a story worth sharing.
        </p>
      </section>
      <section className="dome-gallery-section">
      <div style={{ width: '100vw', height: '100vh' }}>
        <DomeGallery
          fit={1}
          minRadius={650}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={5}
          grayscale={false}
        />
      </div>
    </section>
    </>
  )
}

export default Hero