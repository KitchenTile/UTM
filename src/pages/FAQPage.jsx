
import Form from '@/components/main-page/form/Form';
import Camphero from '@/components/tech-camp-page/hero/Camphero';
import FAQ from '../components/faq-page/faq'
import OrangeBlob from '../../src/assets/campHero/OrangeBlob2.svg';
import FAQLogo from "../../src/assets/FAQ/FAQLogo.svg"
import GreenBlob from "../../src/assets/FAQ/GreenBlob.svg"







const FAQpage = () => {
  return (
    <>
      <Camphero page="FAQhero" leftBlob={GreenBlob} rightBlob={OrangeBlob} logo={FAQLogo} text="Find the resolutions to your queries. Still stuck? Feel free to send us a message so our team can work hard to help you!"/>
      <FAQ />
      <Form />
    </>
  );
};

export default FAQpage;