import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage'
import Resume from './resume';
import Contact from './contact';
import AboutMe from './about';
import Project from './project';


const Main = () => (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={AboutMe} /> 
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/project" component={Project} /> 

    </Switch>

) 

export default Main;