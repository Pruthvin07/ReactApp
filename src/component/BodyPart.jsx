import React from 'react';
import ListButton from './ListButton';
import { useParams } from 'react-router-dom';
import { AllBodyPart } from '../data/head';


  
function BodyPart(){

  const params = useParams()
  
  console.log(AllBodyPart[params.bodyPart])

    return  (<div className="jumbotron" style={{backgroundColor: "#96CEB4" }}  >
    <br/><br/>
    <h1 style={{ fontFamily: "Montserrat", textAlign:"center" }}>Select the part from HEAD</h1>
    <div className="container" >
      <hr className="progress" size="10" color="beige"/>
      <br/><br/>
      
    <div className="row">

      <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat", textAlign:"center" }} >
       
      <ListButton  text="Eye"/>
     
      <ListButton  text="Conjuncativitis"/>

      <ListButton text="Ear"/>

     </div>

     <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat" ,textAlign:"center"}}>
    
     <ListButton  text="Nose"/>
     
     <ListButton  text="Cold-Influenza"/>

     <ListButton text="Dizziness"/>

     <ListButton text="Migraine"/>
      
        
       </div>

       <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat",textAlign:"center" }} >
      
       <ListButton  text="Fatigue"/>
     
        <ListButton  text="Headache"/>

        <ListButton text="Sinus"/>
      
      <br/><br/>
     </div>
     
    </div>
   </div>
   
  </div>);

    
}


export default BodyPart;