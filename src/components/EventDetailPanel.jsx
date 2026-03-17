import { motion, AnimatePresence } from 'framer-motion';

const CATEGORY_COLORS = {
    Technical: { bg: 'rgba(0, 200, 255, 0.12)', text: '#00d4ff', border: 'rgba(0, 200, 255, 0.25)', icon: '⚡' },
    'Non-Technical': { bg: 'rgba(255, 100, 200, 0.12)', text: '#ff7eb3', border: 'rgba(255, 100, 200, 0.25)', icon: '🎭' },
};

export default function EventDetailPanel({ event, onClose }) {
    if (!event) return null;

    const cat = CATEGORY_COLORS[event.category] || CATEGORY_COLORS.Technical;

    return (
        <AnimatePresence>
            {event && (
                <motion.div
                    key="fullscreen-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(8, 6, 18, 0.97)',
                        backdropFilter: 'blur(30px)',
                        WebkitBackdropFilter: 'blur(30px)',
                        zIndex: 1000,
                        overflowY: 'auto',
                        overflowX: 'hidden',
                    }}
                >
                    {/* Top shimmer line */}
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: `linear-gradient(90deg, transparent 0%, ${cat.text} 50%, transparent 100%)`,
                            zIndex: 1002,
                        }}
                    />

                    {/* Close button */}
                    <motion.button
                        onClick={onClose}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 215, 0, 0.15)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            position: 'fixed',
                            top: '24px',
                            right: '28px',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 215, 0, 0.15)',
                            color: '#FFD700',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1003,
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        ✕
                    </motion.button>

                    {/* Content Container */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        style={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            padding: 'clamp(60px, 8vw, 80px) clamp(24px, 5vw, 48px) 80px',
                        }}
                    >
                        {/* Category + Team Size */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                            <span
                                style={{
                                    fontSize: '0.76rem',
                                    padding: '5px 16px',
                                    borderRadius: '20px',
                                    backgroundColor: cat.bg,
                                    color: cat.text,
                                    border: `1px solid ${cat.border}`,
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 500,
                                    letterSpacing: '0.04em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {cat.icon} {event.category}
                            </span>
                            <span
                                style={{
                                    fontSize: '0.76rem',
                                    padding: '5px 16px',
                                    borderRadius: '20px',
                                    backgroundColor: 'rgba(255, 215, 0, 0.08)',
                                    color: 'rgba(255, 215, 0, 0.7)',
                                    border: '1px solid rgba(255, 215, 0, 0.15)',
                                    fontFamily: "'Inter', sans-serif",
                                }}
                            >
                                👥 {event.teamSize}
                            </span>
                        </div>

                        {/* Event Name */}
                        <h2
                            className="font-cinzel"
                            style={{
                                fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #FFD700 0%, #FFED8A 50%, #FFD700 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                margin: '0 0 20px',
                                letterSpacing: '0.04em',
                                lineHeight: 1.2,
                            }}
                        >
                            {event.name}
                        </h2>

                        {/* Description */}
                        <div style={{ margin: '0 0 32px' }}>
                            {event.description && event.description.split('\n').map((line, i) => {
                                const trimmedLine = line.trim();
                                if (!trimmedLine) return <div key={i} style={{ height: '8px' }} />;
                                
                                const isHeader = trimmedLine === "CHESS" || trimmedLine === "CARROM";
                                
                                if (isHeader) {
                                    return (
                                        <div
                                            key={i}
                                            className="font-cinzel"
                                            style={{
                                                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                                                color: '#FFD700',
                                                fontWeight: 700,
                                                marginTop: i > 0 ? '20px' : '0',
                                                marginBottom: '8px',
                                                letterSpacing: '0.06em',
                                                borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
                                                paddingBottom: '6px',
                                                textShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
                                            }}
                                        >
                                            {trimmedLine}
                                        </div>
                                    );
                                }

                                return (
                                    <p
                                        key={i}
                                        className="font-inter"
                                        style={{
                                            fontSize: 'clamp(0.88rem, 1.6vw, 1rem)',
                                            color: 'rgba(240, 230, 200, 0.72)',
                                            lineHeight: 1.8,
                                            margin: 0,
                                            whiteSpace: 'pre-wrap',
                                        }}
                                    >
                                        {line}
                                    </p>
                                );
                            })}
                        </div>

                        {/* Tags */}
                        {event.tags && event.tags.length > 0 && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '8px',
                                    marginBottom: '32px',
                                }}
                            >
                                {event.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            fontSize: '0.74rem',
                                            padding: '4px 14px',
                                            borderRadius: '14px',
                                            backgroundColor: 'rgba(255, 215, 0, 0.07)',
                                            color: 'rgba(255, 215, 0, 0.65)',
                                            border: '1px solid rgba(255, 215, 0, 0.12)',
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 500,
                                            letterSpacing: '0.03em',
                                        }}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Info Grid */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '14px',
                                marginBottom: '36px',
                            }}
                        >
                            {[
                                { icon: '📍', label: 'Venue', value: event.venue },
                                { icon: '📅', label: 'Date', value: '28 March 2026' },
                                { icon: '🕐', label: 'Time', value: `${event.time.start} – ${event.time.end}` },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    style={{
                                        padding: '16px 18px',
                                        borderRadius: '16px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 215, 0, 0.08)',
                                    }}
                                >
                                    <div style={{ fontSize: '0.72rem', color: 'rgba(240, 230, 200, 0.4)', fontFamily: "'Inter', sans-serif", marginBottom: '6px' }}>
                                        {item.icon} {item.label}
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: '#FFED8A', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Rules */}
                        <SectionBlock title="📜 Rules">
                            <ul
                                style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                }}
                            >
                                {event.rules.map((rule, i) => {
                                    const isHeader = rule === "CHESS" || rule === "CARROM";
                                    
                                    if (isHeader) {
                                        return (
                                            <div
                                                key={i}
                                                className="font-cinzel"
                                                style={{
                                                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                                                    color: '#FFD700',
                                                    fontWeight: 700,
                                                    marginTop: i > 0 ? '20px' : '0',
                                                    marginBottom: '4px',
                                                    letterSpacing: '0.06em',
                                                    borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
                                                    paddingBottom: '6px',
                                                    textShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
                                                }}
                                            >
                                                {rule}
                                            </div>
                                        );
                                    }

                                    return (
                                        <li
                                            key={i}
                                            className="font-inter"
                                            style={{
                                                fontSize: 'clamp(0.8rem, 1.4vw, 0.9rem)',
                                                color: 'rgba(240, 230, 200, 0.65)',
                                                paddingLeft: '20px',
                                                position: 'relative',
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: '4px',
                                                    color: '#FFD70088',
                                                    fontSize: '0.5rem',
                                                }}
                                            >
                                                ✦
                                            </span>
                                            {rule}
                                        </li>
                                    );
                                })}
                            </ul>
                        </SectionBlock>

                        {/* Two Column Layout for Coordinators */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '24px',
                                marginBottom: '32px',
                            }}
                        >
                            {/* Staff Coordinator */}
                            <div>
                                <h4
                                    className="font-cinzel"
                                    style={{
                                        fontSize: 'clamp(0.88rem, 1.6vw, 1rem)',
                                        fontWeight: 600,
                                        color: '#FFD700',
                                        margin: '0 0 14px',
                                        letterSpacing: '0.04em',
                                    }}
                                >
                                    🎓 Staff Coordinator
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {(Array.isArray(event.staffCoordinator) ? event.staffCoordinator : [event.staffCoordinator]).map((staff, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                padding: '20px',
                                                borderRadius: '18px',
                                                backgroundColor: 'rgba(255, 215, 0, 0.04)',
                                                border: '1px solid rgba(255, 215, 0, 0.12)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '10px',
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                <div
                                                    style={{
                                                        width: '48px',
                                                        height: '48px',
                                                        borderRadius: '50%',
                                                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.05))',
                                                        border: '1px solid rgba(255, 215, 0, 0.25)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '1.2rem',
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    🎓
                                                </div>
                                                <div>
                                                    <div
                                                        className="font-inter"
                                                        style={{
                                                            fontSize: '0.95rem',
                                                            fontWeight: 600,
                                                            color: '#FFED8A',
                                                            lineHeight: 1.3,
                                                        }}
                                                    >
                                                        {staff.name}
                                                    </div>
                                                    <div
                                                        className="font-inter"
                                                        style={{
                                                            fontSize: '0.78rem',
                                                            color: 'rgba(240, 230, 200, 0.5)',
                                                            marginTop: '2px',
                                                        }}
                                                    >
                                                        {staff.designation}
                                                    </div>
                                                </div>
                                            </div>
                                            {staff.phone && (
                                                <div
                                                    className="font-inter"
                                                    style={{
                                                        fontSize: '0.8rem',
                                                        color: 'rgba(240, 230, 200, 0.55)',
                                                        paddingLeft: '60px',
                                                    }}
                                                >
                                                    📱 {staff.phone}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Student Coordinators */}
                            <div>
                                <h4
                                    className="font-cinzel"
                                    style={{
                                        fontSize: 'clamp(0.88rem, 1.6vw, 1rem)',
                                        fontWeight: 600,
                                        color: '#FFD700',
                                        margin: '0 0 14px',
                                        letterSpacing: '0.04em',
                                    }}
                                >
                                    📞 Student Coordinators
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {event.studentCoordinators.map((coord, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                padding: '14px 18px',
                                                borderRadius: '16px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                                                border: '1px solid rgba(255, 215, 0, 0.06)',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(167, 139, 250, 0.1))',
                                                    border: '1px solid rgba(0, 212, 255, 0.2)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1rem',
                                                    flexShrink: 0,
                                                }}
                                            >
                                                👤
                                            </div>
                                            <div>
                                                <div
                                                    className="font-inter"
                                                    style={{
                                                        fontSize: '0.88rem',
                                                        fontWeight: 600,
                                                        color: '#FFED8A',
                                                        marginBottom: '2px',
                                                    }}
                                                >
                                                    {coord.name}
                                                </div>
                                                {coord.phone && (
                                                    <div
                                                        className="font-inter"
                                                        style={{
                                                            fontSize: '0.78rem',
                                                            color: 'rgba(240, 230, 200, 0.5)',
                                                        }}
                                                    >
                                                        📱 {coord.phone}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ paddingBottom: '40px' }} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ── Section Block ─────────────────────────────────── */
function SectionBlock({ title, children }) {
    return (
        <div style={{ marginBottom: '32px' }}>
            <h4
                className="font-cinzel"
                style={{
                    fontSize: 'clamp(0.88rem, 1.6vw, 1rem)',
                    fontWeight: 600,
                    color: '#FFD700',
                    margin: '0 0 14px',
                    letterSpacing: '0.04em',
                }}
            >
                {title}
            </h4>
            {children}
        </div>
    );
}
