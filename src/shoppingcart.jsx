import React, { Component } from 'react';
import Product from './product';
//import product from './product';
//import product from './product';

class shoppingcart extends Component {
   
  
    render() { 
        return ( 
            <React.Fragment>
                <h2>shopping cart</h2>
                <button onClick={this.props.handlereset} className="btn btn-secondary">Reset</button>
            {this.props.products.map(p=>(
                <Product
                 key={p.id}
                 product={p}
                 handledelete={this.props.handledelete}
                 oninc={this.props.inc} >
                    name
                    </Product>
            ))}
            </React.Fragment>
         );
    }
}
 
export default shoppingcart ;