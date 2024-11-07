import "./TechCampText.css"

const OverviewText = ({text}) => {

    return (
        <div className="textContainer" id="wwh">
            <h2 className="topLeft">Overview</h2>
            <p>
                {text}
            </p>
        </div>
    )
}

export default OverviewText;