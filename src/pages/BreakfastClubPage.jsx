import FindSchools from '@/components/main-page/findschools/Findschools';
import Testimonial from '@/components/main-page/testimonial/Testimonial';
import Techadventure from '@/components/main-page/techadventure/Techadventure';
import Carousel from '@/components/main-page/carousel/Carousel';
import Form from '@/components/main-page/form/Form';
import Camphero from '@/components/tech-camp-page/hero/Camphero';
import WhatWeHostDiv from '@/components/tech-camp-page/whatwehost/WhatWeHostDiv';
import SchoolCards from '@/components/tech-camp-page/cards/TechCampCards';
import BreakfastClubLogo from '../../src/assets/campHero/BreakfastClubLogo.svg';
import YellowBlob from '../../src/assets/campHero/YellowBlob.svg';
import GreenBlob from '../../src/assets/campHero/GreenBlob.svg';

const BreakfastClubPage = () => {
  return (
    <>
      <Camphero page="ASChero" leftBlob={YellowBlob} rightBlob={GreenBlob} logo={BreakfastClubLogo} button= "Book A Breakfast Club!" text="Our Breakfast Club offers a structured and supportive start to the day, providing children with a nutritious breakfast and engaging activities. Running before the school day starts, our club ensures children are well-fed and ready to learn. We focus on creating a calm and friendly environment, with activities such as reading, puzzles, board games, and group discussions to ease children into the day."/>
      <WhatWeHostDiv title="What we host in Breakfast Club" text="This club is perfect for parents needing early drop-off options, ensuring their children start the day with a positive routine. Our healthy breakfast menu fuels young minds, while the variety of activities helps children socialise and prepare mentally for their school day. The Breakfast Club helps create a smooth transition from home to school, instilling positive habits in a caring environment."/>
      <SchoolCards />
      <FindSchools />
      <Testimonial />
      <Carousel />
      <Techadventure />
      <Form />
    </>
  );
};

export default BreakfastClubPage;