import axios from 'axios';

const STUDENT_API_BASE_URL= "http://localhost:8081/ordermanagement";


class OrderService{

    getMenu(){
       return axios.get(STUDENT_API_BASE_URL+"/menu");
    }

    getOrders(){
        return axios.get(STUDENT_API_BASE_URL+"/all-orders");
     }

    createStudent(order){
        return axios.post(STUDENT_API_BASE_URL+"/addorder",order);
    }

    getOrderById(id){
        return axios.get(STUDENT_API_BASE_URL+"/order/"+id);
    }

   
    
    updateOrder(order){
        return axios.put(STUDENT_API_BASE_URL + "/updateorder/", order);
    }


    deleteOrder(id){
        return axios.delete(STUDENT_API_BASE_URL+"/delet-order/"+id);
    }

}

export default new OrderService();