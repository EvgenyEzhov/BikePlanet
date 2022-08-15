import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import Slicker from './components/Slicker/Slicker';
import Catalog from './components/Catalog/Catalog';
import Communication from './components/Communication/Communication';
import Brands from './components/Brands/Brands';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <NavMenu />
    <Slicker /> 
    <Catalog />
    <Communication />
    <Brands />
    <Footer />   
  </React.StrictMode>
);

