import { useState } from 'react';
import Hero from "./pages/Hero";
import About from "./pages/About";
import PillNav from "./components/PillNav";
// import SplashScreen from "./components/SplashScreen";
import { Routes, Route } from 'react-router-dom';
import logo from '/favicon.ico';
import Footer from './components/Footer';
import Contact from './pages/Contact';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [showSplash, setShowSplash] = useState(true);

  return (
   <>
  {/* <SplashScreen onComplete={() => setShowSplash(false)} /> */}
  
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

  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

  {/* Footer at the bottom */}
  <Footer />
</>
  )
}

export default App;
