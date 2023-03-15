
import ImageSliderComp from "./ImageSliderComp";

import "./Styles/AcheivmentsStyles.scss";

import img1 from "./Images/1a.jfif"
import img2 from "./Images/tumzSubKingImg.png"
import img3 from "./Images/subKingImg.png"
export const Achievements= () =>
{

    return(
        <div className="achievements">
            <h1>The wolf Pack</h1>
            <br></br>

             <h2>Highlights 2022</h2>

             <br></br>
           <img src={img1} className="achievmentImg"></img>
             <br></br>

<h3>Submission Kings Gym Rankings</h3>
            <div className="gymRanking">

</div>
     <br></br>
<h3>Competitors</h3>
            <div className="competitors">
            <ImageSliderComp ></ImageSliderComp>

</div>

<h2>2023</h2>
<img src={img2} className="tumzSubKingImg"></img>



<img src={img3} className="subKingImg"></img>

<br></br>
        </div>
    )
}