import FindSchools from '@/components/main-page/findschools/Findschools';
import Testimonial from '@/components/main-page/testimonial/Testimonial';
import Techadventure from '@/components/main-page/techadventure/Techadventure';
import Carousel from '@/components/main-page/carousel/Carousel';
import Form from '@/components/main-page/form/Form';
import Camphero from '@/components/tech-camp-page/hero/Camphero';
import WhatWeHostDiv from '@/components/tech-camp-page/whatwehost/WhatWeHostDiv';
import SchoolCards from '@/components/tech-camp-page/cards/TechCampCards';
import OrangeBlob2 from '../../src/assets/campHero/OrangeBlob2.svg';
import BlueBlob from '../../src/assets/campHero/BlueBlob.svg';
import techCampLogo from '../../src/assets/campHero/techCampLogo.svg'




const TechCampPage = () => {
  return (
    <>
      <Camphero page="TChero" leftBlob={BlueBlob} rightBlob={OrangeBlob2} logo={techCampLogo} button= "Book a Tech Camp!" text="At U Teach Mi, our Tech Camps have garnered rave reviews from students and parents alike. Join our Tech Camps to witness the positive impact on your child's learning journey!"/>
      <WhatWeHostDiv title="What we host in Tech Camp" text="Our Tech Camp, running during Summer, Easter, and Christmas holidays, is a vibrant, hands-on experience for children who want to dive deeper into the world of technology. It’s perfect for children looking to challenge themselves in game creation, robotics, 3D design, music production, and more. Each day offers a blend of advanced tech education and exciting physical activities, making it both engaging and fun."/>
      <SchoolCards />
      <FindSchools />
      <Testimonial />
      <Carousel />
      <Techadventure />
      <Form />
    </>
  );
};

export default TechCampPage;