import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productcard.css"

export default function ProductsDetail() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = React.useState("");
  const url =`https://fakestoreapi.com/products/${id}`
  useEffect(() => {
    const getProductDatail = async () => {
      const res = await axios.get(url);
      console.log(res.data);
      setProductDetail(res.data);
    };
    getProductDatail();
  }, [url]);

  // console.log(productDetail);
  // console.log(id);
  return (
    <div className="each-product">
    <img src={productDetail.image} alt={productDetail.title}  width={170} />
      <h4>product details</h4>
      <h5 className="title">Title:{productDetail.title}</h5>
  
      <div>
        <p>Description: {productDetail.description}</p>
      </div>

      <div className="price">
        <p>Price:{productDetail.price}</p>
      
      </div>
    </div>
  );
}
