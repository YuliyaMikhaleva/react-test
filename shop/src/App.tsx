import React, {useEffect} from 'react';
import "./assets/styles.scss"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Products} from "./pages/products";
import {useAppDispatch} from "./hooks/hooks";
import {fetchProducts} from "./store/products/async";
import {Layout} from "./components/Layout/Layout";


function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchProductsList = () => dispatch(fetchProducts());
        fetchProductsList();//вызываем список товаров

    },[dispatch])

    // const category = useAppSelector(state => getGroupsObjects(state, -1))[0]?.id//название первой категории
    //
    // const subCategory = useAppSelector(state => getGroupsObjects(state, category))[0]?.id//название первой подкатегории
    //
    // const navigate = useNavigate()
    //
    // console.log(category, subCategory)
    // let products = useAppSelector(productsList)
    // if (products){
    //     navigate(`/${category}/${subCategory}`)
    // }

    return (
      <BrowserRouter>
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
