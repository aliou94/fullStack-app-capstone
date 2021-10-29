import React, { Component } from 'react';
import OrderService from '../services/OrderService';

class DeleteStudent extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 name:'',
                 method:'',
                 quantity:"",
                 order:"",
                 total:""
             }
     
        
        this.deleteOrder= this.deleteOrder.bind(this);

    }//constructor

     componentDidMount()
     {
        OrderService.getOrderById(this.state.id).then((res) =>{
          let order = res.data;
          this.setState({
               name:order.name,
               order:order.selection,
               method:order.method,
               quantity:order.quantity,
                total:order.total
                });
        });
           
     }
     
    

     deleteOrder = (e) => {
        e.preventDefault();
   
       
        OrderService.deleteOrder(this.state.id).then( res => { 
            this.props.history.push('/all-orders');
        })
      
        
    }

    cancel(){
        this.props.history.push('/all-orders');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Student</h3>
                          <div className="card-body">
                              <form>    
                                   <div className="form-group">
                                      <label>Name: </label>
                                      <input placeholder="Name" readOnly={true} name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>order: </label>
                                      <input placeholder={this.state.order} readOnly={true} name="grade" className="form-control"
                                         value={this.state.selection} onChange={this.gradeHandler} />
                                   </div> 
                                   <div className="form-group">
                                      <label>quantity: </label>
                                      <input placeholder="quantity" readOnly={true} name="grade" className="form-control"
                                         value={this.state.quantity} onChange={this.gradeHandler} />
                                   </div>  
                                   <div className="form-group">
                                      <label>method: </label>
                                      <input placeholder="method" readOnly={true} name="grade" className="form-control"
                                         value={this.state.method} onChange={this.gradeHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label>Total: </label>
                                      <input placeholder="Order" readOnly={true} name="grade" className="form-control"
                                         value={this.state.total} onChange={this.gradeHandler} />
                                   </div>
                                   <br/>
                                                       
                              </form>
                              <button className="btn btn-success" onClick={this.deleteOrder.bind(this)}> Delete </button>
                                    {" "}
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button> 
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeleteStudent;