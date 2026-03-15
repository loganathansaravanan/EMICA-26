import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LogoReveal from './LogoReveal';
import CountdownTimer from './CountdownTimer';
import MagicalButton, { ComingSoonModal } from './MagicalButton';
import { createPortal } from 'react-dom';

/* ── Decorative twinkling stars ─────────────────── */
const STARS = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 3,
}));

function Stars() {
    return (
        <>
            {STARS.map((s) => (
                <div
                    key={s.id}
                    style={{
                        position: 'absolute',
                        top: s.top,
                        left: s.left,
                        width: s.size,
                        height: s.size,
                        borderRadius: '50%',
                        backgroundColor: '#FFD700',
                        boxShadow: `0 0 ${s.size * 3}px ${s.size}px #FFD70066`,
                        animation: `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
                        pointerEvents: 'none',
                    }}
                />
            ))}
        </>
    );
}

export default function HeroSection({ onRevealDoneCallback }) {
    const [revealDone, setRevealDone] = useState(false);
    // null | 'register' | 'brochure'
    const [modal, setModal] = useState(null);
    const navigate = useNavigate();

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 28 },
        animate: revealDone ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
    });

    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100dvh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background:
                    'radial-gradient(ellipse 90% 70% at 50% 30%, #2a1050 0%, #1a0f2e 40%, #0b0b14 100%)',
                padding: 'clamp(24px, 6vw, 80px) clamp(16px, 5vw, 60px)',
                gap: 'clamp(24px, 4.5vh, 52px)',
            }}
        >
            <Stars />
            <div className="mist-layer" />
            <div className="mist-layer-2" />

            {/* ── Logo ── */}
            <LogoReveal onRevealDone={() => {
                setRevealDone(true);
                if (onRevealDoneCallback) onRevealDoneCallback();
            }} />

            {/* ── Tagline ── */}
            <motion.p {...fadeUp(0.1)} style={{ textAlign: 'center' }}>
                <span
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(0.78rem, 1.8vw, 0.95rem)',
                        letterSpacing: '0.32em',
                        textTransform: 'uppercase',
                        color: '#FFED8A88',
                        fontWeight: 400,
                    }}
                >
                    National Level Technical Symposium
                </span>
            </motion.p>

            {/* ── Countdown ── */}
            <CountdownTimer visible={revealDone} />

            {/* ── Event date ── */}
            <motion.p
                {...fadeUp(0.45)}
                style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
                    color: '#FFD700',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textAlign: 'center',
                    marginTop: '8px',
                    textShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
                }}
            >
                March 28, 2026
            </motion.p>

            {/* ── Buttons ── */}
            <motion.div
                {...fadeUp(0.65)}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'clamp(12px, 3vw, 20px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <MagicalButton variant="primary" onClick={() => setModal('register')}>
                    ✨ Register Now
                </MagicalButton>
                <MagicalButton variant="secondary" onClick={() => navigate('/events')}>
                    Explore Events →
                </MagicalButton>

                {/* View Brochure — sits on its own row below */}
                <div style={{ flexBasis: '100%', display: 'flex', justifyContent: 'center' }}>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(255, 215, 0, 0.35)' }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setModal('brochure')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 28px',
                            borderRadius: '30px',
                            border: '1px solid rgba(255, 215, 0, 0.3)',
                            backgroundColor: 'rgba(255, 215, 0, 0.08)',
                            backdropFilter: 'blur(10px)',
                            color: '#FFD700',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(0.72rem, 1.4vw, 0.82rem)',
                            fontWeight: 500,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                        Update Coming Soon
                    </motion.button>
                </div>
            </motion.div>

            {/* ── Bottom fade ── */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 140,
                    background: 'linear-gradient(to top, #0b0b14 0%, transparent 100%)',
                    pointerEvents: 'none',
                    zIndex: 2,
                }}
            />

            {/* ── Coming Soon Modals ── */}
            <AnimatePresence>
                {modal === 'register' && (
                    <ComingSoonModal
                        key="register-modal"
                        title="Registration"
                        onClose={() => setModal(null)}
                    />
                )}

                {modal === 'brochure' && (
                    <ComingSoonModal
                        key="brochure-modal"
                        title="Brochure"
                        onClose={() => setModal(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
