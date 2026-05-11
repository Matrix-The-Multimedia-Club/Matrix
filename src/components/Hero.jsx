
const Hero = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {/* <video src="blue.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" /> */}
      <img src="/blue.png" alt="earth" className="h-full w-full object-cover"  />
    </div>
  )
}   

export default Hero
