import React from "react"

function HouseElement(){
    return (
        
        <div class="jumbotron" style={{backgroundColor:" #f6f1ed"}} >
        <div class="container" >
          <p class="lead" style={{fontSize: "3rem", fontFamily: "'Titillium Web'", color: "black" ,textAlign: "center"}}>Elements of the house</p>
          <hr class="progress" size="10" color="beige"/>  
          <div class="row">
            <div class="col-lg-4 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}} >
              <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_654rl2rh.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
              <h3>Accupresure</h3>
              <p>Acupressure means resonance It's one of the best healing arts, try Acupressure</p>
           </div>
           <div class="col-lg-4 features-box"style={{textAlign: "center", fontFamily: "'Montserrat'"}}>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_egfrW9.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
               <h3>Sound Therapy</h3>
               <p>Deliberate work with sound has long had a beneficial effect on the human psyche and health.</p>
          </div>
          <div class="col-lg-4 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}}>
            <dotlottie-player src="https://assets10.lottiefiles.com/dotlotties/dlf10_dyqjpmfs.lottie"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></dotlottie-player>
          <h3>Colour Therapy.</h3>
          <p>The use of Colour Therapy dates back thousands of years and is a truly holistic therapy using the colour energy from light</p>
        </div>
      </div>
          <br/>
          <br/><br/><br/>
        </div>
      </div>);
} 

export default HouseElement;