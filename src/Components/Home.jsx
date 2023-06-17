
import "./Styles/HomeStyles.scss";
import {Content} from "./Contents";

import ImageSlide from "./ImageSlider";

import achievement from "./Images/achievement.png";

import {TimeTablePg} from "./TimeTablePg";
import {Contact} from "./Contact";

export const Home =() =>{
const aboutGym = Content.homeAboutGym;
const aboutWiek = Content.homeAboutInstructor;
    return(
        <div className="homeContainer">

        <div className="homeContents">
  
        <div className="homeSlider">


             <ImageSlide></ImageSlide>

        <h1>Brazilian Jiu-Jistu</h1>

        </div>

        <div className="homeGymAbout">
        <div className="homeAboutGym">
<a href="TimeTablePg">
<h3>WSG Home of the wolf pack</h3>
 <p>We are a high level competitive Brazilian JiuJistu Gym.  </p>
 <h3>Welcome to all</h3>
 <p>If you want to get fit while learning Brazilian JiuJitsu we cater for everyone.  </p>
</a>

</div>
<br></br>
<hr className="hrDotted"></hr>
<div className="gymRanking">

<img className="achievementbadge" src={achievement}></img>
        </div>

</div>


<div className="instructorsBG">
<div className="homeAboutInstructors">
<a href="Contact">
<h3>Wiekus Swart</h3>
<h4>Head instructor </h4>
<p>Wiekus has been involved in the Brazilian JiuJistu scene in South Africa from the start and now runs one of the top competitive teams in South Africa.</p>

<p>Wiekus is a 3rd degree black belt under Tom Deblass.</p>
</a>

</div>
</div>

<br></br>

<br></br>

      <TimeTablePg/>

      <br></br>
     
      <br></br>
      <Contact/>
      <br></br>
      <hr></hr>
      <br></br>

<h1>Testamonials</h1>

<div className="homeTestamonials">
<div className="testamonial">
<p>'Starting Brazilian JiuJistu was the best decision I have ever made!'</p>
<p>D.M.Gordon</p>
</div>
<div className="testamonial">
<p>'Best sport in the world!'</p>
<p>Max</p>
</div>
<div className="testamonial">
<p>'Ever wanted to have the best time? come to WSG!!!.'</p>
<p>Anon</p>
</div>
</div>
        </div>

  
  
        </div>
    )
} 