
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import AddEditing from './pages/AddEditing';
import {BrowserRouter,Route,Switch} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div>
      <ToastContainer position='top-center'/>
      <Switch>
      <Route exact path='/'  component={Home}/>
      <Route  path="/addContact" component={AddEditing}/>
      <Route  path="/put/:id" component={AddEditing}/>

      </Switch>
        </div>
        </BrowserRouter>
    
  );
}

export default App;
