import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        
            <h5 className="title">Source Code</h5>
            <li className="list-unstyled">
                <a className="link" href="https://github.com/Udit-singh/Covid-19_Tracker">https://github.com/Udit-singh/Covid-19_Tracker</a>
              </li>
         
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Developer: <a href="https://github.com/Udit-singh"> Udit Singh.</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;