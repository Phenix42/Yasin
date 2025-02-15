import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import Awards from './components/Awards';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Works />
      <Awards />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;