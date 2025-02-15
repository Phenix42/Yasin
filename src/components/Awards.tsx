import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import awardsAnimation from '../animations/awards.json';

const awards = [
  {
    category: 'UX/UI Assesment',
    image: 'src/images/cert1.jpeg'
  },
  {
    category: 'HOME/LANDING PAGE',
    image: 'src/images/cert2.png'
  },
  {
    category: 'BUSINESS 2 BUSINESS',
    image: 'https://cdn.prod.website-files.com/5cbf48388fef4f7ec9682cd8/6047fdf1f6a63a6364fcca72_ezgif.com-gif-maker.gif'
  }
];

const Awards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="awards" className="section dark-gradient py-20">
      <div className="container mx-auto px-6">
      <h3 className="text-4xl font-bold text-center text-white">CERTIFICATION</h3> 

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="w-full max-w-2xl mx-auto">
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="award-gif mx-auto mb-6"
              >
                <img 
                  src={award.image} 
                  alt={award.category} 
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
              <div className="text-white">
                <div className="text-sm font-semibold mb-2">FOR COMPLETING</div>
                <div className="text-xl font-bold">{award.category}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;