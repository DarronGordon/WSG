
import "./Styles/HomeStyles.scss";
import {Content} from "./Contents";

import ImageSlide from "./ImageSlider";

import achievement from "./Images/achievement.png";

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
<div className="homeAboutGym">
<a href="TimeTablePg">
<h3>WSG Home of the wolf pack</h3>
 <p>We are a high level competitive Brazilian JiuJistu Gym, that trains daily throughout the year.  </p>
 <h3>Welcome to all</h3>
 <p>If you want to get fit while learning Brazilian JiuJitsu we cater for everyone.  </p>
</a>

</div>
<br></br>
<hr></hr>
<div className="gymRanking">

<img className="achievementbadge" src={achievement}></img>
</div>

<hr></hr>
<br></br>
<div className="homeAboutInstructors">
<a href="Contact">
<h3>Wiekus Swart</h3>
<h4>Head instructor </h4>
<p>Wiekus has been involved in the Brazilian JiuJistu scene in South Africa from the start and now runs one of the top competitive teams in South Africa.</p>

<p>Wiekus is a 3rd degree black belt under Tom Deblass.</p>
</a>

</div>

<hr></hr>

<h1>Testamonials</h1>

<div className="homeTestamonials">
<div className="testamonial">
<p>'WSG has become my home away from home. Now to get everyone grappling!!!'</p>
<p>D.M.Gordon</p>
</div>
<div className="testamonial">
<p>'Lets Wrestle!!!!'</p>
<p>Max.BLAHHHHH</p>
</div>
<div className="testamonial">
<p>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'</p>
<p>Lorem ipsum </p>
</div>
</div>
        </div>
  
        </div>
    )
} 