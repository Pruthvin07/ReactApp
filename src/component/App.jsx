import React from "react"
import Nav from "./Nav"
import Home from "./Home";
import { BrowserRouter ,Routes ,Route} from "react-router-dom"; 
 import SignUp from "./Signup"
 import Login from "./Login"
 import Acupressure from "./Acupressure";
 import BodyPart from "./BodyPart";
 import "../component/App.css"
import AcuCard from "./AcuCard";
import FirstPage from "./FirstPage";
import SoundTherapy from "./SoundTherapy";
import SoundPlayer from "./SoundPlayer";

 
 

function App(){
    return  <div>
    <BrowserRouter>
    <Nav />
    <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/login" element={<Login />} />

    <Route path="/welcome" element={<FirstPage />} />
    {/* Acupressure */}
    <Route path="/acupressure" element={<Acupressure />} />
    <Route path="/acupressure/:BodyPart" element={<BodyPart />} />
    <Route path="/acupressure/:BodyPart/:acupoint" element={<AcuCard />} />
    {/* Sound Therapy */}
    <Route path="/soundTherapy" element={<SoundTherapy />} />
    <Route path="/soundTherapy/player" element={<SoundPlayer />} />

        

    </Routes>
        
        
      
   </BrowserRouter>
    
    </div>

    
   
}

export default App;