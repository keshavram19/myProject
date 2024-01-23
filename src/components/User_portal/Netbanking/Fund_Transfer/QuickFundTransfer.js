import React from "react";
import Select from "react-select";
import './FundTransfer.css';
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";


const QuickFundTransfer = () => {


    return (
        <div className='card-details-container container-fluid' style={{marginTop:"90px"}}>
            <div className='card-details-header'></div>
            <div className='row'>
                <div className="col-3">
                    <PaymentSidebar/>
                </div>
                <div className='col-9 p-3 quickfund_transfer_note'>
                    <div className="card p-3 quickfund_transfer_node">
                        <h1>QuickFundTransfer</h1>
                    </div>
                    <div className="card p-3">
                        <div className="card p-3 quickfund_transfer_code">
                            <h4>Enter Transaction Details</h4>
                        </div>
                        <div className="p-3 d-flex ">
                            <div className="sms">
                                <input type="radio" id="sms" /><label for="transfer" className="ml-2"><b>To Royal Islamic Bank Account number</b></label>
                            </div>
                            <div className="Email ml-3">
                                <input type="radio" id="sms" /><label for="transfer" className="ml-2"><b>To Other Bank Account(using IMPS)</b></label>
                            </div>

                        </div>

                        <div className="row ">
                            <div className="col-sm-4">
                                <label for="text">Transfer form*</label>
                                <Select
                                    name=""
                                    id=""
                                    options={[
                                        { value: "Please Select", label: "Please Select " },
                                    ]} 
                                /> 
                                <p className="basic text-danger">Total Available amount is</p>                                   </div>
                            <div className="col-sm-4">
                                <label for="text">To Account Number*</label>
                                <input type="number" className="form-control" id="text" />
                            </div>
                            <div className="col-sm-4">
                                <label for="text">Confirm Account Number*</label>
                                <input type="number" className="form-control" id="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <label for="text">Payee Name*</label>
                                <input type="number" className="form-control" id="text" />

                            </div>
                            <div className="col-sm-4">
                                <label for="text">Amount*</label>
                                <input type="number" className="form-control" id="text" />
                            </div>
                            <div className="col-sm-4">
                                <label for="text">Remarks(optional)*</label>
                                <Select
                                    name=""
                                    id=""
                                    options={[
                                        { value: "Please Select", label: "Please Select " },
                                    ]}
                                />                                    </div>
                        </div>

                        <div className="d-flex mb-3">
                            <button type="button" className="ml-3 mt-3 btn btn-info quickfund_transfer_turn">Back</button>
                            <button type="submit" className="ml-5 mt-3 btn btn-info quickfund_transfer_join">Proceed to Pay</button>
                        </div>
                    </div>
                    <div className="card p-3">
                        <h6>Notes:</h6>
                        <ol>
                            <li>As per the RBI circular dated Oct 14, 2010, bansfer of funds through electronic mode will be executed only on the basis of the account number of the beneficiary provided while initiating the transaction, name will not be considered as a criteria for providing credit. Kindly

                                ensure that you enter the oprrect beneficiary account number</li>
                            <li>The Funds Transfer limit per transaction is Rs 25,000</li>
                            <li> Royal Islamic Bank is not responsible for
                                <ul>
                                    <li>Funds transferred to any unintended recipient
                                    </li>
                                    <li>Retrieval of funds transfarted to any unauthonsed recipient
                                    </li>
                                    <li>Charges/commission of any kind levredicharged by the payee's bank </li>
                                </ul>
                            </li>
                            <li>Royal Islamic Bank has the most comprehensive secunty standards in place to protect your interests At the same time, we expect you to follow sate practices while using the Internet Banking channel. You are fully responsible for protecting your internet Banking User ID and Passwords Royal Islamic Bank will not be liable for any loss that you may incur owing to unauthorised access into your account
                                .</li>
                            <li>In case you are re-trying please <a href="#">check the status of your previous perment </a> first.</li>
                            <li> Allowed special characters in remartis field are-()^@$&%?- spaces</li>
                        </ol>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default QuickFundTransfer;
