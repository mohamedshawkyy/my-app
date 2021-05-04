import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class product extends Component {
    // state = { 
    //     name: this.props.product.name,
    //     Count :this.props.product.count
    //  }
     getClasses()
     {
         return this.props.product.count ==0
         ?"badge badge-warning m-2"
         :"badge badge-primary m-2"
     }
    
    render() { 
        return (
            
            <div className="row">
                <div className="col-1 m-2">
             
                <span>
                    <Link to={`/Dets/${this.props.product.id}`}>
                    {this.props.product.name}</Link>
                   
                </span>
                </div>
                <div className="col-2">
        <span   className={this.getClasses()}>{this.props.product.count}</span>
        <button onClick={()=>this.props.oninc(this.props.product)} className="btn btn-primary">+</button>
        <button  onClick={()=>this.props.handledelete(this.props.product)} className="btn btn-danger m-1">Delete</button>
        </div>
            </div>
         );
    }
}
 
export default product;