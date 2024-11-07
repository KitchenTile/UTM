import Hero from '../components/main-page/hero/Hero';
import OurServices from '../components/main-page/ourservices/OurServices';
import MoreOnUs from '@/components/main-page/moreonus/Moreonus';
import FindSchools from '@/components/main-page/findschools/Findschools';
import Testimonial from '@/components/main-page/testimonial/Testimonial';
import Techadventure from '@/components/main-page/techadventure/Techadventure';
import Carousel from '../components/main-page/carousel/Carousel';
import Form from '@/components/main-page/form/Form';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const MainPage = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = location.hash.replace("#", "");
      if (targetElement) {
        document.getElementById(targetElement).scrollIntoView();
      }
    }
  }, [location]);
  
  return (
    <>
      <Hero />
      <OurServices />
      <MoreOnUs />
      <FindSchools />
      <Testimonial />
      <Carousel />
      <Techadventure />
      <Form />
    </>
  );
};

export default MainPage;