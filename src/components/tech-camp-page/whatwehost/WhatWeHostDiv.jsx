import AdventurePage from "./grid/TechCampGrid";
import OverviewText from "./text/TechCampText";
import WhatWeHostVideo from "./video/TechCampVideo";

const WhatWeHostDiv = ({title, text}) => {

    return (
        <div className="wwhContainer">
            <h1 className="title">{title}</h1>
            <WhatWeHostVideo />
            <OverviewText text={text} />
            <AdventurePage />

        </div>

    )
}

export default WhatWeHostDiv;