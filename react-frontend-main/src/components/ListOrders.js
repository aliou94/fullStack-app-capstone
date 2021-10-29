import React, { Component, useEffect, useState } from 'react';
import OrderService from '../services/OrderService';






class ListOrders extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                students:[] 
          }

          this.addOrder=this.addOrder.bind(this);
          this.editOrder=this.editOrder.bind(this);
          this.deleteOrder=this.deleteOrder.bind(this);
          this.viewOrder=this.viewOrder.bind(this);
      }
    
     componentDidMount() {
         OrderService.getOrders().then((res) => {
             this.setState({students:res.data});
         });
     }
     
     addOrder()
     {

       
        
        this.props.history.push('/add-orders');
     }

     editOrder(id)
     {

       
        this.props.history.push(`/update-order/${id}`);
        
     }

    //  deleteTaskFromDb(id) {
    //     return axios.delete(TASKS_API_BASE_URL + "/delete-task/" + id);
    // }

     deleteOrder(id)
     {
        this.props.history.push(`/delete-order/${id}`);
        OrderService.deleteOrder(id).then(res => {
            this.setState({
                 student: this.state.students.filter(student => student.id !== id)
            })
        })
        
     }

     viewOrder(id)
     {
        this.props.history.push(`/oder/${id}`);
        
     }

    render() {
        return (
            <div>
                <h2 className="text-center">Order inventory</h2>
                <div> 
                    <button className="btn btn-primary" onClick={()=>this.addOrder()}> Place an order</button>
                </div>
                <br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Addres </th>
                                <th>Method</th>
                                <th>Order</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                     student =>
                                     <tr key={student.orderID}>
                                         <td>{student.name}</td>
                                         <td>{student.address}</td>
                                         <td>{student.method}</td>
                                         <td>{student.selection}</td>
                                         <td>{student.quantity}</td>
                                         <td>${student.total}</td>
                                         <td>
                                         <button onClick={() =>this.editOrder(student.orderID)}  className="btn btn-primary">Update</button>
                                         {" "} 
                                            <button onClick={() =>this.deleteOrder(student.orderID)} className="btn btn-danger">Delete</button> 
                                            {" "}
                                            <button onClick={() =>this.viewOrder(student.orderID)} className="btn btn-primary">View</button> 
                                            {"  "}
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListOrders