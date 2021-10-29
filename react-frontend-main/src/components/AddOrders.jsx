import React, { Component } from 'react';
import StudentService from '../services/OrderService';

class AddStudent extends Component {
    constructor(props)
    {
        super(props)
        this.state={

           name:'',
           order:"",
           quantity:0,
           menu:[],
           method:"",
           address:"",
           total:0
        }
      
        
        this.nameHandler = this.nameHandler.bind(this);
        this.quantityHandler = this.quantityHandler.bind(this);

    }//constructor

    componentDidMount() {
        StudentService.getMenu().then((res) => {
            this.setState({menu:res.data});
        });
    }


 

     
    quantityHandler=(event) => {
        this.setState({
             quantity: event.target.value});
    }


    nameHandler=(event) => {
        this.setState({
           name: event.target.value});
    }

    orderHandler=(event) => {
        this.setState({
           order: event.target.value});
    }

     
    

    adressHandler=(event) => {
        this.setState({
            address: event.target.value});
    }

    methodHandler=(event) => {
        this.setState({
            method: event.target.value});
    }

    saveStudent = (e) => {
        e.preventDefault();

        let selection

        let Total = () =>  selection = this.state.menu.filter((item) => item.menuName === this.state.order)

        Total()
        
        let order={
            orderID: Math.floor(Math.random * 10),
            name: this.state.name,
            address:this.state.address,
            method:this.state.method,
            selection:this.state.order,
            quantity: this.state.quantity,
            total: this.state.quantity * selection[0].price,
        };


       
        StudentService.createStudent(order).then(res =>{
                this.props.history.push('/all-orders');  
            }).catch(err=>{
                console.log("record not saved.");
            });
       
       
        
        
    }//closing save method

    cancel(){
        this.props.history.push('/all-orders');
    }


   
    

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Place order </h3>
                          <div className="card-body">
                              <form>  
                                 
                                   <div className="form-group">
                                      <label>customer Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} required/>
                                   </div>   
                                   <div className="form-group">
                                      <label>Delivery adress: </label>
                                      <input placeholder="adress" name="grade" className="form-control"
                                         value={this.state.grade} onChange={this.adressHandler} required/>
                                   </div>   

                                     <div className="form-group" onChange={this.methodHandler} >
                                     <label>Delivery method: </label>
                                    <select name="methods" className="form-control">
                                    <option value="pick-up">pick-up</option>
                                    <option value="dine-in">dine-in</option>
                                    </select>
                                  </div>  

                                    <div className="form-group">
                                    <label>Order: </label>
                                    <select name="cars" id="cars" className="form-control" onChange={this.orderHandler} >

                                    {this.state.menu.map((item)=>{
                                        return(
                                            <option 
                                            value={item.menuName}
                                            >
                                                {item.menuName}
                                            </option>
                                        )
                                    })}
                                    </select>
                                    </div>  

                                    <div className="form-group">
                                    <label>Quantity: </label>
                                    <input placeholder="quantity" name="quantity" className="form-control"
                                      type="number"
                                      required
                                    onChange={this.quantityHandler} />
                                    <br/>
                                    
                                    </div> 


                                    <button className="btn btn-success" onClick={this.saveStudent}> Order 
                                    </button>
                                  <span>{"  "}</span>
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

export default AddStudent;