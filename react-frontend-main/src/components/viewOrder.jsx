import React, { Component } from 'react';
import OrderService from '../services/OrderService';

class ViewOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            order: {}

        }

        this.deleteOrder=this.deleteOrder.bind(this);



    }

    componentDidMount() {
        OrderService.getOrderById(this.state.id).then((res) => {
            this.setState({ order: res.data })
        });
      
    }

    
    deleteOrder(id)
    {
       this.props.history.push(`/delete-order/${id}`);
       OrderService.deleteOrder(id).then(res => {
           alert("Order deleted")
       })
       
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">View Order Details</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Order: </label>
                                        <input placeholder={this.state.order.name} name="name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity: </label>
                                        <input placeholder={this.state.order.quantity} name="quantity" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label> Delivery method: </label>
                                        <input placeholder={this.state.order.method}  name="del method" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label>Total: </label>
                                        <input placeholder={this.state.order.total}  name="total" className="form-control" />
                                    </div>
                                    <br />
                                    <div>
                                        {" "}
                                       
                                        <button className="btn btn-primary" onClick={() =>this.props.history.push("/all-orders/")}> view all orders</button>
                                        {" "}
                                        <button className="btn btn-danger" onClick={() =>this.deleteOrder(this.state.id)}>cancle</button>
                                        {"  "}
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewOrder;