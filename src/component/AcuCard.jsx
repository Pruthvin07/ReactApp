/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AllBodyPart } from '../data/head';
import { useParams } from 'react-router-dom';
import Card from './Card';


  
function AcuCard(){

    const params = useParams()
    console.log(params.acupoint)

    return  (<div className="jumbotron" style={{backgroundColor: "#96CEB4" }}  >
    <br/><br/>
    <h1 style={{ fontFamily: "Montserrat", textAlign:"center" }}>{params.acupoint[0].toUpperCase() + params.acupoint.substring(1)}</h1>
    <div className="container" >
      <hr className="progress" size="10" color="beige"/>
      <br/><br/>
      
      <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

<div className="carousel-inner">
    <div className="carousel-item active">
        <div className="row">

        {AllBodyPart.head[params.acupoint].Acupoint.map(function(element){
            return (<div class="col-md-4 mb-3">
                <Card  img={element.img} name={element.name} desc={element.desc}/>
            </div>) 
        })}
   

        </div>
    </div>
    </div>
    </div><br/><br/>
    <hr className="progress" size="10" color="beige"/>
    </div>
    
    </div>
    
  
   
 
   
  );

    
}


export default AcuCard;