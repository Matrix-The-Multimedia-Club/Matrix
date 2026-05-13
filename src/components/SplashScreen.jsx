import { useEffect, useState, useRef } from 'react';
import finalVideo from '../assets/final.mp4';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Disable inspect/dev tools
    const disableInspect = (e) => {
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'C') ||
          (e.ctrlKey && e.shiftKey && e.key === 'J')) {
        e.preventDefault();
      }
    };

    const disableRightClick = (e) => {
      e.preventDefault();
    };

    window.addEventListener('keydown', disableInspect);
    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      window.removeEventListener('keydown', disableInspect);
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  const handleVideoEnd = () => {
    setShowWelcome(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src={finalVideo}
      />

      {showWelcome && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)',
            animation: 'fadeInOut 3s ease-in-out',
          }}
        >
          <h1
            style={{
              color: '#7ff3ff',
              fontSize: '4rem',
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: '0.1em',
              textShadow: '0 0 20px rgba(127, 243, 255, 0.5)',
              animation: 'fadeInOut 3s ease-in-out',
            }}
          >
            Welcome to the Matrix
          </h1>
          <style>
            {`
              @keyframes fadeInOut {
                0% { opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { opacity: 0; }
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
