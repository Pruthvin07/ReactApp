import React from 'react'
import ListButton from './ListButton';
import { Link } from 'react-router-dom';



function SoundAudio() {
 

  return <div>
     <div className="jumbotron" style={{backgroundColor: "#f6f1ed"}} >
        <div className="container" >
          <p className="lead" style={{fontSize: "3rem", fontFamily: "'Titillium Web'", color: "black", textAlign: "center"}}></p>
          <hr className="progress" size="10" color="beige"/>
          <br/><br/>
        <div className="row">
          <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}} > 
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_el4tnl4m.json"  background="transparent"  speed="1.5"  style={{width:" 500px", height:"300 px"}}   loop  autoplay></lottie-player>

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

      <div className="container" >
          <p className="lead" style={{fontSize: "3rem", fontFamily: "'Titillium Web'", color: "black", textAlign: "center"}}></p>
         <h2 style={{textAlign: "center", fontFamily: "'Montserrat'"}} >Types of sound or music therapy</h2>
          <br/><br/><br/><br/>
        <div className="row">
          <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}} >
            <br/><br/><br/><br/><br/><br/>    
            <h3>~Tuning fork therapy</h3>
            <p>Tuning fork therapy uses calibrated metal tuning forks to apply specific vibrations to different parts of the body. This can help release tension and energy, and promote emotional balance. It supposedly works similarly to acupuncture, using sound frequencies for point stimulation instead of needles.There is some research suggesting that tuning fork therapy may help relieve muscle and bone pain.</p>
            <br/><br/>
            <h3>~Brainwave entrainment</h3>
            <p>Also known as binaural beats, this method stimulates the brain into a specific state using pulsing sound to encourage your brain waves to align to the frequency of the beat. It’s supposed to help induce enhanced focus, entranced state, relaxation, and sleep. Though more research is needed, there’s some evidenceTrusted Source that audible brainwave entrainment reduces anxiety, pain, and symptoms of premenstrual syndrome, as well as improves behavioral problems in children.</p>
            
            <br/><br/> 
            
         </div>
         <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}}>
            
            <h3>~Neurologic music therapy</h3>
            <p>Music therapy can reduce stress and promote relaxation. It’s been shown to be more effective than prescription drugs in reducing anxiety levels before surgery. A study published in 2017 found that a 30-minute music therapy session combined with traditional care after spinal surgery reduced pain.
            Music therapy is administered by a credentialed provider who assesses the individual’s needs. Treatment involves creating, listening, singing, or moving to music. It’s used for physical rehab, pain management, and brain injuries
            </p>
            <br/><br/>

            <h3>~Bonny Method</h3>
            <p>Named after Helen L. Bonny, PhD, the Bonny Method of Guided Imagery and Music (GIM) classical music and imagery to help explore personal growth, consciousness, and transformation.A 2017 study showed promising evidence that a series of GIM sessions could improve psychological and physiological health in adults with medical and mental health needs.</p>
            <br/><br/>

            <h3>~Nordoff-Robbins</h3>
            <p>This sound healing method is delivered by skilled musicians who complete the Nordoff-Robbins 2-year master’s program. They use music familiar to those being treated, create new music together, or work toward a performance.The Nordoff-Robbins approach is used to treat children with developmental delays (as well as their parents), mental health issues, learning difficulties, autism spectrum disorder, dementia, and other conditions.</p>
            <br/><br/>
           </div>
        </div>
       </div>  
       <div className="container" >
          <p className="lead" style={{fontSize: "3rem", fontFamily: "'Titillium Web'", color: "black", textAlign: "center"}}></p>
          <hr className="progress" size="10" color="beige"/>
          <br/><br/><br/>
          <h2 style={{textAlign: "center", fontFamily: "'Montserrat'"}} >What Sound therapy treats</h2>
         
        <div className="row">
          <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}} >
            <br/><br/><br/>  
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_c96ZBR.json"  background="transparent"  speed="1.5"  style={{width:" 500px", height:"600 px"}}  loop  autoplay></lottie-player>
            <br/><br/> 
            
         </div>
         <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}}>
            <br/><br/><br/>
            <h3>Music therapy is used to treat symptoms of a number of conditions, including:</h3>
            <br/>
            <p><ol style={{textAlign: "left", fontFamily: "'Montserrat'"}}>
            <li>Anxiety disorders</li>
            <li>Depression</li>
            <li>Post-traumatic stress disorder</li>
            <li>Dementia</li>
            <li>Autism spectrum disorder and learning difficulties</li>
            <li>Cancer</li>
            <li>Behavioral and psychiatric disorders</li>
            </ol></p>

            <br/><br/>
            <h3>Some of the supposed benefits of music therapy include:</h3>
            <br/>
            <p><ol style={{textAlign: "left", fontFamily: "'Montserrat'"}}>
            <li>Lowers stress</li>
            <li>Decreases mood swings</li>
            <li>Lowers blood pressure</li>
            <li>Lowers cholesterol levels</li>
            <li>Lowers risk for coronary artery disease and stroke</li>
            <li>Teaches pain management</li>
            <li>Improves sleep</li>
            </ol></p>
           </div>
        </div>
       </div>  
       <div className="container" >
          <p className="lead" style={{fontSize: "3rem", fontFamily: "'Titillium Web'", color: "black", textAlign: "center"}}></p>
          <br/><br/>
          <hr className="progress" size="10" color="beige"/>
          <br/><br/> <br/><br/>
        <div className="row">
          <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}} > 
          <h3>How it works</h3>
            <p>Music therapy uses different aspects of sound to improve your emotional and physical well-being. How it works depends on the method being used. Most music therapy sessions are experienced one-on-one with a specially trained practitioner.A session may involve sitting or lying down while listening to music or sounds from a speaker or instruments, or having vibrations applied using a special tool, such as a tuning fork. Depending on the method, you may be encouraged to participate by singing, moving, or even using a musical instrument, or you may need to remain still and quiet to let the sounds take effect.</p>
         </div>
         <div className="col-lg-6 features-box" style={{textAlign: "center", fontFamily: "'Montserrat'"}}>
         <h3>The takeaway</h3>
            <p>Though evidence may be limited on some methods, music therapy has been found to be effective for stress reduction and relaxation and has been shown to offer many health benefits.

There is little risk to listening to music. Find the sounds that work for you.</p>
<Link to="/soundTherapy/player"><ListButton  text="Sound Player"/></Link>
          
          </div>
        </div>
       </div>  
      </div>
  </div>

}

export default SoundAudio; 