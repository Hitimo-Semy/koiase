import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Page3() {
  return (
    <motion.div 
      className="page fade-in"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      {/* Playful Text */}
      <motion.p 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="cheesy-text"
      >
        I know that was cheesy, I stole it from Bruno Mars lol
      </motion.p>

      {/* Heartfelt Message */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        className="heartfelt-text"
      >
        I really mean it though
      </motion.p>

      {/* Navigation Buttons */}
      <div className="buttons">
        <Link to="/page2"><button>← Back</button></Link>
        <Link to="/page4"><button>Next →</button></Link>
      </div>
    </motion.div>
  );
}

export default Page3;
