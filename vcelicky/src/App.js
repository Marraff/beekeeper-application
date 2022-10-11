import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import Menu from './pages/Menu.js'
import Register from './pages/Register'

//jednoduche vyuzitie react routru na presmerovanie 

function App() {

  return  (
    
  <Router>
    <Switch>
      <Route path="/" exact element={<Menu/>}/> 
      <Route path="/register" element={<Register/>}/>
    </Switch>
  </Router>
  
  );
}

export default App;
