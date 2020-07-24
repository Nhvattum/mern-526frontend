import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Signup from '/.conmponents/Signup'
import Login from '/.conmponents/Login'
import About from '/.conmponents/About'
import Welcome from '/.conmponents/Welcome'

function App() {
  return (
    <div className="App">
      <div className="react-router-logic">
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route path='/login' component={ Login } />
          <Route path='/about' component={ About } />
          <Route path='/' component={ Welcome } />
        </Switch>
      </div>
    </div>
  );
}

export default App;
