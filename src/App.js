import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Align from './components/Align/Align'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/influencerkart/card/detail' component={Align} />
          <Route path='/influencerkart/create/form' component={Form} />
        </Switch>
      </Router>
  )
  }
  
}

export default App;
