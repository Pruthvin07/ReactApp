import React , { useEffect }from 'react'
import "../styles/MainContainer.css";
import SoundList from './SoundList';


function SoundPlayer() {
    useEffect(() => {
        const allLi = document.querySelector(".menuList").querySelectorAll("li");
    
        function changePopularActive() {
          allLi.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        allLi.forEach((n) => n.addEventListener("click", changePopularActive));
      }, []);
    
  return (
    <div className="jumbotron" style={{backgroundColor: "#f6f1ed",textAlign: "center", fontFamily: "'Farro'"}} >
    <div className="container" >
    <div className="menuList">
       

      
      </div>

      <SoundList />
    
 
     
   </div>
   
  </div>
  )
}

export default SoundPlayer