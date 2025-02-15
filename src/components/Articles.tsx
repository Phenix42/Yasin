import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import articlesAnimation from '../animations/articles.json';

const articles = [
  {
    title: 'Myossem',
    image: 'article1',
    description: 'Empower your educational organizations with our management services like EMS or ERP systems.',
    link: 'https://www.myossem.com/'
  },
  {
    title: 'Lawyerpatrika',
    image: 'article2',
    description: 'NO.1 TELUGU WEEKLY OF NELLORIANS',
    link: 'https://www.lawyerpatrika.com/'
  }
];

const Articles = () => {
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
    <section id="articles" className="section light-gradient py-20">
      <div className="container mx-auto px-6">
      <h3 className="text-4xl font-bold text-center text-gray-900">Projects</h3> 
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
          className="grid md:grid-cols-2 gap-16"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`tile-img ${article.image} rounded-2xl overflow-hidden`}>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <div className="text-white text-center p-8">
                    <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
                    <p className="text-lg mb-6">{article.description}</p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={article.link}
                      className="inline-block px-8 py-3 border-2 border-white rounded-full"
                    >
                      READ MORE
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;