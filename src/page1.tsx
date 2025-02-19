import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Page1() {
  return (
    <div className="page">
      {/* Animated Welcome Message */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="welcome-text"
      >
        Welcome, Dinah! 💖
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 2, delay: 0.5 }}
        className="subtitle"
      >
        This is a special space, just for you. Hope you feel at home! 🌸
      </motion.p>

      {/* Animated Next Button */}
      <motion.div 
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="buttons"
      >
        <Link to="/page2">
          <button className="next-button">Next →</button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Page1;