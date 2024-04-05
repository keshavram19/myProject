import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Accounts.css";
import BankaccountSidebar from "../Sidebar/BankaccountSidebar";
import { Link } from "react-router-dom";

function RenewFD() {
  return (
    <section>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <Row>
          <div className="col-3">
            <BankaccountSidebar />
          </div>
          <div className="col-9">
            <div className="renew_container card">
              
              <h3 className="renew_container_heading">Renew your fixed deposit</h3>
              {/* <div className='renew_deposits_container  user d-flex justify-content-center align-item-center'>
                <i class="fa-sharp fa-solid fa-rectangle-xmark"></i>
                     <p> you currently do not have any FDs for Renewall</p> */}
              <table className="table table-bordered text-center" style={{ background:"#2fb68e", fontSize: "15px" }}>
                <thead>
                  <tr  style={{ background: "#2fb68e", color: "white" }}>
                    <th>Royal Islamic fixed deposit/ Card Account Number</th>
                    <th>fixed deposit Interest*</th>
                    <th>balence</th>
                    <th>Renew</th>
                  </tr>
                </thead>
                <tbody style={{ fontWeight: "400", fontSize: "15px" }}>
                  <tr>
                    <td>954302135437</td>
                    <td>150.0</td>
                    <td>2000</td>
                    <td>
                    <Link to={"/user/account/renewfixed"}style={{textDecoration:"underline"}}>Renew Now</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>954302135437</td>
                    <td>200.0</td>
                    <td>3000</td>
                    <td>
                    <Link to={"/user/account/renewfixed"}style={{textDecoration:"underline"}}>Renew Now</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>954302135437</td>
                    <td>1000.0</td>
                    <td>30000</td>
                    <td>
                    <Link to={"/user/account/renewfixed"}style={{textDecoration:"underline"}}>Renew Now</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>954302135437</td>
                    <td>20.0</td>
                    <td>500</td>
                    <td>
                    <Link to={"/user/account/renewfixed"}style={{textDecoration:"underline"}}>Renew Now</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* </div> */}
        </Row>
      </div>
    </section>
  );
}

export default RenewFD;