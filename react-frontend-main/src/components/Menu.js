import React, { Component, useEffect, useState } from 'react';
import StudentService from '../services/OrderService';






class ListMenu extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                students:[] 
          }
          this.addStudent=this.addStudent.bind(this);
          this.editStudent=this.editStudent.bind(this);
          this.deleteStudent=this.deleteStudent.bind(this);
          this.viewStudent=this.viewStudent.bind(this);
      }
    
     componentDidMount() {
         StudentService.getMenu().then((res) => {
             this.setState({students:res.data});
         });
     }
     
     addStudent()
     {
        
        this.props.history.push('/add-orders');
     }

     editStudent(id)
     {
        this.props.history.push(`/update-student/${id}`);
        
     }

     deleteStudent(id)
     {
        this.props.history.push(`/delete-student/${id}`);
        // StudentService.deleteStudent(id).then(res => {
        //     this.setState({
        //          student: this.state.students.filter(student => student.id !== id)
        //     })
        // })
        
     }

     viewStudent(id)
     {
        this.props.history.push(`/view-student/${id}`);
        
     }

    render() {
        return (
            <div>
                <h2 className="text-center">Menu</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addStudent}> Place an order</button>
                </div>
                <br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Menu Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                     student =>
                                     <tr key={student.id}>
                                         <td>{student.menuName}</td>
                                         <td> ${student.price}</td>
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

export default ListMenu;