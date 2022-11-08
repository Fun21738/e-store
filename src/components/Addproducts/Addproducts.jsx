import React, { useState, useRef } from "react";
 
 function Addproducts() {
    // const [newProductArray, setNewProductArray] = useState(null);

    const title = useRef(null);
    const description = useRef(null);
    const category = useRef(null);
    const price = useRef(null);
    const image = useRef(null);
    const rate = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();

        const newProduct = {
            id: 1,
            title: title.current.value,
            description: description.current.vslue,
            category: category.current.value,
            price: price.current.value,
            image: image.current.value,
            rating: {
                rate: rate.current.value
            }
        }

        // setNewProductArray(newProduct);
        console.log(newProduct);

        event.target.reset();
    }

   return (
     <div>
        <form onSubmit={handleSubmit}>
            <input ref={title} type="text" name="title" />
            <input ref={description} type="text" name="description" />
            <select ref={category} name="category">
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
            <input ref={price} type="number" name="price" />
            <input ref={image} type="file" name="image" />
            <input ref={rate} type="number" name="rate" />
            <input type="submit" value="SUBMIT" />
        </form>
     </div>
   )
 }
 
 export default Addproducts