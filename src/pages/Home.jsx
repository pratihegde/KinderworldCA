import React from 'react';
import Hero from '../components/home/Hero';
import Accommodations from '../components/home/Accommodations';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ActivitiesPreview from '../components/home/ActivitiesPreview';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Accommodations />
      <ActivitiesPreview />
      <GalleryPreview />
      <WhyChooseUs />
      <Testimonials />

    </>
  );
};

export default Home;