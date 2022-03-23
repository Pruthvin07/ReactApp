import React from "react"
import { Link } from "react-router-dom";


function  Flip(){

    
    return<div className="jumbotron" style={{backgroundColor:" #f6f1ed"}} >
    <div className="container" >
      <p className="lead" style={{fontSize: "3rem", fontFamily: "'Titillium Web'", color: "black" ,textAlign: "center"}}>Elements of the house</p>
      <hr className="progress" size="10" color="beige"/>  
      <div className="row">
    
        <div className="col-lg-4 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}} >
        <Link to="/acupressure">
          <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_654rl2rh.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
        </Link>
          <h3 style={{textAlign: "center", fontFamily: "'Montserrat'"}}>Accupresure</h3>
          <p style={{textAlign: "center", fontFamily: "'Montserrat'"}}>Acupressure means resonance It's one of the best healing arts, try Acupressure</p> 
       </div>
    
       <div className="col-lg-4 features-box"style={{textAlign: "center", fontFamily: "'Montserrat'"}}>
       <Link to="/soundTherapy">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_egfrW9.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
       </Link>  
           <h3>Sound Therapy</h3>
           <p>Deliberate work with sound has long had a beneficial effect on the human psyche and health.</p>
      </div>
      <div className="col-lg-4 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}}>
      <Link to="/colourTherapy">
        <dotlottie-player src="https://assets10.lottiefiles.com/dotlotties/dlf10_dyqjpmfs.lottie"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></dotlottie-player>
    </Link>
      <h3>Colour Therapy.</h3>
      <p>The use of Colour Therapy dates back thousands of years and is a truly holistic therapy using the colour energy from light</p>
    </div>
  </div>
      <br/>
      <br/><br/><br/>
    </div>
  </div>
}

export default Flip;