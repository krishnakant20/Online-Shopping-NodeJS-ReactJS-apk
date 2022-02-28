import React from 'react'
import './thanks.css'

const Thanks = () => {
    return (
        <>
        <div className='bodyThanks my-3 container'>

            <h1>Thank You for Your Order</h1>
            <h3>We will deliver your order very fast</h3>
            <img src={require("../../assests/images/4.jpg")} alt="123" style={{ width: 400, height: 400 }} />
        </div>

        </>
    )
}

export default Thanks