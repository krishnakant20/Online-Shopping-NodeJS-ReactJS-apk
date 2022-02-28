import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getList } from '../products/APIproductsItem';

const Details = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])
  return (
    <>
      <h1>Details page</h1>
      <div>
        {list.map(item => {
          return <div className="card my-3" style={{ "width": "18rem" }} key={item._id} >
            <img src={item.imageUrl} className="card-img-top" alt="123" style={{ width: 300, height: 300 }} />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <div>Manufacturer: {item.manufacturer}</div>
              <div>Available Items: {item.availableItems}</div>
              <p className="card-text">Description: {item.description}</p>
              <p className="card-text">Price: {item.price}</p>
              {/* <Link to="/products/details" className="btn btn-primary">BUY</Link> */}
              <Link to="/orders" className="btn btn-primary">Place Order</Link>

            </div>
          </div>
        })}
      </div>
      <div className="card" style={{ "width": "18rem" }}>
        <img src={require("../../assests/images/2.jpg")} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/orders" className="btn btn-primary">Place Order</Link>
        </div>
      </div>
    </>
  )
}

export default Details