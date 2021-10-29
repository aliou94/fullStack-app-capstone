import Menu from './components/Menu';
import ListOrders from './components/ListOrders';
import AddStudent from './components/AddOrders';
import UpdateStudent from './components/UpdateOrder';
import DeleteStudent from './components/DeleteOrders';
import ViewOrder from './components/viewOrder';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div>
          <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" exact component={Menu}></Route>
                  <Route path="/all-orders" component={ListOrders}></Route>
                  <Route path="/add-orders" component={AddStudent}></Route>
                  <Route path="/update-order/:id" component={UpdateStudent}></Route> 
                  <Route path="/delete-order/:id" component={DeleteStudent}></Route> 
                  <Route path="/oder/:id" component={ViewOrder}></Route> 
                  
              </Switch>
            </div>
            <Footer />
            
          </Router>
        </div>
  );
}

export default App;
