import React from "react"

function SignUp(){
    return (
        
        <div className="container mt-5">
        <h1>Register</h1>
        <br/><br/>
      
        <div className="row">
          <div className="col-md-6"  >
            <div className="card">
              <div className="card-body">
      
                {/* <!-- Makes POST request to /register route --> */}
                <form action="/register" method="POST" autocomplete="off">
                  <div className="form-group" >
                    <label>First Name </label>
                    <input type="text" class="form-control effect-17" name="fname" />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group" >
                    <label>Last Name</label>
                    <input type="text" class="form-control effect-17" name="lname"/> 
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group" >
                    <label for="email">Email</label>
                    <input type="email" className="form-control effect-17" name="username" autocomplete="off"/>
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control effect-17" name="password"/>
                    <span className="focus-border"></span>
                  </div>
                  <button type="submit" className="btn btn-dark">Register</button>
      
                 
                </form>
      
               
                </div>
                
              </div>
              <br/>
              <br/>
              <div className="card social-block">
                <div className="card-body">
                  <a className="btn btn-block" href="/auth/google" role="button">
                    <i className="fab fa-google"></i>
                    Sign Up with Google
                  </a>
                </div>
            </div>
          </div>
      
          <div class="col-md-6">
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_q5pk6p1k.json"  background="transparent"  speed="1"  style={{width: "600px", height: "600px"}}  loop  autoplay></lottie-player>
          </div>
      
        </div>
      </div>);
} 

export default SignUp;