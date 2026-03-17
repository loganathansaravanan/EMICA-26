import { Link, useLocation } from 'react-router-dom';
import emicaLogo from '../assets/emica_name_logo.png';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/devs', label: 'Devs' },
    { to: '/about', label: 'About' },
];

export default function Navbar() {
    const { pathname } = useLocation();

    return (
        <nav
            style={{
                position: 'fixed',
                top: 12,
                left: 'clamp(12px, 3vw, 32px)',
                right: 'clamp(12px, 3vw, 32px)',
                zIndex: 1000,
                borderRadius: '18px',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(11, 11, 20, 0.72)',
                border: '1px solid rgba(255, 215, 0, 0.12)',
                boxShadow:
                    '0 8px 32px rgba(0, 0, 0, 0.5), 0 1px 18px rgba(255, 215, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
                overflow: 'hidden',
            }}
        >
            {/* ── Row 1: National Level Symposium title ── */}
            <div
                style={{
                    textAlign: 'center',
                    padding: '10px 20px 4px',
                }}
            >
                <p
                    className="font-cinzel"
                    style={{
                        fontSize: 'clamp(0.8rem, 2.2vw, 1.05rem)',
                        color: '#FFED8A',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        textShadow: '0 0 14px rgba(255, 215, 0, 0.25)',
                        margin: 0,
                        fontWeight: 600,
                    }}
                >
                    Tamilnadu College of Engineering
                </p>
            </div>

            {/* ── Row 2: College name ── */}
            <div
                style={{
                    textAlign: 'center',
                    padding: '2px 20px 8px',
                    borderBottom: '1px solid rgba(255, 215, 0, 0.08)',
                }}
            >
                <p
                    className="font-inter"
                    style={{
                        fontSize: 'clamp(0.52rem, 1.1vw, 0.65rem)',
                        color: 'rgba(255, 237, 138, 0.45)',
                        letterSpacing: '0.14em',
                        margin: 0,
                        fontWeight: 300,
                    }}
                >
                    Karumathampatti, Coimbatore
                </p>
            </div>

            {/* ── Row 3: Logo + Nav links ── */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px clamp(16px, 3vw, 28px)',
                }}
            >
                {/* Logo + Title */}
                <Link
                    to="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        textDecoration: 'none',
                    }}
                >
                    <img
                        src={emicaLogo}
                        alt="EMICA Logo"
                        style={{
                            width: 'clamp(26px, 4.5vw, 34px)',
                            height: 'clamp(26px, 4.5vw, 34px)',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))',
                        }}
                    />
                    <span
                        className="font-cinzel hidden sm:block"
                        style={{
                            fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #FFD700 0%, #FFED8A 50%, #FFD700 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '0.1em',
                        }}
                    >
                        EMICA&apos;26
                    </span>
                </Link>

                {/* Nav Buttons */}
                <div style={{ display: 'flex', gap: 'clamp(10px, 2.5vw, 24px)', alignItems: 'center' }}>
                    {NAV_LINKS.map(({ to, label }) => {
                        const isActive = pathname === to;
                        return (
                            <Link
                                key={to}
                                to={to}
                                style={{
                                    position: 'relative',
                                    textDecoration: 'none',
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: 'clamp(0.68rem, 1.4vw, 0.82rem)',
                                    fontWeight: isActive ? 600 : 400,
                                    color: isActive ? '#FFD700' : 'rgba(240, 230, 200, 0.65)',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    padding: '6px 2px',
                                    transition: 'color 0.3s ease, text-shadow 0.3s ease',
                                    textShadow: isActive ? '0 0 14px rgba(255, 215, 0, 0.5)' : 'none',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = '#FFD700';
                                        e.currentTarget.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.35)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = 'rgba(240, 230, 200, 0.65)';
                                        e.currentTarget.style.textShadow = 'none';
                                    }
                                }}
                            >
                                {label}
                                {/* Active indicator dot */}
                                {isActive && (
                                    <span
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: 4,
                                            height: 4,
                                            borderRadius: '50%',
                                            backgroundColor: '#FFD700',
                                            boxShadow: '0 0 8px #FFD700',
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
