/* eslint-disable jsx-a11y/alt-text */
import React from "react"


function Card(props){
    return   <div className="card">
    <img className="rounded" alt="100%x280" src={props.img}/>
    <div className="card-body">
        <h4 className="card-title" style={{ fontFamily: "Montserrat", textAlign:"center" }}>{props.name}</h4>
        <p className="card-text" style={{ fontFamily: "Montserrat", textAlign:"center" }}>{props.desc}</p>

    </div>

</div>
       
}

export default Card;