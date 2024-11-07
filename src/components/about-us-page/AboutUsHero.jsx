import heroImg from "../../assets/aboutUs/heroImg.svg"
import BlueBlob from "../../assets/aboutUs/BlueBlob.svg"
import TextImage from "../../assets/aboutUs/TextImage.svg"
import "./AboutUsHero.css";


const AboutUsHero = () => {
    return (
        <div className="heroContainer" id="aboutUs">
            <img src={heroImg} alt="heroImg" id="heroImg" />
            <img src={BlueBlob} id="blob"/>
            <div className="textContainer" id="aboutUs">
                <h1 className="title">We Are Empowering Our Next Generations</h1>
                <div className="textImageContainer">
                    <p>In UteachMi, our aim is to make tech education accessible to all, as every child should have the opportunity to develop invaluable STEM skills. We believe that by offering inclusive and accessible learning experiences through our tech camps, we can empower children to unlock their full potential and prepare them for the ever-changing digital world.</p>
                    <img src={TextImage} id="textImage" />
                </div>
            </div>
        </div>
    )
}

export default AboutUsHero;