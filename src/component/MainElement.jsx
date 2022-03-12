import React from "react"
import {Link } from "react-router-dom";

function MainElement(){
    return (
        
    <div className="jumbotron centered home" >
    <div className="container" >
      <p className="lead" style={{fontSize: "5rem" ,fontFamily: "'Titillium Web'" ,color: "beige"}}>Where natural healing begins</p>
      <hr  size="10" color="beige"/>  
      <Link className="btn btn-light btn-md bn54 d-inline-block" to="/register" role="button">Register</Link>
      <Link className="btn btn-light btn-md bn54 d-inline-block" to="/login" role="button">Login</Link>
      <br/>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  </div>);
} 

export default MainElement;