import React, { useState, useRef } from "react";
import "./FinancialJourney.css";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import OverViewSidebar from '../../Sidebar/OverViewSidebar';
import nextImage from '../../../../../Images/next.png';
import secure from '../../../../../Images/encrypted.png';

const FinancialJourney = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const [arrowDisable1, setArrowDisable1] = useState(true);
  const [arrowDisable2, setArrowDisable2] = useState(true);
  const [arrowDisable3, setArrowDisable3] = useState(true);

  const handleHorizontalScroll = (elementRef, speed, distance, step, setArrowDisable) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      elementRef.current.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (elementRef.current.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div style={{ backgroundColor: "#f8f8f8", marginTop: "60px" }} className="financial_journey">
      <div className="container-fluid pt-5 pb-5">
        <div className="row">
          <div className="col-3">
            <OverViewSidebar />
          </div>
          <div className="col-6">

            {/* Section 1 */}
            <div className="financial_journey_col_6_row3">
              <h6 className="mt-4"> credit cards</h6>
              <div className="d-flex">
                <button
                
                  onClick={() => {
                    handleHorizontalScroll(section1Ref, 25, 200, -10, setArrowDisable1);
                  }}
                  disabled={arrowDisable1}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronLeft />
                </button>

                <div className="financial_journey_col_6_row01" ref={section1Ref}>
                  <div class="">
                    <div class="financial_journey_col_6_row3_grid_item">


                      <div className="card financial_journey_col_6_row1_card_3">
                        <h6>CREDIT / DEBIT CARDS</h6>
                        <p>
                          Change your credit/debit card PIN Online
                          every 3 months
                        </p>
                        <Link to="">
                          <button className="financial_journey_arrow_button">Change PIN</button>
                        </Link>
                      </div>


                      <div className="card financial_journey_col_6_row1_card_3">
                        <h6>Term Life Insurance</h6>

                        <Link to="">
                          <button className="financial_journey_arrow_button">Insure Now</button>
                        </Link>
                      </div>
                      <div className="card financial_journey_col_6_row1_card_3">
                        <h6>UNBLOCK CARDS</h6>
                        <p>
                          Get your card unblocked digitally with ease
                        </p>
                        <Link to="">
                          <button className="financial_journey_arrow_button">Unblock now</button>
                        </Link>
                      </div>
                      <div className="card financial_journey_col_6_row1_card_3">
                        <h6>Internet Banking </h6>
                        <p>
                          Change your Internet banking password every 3 months
                        </p>
                        <Link to="">
                          <button className="financial_journey_arrow_button">Change Password</button>
                        </Link>
                      </div>
                      <div className="card financial_journey_col_6_row1_card_3">
                        <h6>Cheque Leaves</h6>
                        <p>
                          Running out of cheque leaves ? Request for cheque book online
                        </p>
                        <Link to="">
                          <button className="financial_journey_arrow_button">Initiate Request</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleHorizontalScroll(section1Ref, 25, 200, 10, setArrowDisable1);
                  }}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Section 2 */}
            <div className="financial_journey_col_6_row3">
              <h6 className="mt-4"> Our Handpicks for you!!</h6>
              <div className="d-flex">
                <button
                  onClick={() => {
                    handleHorizontalScroll(section2Ref, 25, 200, -10, setArrowDisable2);
                  }}
                  disabled={arrowDisable2}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronLeft />
                </button>

                <div className="financial_journey_col_6_row01" ref={section2Ref}>
                  <div class="">
                    <div class="financial_journey_col_6_row3_grid_item">


                      <div className="card financial_journey_col_6_row1_card_3">

                        <h6>Credit Card Bill</h6>
                        <div className="financial_journey_second_row">
                          <p>
                            Card Number
                          </p>
                          <span>4047458189167510</span>

                          <p>
                            Total Amount Due
                          </p>
                          <span>INR 45152.00</span>
                          <p>
                            Due on 27-01-2024
                          </p>
                        </div>
                        <Link to="">
                          <button className="financial_journey_arrow_button">PAY NOW </button>
                        </Link>
                      </div>

                      <div className="card financial_journey_col_6_row1_card_3">


                        <div className="financial_journey_second_row_second_column">
                          <h6>
                            <img src={nextImage} alt="next" width={16}></img> Transfer Money
                          </h6>
                          <p>Experience a faster and smarter way of sending money to your dear ones</p>
                          <p>Transfer funds directly from anywhere without any worries and save time
                            on ATM visits too. T&C apply
                          </p>

                        </div>
                        <Link to="">
                          <button className="financial_journey_arrow_button">PAY NOW </button>
                        </Link>
                      </div>


                      <div className="card financial_journey_col_6_row1_card_3">


                        <div className="financial_journey_second_row_second_column">
                          <h6>
                            <img src={nextImage} alt="next" width={16}></img> Recharge ON-the-GO
                          </h6>
                          <p>Stop worrying about the call ending abruptly at the wrong time</p>
                          <p>Choose attractive plans from your operator and recharge your mobile. T&C Apply
                          </p>

                        </div>
                        <Link to="">
                          <button className="financial_journey_arrow_button">PAY NOW </button>
                        </Link>
                      </div>


                      <div className="card financial_journey_col_6_row1_card_3">


                        <div className="financial_journey_second_row_second_column">
                          <h6>
                            <img src={nextImage} alt="next" width={16}></img> Utility Bills
                          </h6>
                          <p>Manage your utility bills smartly at one place</p>
                          <p>Take care of all your monthly electricity, telecom, DTH, gas or internet broadband bills. T&C Apply
                          </p>

                        </div>
                        <Link to="">
                          <button className="financial_journey_arrow_button">PAY NOW </button>
                        </Link>
                      </div>


                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleHorizontalScroll(section2Ref, 25, 200, 10, setArrowDisable2);
                  }}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Section 3 */}
            <div className="financial_journey_col_6_row3">
              <h6 className="mt-4"> Recommended Products</h6>
              <div className="d-flex">
                <button
                  onClick={() => {
                    handleHorizontalScroll(section3Ref, 25, 200, -10, setArrowDisable3);
                  }}
                  disabled={arrowDisable3}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronLeft />
                </button>

                <div className="financial_journey_col_6_row01" ref={section3Ref}>
                  <div class="">
                    <div class="financial_journey_col_6_row3_grid_item">


                      <div className="card financial_journey_col_6_row1_card_3">


                        <div className="financial_journey_second_row_second_column">
                          <p> Get 1 crore cover in just 3 minutes!</p>
                          <h6>
                            <img src={secure} alt="next" width={32}></img> Term Life Insurance
                          </h6>
                          <p>Secure your family's future with our award winning life cover</p>
                          <p>Also get optional cover against 34 critical illness and Accidental death.
                          </p>

                        </div>
                        <Link to="">
                          <button className="financial_journey_arrow_button">PAY NOW </button>
                        </Link>
                      </div>


                      <div className="card financial_journey_col_6_row1_card_3">


                        <div className="financial_journey_second_row_second_column">
                          <p> Purchase Now and</p>
                          <h6>
                            <img src={nextImage} alt="next" width={28}></img> Pay Later
                          </h6>
                          <p>Get upto 45 days zero interest digital credit with just a click.</p>
                          <p>Pay bills, shop online and make payment to any merchant   UPI ID instantly
                          </p>

                        </div>
                        <Link to="">
                          <button className="financial_journey_arrow_button">PAY NOW </button>
                        </Link>
                      </div>


                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleHorizontalScroll(section3Ref, 25, 200, 10, setArrowDisable3);
                  }}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* ... (your existing JSX) */}
          </div>
          {/* ... (your existing JSX) */}
          <div className="col-3">
            <div className="card p-2">
              <div className="card financial_journey_rcol_3_card1">
                <h6>Check your CIBIL score</h6>
                <button className="financial_journey_arrow_button">Get Report</button>
              </div>

              <div className="card financial_journey_rcol_3_card2">
                <h6>My Loans</h6>
                <span>
                  <Link to="">
                    Personal Loan
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Starting @11.25% p.a</p>

                <span>
                  <Link to="">
                    Buy your Dream Home
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Higher Eligibility and lower EMI</p>
              </div>

              <div className="card financial_journey_rcol_3_card3">
                <h6>My Investments</h6>
                <span>
                  <Link to="">
                    Mutual Funds
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Investment in Mutual FUnd is simple and hassle free .</p>

                <span>
                  <Link to="">
                    PPF
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Opening a PPF account is simple and hassle-free</p>
              </div>

              <div className="card financial_journey_rcol_3_card4">
                <h6>My Insurances</h6>
                <span>
                  <Link to="">
                    Term Life Insurance
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Rs 1 crore cover in 3 minutes, *T&C Apply</p>

                <span>
                  <Link to="">
                    Health Insurance
                    <FaChevronRight />
                  </Link>
                </span>
                <p>Family cover up to Rs 25 lakhs, *T&C Apply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialJourney;