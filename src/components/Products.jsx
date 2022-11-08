import useFetch from "../hook/useFetch";
import "./productcard.css"
import { useContext } from "react";
import { CategoryContext } from "../App";
import React from 'react'

function Products() {

  const [data] = useFetch('https://fakestoreapi.com/products');

  const [category] = useContext(CategoryContext)

  console.log(data);

  const filterdata= ()=>{
    if(!category) return data;
    return data?.filter((item)=>item.category === category);
  }


  const DataFiltered = filterdata()

  return (
    <>
    
    <div className="product-container">

        {DataFiltered?.map(d => (
            <div className="product-card" key={d.id}>
                
                <div className="image">
                    <img src={d?.image} alt="image_p" className="product-image" width={60} />
                </div>
                <div className="product-details-tag">
                    <h4>Title: <span className="product-details">{d?.title}</span></h4>
                <h4>Category: <span className="product-details">{d?.category}</span></h4>
                </div>
                
                <div className="ratings">
                    <p className="price">Price: {d?.price}</p>
                    <p className="rate">Rate: {d?.rating.rate}</p>
                </div>
            </div>
            
        ))}
    </div>
        
    </>
    
  )
}

export default Products;