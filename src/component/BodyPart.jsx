import React from 'react';
import ListButton from './ListButton';
import { useParams } from 'react-router-dom';
import { AllBodyPart } from '../data/head';
import { Link } from 'react-router-dom';


  
function BodyPart(){

  const params = useParams()
  
  var Hname = Object.keys(AllBodyPart[params.BodyPart])
  

    return  (<div className="jumbotron" style={{backgroundColor: "#96CEB4" }}  >
    <br/><br/>
    <h1 style={{ fontFamily: "Montserrat", textAlign:"center" }}>Select from the List</h1>
    <div className="container" >
      <hr className="progress" size="10" color="beige"/>
      <br/><br/>
      
    <div className="row">

     

      {Hname.map(function(element){
            return (<div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat", textAlign:"center" }} >
            <Link to={`/acupressure/${params.BodyPart}/${element}`}>
                <ListButton text={element[0].toUpperCase() + element.substring(1)}/>
            </Link>
            </div>) 
        })}
       
      
      

    

     <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat" ,textAlign:"center"}}>
    
     
      
        
       </div>

       <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat",textAlign:"center" }} >
      
       
      
      <br/><br/>
     </div>
     
    </div>
   </div>
   
  </div>);

    
}


export default BodyPart;