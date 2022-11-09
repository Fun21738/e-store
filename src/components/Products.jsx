import useFetch from "../hook/useFetch";
import "./productcard.css";
import { useContext, useState } from "react";
import { CategoryContext } from "../App";
import React from "react";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { newProduct } from "./Addproducts/Addproducts";

function Products({ data, setData }) {
  console.log(data);
  // const [data, setData] = useFetch("https://fakestoreapi.com/products");
  const [de] = useFetch(`https://fakestoreapi.com/products?sort=desc`);
  const [as] = useFetch(`https://fakestoreapi.com/products?sort=asc`);
  const [category] = useContext(CategoryContext);
  const [Ascendng, setAscendng] = useState("");
  // console.log(data);

  const handleChange = (e) => {
    setAscendng(e.target.value);

    if (Ascendng === "asc") {
      // console.info(Ascendng);

      setData(as);
    }
    if (Ascendng === "desc") {
      // console.info(Ascendng);

      setData(de);
    }
  };

  const navigate = useNavigate()

  const filterdata = () => {
    if (!category) return data;
    return data?.filter((item) => item.category === category);
  };

  const DataFiltered = filterdata();

  return (
    <>
    <div className="sort">
      <label htmlFor="sort">sort by:</label>
      <select className='sort-order' value={Ascendng} onChange={handleChange}>
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </div>
      

      <div className="product-container">
        {DataFiltered?.map((d) => (
          <div className="product-card" key={d.id}>
            <div className="image" onClick={()=> navigate(`/productdetails/${d.id}`)}>
              <img
                src={d?.image}
                alt="image_p"
                className="product-image"
                width={60}
              />
            </div>
            <div className="product-details-tag">
              <h4>
                Title: <span className="product-details">{d?.title}</span>
              </h4>
              <h4>
                Category: <span className="product-details">{d?.category}</span>
              </h4>
            </div>

            <div className="ratings">
              <p className="price">Price: {d?.price}</p>
              <p className="rate">Rate: {d?.rating.rate}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
