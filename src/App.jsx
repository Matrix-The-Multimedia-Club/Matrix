import PillNav from './components/PillNav';
import logo from '/favicon.ico';
import Hero from "./components/Hero"

const App = () => {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
          { label: 'Events', href: '/events' },
          { label: 'Join Us', href: '/recruitment' },
          { label: 'Contact', href: '/contact' },
        ]}
        activeHref="/"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        theme="light"
        initialLoadAnimation={true}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95vw]"
      />
      <Hero />
    </main>
  )
}

export default App
