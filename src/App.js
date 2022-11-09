import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductsDetail from "./components/productsDetail";
import Layout from "./layout/Layout";
import {createContext, useState} from 'react';
import useFetch from "./hook/useFetch";
// import Addproducts from "./components/Addproducts/Addproducts";


export const CategoryContext = createContext()

function App() {
  const [category, setCategory] = useState(null);
  const [data, setData] = useFetch("https://fakestoreapi.com/products");
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Router>
        <Layout data={data} setData={setData} />
        <Routes>
          <Route path="/" element={"/"} />
          <Route path="/allproducts" element={<Products data={data} setData={setData} />} />
          <Route path="/productdetails/:id" element={<ProductsDetail />} />
        </Routes>
      </Router>
      {/* <Addproducts /> */}
    </CategoryContext.Provider>
  );
}

export default App;
