import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import MusicToggle from './components/MusicToggle';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedMenu from './sections/FeaturedMenu';
import Workspace from './sections/Workspace';
import Reservation from './sections/Reservation';
import Reviews from './sections/Reviews';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-cafe-black min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <FeaturedMenu />
            <Workspace />
            <Reservation />
            <Reviews />
            <Gallery />
            <Contact />
          </main>
          <Footer />
          <MusicToggle />
        </div>
      )}
    </>
  );
}

export default App;
