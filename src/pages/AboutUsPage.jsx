import AboutUsHero from "../components/about-us-page/AboutUsHero"
import EducationPartners from "../components/about-us-page/EducationPartners";
import InstructorsComponent from "../components/about-us-page/Instructors";
import OurMission from "../components/about-us-page/OurMission";
import Form from "../components/main-page/form/Form"

const AboutUsPage = () => {
    return (
        <>
            <AboutUsHero />
            <EducationPartners />
            <OurMission />
            <InstructorsComponent />
            <Form />
        </>
    )
}

export default AboutUsPage;