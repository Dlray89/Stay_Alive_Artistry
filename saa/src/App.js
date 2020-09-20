import React from 'react';
import { Route, Switch} from 'react-router-dom'
import './App.css';
import Intro from './components/Intro'
import Gallery from './components/gallery'

function App() {
  return (
    <div className="App">
     <Switch>
         <Route exact path='/' component={Intro}   />
         <Route exact path='/gallery' component={Gallery}   />
     </Switch>
    </div>
  );
}

export default App;
