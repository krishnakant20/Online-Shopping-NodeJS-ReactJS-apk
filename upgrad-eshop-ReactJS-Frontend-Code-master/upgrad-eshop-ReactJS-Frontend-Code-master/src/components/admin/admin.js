import React from 'react'
import { Link } from 'react-router-dom'


const Admin = () => {
    return (
        <>
        <div className='container loginPage my-3'>
            <h2>Admin Login</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Agree T&C</label>
                </div>
                <Link to="/products" className="btn btn-success">
                    <button type="submit" className="btn btn-success">Login</button>
                </Link>
            </form>
        </div>
    </>
    )
}

export default Admin