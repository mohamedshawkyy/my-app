import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Product from './product';
//import ShoppingCart from './shoppingcar';
import {BrowserRouter} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import MyApp from './MyApp';



ReactDOM.render(
<BrowserRouter>
< MyApp/>
</BrowserRouter>,document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
