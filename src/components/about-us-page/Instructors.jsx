import "./Instructors.css"
import James from "../../assets/aboutUs/James.svg"
import { Link } from "react-router-dom"

const InstructorsComponent = () => {

    const instructors = [
        { name: "James Morgan", title: "Tech Camp Instructor", image: James},
        { name: "Jo", title: "Breakfast club", image: James},
        { name: "Adetola", title: "Tech Camp Instructor", image: James},
        { name: "Nicoletta Scurtu", title: "Tech Camp Instructor", image: James},
        { name: "Azul Debenedetti", title: "Tech Camp Instructor", image: James},
        { name: "Joel", title: "Tech Camp Instructor", image: James},
    ]

    return (
        <>
            <div className="instructorsContainer">
                <h1 className="title">Meet Our Instructors</h1>
                <p className="subtitle">Our diverse and welcoming Camp and Club team of instructors dedicated to transform tech learning.</p>
                <div className="instructorsGrid">
                    {instructors.map((instructor, index) => (
                        <div className="instructorContainer" id={index}>
                            <img src={instructor.image} alt="img" />
                            <h1>{instructor.name}</h1>
                            <p>{instructor.title}</p>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <Link to={"/#services"} >
                        <button>Book A Club!</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default InstructorsComponent;