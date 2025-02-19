import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Page4() {
  return (
    <motion.div 
      className="page fade-in"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      {/* Image of Roses */}
      <motion.img 
        src="https://static.vecteezy.com/system/resources/previews/017/339/857/original/bunch-of-cute-romantic-valentine-red-roses-flowers-bouquet-cartoon-doodle-png.png" 
        alt="Bouquet of red roses" 
        className="roses-image"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {/* Sweet Message */}
      <motion.p 
        className="roses-text"
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Here's more roses just for you
      </motion.p>

      {/* Additional Compliment */}
      <motion.p 
        className="compliment-text"
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.9 }}
      >
       Your eyes so captivating it can even calm a storm
      </motion.p>

      {/* Navigation Buttons */}
      <div className="buttons">
        <Link to="/page3"><button>← Back</button></Link>
        <Link to="/end"><button>Next →</button></Link>
      </div>
    </motion.div>
  );
}

export default Page4;
