import React, { Component } from 'react';   
import NavBar from "./navbar";
import Shoppingcart from './shoppingcart';
import {Route,Switch} from 'react-router-dom'
import Home from './Home';
import About from './About';
import ProductDetails from './ProductDetails';
class MyApp extends Component {
    state = {
        products: [
          { id: 1, name: "Burger", count: 1 },
          { id: 2, name: "Fries", count: 2},
          { id: 3, name: "Cola", count: 3 },
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
    render() { 
        return (
        <React.Fragment>
            <NavBar
            count={this.state.products.length}
            />
            <main className="container">
                <Switch>
                    <Route path="/Dets/:id" render={props=>(
                        <ProductDetails
                        products={this.state.products}
                        {...props}
                        />
                    )}/>
                <Route path="/cart" render={props=>(
                        <Shoppingcart
                        products={this.state.products}
                        handlereset={this.handlereset}
                        inc={this.inc}
                        handledelete={this.handledelete}
                        {...props}
                        />
                    )}/>
                    <Route path="/About" component={About}/>
                    <Route path="/" component={Home}/>
               
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