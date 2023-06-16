import { useState } from "react";
import { SlideDataComp } from "./SlideDataComp";
import "./Styles/ImageSliderStyleComp.scss";

const ImageSliderComp =(slides)=>
{
    const [currentIndex, setCurrentIndex] = useState(0);


    setTimeout( ()=>{
        currentIndex === SlideDataComp.length-1 ? setCurrentIndex(0):setCurrentIndex(currentIndex+1);
},5000);
             
    return(
        <div className="slider-container">

        <div id="slide" className={SlideDataComp[currentIndex].image} >
     
        </div>

        
</div>
);
}

export default ImageSliderComp;