import React, { useState, useRef } from "react";
import "./FinancialJourney.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import OverViewSidebar from '../../Sidebar/OverViewSidebar'
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";


const FinancialJourney = () => {
 
 

  




  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div style={{ backgroundColor: "#f8f8f8", marginTop:"60px" }} className="financial_journey">
     
      <div className="container-fluid pt-5 pb-5">
        <div className="row">
          <div className="col-3">
            <OverViewSidebar />
          </div>
          <div className="col-6">

            

          

            <div className="financial_journey_col_6_row3">
           <h6 className="mt-4"> credit cards</h6>
              <div className="d-flex">
                <button
                  onClick={() => {
                    handleHorizantalScroll(elementRef.current, 25, 100, -10);
                  }}
                  disabled={arrowDisable}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronLeft />
                </button>

                <div class="financial_journey_col_6_row01" ref={elementRef}>
                 
                  <div class="">
                    <div class="financial_journey_col_6_row3_grid_item">
                        
                         
                          <div className="card financial_journey_col_6_row1_card_3">
                          <h6>CREDIT / DEBIT CARDS</h6>
                          <p>
                            Change your credit/debit card PIN Online
                            every 3 months 
                          </p>
                          <Link to="">
                           <button>Change PIN</button>
                          </Link>
                        </div>
                        
                  
                      <div className="card financial_journey_col_6_row1_card_3">
                          <h6>Term Life Insurance</h6>
                          
                          <Link to="">
                           <button >Insure Now</button>
                          </Link>
                      </div>
                      <div className="card financial_journey_col_6_row1_card_3">
                          <h6>UNBLOCK CARDS</h6>
                          <p>
                            Get your card unblocked digitally with ease 
                          </p>
                          <Link to="">
                           <button>Unblock now</button>
                          </Link>
                      </div>
                      <div className="card financial_journey_col_6_row1_card_3">
                          <h6>Internet Banking </h6>
                          <p>
                            Change your Internet banking password every 3 months
                          </p>
                          <Link to="">
                           <button>Change Password</button>
                          </Link>
                        </div>
                        <div className="card financial_journey_col_6_row1_card_3">
                          <h6>Cheque Leaves</h6>
                          <p>
                           Running out of cheque leaves ? Request for cheque book online
                          </p>
                          <Link to="">
                           <button>Initiate Request</button>
                          </Link>
                        </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleHorizantalScroll(elementRef.current, 25, 200, 10);
                  }}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div className="financial_journey_col_6_row3">
           <h6 className="mt-4"> credit cards</h6>
              <div className="d-flex">
                <button
                  onClick={() => {
                    handleHorizantalScroll(elementRef.current, 25, 100, -10);
                  }}
                  disabled={arrowDisable}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronLeft />
                </button>

                <div class="financial_journey_col_6_row01" ref={elementRef}>
                 
                  <div class="">
                    <div class="financial_journey_col_6_row3_grid_item">
                        
                         
                          <div className="card financial_journey_col_6_row1_card_3">
                          <h6>CREDIT / DEBIT CARDS</h6>
                          <p>
                            Change your credit/debit card PIN Online
                            every 3 months 
                          </p>
                          <Link to="">
                           <button>Change PIN</button>
                          </Link>
                        </div>
                        
                  
                      <div className="card financial_journey_col_6_row1_card_3">
                          <h6>Term Life Insurance</h6>
                          
                          <Link to="">
                           <button >Insure Now</button>
                          </Link>
                      </div>
                      <div className="card financial_journey_col_6_row1_card_3">
                          <h6>UNBLOCK CARDS</h6>
                          <p>
                            Get your card unblocked digitally with ease 
                          </p>
                          <Link to="">
                           <button>Unblock now</button>
                          </Link>
                      </div>
                      <div className="card financial_journey_col_6_row1_card_3">
                          <h6>Internet Banking </h6>
                          <p>
                            Change your Internet banking password every 3 months
                          </p>
                          <Link to="">
                           <button>Change Password</button>
                          </Link>
                        </div>
                        <div className="card financial_journey_col_6_row1_card_3">
                          <h6>Cheque Leaves</h6>
                          <p>
                           Running out of cheque leaves ? Request for cheque book online
                          </p>
                          <Link to="">
                           <button>Initiate Request</button>
                          </Link>
                        </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleHorizantalScroll(elementRef.current, 25, 200, 10);
                  }}
                  className="financial_journey_arrow_button"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card p-2">
              <div className="card financial_journey_rcol_3_card1">
                <h6>Check your CIBIL score</h6>
                <button>Get Report</button>
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
