
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

import Medicines from './Pages/Medicines/Medicines';
import NotFound from './Pages/NotFound/NotFound';

import Footer from './Pages/Shared/Header/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route path="/home">
              <Home></Home>

            </Route>
            <PrivateRoute path="/medicine">
              <Medicines></Medicines>

            </PrivateRoute>

            <Route path="/login">
              <Login></Login>

            </Route>

            <PrivateRoute exact path="/about">
              <About></About>

            </PrivateRoute>



            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>

            </PrivateRoute>





            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>




        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;
