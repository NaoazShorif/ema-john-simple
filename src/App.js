import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import ProductDetaile from './components/ProductDetaile/ProductDetaile';
import Review from './components/Review/Review';

export default function App() {
  return (
    <div >
      <Router>
      <Header></Header>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route exact path='/'>
             <Shop></Shop>
          </Route>
          <Route path='/product/:productKey'>
            <ProductDetaile></ProductDetaile>
          </Route>
          <Route path='*'>
              <h1>404 Not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
;
