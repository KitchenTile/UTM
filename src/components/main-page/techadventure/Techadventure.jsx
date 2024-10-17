import techAdv from "../../../assets/techAdventure/techAdventure.svg";
import "./Techadventure.css";

const Techadventure = () => {
    return (
        <div className="techAdventureContainer">
            <div className="imgContainer">
                <img src={techAdv} alt="techadventure" id="techAdveture" />
            </div>
            <div className="textContainer">
                <h1>Let's have a tech adventure!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at ac tempus enim.</p>
                <button>Book a Camp</button>
            </div>
        </div>
    )    
}

export default Techadventure;