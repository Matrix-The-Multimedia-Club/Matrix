import { JOIN_US_CONFIG } from '../constant/joinUsConfig';
import { Mail, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JoinUs = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/recruitment');
  };

  return (
    <section className="relative z-10 w-full py-20">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-8">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white text-center overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 -ml-32 -mb-32"></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                <Users className="h-10 w-10 text-cyan-300" />
              </div>
            </div>

            {/* Main content */}
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Join The Matrix Club
            </h2>

            <p className="mx-auto max-w-2xl text-base sm:text-lg leading-8 text-white/70 mb-8">
              Become part of VIT Bhopal's premier multimedia community. Whether you're passionate about design, development, content, or event management — there's a place for you.
            </p>

            {/* Status indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className={`h-3 w-3 rounded-full ${JOIN_US_CONFIG.registrationsOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-sm text-white/60">
                {JOIN_US_CONFIG.registrationsOpen ? 'Registrations Open' : 'Registrations Closed'}
              </span>
            </div>

            {/* Join button */}
            <button
              onClick={handleJoinClick}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1"
            >
              <Mail className="h-5 w-5" />
              Join Now
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Info text */}
            <p className="mt-8 text-sm text-white/50">
              Choose a team and fill out the application form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
