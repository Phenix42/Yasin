import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import worksAnimation from '../animations/works.json';

const works = [
  {
    title: 'BRAND ELEVATE',
    image: 'src/images/Brandelviate.jpeg', // Update the correct path
    description: 'Design systems from scratch\nDesign systems building on existing',
    link: 'https://www.brandelevate.co.in/'
  },
  {
    title: 'MANGAL GAOWRI',
    image: 'src/images/MG.jpeg', // Update the correct path
    description: 'Web App Design\nDesign System',
    link: 'https://www.mangalagowri.com/'
  },
  {
    title: 'T STUDIOS',
    image: 'src/images/Tstudios.jpeg', // Update the correct path
    description: 'Mobile App Design\nUX / Interaction Design\nPrototyping',
    link: 'https://ggstudios.in'
  },
  {
    title: 'VIE ASTAHETICS',
    image: 'src/images/Vasthatic.jpeg', // Update the correct path
    description: 'Responsive Website Design\nAdaptive Web App Design\nFront End Development',
    link: 'https://www.vieaesthetics.in/'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Works = () => {
  return (
    <section id="works" className="section light-gradient py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
      
         <h3 className="text-4xl font-bold text-center text-gray-900">WORKS</h3> 

        {/* Animation */}
        <motion.div 
        
          className="mb-20"
        >
          <div className="w-full max-w-2xl mx-auto">
          </div>
        </motion.div>

        {/* Work Items */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16"
        >
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img src={work.image} alt={work.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                  <p className="text-lg whitespace-pre-line mb-6">{work.description}</p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={work.link}
                    className="inline-block px-8 py-3 border-2 border-white rounded-full"
                  >
                    EXPLORE
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
