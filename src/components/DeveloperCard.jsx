import { motion } from 'framer-motion';

/* ── Inline SVG icons ─────────────────────────────── */
function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function PortfolioIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}

function SocialButton({ href, children, hoverColor }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 42,
                height: 42,
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 215, 0, 0.08)',
                border: '1px solid rgba(255, 215, 0, 0.2)',
                color: 'rgba(255, 237, 138, 0.8)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.15)';
                e.currentTarget.style.borderColor = hoverColor;
                e.currentTarget.style.color = hoverColor;
                e.currentTarget.style.boxShadow = `0 0 18px ${hoverColor}55`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.2)';
                e.currentTarget.style.color = 'rgba(255, 237, 138, 0.8)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            {children}
        </motion.a>
    );
}

export default function DeveloperCard({ name, role, department, image, instagramLink, linkedinLink, portfolioLink, imagePosition = 'center' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(255, 215, 0, 0.15), 0 0 40px rgba(255, 215, 0, 0.08)' }}
            style={{
                position: 'relative',
                width: '280px',
                padding: '36px 28px 28px',
                borderRadius: '20px',
                backgroundColor: 'rgba(20, 18, 35, 0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 215, 0, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 215, 0, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                overflow: 'hidden',
            }}
        >
            {/* Decorative corner glow */}
            <div
                style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Profile Image */}
            <div
                style={{
                    width: 110,
                    height: 110,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2.5px solid rgba(255, 215, 0, 0.35)',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.4)',
                }}
            >
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: imagePosition,
                    }}
                />
            </div>

            {/* Name */}
            <h3
                className="font-cinzel"
                style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFED8A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    margin: 0,
                    letterSpacing: '0.06em',
                }}
            >
                {name}
            </h3>

            {/* Role */}
            <span
                className="font-inter"
                style={{
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    color: '#0b0b14',
                    backgroundColor: 'rgba(255, 215, 0, 0.85)',
                    padding: '3px 14px',
                    borderRadius: '20px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: '-8px',
                }}
            >
                {role}
            </span>

            {/* Department */}
            <p
                className="font-inter"
                style={{
                    fontSize: '0.8rem',
                    color: 'rgba(240, 230, 200, 0.6)',
                    margin: 0,
                    letterSpacing: '0.06em',
                }}
            >
                Department of {department}
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '4px' }}>
                <SocialButton href={instagramLink} hoverColor="#E1306C">
                    <InstagramIcon />
                </SocialButton>
                <SocialButton href={linkedinLink} hoverColor="#0A66C2">
                    <LinkedInIcon />
                </SocialButton>
                {portfolioLink && (
                    <SocialButton href={portfolioLink} hoverColor="#FFD700">
                        <PortfolioIcon />
                    </SocialButton>
                )}
            </div>
        </motion.div>
    );
}
