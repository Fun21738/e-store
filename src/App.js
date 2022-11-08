import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Layout from "./layout/Layout";
import {createContext, useState} from 'react'


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
        </Routes>
      </Router>
    </CategoryContext.Provider>
  );
}

export default App;
