import React from "react";

function Login() {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center shadow">
            <form className="col-6 border-bottom border-black">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="text-center mt-3 mb-5">
                <label htmlFor="googleSignInButton" className="w-50">
                    <img id="googleSignInButton" className="img-fluid" src="https://samfw.com/assets/img/btn_google_signin.png" alt="Google Sign In" />
                </label>
            </div>
        </div>
    );
}

export default Login;
