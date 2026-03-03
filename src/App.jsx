import './App.css'
import { motion } from 'framer-motion'

function App() {
  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  }

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo-text">EMICA-26</span>
        </div>
        <div className="nav-right">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#coordinators">Coordinators</a>
          <a href="#about">About</a>
          <a href="#creators">Creators</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Logo Section - Animated Pop Effect */}
        <motion.div
          className="logo-section"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="logo-badge">
            <div className="logo-top-text">...BATTLE IS ON...</div>
            <div className="logo-horse">🐴</div>
            <div className="logo-main-text">EMICA-26</div>
            <div className="logo-flames">🔥</div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="subtitle"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Common to All Departments
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="button-container"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="btn btn-primary"
            variants={buttonVariants}
            whileHover="hover"
          >
            Explore Event
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            variants={buttonVariants}
            whileHover="hover"
          >
            Register Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default App
