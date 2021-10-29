import React, { Component } from 'react';
import OrderService from '../services/OrderService';

class UpdateStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: parseInt(this.props.match.params.id),
            name: '',
            order: "",
            quantity: 0,
            menu: [],
            method: "",
            address: "",
            total: 0
        }


        this.nameHandler = this.nameHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
       

    }
    //constructor

    componentDidMount() {

        OrderService.getMenu().then((res) => {
            this.setState({ menu: res.data });
        });

        OrderService.getOrderById(this.state.id).then((res) => {
            let order = res.data;
            this.setState({
                name: order.name,
                quantity: order.quantity,
                order: order.selection,
                method: order.method,
                address: order.address,
                total: order.total,


            });
        });

    

    }


    nameHandler = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    quantityHandler = (event) => {
        this.setState({
            quantity: event.target.value
        });
    }

    orderHandler = (event) => {
        this.setState({
            order: event.target.value
        });
    }

    addressHandler = (event) => {
        this.setState({
            address: event.target.value
        });
    }

    methodHandler = (event) => {
        this.setState({
            method: event.target.value
        });
    }



    updateStudent = (e) => {
        e.preventDefault();

        let choice

        let Total = () => choice = this.state.menu.filter((item) => item.menuName === this.state.order)

        Total()

      
        let order = {
            orderID: this.state.id,
            name: this.state.name,
            method: this.state.method,
            address: this.state.address,
            selection: this.state.order,
            quantity: this.state.quantity,
            total: this.state.quantity * choice[0].price,
        };

        
        
        OrderService.updateOrder(order)
        .then((res) => {

            console.log(res)
            // this.props.history.push('/all-orders');
        });


    }

    cancel() {
        this.props.history.push('/all-orders');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Order</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name: </label>
                                        <input placeholder={this.state.name} name="name" className="form-control"
                                            value={this.state.name} onChange={this.nameHandler} required />
                                    </div>
                                    <div className="form-group">
                                        <label>Address: </label>
                                        <input placeholder={this.state.address} name="grade" className="form-control"
                                            value={this.state.address} 
                                            onChange={this.addressHandler}
                                            required
                                             />
                                    </div>
                                    <div className="form-group">
                                        <label>order: </label>
                                        <select  className="form-control" onChange={this.orderHandler} >

                                            {this.state.menu.map((item) => {
                                                return (
                                                    <option
                                                     required={true}
                                                        key={item.MenuID}
                                                        value={item.menuName}
                                                    >
                                                        {item.menuName}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>quantity: </label>
                                        <input 
                                        required={true}
                                        placeholder={this.state.quantity}
                                         className="form-control"
                                            value={this.state.grade} onChange={this.quantityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Delivery Method: </label>
                                        <select name="methods" className="form-control" onChange={this.methodHandler}>
                                            <option value="pick-up">pick-up</option>
                                            <option value="dine-in">dine-in</option>
                                        </select>
                                    </div>
                                    <br />
                                    <button className="btn btn-success" onClick={this.updateStudent} type="submit"> Update </button>
                                    {" "}
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudent;