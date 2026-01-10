import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Bunkie from './pages/Bunkie';
import GlampSite from './pages/GlampSite';
import KidsCamp from './pages/KidsCamp';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  // Match vite.config.js - no basename in development
  const basename = import.meta.env.PROD ? '/KinderworldCA' : '';

  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/bunkie" element={<Bunkie />} />
          <Route path="/glamp-site" element={<GlampSite />} />
          <Route path="/kids-camp" element={<KidsCamp />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;