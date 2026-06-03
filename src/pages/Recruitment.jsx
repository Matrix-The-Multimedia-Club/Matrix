import { Mail, Users, ArrowRight } from 'lucide-react';
import { JOIN_US_CONFIG } from '../constant/joinUsConfig';
import { TEAM_ORDER } from '../constant/teamMembers';

const teamDescriptions = {
  'LEADERSHIP': 'Lead the vision of The Matrix Club. Guide teams, make strategic decisions, and shape the future of our community.',
  'TECHNICAL': 'Build innovative solutions. Work with cutting-edge tech, contribute to projects, and level up your development skills.',
  'DESIGN': 'Create stunning visuals. Design engaging content, UI/UX, and bring creative ideas to life.',
  'DIGITAL MEDIA AND PRODUCTION TEAM': 'Capture stories through media. Produce videos, photography, and multimedia content that inspires.',
  'EVENT MANAGEMENT': 'Organize unforgettable events. Plan, execute, and manage amazing experiences for the community.',
  'PR AND OUTREACH': 'Build connections. Handle communications, partnerships, and grow our community presence.',
  'FINANCE': 'Manage resources wisely. Handle budgets, sponsorships, and ensure financial sustainability.',
  'CONTENT': 'Tell compelling stories. Write, create, and craft content that resonates with our audience.',
};

const Recruitment = () => {
  const handleJoinTeam = (teamName) => {
    if (!JOIN_US_CONFIG.registrationsOpen) {
      alert('Registrations are currently closed. Please check back later!');
      return;
    }

    const formLink = JOIN_US_CONFIG.teamJoinLinks[teamName];
    if (formLink && !formLink.includes('FORM_ID')) {
      window.open(formLink, '_blank');
    } else {
      alert('Join form link will be available soon!');
    }
  };

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
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <section className="relative z-10 w-full">
        <div className="min-h-screen overflow-hidden px-4 py-24 text-white">
          {/* Hero Section */}
          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

          <div className="relative mx-auto max-w-5xl text-center mb-32">
            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl mb-6">
              Join The Matrix Club
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-white/70 mb-8">
              Be part of VIT Bhopal's premier multimedia community. Whether you're passionate about design, development, content creation, or event management — find your place in our creative ecosystem.
            </p>

            {/* Status indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className={`h-3 w-3 rounded-full ${JOIN_US_CONFIG.registrationsOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              <span className="text-sm text-white/60 font-medium">
                {JOIN_US_CONFIG.registrationsOpen ? 'Registrations Now Open' : 'Registrations Closed'}
              </span>
            </div>

            {/* Main CTA */}
            <a
              href="#teams"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1"
            >
              Explore Teams
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Teams Section */}
          <div id="teams" className="relative mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
              Our Teams
            </h2>
            <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
              Explore our different departments and find where your skills and passion fit best.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
              {TEAM_ORDER.map((team) => (
                <div
                  key={team}
                  className="group relative rounded-2xl p-8 overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 hover:border-cyan-400/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Glowing bg */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Team Icon */}
                    <div className="h-14 w-14 rounded-xl border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-7 w-7 text-cyan-300" />
                    </div>

                    {/* Team Name */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {team}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/70 mb-6 leading-6">
                      {teamDescriptions[team]}
                    </p>

                    {/* Join Button */}
                    <button
                      onClick={() => handleJoinTeam(team)}
                      className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Join {team.split(' ')[0]}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Join Section */}
          <div className="relative mx-auto max-w-4xl mt-32 px-4 sm:px-0">
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Why Join The Matrix Club?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-300 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Hands-on Experience</h3>
                      <p className="text-white/60 text-sm">Work on real projects and build your portfolio</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-300 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Creative Community</h3>
                      <p className="text-white/60 text-sm">Collaborate with talented and passionate people</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-300 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Skill Development</h3>
                      <p className="text-white/60 text-sm">Learn new skills and grow professionally</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-300 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Networking</h3>
                      <p className="text-white/60 text-sm">Build connections with industry professionals</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-300 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Leadership Roles</h3>
                      <p className="text-white/60 text-sm">Grow into leadership positions and lead teams</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-300 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Fun & Events</h3>
                      <p className="text-white/60 text-sm">Participate in exciting events and activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recruitment;
