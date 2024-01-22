import React from 'react';
import './FundTransfer.css';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

function TransactionStatus() {
    const navigate=useNavigate();

    function handleClick (){

        navigate("/user/fundtransfer/scheduled-transaction")
    }
    
    return (
      
        <div>  
      
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Scheduled Transactions</h5>
                  <div className="row">
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <button onClick ={(e)=> handleClick()}className="card-button">VIEW</button>
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">View your Scheduled/Auto Pay transactions due for payment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Completed Transactions</h5>
                  <div className='row'>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      
                      <button className='card-button'><Link to="/user/fundtransfer/completed-transaction">VIEW</Link></button>
                     
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">View status of all your transactions including scheduled transactions after due date.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Payment Summary</h5>
                  <div className="row">
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <button className="card-button"><Link to="/user/fundtransfer/payment-summary">View</Link></button>
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">View status of scheduled and completed transactions in a calendar view.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          
          <div className="row">
          <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Cardless Cash withdrawal Transactions</h5>
                  <div className='row'>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <button className='card-button'>VIEW</button>
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">View status of all your cardless cash transactions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Wire Transactions</h5>
                  <div className="row">
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <button className="card-button"><Link to="/user/fundtransfer/wire-transaction">View</Link></button>
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">View status of wire transactions/Submit one time declaration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">UPI Collect request status</h5>
                  <div className='row'>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <button className='card-button'><Link to="/user/fundtransfer/upi-transaction-status">View</Link></button>
                    </div>
                    <div className="col-md-8">
                      <p className="card-text">View status of collect request transactions pending with payer. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
    
        </div>
      </div>
       
)};


export default TransactionStatus;