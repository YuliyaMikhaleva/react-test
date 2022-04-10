import React, {useEffect} from 'react';
import "./assets/styles.scss"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Products} from "./pages/products";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {fetchProducts} from "./store/products/async";
import {Layout} from "./components/Layout/Layout";
import {loadDescription} from "./store/info/async";
import {getShowloader} from "./store/showloader/selectors";
import {Loader} from "./components/ui-kit/Loader/Loader";


function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchProductsList = () => dispatch(fetchProducts());
        fetchProductsList();//вызываем список товаров
        const productsDescription = () => dispatch(loadDescription());
        productsDescription();//вызываем массив с описаниями
    },[dispatch])

    const showloader = useAppSelector(getShowloader)

    return (
      <BrowserRouter>
          {showloader && <Loader/>}
                          <Routes>
                              <Route path="/" element={<Layout/>}>
                                  <Route path="/:category/:subcategory" element={<Products />}/>
                                  <Route path="/" element={<Navigate to="14/15"/>} />
                              </Route>
                          </Routes>
      </BrowserRouter>
  );
}

export default App;
