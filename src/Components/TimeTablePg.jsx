
import "./Styles/TimeTableStyle.scss";

import bg from "./Images/2.jpg";

export const TimeTablePg = () =>
{

    return(
        <div className="timeTbalePG">

<h1 className="fees">R950.00 Monthly</h1>

<div className="timeTableTxt">
<h2>Advanced Classes </h2>

<h3>Monday and Wednesday 18H00-19H00 Gi, 19H00-20H00 No-Gi.</h3>

<h2>Beginner Classes</h2>
<h3>Tuesday and Thursday 18H00-19H00 K1 boxing Fitness, 19H00-20H00 Beginner Brazilian Jiu-Jitsu.</h3>
<br></br>

<h3>Private and 1 on 1 classes please <a href="Contact">contact</a> Wiekus directly for times and prices.</h3>



<h2> Open Mat every Saturday 10am.</h2>
</div>



<br>

</br>
<h2>Class Times</h2>
<div className="timeTable">
<div className="Dates">
<div className="time day">
<h3>Time</h3>
</div>
<div className="monday day">
<h3>Monday</h3>
</div>
<div className="tuesday day">
<h3>Tueday</h3>
</div>
<div className="wednesday day">
<h3>Wednesday</h3>
</div>
<div className="thursday day">
<h3>Thursday</h3>
</div>
<div className="friday day">
<h3>Friday</h3>
</div>
<div className="sat day">
<h3>Saturday</h3>
</div>
<div className="sunday day">
<h3>Sunday</h3>
</div>
</div>
<div className="mornings">
<div className="time day">
<h4>09H00-10H00</h4>
</div>
<div className="monday morningTime">

</div>
<div className="monday morning">
<p>Advanced</p>
<p>BJJ</p>

</div>
<div className="tuesday morning">
<p>Advanced</p>
<p>BJJ</p>
</div>
<div className="wednesday morning">
<p>Advanced</p>
<p>BJJ</p>
</div>
<div className="thursday morning">
<p>Advanced</p>
<p>BJJ</p>
</div>
<div className="friday morning">
<p>Advanced</p>
<p>BJJ</p>
</div>
<div className="sat morning">
<p>10H00-11H00</p>
<p>Open-Mat</p>
</div>
<div className="sunday morning">

</div>
</div>

<div className="evenings">
<div className="time day">
<h4>18H00-19H00</h4>
</div>
<div className="monday evening">
<p>Advanced</p>
<p>BJJ Gi </p>
</div>
<div className="tuesday evening">
<p>Beginner</p>
<p>Stand-Up K1</p>
</div>
<div className="wednesday evening">
<p>Advanced</p>
<p>BJJ Gi </p>
</div>
<div className="thursday evening">
<p>Beginner</p>
<p>Stand-Up K1</p>
</div>
<div className="friday evening">

</div>
<div className="sat evening">

</div>
<div className="sunday evening">

</div>
</div>
<div className="evenings">
<div className="time day">
<h4>19H00-20H00</h4>
</div>
<div className="monday evening">
<p>Advanced</p>
<p>BJJ No-Gi</p>
</div>
<div className="tuesday evening">
<p>Beginner</p>
<p>BJJ No-Gi</p>
</div>
<div className="wednesday evening">
<p>Advanced</p>
<p>BJJ No-Gi</p>
</div>
<div className="thursday evening">
<p>Beginner</p>
<p>BJJ No-Gi</p>
</div>
<div className="friday evening">

</div>
<div className="sat evening">

</div>
<div className="sunday evening">

</div>
</div>

</div>
<br>

</br>
<img className="timeTableFooterImg" src={bg}></img>

<h3>All Equipment and mats are cleaned multiple times a day. Please wash your GI and all your equipment before and after training.</h3>


        </div>
    )
}