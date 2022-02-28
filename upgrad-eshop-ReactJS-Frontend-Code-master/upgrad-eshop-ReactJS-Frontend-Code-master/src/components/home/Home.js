import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <h1 id='homeHeading'>Welcome to Online Shop </h1>
    <Link to="/products" className="btn btn-success my-3">Click to See New Products</Link>
    <img src={require("../../assests/images/3.jpg")} className="card-img-top" alt="123" />

    </>
  )
}

export default Home