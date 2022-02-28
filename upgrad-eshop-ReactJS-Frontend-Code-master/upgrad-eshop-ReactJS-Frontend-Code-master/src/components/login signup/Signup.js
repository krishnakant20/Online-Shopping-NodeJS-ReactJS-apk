import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <>
            <div className='container signupPage'>
                <h2>Sign Up</h2>
                <form>
                    <div className="mb-3">
                        {/* <label for="name" className="form-label">First Name</label> */}
                        <input type="text" className="form-control" id="firstname" placeholder="First Name" />
                    </div>
                    <div className="mb-3">
                        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="text" className="form-control" id="lastname" placeholder="Last Name" />
                    </div>
                    <div className="mb-3">
                        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <div className="mb-3">
                        {/* <label for="exampleInputPassword12" className="form-label">Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword12" placeholder='Confirm Password' />
                    </div>
                    <div className="mb-3">
                        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input type="number" className="form-control" id="phone" placeholder="Mobile Number" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Agree to terms & Conditions</label>
                    </div>
                    <Link to="/products" className="btn btn-success">
                    <button type="submit" className="btn btn-success">Sign Up</button>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Signup