import React, {useEffect} from 'react';
import "./assets/styles.scss"
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/SideBar/SideBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Products} from "./pages/products";
import {Main} from "./pages/main";
import {useAppDispatch} from "./hooks/hooks";
import {fetchProducts} from "./store/products/async";


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
                              <Route path="/" element={<Main />}/>
                          </Routes>
                      </section>
                  </section>
              </div>

      </BrowserRouter>
  );
}

export default App;
