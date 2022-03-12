/* eslint-disable jsx-a11y/alt-text */
import React from 'react';



  
function AcuCard(){

    

    return  (<div className="jumbotron" style={{backgroundColor: "#96CEB4" }}  >
    <br/><br/>
    <h1 style={{ fontFamily: "Montserrat", textAlign:"center" }}>Ear</h1>
    <div className="container" >
      <hr className="progress" size="10" color="beige"/>
      <br/><br/>
      
      <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

<div class="carousel-inner">
    <div class="carousel-item active">
        <div class="row">

        {/* {head["Eye"].Acupoint.map(function(element){
            return (<div class="col-md-4 mb-3">
                <Card  img={element.img} name={element.name} desc={element.desc}/>
            </div>) 
        })} */}
   

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