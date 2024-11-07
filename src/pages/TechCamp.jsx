import './MainPage.css';

import Header from '../components/main-page/header/Header';
import Hero from '../components/tech-camp-page/hero/Camphero';
import WhatWeHost from '../components/tech-camp-page/whatwehost/WhatWeHostDiv';
import Cards from '../components/tech-camp-page/cards/TechCampCards';
import FindSchools from '@/components/main-page/findschools/Findschools';
import Testimonial from '@/components/main-page/testimonial/Testimonial';
import Carousel from '../components/main-page/carousel/Carousel';
import Form from '@/components/main-page/form/Form';
import Footer from '../components/main-page/footer/Footer';


const TechCamp = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhatWeHost />
      <Cards />
      <FindSchools />
      <Carousel />
      <Testimonial />
      <Form />
      <Footer />
    </>
  );
};

export default TechCamp;