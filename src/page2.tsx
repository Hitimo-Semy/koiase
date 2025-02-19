import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

function Page2() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <motion.div 
      className="page"
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 1 }}
    >
      {/* Quote */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
        className="quote"
      >
        When you smile, the whole world stops and stares for a while...
      </motion.h2>

      {/* Hidden Message Reveal */}
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        className="reveal-button"
        onClick={() => setShowMessage(true)}
      >
        Reveal More ✨
      </motion.button>

      {showMessage && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="hidden-message"
        >
          I know it too well because everything around me stopped just to capture it
        </motion.p>
      )}

      {/* Navigation Buttons */}
      <div className="buttons">
        <Link to="/"><button>← Back</button></Link>
        <Link to="/page3"><button>Next →</button></Link>
      </div>
    </motion.div>
  );
}

export default Page2;