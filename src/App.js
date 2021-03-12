import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Component/Home';
import About from './Component/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './layout/Navbar';
import Form from './Component/Form';
import Table from './Component/Table';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/:id" component={About} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/form/:id" component={Form} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/form/:id" component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
