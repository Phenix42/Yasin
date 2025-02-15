import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const socialLinks = [
    {
      icon: "src/images/figma.jpeg",
      href: "figma.com/yasin",
      alt: "Figma"
    },
    {
      icon: "src/images/linkden.png",
      href: "https://www.linkedin.com/in/shaik-yasin-mohiddin-3093ab27a/",
      alt: "LinkedIn"
    },
    {
      icon: "src/images/gmail.png",
      href: "yasinmohiddin@gmail.com",
      alt: "Email"
    }
  ];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:yasinmohiddin@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };
  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            HAVE SOMETHING TO DISCUSS?
          </motion.h2>
          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md mb-8"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                className="w-1/2 p-3 border rounded-lg" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                className="w-1/2 p-3 border rounded-lg" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              className="w-full p-3 mt-4 border rounded-lg h-32"
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 mt-4"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={link.href}
                className="text-gray-600 hover:text-black"
              >
                <img src={link.icon} alt={link.alt} className="h-8" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="figma.com/yasin"
              className="block text-gray-600 hover:text-black"
            >
              figma.com/yasin
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.linkedin.com/in/shaik-yasin-mohiddin-3093ab27a/"
              className="block text-gray-600 hover:text-black"
            >
             https://www.linkedin.com/in/shaik-yasin-mohiddin-3093ab27a/
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:yasinmohiddin@gmail.com"
              className="block text-gray-600 hover:text-black"
            >
              yasinmohiddin@gmail.com
            </motion.a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1w5OLi5uPTxEuFZVSvTWzgdO7P1XpRnM8/view?usp=sharing"
            className="mt-12 inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;