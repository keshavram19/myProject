//import React from "react";
import React from "react";
import { Row, Col,  Table, Container } from "react-bootstrap";
import "./Loans.css";

function Viewaccount() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="renew_hero_container"></div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <div className="view_container">
            <div className="view-container_headding ">
              <h4>Account Summary</h4>
            </div>
            <div className="renew_deposits_container col-lg-12 user d-flex justify-content-between align-item-center">
              <Table>
                <tbody>
                  <tr>
                    <div className="view_table_product">
                      <div className="row">
                        <div className="col-md-8">
                          <td>Product Name</td>
                          <td>Loan Account#</td>
                          <td>Sanctioned Amount ($)</td>
                          <td>Total Principal Outstanding ($)</td>

                          <td>Current Overdues ($)</td>
                          <td>Amount Overdues ($)</td>
                          {/* <i class="fa-solid fa-indian-rupee-sign"></i> */}
                          <td>Due Date</td>
                        </div>
                        <div className=" view_checkbox_conteanier col-md-4">
                          <div className="view_conteanier">
                            <div
                              className="view_checkbox"
                              style={{ width: "100%" }}
                            >
                              <label className="sanctioned_label">
                                <input type="checkbox" name="schedule" />
                                Sanctioned Amount(SA)
                              </label>

                              <label className="Disbusred_label">
                                <input type="checkbox" name="schedule" />
                                Disbursed Amount(DA)
                              </label>

                              <label className="Outstanding_label">
                                <input type="checkbox" name="schedule" />
                                Outstanding Ammount(OA)
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="view_personai_loan">
                      <p>personial instalment </p>
                      <div className=" view_date_container col-md-5">
                        <p1>05/02/2024</p1>
                      </div>
                    </div>

                    <div className="view_personai_loan">
                      <p>loan </p>
                      {/* <div className=" garph_view  col-md-7 "> */}
                      <div className="graph-container">
                        <div className="graph_container1">
                          <div
                            className="percentage-label"
                            style={{ bottom: "33%" }}
                          >
                            100.00%
                          </div>
                          <div
                            className="percentage-label"
                            style={{ bottom: "33%" }}
                          >
                            100.00%
                          </div>
                          <div
                            className="percentage-label"
                            style={{ bottom: "33%"  }}
                          >
                            99.33%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* </div> */}
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="view_container_note">
              <p>
                **The loan account information provided herein is only
                indicative in nature and no representation is given as to the
                accuracy of the whole or any part of this information,due to
                reasons including payment realisation,system updation in general
                and assume no liability for any errors,omissions or inaccuracies
                on the statement herein provided.Any discrepancies or
                differences between the information,numbers provided by the
                branch and the informati provided herein,information provided by
                the branch will prevail.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Viewaccount;
