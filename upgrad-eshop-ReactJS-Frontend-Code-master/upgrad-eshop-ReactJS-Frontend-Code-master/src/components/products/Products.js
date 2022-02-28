import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getList,setItem } from './APIproductsItem';

const Products = () => {

    const [itemInput, setItemInput] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(itemInput)
      };

    return (
        <>
            <h1>Products page</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Add New Item</p>
                        <input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} />
                    </label>
                    <button type="submit">Submit</button>
                </form >
            </div>

            <div>
                {list.map(item => {
                    return <div className="card my-3" style={{ "width": "18rem" }} key={item._id} >
                        {/* <img src={require("../../assests/images/7.jpg")} className="card-img-top" alt="123" /> */}
                        <img src={item.imageUrl} className="card-img-top" alt="123" style={{ width: 300, height: 300 }} />

                        <div className="card-body">
                            <h3 className="card-title">{item.name}</h3>
                            <p className="card-text">Description: {item.description}</p>
                            <p className="card-text">Price: {item.price}</p>
                            <Link to="/products/details" className="btn btn-primary">BUY</Link>
                        </div>
                    </div>
                })}
            </div>
            <div className="card" style={{ "width": "18rem" }}>
                <img src={require("../../assests/images/1.jpg")} className="card-img-top" alt="123" />
                <div className="card-body">
                    <h5 className="card-title">Product title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/products/details" className="btn btn-primary">BUY</Link>
                </div>
            </div>

        </>
    )
}

export default Products