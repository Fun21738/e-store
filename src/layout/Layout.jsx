
import "./layout.css"
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useContext } from "react"
import { CategoryContext } from "../App"

function Layout() {

    const [, setCategory] = useContext(CategoryContext)

    const navigate = useNavigate()
  return (
    <>
        <div className="nav-content">
            <div className="nav-name">
                <h2 onClick={()=>navigate('/allproducts')}>E-Store</h2>
            </div>



            <div className="nav-links">
                <ul>
                    <li onClick={()=> {navigate("/allproducts"); setCategory("")}}>ALL Products</li>
                    <li onClick={()=> {navigate("/allproducts"); setCategory("electronics")}}>electronics</li>
                    <li onClick={()=> {navigate("/allproducts"); setCategory("jewelery")}}>jewelery</li>
                    <li onClick={()=> {navigate("/allproducts"); setCategory("men's clothing")}}>men's clothing</li>
                    <li onClick={()=> {navigate("/allproducts"); setCategory("women's clothing")}}>women's clothing</li>
                </ul>
            </div>
        </div>
    
    </>
  )
}

export default Layout;