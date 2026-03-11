import { motion } from 'framer-motion';
import DeveloperCard from '../components/DeveloperCard';
import MagicParticles from '../components/MagicParticles';
import nishanthImg from '../assets/devs_profile/Nishanth.jpeg';
import loganathanImg from '../assets/devs_profile/loganathan.jpeg';
import LakshanthImg from "../assets/devs_profile/Lakshanth.jpeg";
import { image } from 'framer-motion/client';

const DEVELOPERS = [
    {
        name: 'Loganathan',
        role: 'Web Developer',
        department: 'IT',
        image: loganathanImg,
        instagramLink: 'https://www.instagram.com/loga.____?igsh=MXdxZnlicGp6aWozeQ==',
        linkedinLink: 'https://www.linkedin.com/in/loganathan-s-24a0032a3/',
        portfolioLink: 'https://loga-25.vercel.app/',
    },
    {
        name: 'Nishanth',
        role: 'Developer',
        department: 'EEE',
        image: nishanthImg,
        instagramLink: 'https://www.instagram.com/nishanth_.dev',
        linkedinLink: 'https://www.linkedin.com/in/nishanthnaa52/',
        portfolioLink: 'https://nishanth-portfolio-22.netlify.app/',
    },
    {
        name: 'Lakshanth',
        role: 'All Poster Designer',
        department: "CSE",
        image: LakshanthImg,
        instagramLink: 'https://www.instagram.com/chocolate_lux5',
        linkedinLink: '',
        portfolioLink: '',
    }
];

export default function Developers() {
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

            {/* Mist layers */}
            <div className="mist-layer" />
            <div className="mist-layer-2" />

            {/* Page title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10,
                    marginBottom: '56px',
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
                    Meet the Developers
                </h1>
                <p
                    className="font-inter"
                    style={{
                        fontSize: 'clamp(0.75rem, 1.6vw, 0.9rem)',
                        color: 'rgba(255, 237, 138, 0.5)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginTop: '12px',
                    }}
                >
                    The wizards behind this magical experience
                </p>
            </motion.div>

            {/* Developer cards */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '48px',
                    padding: '0 24px',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {DEVELOPERS.map((dev, i) => (
                    <motion.div
                        key={dev.name}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2 + i * 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <DeveloperCard {...dev} />
                    </motion.div>
                ))}
            </div>

            {/* Credits note */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10,
                    marginTop: '56px',
                    padding: '0 24px',
                }}
            >
                <div
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        padding: '24px 32px',
                        borderRadius: '16px',
                        backgroundColor: 'rgba(20, 18, 35, 0.5)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 215, 0, 0.08)',
                    }}
                >
                    <p
                        className="font-inter"
                        style={{
                            fontSize: 'clamp(0.75rem, 1.4vw, 0.88rem)',
                            color: 'rgba(240, 230, 200, 0.55)',
                            lineHeight: 1.7,
                            margin: 0,
                            letterSpacing: '0.03em',
                        }}
                    >
                        This website was crafted with the collective{' '}
                        <span style={{ color: '#FFD700', fontWeight: 500 }}>ideas and design</span>{' '}
                        contributions from students across{' '}
                        <span style={{ color: '#FFED8A', fontWeight: 500 }}>all departments</span>.
                    </p>
                </div>
            </motion.div>

            {/* Bottom decorative glow */}
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
