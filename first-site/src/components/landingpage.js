import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
           
            <div style={ {width: "100%", margin: 'auto'} } >
              <Grid className="landing-grid">
                <Cell col={12}>
                <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" alt="avatar" className="avatar-img" />
                <div className="banner-text">
                   <h1>Full Stack Developer</h1>
                    
                <hr />

                  <p> HTML | CSS | BOOTSTRAP | JAVASCRIPT | REACT | NODEJS | EXPRESS | MONOGODB</p>
                  
                  <div className="social-link">
                        <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                           <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                        <a href="http://github.com" rel="noopener noreferrer" target="_blank">
                           <i className="fa fa-github-square" aria-hidden="true"/>
                        </a>
                        <a href="http://freecodcamp.com" rel="noopener noreferrer" target="_blank">
                           <i className="fa fa-free-code-camp" aria-hidden="true"/>
                        </a>
                        <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
                           <i className="fa fa-youtube-square" aria-hidden="true"/>
                        </a>
                </div>

                </div>
                </Cell>
              </Grid>
            </div>

        )
    }
}

export default Landing;