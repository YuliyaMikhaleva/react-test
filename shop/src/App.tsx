import React, {useEffect} from 'react';
import "./assets/styles.scss"
import {Header} from "./components/Header/Header";
import {fetchProducts} from "./store/products/async";
import {useAppDispatch} from "./hooks/hooks";
import {SideBar} from "./components/SideBar/SideBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Products} from "./pages/products";



function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchProductsList = () => dispatch(fetchProducts());
        fetchProductsList();//вызываем список товаров

    },[dispatch])

    return (
      <BrowserRouter>
          <div>
              <Header/>
              <section className="main">
                  <section className="main__menu">
                      <SideBar/>
                      <Routes>
                          <Route path="/:category/:subcategory" element={<Products />}/>
                      </Routes>
                  </section>
              </section>
          </div>
      </BrowserRouter>
  );
}

export default App;
