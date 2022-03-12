import React from 'react';
import ListButton from './ListButton';

  
function AcuList(){

    

    return  (<div className="jumbotron" style={{backgroundColor: "#96CEB4" }}  >
    <br/><br/>
    <h1 style={{ fontFamily: "Montserrat", textAlign:"center" }}>Select from the List</h1>
    <div className="container" >
      <hr className="progress" size="10" color="beige"/>
      <br/><br/><br/><br/>
      
    <div className="row">
      <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat", textAlign:"center"}} >
       
      <ListButton  text="Head"/>
     
      <ListButton  text="Neck"/>

      <ListButton text="Shoulder"/>

     </div>
     <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat" ,textAlign:"center"}}>
    
     <ListButton  text="Arm"/>
     
     <ListButton  text="Back"/>

     <ListButton text="Chest"/>
      
        
       </div>
       <div className="col-lg-4 features-box" style={{ fontFamily: "Montserrat",textAlign:"center" }} >

       <ListButton  text="Abdomen"/>
     
       <ListButton  text="Leg"/>

      <ListButton text="Whole Body"/>
      <br/><br/>
     </div>
     
    </div>
   </div>
   
  </div>);

    
}


export default AcuList;