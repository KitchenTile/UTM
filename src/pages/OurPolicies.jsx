import Form from '@/components/main-page/form/Form';
import Camphero from '@/components/tech-camp-page/hero/Camphero';

import OrangeBlob from '../../src/assets/campHero/OrangeBlob2.svg';
import PolicesLogo from "../../src/assets/policies/PoliciesLogo.svg"
import GreenBlob from "../../src/assets/FAQ/GreenBlob.svg"







const OurPoliciesPage = () => {
  return (
    <>
      <Camphero page="FAQhero" leftBlob={GreenBlob} rightBlob={OrangeBlob} logo={PolicesLogo} text="Please find our policies outlining our strong commitments to ensure a secure experience for everyone."/>

      <Form />
    </>
  );
};

export default OurPoliciesPage;