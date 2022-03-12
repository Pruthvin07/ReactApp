/* eslint-disable jsx-a11y/alt-text */
import React from "react"


function Card(props){
    return   <div class="card">
    <img class="rounded" alt="100%x280" src={props.img}/>
    <div class="card-body">
        <h4 class="card-title" style={{ fontFamily: "Montserrat", textAlign:"center" }}>{props.name}</h4>
        <p class="card-text" style={{ fontFamily: "Montserrat", textAlign:"center" }}>{props.desc}</p>

    </div>

</div>
       
}

export default Card;