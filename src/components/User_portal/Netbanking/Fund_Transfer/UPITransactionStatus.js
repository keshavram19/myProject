import React from "react";
import Select from 'react-select'
import './FundTransfer.css';

const UpiTransaction = () => {


    return (
        <div className='card-details-container container-fluid'>
            <div className='card-details-header'></div>
            <div className='row'>
                
                <div className='col-sm-12 p-2 upi_transaction_date' >
                    <h2>UPI Transaction Status</h2>
                    <div className="card p-2 upi_transaction_node">
                        <h4>Check Status</h4>
                    </div>
                    <div className="card p-3">
                        <div className="row mt-3">
                            <div className="col-sm-3">
                                <label for="card-number">Credit Account Number*</label>
                            </div>
                            <div className="col-sm-3">
                                <Select id="card-number">
                                    <option value="Please select" selected>Please select</option>
                                </Select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-3">
                                <label for="card-number">Transaction dates ranging from*</label>
                            </div>
                            <div className="col-sm-3">
                                <input type="date" className="form-control"/>
                            </div>
                            <div className="col-sm-1">
                            <p> to* </p>
                            </div>
                            <div className="col-sm-3">
                                                               <input type="date" className="form-control"/>



                            </div>
                        </div>
                        <div className="col-sm-12 mt-4">
                            <button className="btn btn-primary upi_transaction_value">
                            GET Transaction</button></div>
                    </div>
                </div>
            </div>

        </div>

    );
};



export default UpiTransaction;