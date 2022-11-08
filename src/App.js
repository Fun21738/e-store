import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductsDetail from "./components/productsDetail";
import Layout from "./layout/Layout";
import {createContext, useState} from 'react'
// import Addproducts from "./components/Addproducts/Addproducts";


export const CategoryContext = createContext()

function App() {
  const [category, setCategory] = useState(null)
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={"/"} />
          <Route path="/allproducts" element={<Products />} />
          <Route path="allproducts/products/:id" element={<ProductsDetail />} />
        </Routes>
      </Router>
      {/* <Addproducts /> */}
    </CategoryContext.Provider>
  );
}

export default App;
