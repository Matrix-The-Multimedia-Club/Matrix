import './Events.css';
import { useEffect, useRef } from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const upcomingEvents = [
  {
    id: 1,
    tag: 'Workshop',
    tagColor: '#48d8ff',
    date: 'June 14, 2025',
    title: 'Motion Graphics Masterclass',
    description: 'Dive into the world of motion graphics with industry professionals. Learn After Effects, compositing tricks, and animation principles.',
    seats: '40 seats left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    id: 2,
    tag: 'Hackathon',
    tagColor: '#a78bfa',
    date: 'July 5–6, 2025',
    title: '48-Hour Creative Hackathon',
    description: 'Two days, one brief, infinite creativity. Form a team, pick a medium, and deliver a stunning multimedia experience from scratch.',
    seats: '12 teams left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 3,
    tag: 'Showcase',
    tagColor: '#34d399',
    date: 'August 2, 2025',
    title: 'Annual Film & Design Showcase',
    description: 'Our biggest showcase of the year. Student films, design portfolios, and interactive installations all under one roof.',
    seats: 'Open Entry',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
];

const allPastEvents = [
  { id: 1, tag: 'Media Morphosis', tagColor: '#48d8ff', date: 'July 27, 2025', title: 'Data Science and Social Media Analytics ', description: 'Matrix Club in partnership with Unstop hosted Media Morphosis at VIT Bhopal. The event explored how Data Science and Social Media Analytics shape branding and business strategies. Participants enjoyed an insightful learning session followed by a hackathon-style quiz and case study, applying data-driven insights to real-world challenges.', attendees: '200+' },
  { id: 2, tag: 'AIRM 2025', tagColor: '#a78bfa', date: 'December 30, 2025', title: 'Artificial Intelligence, Robotics, and Multimedia', description: 'Matrix Club, the Multimedia Club at VIT Bhopal, hosted AIRM 2025—an online event for college students focused on Artificial Intelligence, Robotics, and Multimedia. With over 100 participants, the session delivered valuable insights through expert talks, interactive discussions, and engaging quizzes, inspiring young minds to explore emerging technologies and real-world applications.', attendees: '60+' },
  { id: 3, tag: 'MatrixMatch', tagColor: '#34d399', date: 'February 20, 2026', title: 'Tech Compatibility & Collaboration Test', description: 'Matrix Club hosted MatchMatrix – Tech Compatibility & Collaboration Test, an interactive technical event that combined technology, logical thinking, and collaborative assessment in a safe campus environment. The event featured a custom-built in-house web platform developed by students, where participants completed a technical and personality-oriented quiz and were grouped using a compatibility algorithm.', attendees: '150+' },
  { id: 4, tag:'AIRM 2 2026', tagColor: '#f472b6', date: '22 Feb 2026', title: 'Artificial Intelligence, Robotics, and Multimedia.', description: 'Matrix Club, the Multimedia Club at VIT Bhopal, hosted AIRM 2 on 22 February—an online event for college students focused on Artificial Intelligence, Robotics, and Multimedia. The session featured expert talks, interactive discussions, and engaging activities, providing valuable insights into emerging technologies and real-world applications.', attendees: '200+' },
  { id: 5, tag: 'GameCraft', tagColor: '#fbbf24', date: '9 April 2026', title: 'Build Games', description: 'Matric GameCraft is a creative tech event where participants design and develop their own games from scratch. It encourages innovation, problem-solving, and programming skills as individuals or teams build unique gaming experiences within a given time frame. This was very fun and engaging event for all the participants.', attendees: '50+' },
];

const Events = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    const handleMouseMove = (card, e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 28;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 28;
      card.style.transform = `perspective(1100px) rotateX(${-y}deg) rotateY(${x}deg) translateZ(30px)`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform = `perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    };

    cards.forEach((card) => {
      const moveHandler = (e) => handleMouseMove(card, e);
      const leaveHandler = () => handleMouseLeave(card);
      card.addEventListener('mousemove', moveHandler);
      card.addEventListener('mouseleave', leaveHandler);
      card._moveHandler = moveHandler;
      card._leaveHandler = leaveHandler;
    });

    return () => {
      cards.forEach((card) => {
        if (card._moveHandler) card.removeEventListener('mousemove', card._moveHandler);
        if (card._leaveHandler) card.removeEventListener('mouseleave', card._leaveHandler);
      });
    };
  }, []);

  return (
    <div className="events-root">
      <video className="events-bg-video" src="/blue.mp4" autoPlay loop muted playsInline />
      <div className="events-bg-overlay" aria-hidden="true" />

      {/* Hero */}
      <section className="events-hero-section">
        <div className="events-hero-inner">
          <span className="events-eyebrow">Matrix · Events</span>
          <h1 className="events-hero-title">
            Where Ideas Take <span className="events-accent">the Stage</span>
          </h1>
          <p className="events-hero-sub">
            Workshops, hackathons, film showcases, and community meetups —<br />
            every event is a chance to create, connect, and grow.
          </p>
          <div className="events-hero-actions">
            <button className="events-btn-primary">Register Now</button>
            <button className="events-btn-ghost">View Calendar</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="events-stats-bar">
        {[
          { value: '5', label: 'Events Hosted' },
          { value: '200+', label: 'Attendees' },
          { value: '2+', label: 'Workshops' },
          { value: '1+', label: 'Coding Competitions' },
        ].map((s) => (
          <div key={s.label} className="events-stat-item">
            <span className="events-stat-value">{s.value}</span>
            <span className="events-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <section className="events-upcoming">
        <div className="events-section-header">
          <h2 className="events-section-title">Upcoming Events</h2>
          <p className="events-section-sub">Don&apos;t miss out — grab your spot before they&apos;re gone.</p>
        </div>
        <div className="events-cards-grid">
          {upcomingEvents.map((ev, index) => (
            <article key={ev.id} className="event-card" ref={(el) => (cardsRef.current[index] = el)}>
              <div className="event-card-icon-wrapper">
                <div className="event-card-icon" style={{ color: ev.tagColor }}>{ev.icon}</div>
              </div>
              <div className="event-card-meta">
                <span className="event-tag" style={{ color: ev.tagColor, borderColor: ev.tagColor }}>{ev.tag}</span>
                <span className="event-date">{ev.date}</span>
              </div>
              <h3 className="event-card-title">{ev.title}</h3>
              <p className="event-card-desc">{ev.description}</p>
              <div className="event-card-footer">
                <span className="event-seats">{ev.seats}</span>
                <button className="event-register-btn">Register →</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Events Conducted - ScrollStack */}
      <section className="events-all-past">
        <div className="events-section-header">
          <h2 className="events-section-title">All Events Conducted</h2>
          <p className="events-section-sub">Journey through every memorable event hosted by the Matrix Club.</p>
        </div>
        <ScrollStack className="events-scroll-stack" itemDistance={160} rotationAmount={8} blurAmount={0.8}>
          {allPastEvents.map((event) => (
            <ScrollStackItem key={event.id}>
              <div className="past-event-card">
                <div className="past-event-tag" style={{ color: event.tagColor, borderColor: event.tagColor }}>
                  {event.tag}
                </div>
                <div className="past-event-date">{event.date}</div>
                <h3 className="past-event-title">{event.title}</h3>
                <p className="past-event-desc">{event.description}</p>
                <div className="past-event-attendees">{event.attendees} attended</div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      {/* CTA */}
      <section className="events-cta">
        <div className="events-cta-inner">
          <h2 className="events-cta-title">Got an idea for an event?</h2>
          <p className="events-cta-sub">Pitch it to the Matrix team. We love bringing bold ideas to life.</p>
          <button className="events-btn-primary">Submit a Proposal</button>
        </div>
      </section>
    </div>
  );
};

export default Events;