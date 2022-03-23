import React from 'react';
import ListButton from './ListButton';
import { Link } from 'react-router-dom';

  
function AcuList(){

    

    return  (<div className="jumbotron" style={{backgroundColor: "#96CEB4" }}  >
    <br/><br/>
    <h1 style={{ fontFamily: "Montserrat", textAlign:"center" }}>Select from the List</h1>
    <div className="container" >
      <hr className="progress" size="10" color="beige"/>
      <br/><br/><br/><br/>
      
    <div className="row">
      <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat", textAlign:"center"}} >
       
      <Link to="/acupressure/head"><ListButton  text="Head"/></Link> 
     
      <Link to="/acupressure/neck"><ListButton  text="Neck"/></Link>

      <Link to="/acupressure/shoulder"><ListButton text="Shoulder"/></Link>

     </div>
     <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat" ,textAlign:"center"}}>
    
     <Link to="/acupressure/arm"><ListButton  text="Arm"/></Link>
     
     <Link to="/acupressure/back"> <ListButton  text="Back"/></Link>

     <Link to="/acupressure/chest"><ListButton text="Chest"/></Link>
      
        
       </div>
       <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat",textAlign:"center" }} >

       <Link to="/acupressure/abdomen"><ListButton  text="Abdomen"/></Link>
     
       <Link to="/acupressure/leg"> <ListButton  text="Leg"/></Link>

       <Link to="/acupressure/Wholebody"> <ListButton text="Wholebody"/></Link>
      <br/><br/>
     </div>
     
    </div>
   </div>
   
  </div>);

    
}


export default AcuList;