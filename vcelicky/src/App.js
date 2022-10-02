import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import Menu from './pages/Menu.js'

//jednoduche vyuzitie react routru na presmerovanie 

function App() {

  return  (
    
  <Router>
    <Switch>
      <Route path="/" element={<Menu/>}/> 
    </Switch>
  </Router>
  
  );
}

export default App;
