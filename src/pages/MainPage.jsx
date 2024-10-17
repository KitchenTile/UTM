import './MainPage.css';

import Header from '../components/main-page/header/Header';
import Hero from '../components/main-page/hero/Hero';
import OurServices from '../components/main-page/ourservices/OurServices';
import MoreOnUs from '@/components/main-page/moreonus/Moreonus';
import FindSchools from '@/components/main-page/findschools/Findschools';
import Testimonial from '@/components/main-page/testimonial/Testimonial';
import Techadventure from '@/components/main-page/techadventure/Techadventure';
import Carousel from '../components/main-page/carousel/Carousel';
import Form from '@/components/main-page/form/Form';
import Footer from '../components/main-page/footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <OurServices />
      <MoreOnUs />
      <FindSchools />
      <Testimonial />
      <Techadventure />
      <Carousel />
      <Form />
      <Footer />
    </>
  );
};

export default MainPage;
