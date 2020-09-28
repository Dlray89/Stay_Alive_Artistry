import React from 'react';
import { Route, Switch} from 'react-router-dom'
import './App.css';
import Intro from './components/Intro'
import Gallery from './components/Gallery'
import Sidebar from './components/UI/sidebar'

function App() {
  return (
    <div className="App">
     <Switch>
         <Route exact path='/' component={Intro}   />
         <Route exact path='/gallery' component={Gallery}   />
         <Route exact path='/sidebar' component={Sidebar}   />
     </Switch>
    </div>
  );
}

export default App;
