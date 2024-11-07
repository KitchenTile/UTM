import { Link } from "react-router-dom";
import "./EducationPartners.css"

const EducationPartners = () => {

    const items = [
        { n: 59, title: "Camps/Clubs", text: "Camps and Clubs run seasonally matching your child's routine" },
        { n: 360, title: "Students", text: "Transferred their learning to a fun time" },
        { n: 38, title: "Current School", text: "Various locations for various choices" }
    ]

    return (
        <>
            <div className="EPContainer">
                <h1 className="title">Your Trustful Education Partner</h1>
                <div className="statistics">
                    {items.map((item, index) => (
                        <div className="infoContainer" id={index}>
                            <h1>{item.n}</h1>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <Link to={"/#services"}>
                        <button
                            id="EP">
                                Book A Club!
                        </button>
                    </Link>
                    <Link to={"/#findSchools"}>
                        <button
                            id="EP">
                                Find A School Near You
                        </button>
                    </Link>    
                </div>
            </div>
        </>
    )
}

export default EducationPartners;