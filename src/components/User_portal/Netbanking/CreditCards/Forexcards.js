// src/components/CardSection.js
import React from 'react';
import './Creditcard.css'


const ForexCardSection = () => {
  return (
    <div className="container  col-md-12" style={{marginTop:"90px"}}>
      <div className="row">
        <div className="col-md-12">
            
          <div className='forexcard_heading'>
            Apply For Travel Card  <span style= {{paddingLeft:'20px'}}></span> Link & Manage Your Existing Travel Card
            
          </div>
    </div>
    
          
        
      </div>
      <hr></hr>
      

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 ">
          <div className="card"style={{marginTop:'30px'}} >
            
              <img
                src="https://www.icicibank.com/content/dam/icicibank/india/managed-assets/cards/images/Sapphiro-486X224.png"
                className="forex_img"
                alt="Sapphiro Forex Prepaid Card"
              />
              <h5 className="forexcard-title">Sapphiro Forex Prepaid Card</h5>
              <button className="forex_button">Select</button>
              <div className='forex_gst'>
                <div>
              <p>Joining fee <span style= {{paddingLeft:'20px'}}>Rs 2,999+GST</span></p>
              <p>Benefits Worth<span style= {{paddingLeft:'20px'}}></span> Rs 10,000</p>
              </div>
              view all benefits<select style={{border:'none',paddingRight:'-15px'}}></select>
              </div>
            </div>
          
        </div>

        {/* Card 2 */}
        <div className="col-md-4 ">
          <div className="card"style={{marginTop:'30px'}}>
            
              <img
                src="https://cardinsider.com/wp-content/uploads/2021/10/ICICI-Bank-Coral-Prepaid-Forex-Card.png"
                className="forex_img2"
                alt="Coral Forex Prepaid Card"
              />
              <h5 className="forexcard-title2">Coral Forex Prepaid Card</h5>
              <button className="forex_button2">Select</button>
              <div className='forex_gst'>
              <p>Joining fee<span style= {{paddingLeft:'20px'}}></span> Rs 499+GST</p>
              <p>Benefits Worth <span style= {{paddingLeft:'20px'}}></span>Rs 3,000</p>
              view all benefits<select style={{border:'none',paddingRight:'-15px'}}></select>
              </div>
            </div>
          
        </div>

        {/* Card 3 */}
        <div className="col-md-4 ">
          <div className="card"style={{marginTop:'30px'}}>
            
              <img
                src="https://www.icicibank.com/content/dam/icicibank/india/managed-assets/cards/images/student-card-horizontal.png"
                className="forex_img3"
                alt="Student Contactless Forex Prepaid Card"
              />
              <h5 className="forexcard-title3">
                Student Contactless Forex Prepaid Card
              </h5>
              <button className="forex_button3">Select</button>
              <div className='forex_gst'>
              <p>Joining fee<span style= {{paddingLeft:'25px'}}></span> Rs 499+GST</p>
              <p>Benefits Worth <span style= {{paddingLeft:'25px'}}></span>Rs 3,000</p>
              view all benefits<select style={{border:'none',paddingRight:'-15px'}}></select>
              </div>
            </div>
          
        </div>

        {/* Card 4 */}
        <div className="col-md-4 ">
          <div className="card"style={{marginTop:'40px'}}>
            
              <img
                src="https://surejob.in/wp-content/uploads/2022/04/image-5.png"
                className="forex_img4"
                alt="MultiCurrency Contactless Prepaid Card"
              />
              <h5 className="forexcard-title4">
                MultiCurrency Contactless Prepaid Card
              </h5>
              <button className="forex_button4">Select</button>
              <div className='forex_gst'>
              <p>Joining fee<span style= {{paddingLeft:'40px'}}></span> Rs 0</p>
              <p>Benefits Worth<span style= {{paddingLeft:'15px'}}></span> Rs 0</p>
              view all benefits<select style={{border:'none',paddingRight:'-15px'}}></select>
              </div>
            
          </div>
        </div>
      </div>
        </div>
      
      );
    };
    
    export default ForexCardSection;