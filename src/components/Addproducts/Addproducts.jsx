import React, { useRef } from "react";
import './Addproducts.css'

 function Addproducts({setModal, array, setArray}) {
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
            description: description.current.value,
            category: category.current.value,
            price: price.current.value,
            image: image.current.value,
            rating: {
                rate: rate.current.value
            }
        }

        // return newProduct;
        console.log(newProduct);
        // array.push(newProduct);
        setArray([newProduct, ...array]);
        console.log(array);
        // newProductArray = newProduct;
        

        event.target.reset();
        setModal(false)
    }

   return (
    <div className="modal">
         <div className="modal-content">
            <h4 className="modal-head">ADD NEW PRODUCT</h4>
        <form  className="modal-form" onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input ref={title} type="text" name="title" />
            <label htmlFor="description"> Description</label>
            <input ref={description} type="text" name="description" />
            <label htmlFor="category">Category:</label>
            <select ref={category} name="category">
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
            <label htmlFor="price">Price:</label>
            <input ref={price} type="number" name="price" />
            <label htmlFor="image">Image:</label>
            <input ref={image} type="file" name="image" />
            <label htmlFor="rate">Rate:</label>
            <input ref={rate} type="number" name="rate" />
            <input className="btn" type="submit" value="SUBMIT" />
        </form>
     </div>
    </div>
    
   )
 }
 
 export default Addproducts