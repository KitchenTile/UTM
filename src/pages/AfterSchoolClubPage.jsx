import FindSchools from '@/components/main-page/findschools/Findschools';
import Testimonial from '@/components/main-page/testimonial/Testimonial';
import Techadventure from '@/components/main-page/techadventure/Techadventure';
import Carousel from '@/components/main-page/carousel/Carousel';
import Form from '@/components/main-page/form/Form';
import Camphero from '@/components/tech-camp-page/hero/Camphero';
import WhatWeHostDiv from '@/components/tech-camp-page/whatwehost/WhatWeHostDiv';
import SchoolCards from '@/components/tech-camp-page/cards/TechCampCards';
import AfterSchoolLogo from '../../src/assets/campHero/AfterSchoolLogo.svg';
import YellowBlob from '../../src/assets/campHero/YellowBlob.svg';
import RightBlueBlob from '../../src/assets/campHero/RightBlueBlob.svg';

const AfterSchoolClubPage = () => {
  return (
    <>
      <Camphero page="ASChero" leftBlob={YellowBlob} rightBlob={RightBlueBlob} logo={AfterSchoolLogo} button= "Book An After School Club!" text="Our After School Care provides a fun, safe, and engaging environment where children can relax and explore new interests after a busy day at school. Running from 3 p.m. to 6 p.m., this programme offers a wide range of activities tailored to children’s interests and needs, from homework help to creative arts and physical activities."/>
      <WhatWeHostDiv title="What we host in After School Club" text="Whether your child need support with their homework or prefer to explore their creative side through arts and crafts, children have the freedom to choose from various activities. Our programme also includes coding workshops, team sports, and other enriching options to ensure a balanced experience. We offer flexible payment options, including weekly discounts and tax-free childcare vouchers, to make it convenient for families. The After School Care programme is designed to help children unwind, learn, and play in a supportive setting, all while giving parents peace of mind."/>
      <SchoolCards />
      <FindSchools />
      <Testimonial />
      <Carousel />
      <Techadventure />
      <Form />
    </>
  );
};

export default AfterSchoolClubPage;