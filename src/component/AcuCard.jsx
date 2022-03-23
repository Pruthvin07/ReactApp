/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AllBodyPart } from '../data/head';
import { useParams } from 'react-router-dom';
import Card from './Card';


  
function AcuCard(){

  

    const params = useParams()
    console.log(params.BodyPart)

   

    return  (<div style={{backgroundColor: "#96CEB4" }}>
    
    <div className="jumbotron"  style={{backgroundColor: "#96CEB4" }} >
    <br/><br/>
    <h1 style={{ fontFamily: "Montserrat", textAlign:"center" }}>{params.acupoint[0].toUpperCase() + params.acupoint.substring(1)}</h1>
    <div className="container" >
      <hr className="progress" size="10" color="beige"/>
      <br/><br/>
      
      <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

<div className="carousel-inner">
    <div className="carousel-item active">
        <div className="row">

        {AllBodyPart[params.BodyPart][params.acupoint].Acupoint.map(function(element){
            return (<div class="col-md-4 mb-3">
                <Card  img={element.img} name={element.name} desc={element.desc}/>
            </div>) 
        })}

        </div>
    </div>
    </div>
    </div>

    <hr className="progress" size="10" color="beige"/>

    
        <div className="container" >
          <p className="lead" style={{fontSize: "2rem", fontFamily: "'Titillium Web'", color: "black", textAlign: "center"}}>Corresponding images on PALM</p>
         
          <br/><br/>
        <div className="row">
          <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}}  >
          <img src="/images/right.jpg" alt="" width={500}/>
          <br/><br/>
          <p style={{fontSize: "2rem", fontFamily: "'Titillium Web'", color: "black", textAlign: "center"}}>Back Palm</p>
            </div>
         <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}}>
            <img src="/images/left.jpg" alt="" width={610}/>
            <br/><br/>
          <p style={{fontSize: "2rem", fontFamily: "'Titillium Web'", color: "black", textAlign: "center"}}>Front Palm</p>
            <br/><br/>
        </div>
       
      
      </div>
      </div>

    
    
    
    </div>
   
    </div>
    </div>
  
    
  
   
 
   
  );

    
}


export default AcuCard;