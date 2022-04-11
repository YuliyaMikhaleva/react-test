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
import {turnOfShowloader, turnOnShowloader} from "./store/showloader/showloaderSlice";
import {productsError, productsPending} from "./store/products/selectors";
import {ErrorMessage} from "./components/Error-message/Error-message";
import {getInfoError, getInfoPending} from "./store/info/selectors";
import {getBasketError, getPending} from "./store/basket/selectors";


function App() {
    const dispatch = useAppDispatch()
    const productsListPending = useAppSelector(productsPending)
    const productsListError = useAppSelector(productsError)
    const infoPending = useAppSelector(getInfoPending)
    const infoError = useAppSelector(getInfoError)
    const basketError = useAppSelector(getBasketError)
    // const basketPending = useAppSelector(getPending)
    const addLoader = () => dispatch(turnOnShowloader())
    const deleteLoader = () => dispatch(turnOfShowloader())

    if (productsListPending || infoPending){
        addLoader()
    } else {
        deleteLoader()
    }

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
          {(productsListError || infoError || basketError) && <ErrorMessage/>}
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
