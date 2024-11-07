import MissionImage from "../../assets/aboutUs/missionImg.svg";
import "./OurMission.css"

const OurMission = () => {
    return (
        <div className="missionContainer">
            <div className="imageTextContainer">
                <img src={MissionImage} id="missionImg" />
                <div className="textContainer" id="ourMission">
                    <h1>Our Mission</h1>
                    <p>Our mission is to provide engaging, accessible, and innovative education that prepares students for the future, empowering them with the tools to succeed in a digital world. We believe every child deserves the opportunity to explore their creativity and develop critical thinking skills.</p>
                </div>
            </div>
        </div>
    )
}

export default OurMission;