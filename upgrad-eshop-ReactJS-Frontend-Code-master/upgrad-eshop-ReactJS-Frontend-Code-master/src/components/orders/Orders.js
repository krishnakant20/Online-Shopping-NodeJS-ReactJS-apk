import React from 'react'
import { Link } from 'react-router-dom'
import './Orders.css'


const Orders = () => {

    return (
        <>
            <h1>Fast Orders Delivery </h1>
            <div className='flexContainer my-5'>

                <div className="card" style={{ "width": "18rem" }}>
                    <h3>Review Item</h3>
                    <img src={require("../../assests/images/2.jpg")} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Product</h5>
                        <p className="card-text">Description</p>
                        {/* <Link to="/thanks" className="btn btn-success">Place Order</Link> */}
                    </div>
                </div>

                <div className="card" style={{ "width": "18rem" }}>
                    <h3>Address</h3>
                    <form>
                        <div className="mb-3">
                            {/* <label for="name" className="form-label">First Name</label> */}
                            <input type="text" className="form-control" id="firstname" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input type="number" className="form-control" id="phone" placeholder="Mobile Number" />
                        </div>
                        <div className="mb-3">
                            {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input type="text" className="form-control" id="street" placeholder="Street" />
                        </div>
                        <div className="mb-3">
                            {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input type="text" className="form-control" id="city" placeholder="City" />
                        </div>
                        <div className="mb-3">
                            {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input type="text" className="form-control" id="state" placeholder="State" />
                        </div>
                        <div className="mb-3">
                            {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input type="text" className="form-control" id="landmark" placeholder="Landmark" />
                        </div>
                        <div className="mb-3">
                            {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input type="number" className="form-control" id="zipcode" placeholder="Zipcode" />
                        </div>

                        <button type="submit" className="btn btn-success">Add Address</button>
                    </form>
                </div>
                <div className="card" style={{ "width": "18rem" }}>
                    <h3>Place your Order</h3>
                    <Link to="/thanks" className="btn btn-success">Place Order</Link>
                </div>
            </div>

        </>
    )
}

export default Orders