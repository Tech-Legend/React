import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Web_Image from './Web_Image';
import reportWebVitals from './reportWebVitals';
import {pic} from '../src/camstack.png'
import Web_name from './Web_name';
import Product_Image from './Product_Image';
import Product_descript from './Product_descript';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='header'>
      <div><Web_Image />
    </div>
    <div>
    <Web_name /></div>
    </div>
   <div className='section'>
   <div>
    <Product_Image />
    <Product_descript />
    </div>
    <div><About /></div>
   </div>
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
