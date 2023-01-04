import { Route, Routes } from 'react-router-dom';
import  {Home}  from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import {TimeTablePg} from "./Components/TimeTablePg";
import {Contact} from "./Components/Contact";
import {Achievements} from "./Components/Achievements";
import header from "./Components/Images/newLogo.jpg";
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
       <div className="homeHeader">
          <img className="homeHeaderImg" src={header}></img>
        </div>
      </header>
      
      <Routes>

<Route path="/" element=<Home/> />
<Route path='TimeTablePg' element=<TimeTablePg /> />
<Route path='Achievements' element=<Achievements/> />
<Route path='Contact' element=<Contact /> />

</Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
