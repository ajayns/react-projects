import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends  Component {
    render() {
        return(
            
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Avatar</h2>
                        <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" alt="avatar" className="avatar-img" style={{height:"150px"}}/>
                        <p style={{paddingTop:"1em",width:"75%",margin:"auto"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Conatct Me</h2>
                        <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
                                  <i className="fa fa-phone-square" aria-hidden="true" /> (+91)-9660801827
                                </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
                                  <i className="fa fa-fax" aria-hidden="true" /> (+91)-9660801827
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
                                  <i className="fa fa-envelope" aria-hidden="true" /> Shravanmeena47@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: "25px", fontFamily: "Anton"}}>
                                  <i className="fa fa-skype" aria-hidden="true" /> MySkypeId
                                </ListItemContent>
                            </ListItem>
                            </List>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;