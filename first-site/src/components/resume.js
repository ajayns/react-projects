import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return(
                <div>
                    <Grid>
                        <Cell col={4}>
                            <div style={{textAlign: "center"}}>
                            <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" alt="avatar" className="avatar-img" style={{height:"200px"}}/>
                            </div>
                            <h2 style={{paddingTop: "2em"}}>Avatar</h2>
                            <h4 style={{color: "grey"}}>Programmer</h4>
                            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />
                            <h5>Address</h5>
                            <p>Hnbgu,chauras campus,srinagar,246761,uttrakhand</p>
                            <h5>Phone</h5>
                            <p>(+91)-9660801827</p>
                            <h5>Email</h5>
                            <p>Shravanmeena47@gmail.com</p>   
                            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />
                            
                        </Cell>
                        <Cell className="resume-right-col" col={8}>
                         <h2>Education</h2>
                        <Education 
                            startYear={2002}
                            endYear={2006}
                            schoolName="My Univesrity"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        />

                        <Education  
                            startYear={2007}
                            endYear={2009}
                            schoolName="My 2nd Univesrity"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        />

                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />

                        <h2>Experience</h2>
                        <Experience 
                        startYear={2009}
                        endYear={2012}
                        jobName="My First Job"
                        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        />
                       <Experience 
                        startYear={2012}
                        endYear={2015}
                        jobName="My Second Job"
                        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        />
                        <hr style={{borderTop: "3px solid #833fb2", width: "50%"}} />

                        <h2>Skills</h2>
                        <Skills 
                            skill="javascript"
                            progress={100}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills 
                            skill="React"
                            progress={25}
                        />

                        </Cell>

                    </Grid>
                </div>
        )
    }
}

export default Resume;