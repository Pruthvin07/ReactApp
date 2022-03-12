import React from "react"

function Login(){
    return (
        
        <div className="container mt-5">
        <h1>Login</h1>
      <br/><br/>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
      
                {/* <!-- Makes POST request to /login route --> */}
                <form action="/login" method="POST">
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control effect-17" name="username"/>
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control effect-17" name="password"/>
                    <span className="focus-border"></span>
                  </div>
                  <button type="submit" className="btn btn-dark">Login</button>
                </form>
      
              </div>
            
              </div>
              <br/><br/>
              <div className="card">
                <div classNameName="card-body">
                  <a className="btn btn-block" href="/auth/google" role="button">
                    <i className="fab fa-google"></i>
                    Sign In with Google
                  </a>
                </div>
            </div>
          </div>
      
          <div className="col-md-6">
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_mjlh3hcy.json"  background="transparent"  speed="1"  style={{width: "500px", height: "500px" }} loop  autoplay></lottie-player>
          </div>
      
        </div>
      </div>);
} 

export default Login;