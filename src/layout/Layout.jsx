import "./layout.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CategoryContext } from "../App";
import Addproducts from "../components/Addproducts/Addproducts";
// import useFetch from "../hook/useFetch";

function Layout({ data, setData }) {
  const [modal, setModal] = useState(false);
  const [, setCategory] = useContext(CategoryContext);
  // const [data, setData] = useFetch("https://fakestoreapi.com/products");

  console.log('data', data);

  const navigate = useNavigate();
  return (
    <>
      <div className="nav-content">
        <div className="nav-name">
          <h2 onClick={() => navigate("/allproducts")}>E-Store</h2>
        </div>

        <div className="nav-links">
          <ul>
            <li
              onClick={() => {
                navigate("/allproducts");
                // setCategory("");
                console.log(data);
              }}
            >
              ALL Products
            </li>
            <li
              onClick={() => {
                navigate("/allproducts");
                setCategory("electronics");
              }}
            >
              electronics
            </li>
            <li
              onClick={() => {
                navigate("/allproducts");
                setCategory("jewelery");
              }}
            >
              jewelery
            </li>
            <li
              onClick={() => {
                navigate("/allproducts");
                setCategory("men's clothing");
              }}
            >
              men's clothing
            </li>
            <li
              onClick={() => {
                navigate("/allproducts");
                setCategory("women's clothing");
              }}
            >
              women's clothing
            </li>
            <li onClick={() => setModal(!modal)}>Add Products</li>
            {modal && <Addproducts array={data} setArray={setData} setModal={setModal} />}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Layout;
