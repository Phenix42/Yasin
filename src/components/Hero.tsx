import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import muniAnimation from '../animations/muni.json';

const Hero = () => {
  return (
    <div 
    className="section dark-gradient min-h-screen flex items-center justify-center bg-contain bg-center bg-no-repeat bg-fixed" 
    style={{ backgroundImage: "url('src/images/Coverpic.jpeg')" }}
  >
    
      <img
        src="src/images/Mohdp.jpeg"
        alt="Mobile Cover"
        className="w-full h-full object-cover sm:hidden absolute top-0 left-0"
      />
   <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div 
          className="title-animation bg-black/50 p-4 rounded-lg sm:bg-transparent"
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Hi, I am Yasin, UX/UI Designer
          </h1>
          <motion.p className="text-lg sm:text-2xl text-gray-300">
            I create seamless and beautiful user experiences.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;