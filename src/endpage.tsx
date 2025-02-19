import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function EndPage() {
  return (
    <motion.div 
      className="page fade-in"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      {/* Poem Section */}
      <motion.p 
        className="poem-text"
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        "In your presence, time stands still,  
        <br /> A gentle breeze, a moonlit thrill.  
        <br /> Eyes that whisper, soft and bright,  
        <br /> A guiding star in endless night."  
      </motion.p>

      {/* Reset Button */}
      <div className="buttons">
        <Link to="/"><button>↺ Restart</button></Link>
      </div>
    </motion.div>
  );
}

export default EndPage;
