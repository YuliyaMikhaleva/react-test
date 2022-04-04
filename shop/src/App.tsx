import React, {useEffect} from 'react';
import './App.scss';
import './variables.scss'
import "./assets/styles.scss"
import {Header} from "./components/Header/Header";
import {fetchProducts} from "./store/products/async";
import {useAppDispatch} from "./hooks/hooks";
import {SideBar} from "./components/SideBar/SideBar";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchProductsList = () => dispatch(fetchProducts());
        console.log('render')
        fetchProductsList();//вызываем список товаров
    },[dispatch])

  return (
    <div>
      <Header/>
      <section className="main">
          <section className="main__menu">
              <SideBar/>
          </section>

      </section>
    </div>
  );
}

export default App;
