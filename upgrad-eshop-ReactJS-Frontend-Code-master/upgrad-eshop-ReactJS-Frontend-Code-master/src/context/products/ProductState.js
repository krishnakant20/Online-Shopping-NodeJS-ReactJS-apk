// import { useState } from "react";
// import ProductContext from "./ProductContext";
// import React from 'react'

// const ProductState = (props) => {
//     const host = "http://localhost:5000"
//     const productInitial = [];

//     const [products, setProducts] = useState(productInitial);

//     const getProducts = async () => {

//         // api call
//         const response = await fetch(`${host}/api/products`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmY2MwOGQwYjU0Yzc4Yjk2ODg3OWM2In0sImlhdCI6MTY0Mzk1NDM0NX0.0Zg7HZiAwYG6ZRq5_ZdKj5WI-rHmIDYbwkHJ3MCoW2I'
//             },
//         });
//         const json = await response.json();
//         console.log(json);
//         setProducts(json);

//     }

//     return (
//         <>
//         <ProductContext.Provider value={products,getProducts}>
//             {props.children}
//         </ProductContext.Provider>
//         </>
//     )
// }

// export default ProductState