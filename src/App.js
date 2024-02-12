import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './global.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Services from './components/Services';
import Products from './components/Products';
import ScrollToTopButton from './components/Scrollbtn';
import Solutions from './components/Solutions';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="section"
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <AnimatedSection>
        <div className="w-full h-auto font-sans">
          <div className='max-w-screen-2xl overflow-hidden'>
            <Nav />
            <Home />
            <About />
            <Services />
            <Products />
            <Solutions />
            <Contact />
            <ScrollToTopButton />
          </div>
        </div>
      </AnimatedSection>
    </Router>
  );
}

export default App;
