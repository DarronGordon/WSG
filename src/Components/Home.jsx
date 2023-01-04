
import "./Styles/HomeStyles.scss"
import {Content} from "./Contents"

import ImageSlide from "./ImageSlider"

export const Home =() =>{
const aboutGym = Content.homeAboutGym;
const aboutWeik = Content.homeAboutInstructor;
    return(
        <div className="homeContainer">

        <div className="homeContents">
  
        <div className="homeSlider">


             <ImageSlide></ImageSlide>

        <h1>Brazilian Jiu-Jistu</h1>

        </div>
<div className="homeAboutGym">
 {aboutGym}
</div>
<br></br>
<hr></hr>
<div className="homeAboutInstructors">

{aboutWeik}
</div>
<div className="homeTestamonials">

</div>
        </div>
  
        </div>
    )
} 