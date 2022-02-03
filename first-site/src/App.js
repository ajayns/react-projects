import React, { Component } from 'react';
import './App.css';
import {Navigation,Header,Layout,Drawer,Content,} from 'react-mdl';

import Main from './components/main';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
      
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: "none", color: "white"}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About </Link>
                <Link to="/project">Project </Link>
                <Link to="/contact">Contact </Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: "none", color: "black"}} to="/">MyPortfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About </Link>
                <Link to="/project">Project </Link>
                <Link to="/contact">Contact </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
