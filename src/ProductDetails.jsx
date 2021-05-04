import React, { Component } from 'react';   
const ProductDetails = (props) => {
 const product = props.products.filter(p=> p.id === parseInt(props.match.params.id))[0];
return ( 
<React.Fragment>
<h2>Details {props.match.params.id}</h2> 
<h2>{product.name}</h2>

</React.Fragment>
)
}
 
export default ProductDetails;