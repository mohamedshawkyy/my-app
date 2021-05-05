import React, { Component } from 'react';   
import NavBar from "./navbar";
import Shoppingcart from './shoppingcart';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './Home';
import About from './About';
import ProductDetails from './ProductDetails';
import NotFound from './notFound';
import Menu from './Menu';

class MyApp extends Component {
    state = {
        products: [
            { id: 1, name: "Burger", count: 0, price: 30, isInCart: false },
            { id: 2, name: "Fries", count: 0, price: 20, isInCart: false },
            { id: 3, name: "Cola", count: 0, price: 10, isInCart: false },
        ],
      };
      handlereset =()=>{
        let products = [...this.state.products]
       products = products.map(p=>
           {
               p.count=0;
               return p;
           })
           this.setState({products});
    }
    inc = (product )=> {
     //  this.setState({Count:this.product.Count+1});
     const products = [...this.state.products];
     const index = products.indexOf(product);
     products[index]={...products[index]};
     products[index].count++;
     this.setState({products})
     //console.log('+');
   }
   handledelete = (product) =>{
       const products = this.state.products.filter(p=>p.id !== product.id);
       this.setState({products});    
     
   }
   handleInCartChange = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    console.log( products[index].isInCart)
    //Set State
    this.setState({ products });
  
  };
    render() { 
        return (
        <React.Fragment>
            <NavBar
            count={this.state.products.filter((p) => p.isInCart).length}
            />
            <main className="container">
                <Switch>
                    <Route path="/Dets/:id" render={props=>(
                        <ProductDetails
                        products={this.state.products}
                        {...props}
                        />
                    )}/>
                    <Route
                          path="/menu"
                          render={(props) => (
                                <Menu
                                  {...props}
                                    products={this.state.products}
                                    onClick={this.handleInCartChange}
                                />
                        )}
                     />
                <Route path="/cart" render={props=>(
                        <Shoppingcart
                        products={this.state.products.filter((p) => p.isInCart)}
                        handlereset={this.handlereset}
                        inc={this.inc}
                        handledelete={this.handledelete}
                        {...props}
                        />
                    )}/>
                     <Route path="/notfound" component={NotFound} />
                    <Route path="/About" component={About}/>
                    <Route path="/home" exact component={Home}/>
                    <Redirect from="/" to="/home" />
                    <Redirect to="/notfound" />
               
                </Switch>
            {/* <Shoppingcart
              products={this.state.products}
              handlereset={this.handlereset}
              inc={this.inc}
              handledelete={this.handledelete}
            /> */}
            </main>
           
        </React.Fragment>
          );
    }
}
 
export default MyApp;