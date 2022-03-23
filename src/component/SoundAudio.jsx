import React from 'react'
import ListButton from './ListButton';
import { Link } from 'react-router-dom';



function SoundAudio() {
 

  return <div>
     <div className="jumbotron" style={{backgroundColor: "#f6f1ed"}} >
        <div className="container" >
          <p className="lead" style={{fontSize: "3rem", fontFamily: "'Titillium Web'", color: "black", textAlign: "center"}}></p>
          <hr className="progress" size="10" color="beige"/>
          <br/><br/><br/><br/>
        <div className="row">
          <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}} >
            <br/><br/><br/>  
            <img src="/images/Sound-1.jfif" alt="" height="300px" width="500px"/>
            <br/><br/> 
            
         </div>
         <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}}>
            
            <h3>Sound Therapy </h3>
            <p>Sound Therapy refers to a range of therapies in which sound is used to treat physical and mental conditions. Indigenous societies around the world have traditionally used sound in healing ceremonies, including drumming, hand-clapping, singing, dancing, and pulsating since the beginning of time.
              Sound Therapy techniques vary but all involve the application of sound waves and harmonic vibrations to the body through the use of instruments, including the human voice. Sound helps to facilitate shifts in our brainwave state by using entrainment. Entrainment synchronizes our fluctuating brainwaves by providing a stable frequency to which the brainwave can attune to. By using rhythm and frequency, we can entrain our brainwaves and it then becomes possible to down-shift our normal beta state (normal waking consciousness) to alpha (relaxed consciousness), and even reach theta (meditative state) and delta (sleep; where internal healing can occur).
            </p>
           </div>
        </div>
       </div>  
      <div style={{textAlign: "center"}}><Link to="/soundTherapy/player"><ListButton  text="Sound Player"/></Link></div> 
      </div>
      
  </div>

}

export default SoundAudio; 