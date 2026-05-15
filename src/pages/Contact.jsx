const Contact = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/blue.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
     <div className="fixed inset-0 bg-gradient-to-b from-black/60 to-black/70 z-[1]" />


      {/* Content */}
      <div className="relative z-10 flex flex-row gap-0 py-20 px-0">
        {/* Contact Info */}
        <div className="w-[40vw] flex flex-col justify-center px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Get In Touch</h1>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                <span className="text-2xl">📧</span>
                Email
              </h3>
              <a 
                href="mailto:multimedia_club@vitbhopal.ac.in"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                multimedia_club@vitbhopal.ac.in
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                <span className="text-2xl">📞</span>
                Phone
              </h3>
              <a 
                href="tel:+918968978226"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                +91 89689 78226
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                <span className="text-2xl">📍</span>
                Location
              </h3>
              <p className="text-gray-200 leading-relaxed">
                The Matrix Club<br />
                VIT Bhopal University<br />
                Kothri Kalan, Sehore<br />
                Madhya Pradesh — 466114, India
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-[60vw] flex items-center flex-col justify-end">
            {/* <h2 className="text-2xl font-bold text-white">Send us a Message</h2> */}
            <iframe 
              src="https://forms.visme.co/fv/wpe6g8kr-7qj69z" 
              width="1000" 
              height="1000" 
              frameBorder="0"
              title="Contact Form"
              className="rounded-lg"
            />
        </div>
      </div>
    </div>
  )
}

export default Contact
