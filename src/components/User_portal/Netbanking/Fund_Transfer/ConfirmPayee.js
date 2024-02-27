import React, { useState } from 'react';
import PaymentSidebar from '../Sidebar/PaymentsAndTransferSidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ConfirmPayee = () => {
  const [ifscCode, setIFSCCode] = useState('');
  const [bankDetails, setBankDetails] = useState(null);
  const [error, setError] = useState('');


  const [formData, setFormData] = useState({
    payeeAccountNumber: '',
    payeeNickname: '',
    accountType: 'Savings',
    payeeBankIFSCCode: '',
    accountNumber: '',
    confirmPayeeAccountNumber: '',
    registrationAlertMobileNumber: ''
  });



  const handleIFSCSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://ifsc.razorpay.com/${ifscCode}`);
      setBankDetails(response.data);
      setError('');
    } catch (error) {
      setBankDetails(null);
      setError('IFSC code not found.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'payeeBankIFSCCode') {
      setIFSCCode(e.target.value);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (bankDetails && ifscCode !== '') {
      try {
        await axios.post('http://localhost:4444/api/payees', formData);
        alert('Payee added Successfully');
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      
      setError('Please verify IFSC code before submitting.');
    }
  };
  return (
    <div className="container-fluid" style={{ marginTop: "90px" }}>
      <div class="row ">
        <div class="col-3" >
          <PaymentSidebar />
        </div>
        <div className='col-9'>
          <form onSubmit={handleSubmit}>
            <div className='row confirm_biller'>
              <div>
                <h4 className='p-3'>Confirm Payee/Biller</h4>
              </div>
              <div className='card p-3'>
                <div className="d-flex mt-1">
                  <div className="">
                    <h6>DETAILS</h6>
                  </div>
                  <div className="ml-2">
                    <h6><span><i class="fa-solid fa-play"></i></span>  Confirmation </h6>
                  </div>
                </div>
                <hr />
                <div className='confirm_biller_buttons_tag_account'>
                  <h6>Add other Royal Islamic Bank Account Payee</h6>
                  <button className='confirm_biller_buttons'><Link>View Payee List</Link></button>
                </div>
                <div className='row confirm_biller_tags mt-2'>
                  <div className='col-3 mt-1'>
                    <p>Payee Account Number*</p>
                  </div>
                  <div className='col-3'>
                    <input type='text' className='form-control' name='payeeAccountNumber' onChange={handleChange} />
                  </div>
                </div>
                <div className='row confirm_biller_tags mt-2'>
                  <div className='col-3 mt-1'>
                    <p>Payee Nickname*</p>
                  </div>
                  <div className='col-3'>
                    <input type='text' className='form-control' name='payeeNickname' onChange={handleChange} />
                  </div>
                </div>
                <div className='row confirm_biller_tags mt-2'>
                  <div className='col-3 mt-1'>
                    <p>Account type*</p>
                  </div>
                  <div className='col-3'>
                    <select className='form-control'>
                      <option>Savings</option>
                      <option>Current</option>
                    </select>
                  </div>
                </div>
                <div className='row confirm_biller_tags mt-2'>
                  <div className='col-3 mt-1'>
                    <p className=''>Enter Payee Bank IFSC Code*</p>
                  </div>
                  <div className='col-3'>
                    <input
                      type="text"
                      value={formData.payeeBankIFSCCode} 
                      onChange={handleChange} 
                      placeholder="Enter IFSC code"
                      className='form-control'
                      name='payeeBankIFSCCode'
                    />
                  </div>
                  <div className='col-3'>
                    <button onClick={handleIFSCSearch} className="confirm_biller_buttons_account">Search</button>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  {bankDetails && (
                    <div>
                      <p>{bankDetails.BANK},{bankDetails.BRANCH}</p>
                    </div>
                  )}
                </div>

                <div className='row confirm_biller_tags mt-2'>
                  <div className='col-3 mt-1'>
                    <p>Account Number*</p>
                  </div>
                  <div className='col-3'>
                    <input type='text' className='form-control' name='accountNumber' onChange={handleChange} />
                  </div>
                </div>
                <div className='row confirm_biller_tags mt-2'>
                  <div className='col-3 mt-1'>
                    <p>Confirm Payee Account Number*</p>
                  </div>
                  <div className='col-3'>
                    <input type='text' className='form-control' name='confirmPayeeAccountNumber' onChange={handleChange} />
                  </div>
                  <div className='col-6'>
                    <div className='d-flex flex-row'>
                      <p>Avoid sending money to wrong payee.</p>
                      <Link>Validate Now!</Link>
                    </div>

                  </div>
                </div>
                <div className='mt-2'>
                  <h5>Provide Payee Bank Details</h5>
                </div>
                <div className='row confirm_biller_tags mt-2'>
                  <div className='col-3 mt-1'>
                    <p>Payee Registration alert to be sent on mobile number*</p>
                  </div>
                  <div className='col-3'>
                    <input type='text' className='form-control' name='registrationAlertMobileNumber' onChange={handleChange} />
                  </div>
                </div>

                <p>*mandatory</p>

                <div className='mt-1'>
                  <button className="confirm_biller_buttons_account">Back</button>
                  <button type="submit" className="confirm_biller_buttons_accounting ml-3">Next</button>
                </div>

                <div className='mt-3'>
                  <div>
                    <h6>Notes:</h6>
                  </div>
                  <div>
                    <ol>
                      <li>As per the RBI circular dated Oct 14, 2010, transfer of funds through electronic mode will be executed only on the basis of the account number of the beneficiary provided while initiating the transaction, name will not be considered as a criteria for providing credit Kindly ensure that you enter the correct beneficiary account number.</li>
                      <li>A maximum of 10 Payees can be added in one day.</li>
                      <li>Waiting period post Payee addition is 30 minutes</li>
                      <li>Ensure that the Payee Account Number entered by you is correct</li>
                      <li>Royal Islamic Bank does not take any responsibility and shall not be liable for claims on incorrect details entered</li>
                    </ol>
                  </div>

                </div>



              </div>
            </div>
          </form>
        </div>
      </div> 
    </div>
  );
};

export default ConfirmPayee;