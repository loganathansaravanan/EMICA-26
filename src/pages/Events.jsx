import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagicParticles from '../components/MagicParticles';
import EventCard from '../components/EventCard';
import EventDetailPanel from '../components/EventDetailPanel';
import eventsData from '../data/events.json';

export default function Events() {
    const [activeDept, setActiveDept] = useState(eventsData.departments[0].id);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const scrollRef = useRef(null);

    /* Get current department */
    const currentDept = useMemo(
        () => eventsData.departments.find((d) => d.id === activeDept),
        [activeDept]
    );

    /* Split events by category for current department */
    const technicalEvents = useMemo(
        () => currentDept?.events.filter((e) => e.category === 'Technical') || [],
        [currentDept]
    );
    const nonTechnicalEvents = useMemo(
        () => currentDept?.events.filter((e) => e.category === 'Non-Technical') || [],
        [currentDept]
    );

    /* Total events count */
    const totalEvents = eventsData.departments.reduce((sum, d) => sum + d.events.length, 0);

    /* Handle browser back button for mobile overlay */
    useEffect(() => {
        // Only push state when a modal is actively selected
        if (selectedEvent) {
            window.history.pushState({ modalPanelOpen: true }, '', window.location.pathname);
        }

        const handlePopState = (e) => {
            // When user clicks the hardware/browser back button:
            // Since they are backing out, we immediately clear the modal.
            if (selectedEvent) {
                setSelectedEvent(null);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [selectedEvent]);

    const handleClosePanel = () => {
        // User clicked the close panel button manually
        if (window.history.state && window.history.state.modalPanelOpen) {
            // Revert the history state we pushed
            window.history.back();
        } else {
            // Fallback for safety
            setSelectedEvent(null);
        }
    };

    return (
        <div
            style={{
                position: 'relative',
                minHeight: '100dvh',
                backgroundColor: '#0b0b14',
                overflowX: 'hidden',
                paddingTop: '120px',
                paddingBottom: '80px',
            }}
        >
            <MagicParticles />
            <div className="mist-layer" />
            <div className="mist-layer-2" />

            {/* ══════ Page Title ══════ */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10,
                    marginBottom: '8px',
                    padding: '0 24px',
                }}
            >
                <h1
                    className="font-cinzel"
                    style={{
                        fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFED8A 50%, #FFD700 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        letterSpacing: '0.08em',
                    }}
                >
                    ✨ Department Events
                </h1>
                <p
                    className="font-inter"
                    style={{
                        fontSize: 'clamp(0.78rem, 1.5vw, 0.9rem)',
                        color: 'rgba(240, 230, 200, 0.5)',
                        marginTop: '10px',
                        letterSpacing: '0.04em',
                    }}
                >
                    <span style={{ color: '#00d4ff' }}>Explore the magic</span>
                </p>
            </motion.div>

            {/* ══════ Department Selector ══════ */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                    position: 'relative',
                    zIndex: 10,
                    maxWidth: '1100px',
                    margin: '24px auto 12px',
                    padding: '0 clamp(16px, 4vw, 32px)',
                }}
            >
                <div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        gap: '8px',
                        overflowX: 'auto',
                        padding: '8px 4px 12px',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    {eventsData.departments.map((dept) => {
                        const isActive = activeDept === dept.id;
                        return (
                            <motion.button
                                key={dept.id}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveDept(dept.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '10px 18px',
                                    borderRadius: '16px',
                                    border: isActive
                                        ? `1px solid ${dept.color}88`
                                        : '1px solid rgba(255, 215, 0, 0.1)',
                                    backgroundColor: isActive
                                        ? `${dept.color}18`
                                        : 'rgba(20, 18, 35, 0.5)',
                                    color: isActive ? dept.color : 'rgba(240, 230, 200, 0.5)',
                                    fontSize: '0.8rem',
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: isActive ? 600 : 400,
                                    letterSpacing: '0.03em',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap',
                                    transition: 'all 0.3s ease',
                                    textShadow: isActive ? `0 0 14px ${dept.color}44` : 'none',
                                    boxShadow: isActive
                                        ? `0 4px 20px ${dept.color}15, inset 0 0 20px ${dept.color}08`
                                        : 'none',
                                    flexShrink: 0,
                                }}
                            >
                                <span style={{ fontSize: '1rem' }}>{dept.icon}</span>
                                <span>{dept.name}</span>
                            </motion.button>
                        );
                    })}
                </div>
            </motion.div>

            {/* ══════ Department Info Banner ══════ */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeDept}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        maxWidth: '1100px',
                        margin: '0 auto 28px',
                        padding: '0 clamp(16px, 4vw, 32px)',
                    }}
                >
                    <div
                        style={{
                            padding: '20px clamp(20px, 3vw, 28px)',
                            borderRadius: '18px',
                            backgroundColor: 'rgba(20, 18, 35, 0.5)',
                            backdropFilter: 'blur(14px)',
                            border: `1px solid ${currentDept?.color || '#FFD700'}15`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div
                            style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '16px',
                                background: `linear-gradient(135deg, ${currentDept?.color || '#FFD700'}22, ${currentDept?.color || '#FFD700'}08)`,
                                border: `1px solid ${currentDept?.color || '#FFD700'}33`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                flexShrink: 0,
                            }}
                        >
                            {currentDept?.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                            <h2
                                className="font-cinzel"
                                style={{
                                    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                                    fontWeight: 700,
                                    color: currentDept?.color || '#FFD700',
                                    margin: '0 0 4px',
                                    letterSpacing: '0.04em',
                                }}
                            >
                                {currentDept?.fullName}
                            </h2>
                            <p
                                className="font-inter"
                                style={{
                                    fontSize: '0.78rem',
                                    color: 'rgba(240, 230, 200, 0.45)',
                                    margin: 0,
                                }}
                            >
                                <span style={{ color: '#00d4ff' }}>{technicalEvents.length} Technical</span>
                                {' · '}
                                <span style={{ color: '#ff7eb3' }}>{nonTechnicalEvents.length} Non-Technical</span>
                                {' · '}
                                {currentDept?.events.length} Total Events
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* ══════ Schedule Banner ══════ */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                style={{
                    position: 'relative',
                    zIndex: 10,
                    maxWidth: '1100px',
                    margin: '0 auto 36px',
                    padding: '0 clamp(16px, 4vw, 32px)',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                        gap: '10px',
                        padding: '18px clamp(16px, 3vw, 24px)',
                        borderRadius: '16px',
                        backgroundColor: 'rgba(20, 18, 35, 0.5)',
                        backdropFilter: 'blur(14px)',
                        border: '1px solid rgba(255, 215, 0, 0.08)',
                    }}
                >
                    {[
                        { icon: '📝', label: 'Registration', value: eventsData.schedule.registrationDesk.opens },
                        { icon: '🎤', label: 'Inauguration', value: eventsData.schedule.inauguration.time },
                        { icon: '🍽️', label: 'Lunch Break', value: eventsData.schedule.lunchBreak.time },
                        { icon: '🏆', label: 'Valedictory', value: eventsData.schedule.valedictory.time },
                    ].map((item) => (
                        <div key={item.label} style={{ textAlign: 'center', padding: '6px 0' }}>
                            <div style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{item.icon}</div>
                            <div
                                className="font-cinzel"
                                style={{
                                    fontSize: '0.7rem',
                                    color: '#FFD700',
                                    fontWeight: 600,
                                    letterSpacing: '0.06em',
                                    marginBottom: '4px',
                                }}
                            >
                                {item.label}
                            </div>
                            <div
                                className="font-inter"
                                style={{
                                    fontSize: '0.68rem',
                                    color: 'rgba(240, 230, 200, 0.5)',
                                }}
                            >
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* ══════ Technical Events Section ══════ */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`tech-${activeDept}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        maxWidth: '1100px',
                        margin: '0 auto 40px',
                        padding: '0 clamp(16px, 4vw, 32px)',
                    }}
                >
                    {/* Technical heading */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '18px',
                        }}
                    >
                        <div
                            style={{
                                width: '4px',
                                height: '24px',
                                borderRadius: '4px',
                                background: 'linear-gradient(180deg, #00d4ff, #00d4ff44)',
                            }}
                        />
                        <h3
                            className="font-cinzel"
                            style={{
                                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                                fontWeight: 600,
                                color: '#00d4ff',
                                margin: 0,
                                letterSpacing: '0.06em',
                            }}
                        >
                            ⚡ Technical Events
                        </h3>
                        <span
                            style={{
                                fontSize: '0.68rem',
                                padding: '2px 10px',
                                borderRadius: '12px',
                                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                color: '#00d4ff',
                                border: '1px solid rgba(0, 212, 255, 0.2)',
                                fontFamily: "'Inter', sans-serif",
                            }}
                        >
                            {technicalEvents.length}
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
                            gap: '20px',
                        }}
                    >
                        {technicalEvents.map((evt, i) => (
                            <EventCard
                                key={evt.id}
                                event={evt}
                                index={i}
                                onClick={setSelectedEvent}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* ══════ Non-Technical Events Section ══════ */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`nontech-${activeDept}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        maxWidth: '1100px',
                        margin: '0 auto 48px',
                        padding: '0 clamp(16px, 4vw, 32px)',
                    }}
                >
                    {/* Non-Technical heading */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '18px',
                        }}
                    >
                        <div
                            style={{
                                width: '4px',
                                height: '24px',
                                borderRadius: '4px',
                                background: 'linear-gradient(180deg, #ff7eb3, #ff7eb344)',
                            }}
                        />
                        <h3
                            className="font-cinzel"
                            style={{
                                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                                fontWeight: 600,
                                color: '#ff7eb3',
                                margin: 0,
                                letterSpacing: '0.06em',
                            }}
                        >
                            🎭 Non-Technical Events
                        </h3>
                        <span
                            style={{
                                fontSize: '0.68rem',
                                padding: '2px 10px',
                                borderRadius: '12px',
                                backgroundColor: 'rgba(255, 126, 179, 0.1)',
                                color: '#ff7eb3',
                                border: '1px solid rgba(255, 126, 179, 0.2)',
                                fontFamily: "'Inter', sans-serif",
                            }}
                        >
                            {nonTechnicalEvents.length}
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
                            gap: '20px',
                        }}
                    >
                        {nonTechnicalEvents.map((evt, i) => (
                            <EventCard
                                key={evt.id}
                                event={evt}
                                index={i}
                                onClick={setSelectedEvent}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* ══════ Contact Section ══════ 
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                    position: 'relative',
                    zIndex: 10,
                    maxWidth: '900px',
                    margin: '0 auto 0',
                    padding: '0 clamp(16px, 4vw, 32px)',
                }}
            >
                <div
                    style={{
                        padding: 'clamp(24px, 4vw, 36px)',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(20, 18, 35, 0.55)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 215, 0, 0.1)',
                        textAlign: 'center',
                    }}
                >
                    <h2
                        className="font-cinzel"
                        style={{
                            fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #FFD700, #FFED8A)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            margin: '0 0 20px',
                            letterSpacing: '0.06em',
                        }}
                    >
                        📞 Contact Us
                    </h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '16px',
                        }}
                    >
                        {Object.entries(eventsData.contacts).map(([key, contact]) => (
                            <div
                                key={key}
                                style={{
                                    padding: '16px',
                                    borderRadius: '14px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.025)',
                                    border: '1px solid rgba(255, 215, 0, 0.06)',
                                }}
                            >
                                <div
                                    className="font-inter"
                                    style={{
                                        fontSize: '0.82rem',
                                        color: '#FFED8A',
                                        fontWeight: 600,
                                        marginBottom: '6px',
                                    }}
                                >
                                    {contact.name}
                                </div>
                                <div
                                    className="font-inter"
                                    style={{
                                        fontSize: '0.74rem',
                                        color: 'rgba(240, 230, 200, 0.45)',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    <div>📱 {contact.phone}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>*/}

            {/* ── Bottom glow ── */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 200,
                    background:
                        'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(42, 16, 80, 0.3) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />

            {/* ══════ Event Detail Side Panel ══════ */}
            {selectedEvent && (
                <EventDetailPanel
                    event={selectedEvent}
                    onClose={handleClosePanel}
                />
            )}
        </div>
    );
}
