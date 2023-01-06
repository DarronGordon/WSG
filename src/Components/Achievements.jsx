
import ImageSliderComp from "./ImageSliderComp";

import "./Styles/AcheivmentsStyles.scss";

export const Achievements= () =>
{

    return(
        <div className="achievements">
            <h1>The wolf Pack</h1>
            <br></br>

             <h2>Highlights 2022</h2>

             <br></br>

<h3>Submission Kings Gym Rankings</h3>
            <div className="gymRanking">

</div>
     <br></br>
<h3>Competitors</h3>
            <div className="competitors">
            <ImageSliderComp ></ImageSliderComp>

</div>

        </div>
    )
}