import React from "react"


function ListButton(props){
    return  <div>   
    <button className='name noselect Acubutton'>{props.text}</button>
      <br/><br/>
      <hr className="progress" size="10" color="beige"/>
      <br/><br/>
    </div>

    
   
}

export default ListButton;