import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagicParticles from '../components/MagicParticles';
import HeroSection from '../components/HeroSection';
import MouseSparkle from '../components/MouseSparkle';
import LocationCard from '../components/LocationCard';

export default function Home() {
    const [heroDone, setHeroDone] = useState(false);
    return (
        <div
            style={{
                position: 'relative',
                minHeight: '100dvh',
                backgroundColor: '#0b0b14',
                overflowX: 'hidden',
                paddingTop: '120px',
            }}
        >
            {/* Magical particle background */}
            <MagicParticles />

            {/* Mouse sparkle trail */}
            <MouseSparkle />

            {/* Hero section */}
            <HeroSection onRevealDoneCallback={() => setHeroDone(true)} />

            {/* Location Section */}
            <AnimatePresence>
                {heroDone && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{
                            position: 'relative',
                            zIndex: 10,
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '40px clamp(16px, 5vw, 48px) 80px',
                        }}
                    >
                        <LocationCard />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
