import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FcAlarmClock } from "react-icons/fc";
import { BsCoin } from "react-icons/bs";
import { FcFactory } from "react-icons/fc";
import { MdSavings } from "react-icons/md";
import { Card } from "react-bootstrap";
import "./Accounts.css";

function IWishDeposits() {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <div className="Deposite_hero_container"></div>
          </Col>
          <div className="Deposite_container">
            <div className="row">
              <div className="col-md-5">
                <div className="Deposite_container_content">
                  <h4>  <i class=" fa-sharp fa-brands fa-space-awesome"></i> Meet your goals with i wish goal based savings!</h4>
                 <p>An iWish for every wish you make</p>
                 <p><i class=" fa-solid fa-star"></i>* 8,83,678+ iWishes
                    fulfilled
                  </p>

                  <div className="Deposite_why_container iwish row-md 12">
                    <h2>Why iWish?</h2>
                    <Container>
                      <Row>
                        <Col md={6}>
                          <div className="deposite_icon"></div>
                          <BsCoin />
                          <h4>Easy slart</h4>
                          <p>Start small or big your choice</p>
                        </Col>
                        <Col md={6}>
                          <div className="deposite_icon">
                            <MdSavings />
                          </div>

                          <h4>Be ceration</h4>
                          <p>Earn assured returns on savings</p>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <div className="deposite_icon">
                            <FcFactory />
                          </div>
                          <h4>Be flexible</h4>
                          <p>Save any amount anytime</p>
                        </Col>
                        <Col md={6}>
                          <div className="deposite_icon">
                            <FcAlarmClock />
                          </div>
                          <h4>Fun habit</h4>
                          <p>Make savings a habit by setting up auto debits</p>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>

              <div className=" Deposite_goals_container_head col-md-7">
                <div className=" Deposite_goals_container">
                  <h4>
                    <i class="fa-sharp fa-solid fa-star"></i>Goals give our
                    lives meaning Take a leap with us.
                    <img
                      src="data:image/jpeg;base64,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"
                      className="img"
                    />
                  </h4>
                  <div className="Deposite_p_container">
                    <p>Select a category for your wish</p>
                    <Container>
                      <div className="Deposite_cards_deposite">
                        <Row>
                          <Col md={4}>
                            <Card>
                              <Card.Body>
                                <div className="Deposite_user_icon">
                                  <i class="fa-sharp fa-solid fa-car-side"></i>
                                  <h4>Dream Car</h4>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={4}>
                            <Card>
                              <Card.Body>
                                <div className="Deposite_user_icon">
                                  <i class="fa-sharp fa-solid fa-umbrella"></i>
                                  <h4>Holiday</h4>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={4}>
                            <Card>
                              <Card.Body>
                                <div className="Deposite_user_icon">
                                  <i class=" fa-sharp fa-solid fa-clock"></i>
                                  <h4>Gadgets</h4>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={4}>
                            <Card>
                              <Card.Body>
                                <div className="Deposite_user_icon">
                                  <i class="fa-sharp fa-solid fa-gift"></i>
                                  <h4>Celebration</h4>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={4}>
                            <Card>
                              <Card.Body>
                                <div className="Deposite_user_icon">
                                  <i class=" fa-sharp fa-solid fa-sack-dollar"></i>
                                  <h4>Emergency </h4>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={4}>
                           
                              <Card>
                                <Card.Body>
                                  <div className="Deposite_user_icon">
                                    <i class=" fa-sharp fa-solid fa-house-user"></i>
                                    <h4>New Home</h4>
                                  </div>
                                </Card.Body>
                              </Card>
                           
                          </Col>
                        </Row>
                      </div>
                      <div className=" Deposite_button_view">
                        <button1 type="button-view">
                          More categories ....
                        </button1>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Deposite_container_steps">
            <div className="create">
            <h1>create your iWish in 4 easy steps</h1>
            </div>
            <div className="Deposite_stapes_container">
              <div class="row">
                <div class="col-md-3">
                  <i class=" fa-sharp fa-solid fa-bullseye"></i>
                  <p>select category and goal name</p>
                </div>
                <div class="col-md-3">
                  <i class=" fa-sharp fa-solid fa-clock"></i>
                  <p>Enter Amount and team</p>
                </div>
                <div class="col-md-3">
                  <i class="fa-sharp fa-solid fa-file-invoice-dollar"></i>
                  <p>Select the debit account</p>
                </div>
                <div class="col-md-3">
                  <i class=" fa-sharp fa-solid fa-right-to-bracket"></i>
                  <p>Review detials and Submit</p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}



export default IWishDeposits;