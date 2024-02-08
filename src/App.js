import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './global.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          <Nav />
          <Home />
          <About />
          <Contact />
        </AnimatedSection>
    </Router>
  );
}

export default App;
