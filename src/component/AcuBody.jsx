import React from "react"


function AcuBody(){
    return  (<div className="container mt-5"> 
    <h1 style={{textAlign: "center", fontFamily: "'Montserrat'", fontSize:"3.5rem"}}>Acupressure</h1>
  <br/><br/>
    <div className="row" >
      <div className="col-md-6">
        <br/><br/><br/><br/><br/>
        <h1 style={{textAlign: "center", fontFamily: "'Montserrat'"}}>Tell us about your pain</h1>
         <p style={{textAlign: "center", fontFamily: "'Montserrat'"}}>Point your pain area in the image</p>
         <h4 style={{textAlign: "center", fontFamily: "'Montserrat'"}}>OR</h4>
         <p style={{textAlign: "center", fontFamily: "'Montserrat'"}}>Select from the List Below</p>
         
      </div>
  
      <div className="col-md-6">
        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_qdwp9wj8.json"  background="transparent"  speed="2"  style={{width: "500px", height: "500px" }} loop  autoplay></lottie-player>
      </div>
  
    </div>
  </div>);

    
   
}

export default AcuBody;