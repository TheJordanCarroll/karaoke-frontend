import React from "react";

function Login({ currentUser, setCurrentUser, handleLogin, handleLogout }) {
    return (
        <div className="login-div">
            <main className="form-signin">
            <form>
                {/* <img className="mb-4" src="https://i.ibb.co/2P6KpkZ/logo.png" alt="" width={72} height={57} /> */}
                <h1 className="h3 mb-3 fw-normal">Please log in</h1>
                <label htmlFor="inputEmail" className="visually-hidden">Email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autofocus />
                {/* <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required /> */}
                {/* <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" defaultValue="remember-me" /> Remember me
                </label> */}
                {/* </div> */}
                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleLogin}>Log in</button>
                {/* <p className="mt-5 mb-3 text-muted">© 2017–2021</p> */}
                {/* {currentUser ? <h1>Welcome, {currentUser.username}</h1> : null} */}
            </form>
            </main>
        </div>
    );
  }
  
  export default Login;