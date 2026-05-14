import ElectricBorder from "./ElectricBorder";
import { Sparkles, Target, Eye, Heart } from "lucide-react";
import TeamProfile from './Team';
import { teamMembers, TEAM_ORDER } from '../constant/teamMembers';
// import TeamProfile from "./Team";

const cards = [
    {
        icon: Sparkles,
        title: "Innovation",
        desc: "Pushing the boundaries of multimedia and technology",
    },
    {
        icon: Target,
        title: "Mission",
        desc: "To empower students with hands-on multimedia skills and foster a creative environment",
    },
    {
        icon: Eye,
        title: "Vision",
        desc: "To be the leading multimedia club that bridges creativity and technology",
    },
    {
        icon: Heart,
        title: "Community",
        desc: "Building a collaborative space for creative minds to thrive",
    },
];

const About = () => {
    const renderTeamMembers = () => {
        try {
            if (!teamMembers || teamMembers.length === 0) {
                return <p className="text-white text-center">No team members found</p>;
            }

            return TEAM_ORDER.map((team) => {
                const teamMembers_filtered = teamMembers.filter(member => member && member.team === team);
                if (teamMembers_filtered.length === 0) return null;

                return (
                    <div key={team} className="mb-20">
                        <h3 className="text-3xl text-cyan-400 font-bold mb-8 text-center">{team}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
                            {teamMembers_filtered.map((member) => (
                                <TeamProfile
                                    key={member.id}
                                    member={member}
                                />
                            ))}
                        </div>
                    </div>
                );
            });
        } catch (error) {
            console.error('Error rendering team members:', error);
            return <p className="text-red-400 text-center">Error loading team members</p>;
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
                    <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
                    <div className="relative mx-auto max-w-4xl text-center mb-20">
                        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                            About The Matrix Club
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
                            VIT Bhopal&apos;s premier multimedia club — where creativity,
                            innovation, and technology merge into extraordinary digital
                            experiences.
                        </p>
                    </div>

                    {/* cards */}
                    <div className="relative z-10 mx-auto mt-20 grid max-w-7xl gap-8 sm:grid-cols-2 xl:grid-cols-4 mb-20">
                        {cards.map((card, index) => {
                            const Icon = card.icon;

                            return (
                                <ElectricBorder
                                    key={index}
                                    color="#22d3ee"
                                    speed={1}
                                    chaos={0.1}
                                    thickness={2}
                                    style={{ borderRadius: 28 }}
                                >
                                    <div className="group relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-white/10 px-8 py-12 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2" style={{ background: 'rgba(7, 13, 33, 0.65)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                                        <div className="absolute -top-16 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />
                                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(34,211,238,0.3)]">
                                            <Icon className="h-10 w-10 text-cyan-300" />
                                        </div>
                                        <h2 className="mb-4 text-2xl font-bold text-white">
                                            {card.title}
                                        </h2>
                                        <p className="text-base leading-8 text-white/70 transition-all duration-500 group-hover:text-white/90">
                                            {card.desc}
                                        </p>
                                        <div className="absolute bottom-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
                                    </div>
                                </ElectricBorder>
                            );
                        })}
                    </div>

                    {/* Teams */}
                    <div className="mt-32 mb-20">
                        <h2 className="text-5xl text-center mb-16 font-extrabold tracking-tight text-white md:text-7xl">
                            Our Team
                        </h2>
                        {renderTeamMembers()}
                    </div>
                </div>
                <TeamProfile/>
            </section>
        </>
    );
};

export default About;