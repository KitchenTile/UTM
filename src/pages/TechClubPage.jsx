import FindSchools from '@/components/main-page/findschools/Findschools';
import Testimonial from '@/components/main-page/testimonial/Testimonial';
import Techadventure from '@/components/main-page/techadventure/Techadventure';
import Carousel from '@/components/main-page/carousel/Carousel';
import Form from '@/components/main-page/form/Form';
import Camphero from '@/components/tech-camp-page/hero/Camphero';
import WhatWeHostDiv from '@/components/tech-camp-page/whatwehost/WhatWeHostDiv';
import SchoolCards from '@/components/tech-camp-page/cards/TechCampCards';
import TechClubLogo from '../../src/assets/campHero/TechClubLogo.svg';
import YellowBlob from '../../src/assets/campHero/YellowBlob.svg';
import RightBlueBlob from '../../src/assets/campHero/RightBlueBlob.svg';







const TechClubPage = () => {
  return (
    <>
      <Camphero page="TChero" leftBlob={YellowBlob} rightBlob={RightBlueBlob} logo={TechClubLogo} button= "Book a Tech Club!" text="At U Teach Mi, our Tech Club not only equips students with digital skills but also builds their confidence in using technology. Whether beginners or tech-savvy, our club is open to all abilities and focuses on fostering innovative thinking, collaboration, and curiosity."/>
      <WhatWeHostDiv title="What we host in Tech Club" text="Our Tech Club is designed to ignite a passion for technology and digital creation among young learners. Ideal for Key Stage 1 and Key Stage 2 students, we cover a wide range of topics that introduce children to the fundamentals of modern technology. From coding and robotics to 3D modelling, VR game creation, and music technology, our club provides hands-on experiences that encourage creativity and problem-solving."/>
      <SchoolCards />
      <FindSchools />
      <Testimonial />
      <Carousel />
      <Techadventure />
      <Form />
    </>
  );
};

export default TechClubPage;