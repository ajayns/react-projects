import React from 'react';
import Main from './components/MainComponent';
import { HashRouter, Switch, Route , Redirect} from 'react-router-dom';
import Aarogya from './components/arogya';
import Country from './components/country'
import Header from './components/HeaderComponent';
import FooterPage from './components/FooterPage';


function App () {
  return (
    <HashRouter>
      <div className='App'>
      <Header />
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/app' component={Aarogya} />
          <Route path='/country' component={Country} />
          <Redirect to="/" />
        </Switch>
        <FooterPage />
      </div>
    </HashRouter>
  )
}

export default App;