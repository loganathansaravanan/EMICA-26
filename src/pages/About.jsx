import { motion } from 'framer-motion';
import MagicParticles from '../components/MagicParticles';
import LocationCard from '../components/LocationCard';
import raviImg from '../assets/chairman photo/ravi.jpeg';
import anushaImg from '../assets/chairman photo/anusha ravi.jpeg';

/* ── Reusable animated section card ───────────────── */
function SectionCard({ title, children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            style={{
                maxWidth: '820px',
                width: '100%',
                padding: 'clamp(24px, 4vw, 40px)',
                borderRadius: '20px',
                backgroundColor: 'rgba(20, 18, 35, 0.65)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 215, 0, 0.12)',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 215, 0, 0.06)',
            }}
        >
            {title && (
                <h2
                    className="font-cinzel"
                    style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFED8A 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: '0 0 18px',
                        letterSpacing: '0.06em',
                    }}
                >
                    {title}
                </h2>
            )}
            <div
                className="font-inter"
                style={{
                    fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                    color: 'rgba(240, 230, 200, 0.72)',
                    lineHeight: 1.8,
                    letterSpacing: '0.02em',
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}

export default function About() {
    return (
        <div
            style={{
                position: 'relative',
                minHeight: '100dvh',
                backgroundColor: '#0b0b14',
                overflowX: 'hidden',
                paddingTop: '130px',
                paddingBottom: '80px',
            }}
        >
            <MagicParticles />
            <div className="mist-layer" />
            <div className="mist-layer-2" />

            {/* Page heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10,
                    marginBottom: '48px',
                }}
            >
                <h1
                    className="font-cinzel"
                    style={{
                        fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFED8A 50%, #FFD700 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        letterSpacing: '0.08em',
                    }}
                >
                    About
                </h1>
            </motion.div>

            {/* Content sections */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '36px',
                    padding: '0 clamp(16px, 5vw, 48px)',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {/* Leadership */}
                <SectionCard delay={0.15}>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '32px',
                            justifyContent: 'center',
                            marginTop: '0px'
                        }}
                    >
                        {/* Chairman */}
                        <div style={{ textAlign: 'center' }}>
                            <div
                                style={{
                                    width: '160px',
                                    height: '160px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 16px',
                                    border: '3px solid rgba(255, 215, 0, 0.4)',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                }}
                            >
                                <img
                                    src={raviImg}
                                    alt="Dr. P.V. Ravi, Chairman"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <h3 className="font-cinzel" style={{ margin: '0 0 4px', fontSize: '1.1rem', color: '#FFD700' }}>
                                Dr. P.V. Ravi
                            </h3>
                            <p className="font-inter" style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(240, 230, 200, 0.7)' }}>
                                Chairman
                            </p>
                        </div>

                        {/* CEO */}
                        <div style={{ textAlign: 'center' }}>
                            <div
                                style={{
                                    width: '160px',
                                    height: '160px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '0 auto 16px',
                                    border: '3px solid rgba(255, 215, 0, 0.4)',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                }}
                            >
                                <img
                                    src={anushaImg}
                                    alt="Dr. Anusha ravi, CEO"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <h3 className="font-cinzel" style={{ margin: '0 0 4px', fontSize: '1.1rem', color: '#FFD700' }}>
                                Dr. Anusha ravi
                            </h3>
                            <p className="font-inter" style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(240, 230, 200, 0.7)' }}>
                                CEO
                            </p>
                        </div>
                    </div>
                </SectionCard>

                {/* About TCE */}
                <SectionCard title="Tamilnadu College of Engineering" delay={0.25}>
                    <p style={{ marginBottom: '14px' }}>
                        Tamilnadu College of Engineering is a first self-financing college sponsored by
                        Tamilnadu Technical Education Foundation (Regd.) established in the year 1984.
                        The primary focus of the Institution is to expose the young minds to the world of
                        technology, instilling in them confidence and fortitude to face new challenges enabling
                        them to shine in their chosen fields.
                    </p>
                    <p>
                        The College is recognized by the Government of Tamilnadu, approved by All India
                        Council for Technical Education, New Delhi, accredited with grade A by NAAC and
                        affiliated to Anna University . The College offers the courses B.E (Computer Science
                        Engineering), B.E (Mechanical Engineering), B.E (Civil Engineering), B.E (Electronics
                        and Communication Engineering),B.E (Electrical and Electronics Engineering),B.E
                        (Automobile Engineering),B. Tech (Artificial Intelligence and Data Science ),
                        B.Tech(Information Technology), M. E (Computer Science Engineering), M.E
                        (Structural Engineering) and Master of Business Administration.
                    </p>
                </SectionCard>

                {/* About EMICA'26 */}
                <SectionCard title="EMICA'26 — The Symposium" delay={0.35}>
                    <p style={{ marginBottom: '14px' }}>
                        EMICA'26 is a National Level Technical Symposium organized by all the departments at Tamilnadu College of Engineering,
                        Karumathampatti, Coimbatore. Scheduled for{' '}
                        <span style={{ color: '#FFD700', fontWeight: 500 }}>March 28, 2026</span>, the event
                        brings together brilliant minds from across the nation to compete, collaborate, and
                        celebrate the spirit of innovation.
                    </p>
                    <p style={{ marginBottom: '14px' }}>
                        The symposium features a diverse lineup of technical events including paper
                        presentations, project exhibitions, coding challenges, circuit debugging,code debugging, technical
                        quizzes, hands-on workshops and etc.
                        all designed to push the boundaries of creativity
                        and technical prowess.
                    </p>
                    <p>
                        Whether you are an aspiring engineer, a tech enthusiast, or a curious learner, EMICA'26
                        offers an extraordinary platform to showcase your skills, gain exposure, and connect with
                        like-minded innovators from across the colleges. Prepare to be part of something magical.
                    </p>
                </SectionCard>

                {/* Location */}
                <LocationCard delay={0.55} />
            </div>

            {/* Bottom glow */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 200,
                    background: 'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(42, 16, 80, 0.3) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />
        </div>
    );
}
