import React, { useState, useEffect } from 'react';
import './Accounts.css';
import axios from 'axios';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { Link, useNavigate } from 'react-router-dom';


const steps = [
    { title: "Generate Request", isCompleted: true },
    { title: "Service Request Confirmation", isCompleted: false },
    { title: "Request Generated", isCompleted: false },
];

const GenerateRequestLostATM = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    const [selectedDebitCard, setSelectedDebitCard] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    const [isAddressCorrect, setIsAddressCorrect] = useState(true);
    const [radioButtonValue, setRadioButtonValue] = useState('');
    const [selectedDebitCardDetails, setSelectedDebitCardDetails] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);


    const Step = ({ title, isCompleted }) => {

        return (
            <div className="reissue_card_step">
                <div className="reissue_card_circle_container ">
                    <div className={`reissue_card_circle ${isCompleted ? 'reissue_card_completed' : 'reissue_card_circle'}`}></div>
                </div>
                <p className="title">{title}</p>
            </div>
        );
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4444/api/userDetails/1124563456');
            const userDetailsData = response.data.details;

            if (Array.isArray(userDetailsData)) {
                setUserDetails(userDetailsData);
                setLastFourDigits(userDetailsData[0].userMobileNumber);
            } else if (typeof userDetailsData === 'object') {
                setUserDetails([userDetailsData]);
                setLastFourDigits(userDetailsData.userMobileNumber);
            } else {
                console.error('Invalid user details format:', userDetailsData);
            }

        } catch (error) {
            console.error('Error fetching user details:', error);
        }
        console.log('User Details:', userDetails);

    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleBackCard = () => {
        navigate('/user/account/reissue-card')
    }


    const handleRadioButtonChange = (event) => {
        setRadioButtonValue(event.target.value);
        setIsAddressCorrect(event.target.value === 'yes');
    };

    const formatDebitCardNumber = (cardNumber) => {

        const cardNumberString = String(cardNumber);
        const firstFourDigits = cardNumberString.substring(0, 4);
        const lastFourDigits = cardNumberString.substring(cardNumberString.length - 4);
        const maskedDigits = 'X'.repeat(cardNumberString.length - 8);

        return `${firstFourDigits}${maskedDigits}${lastFourDigits}`;
    };

    function maskEmail(email) {
        const parts = email.split('@');
        const maskedUsername = parts[0].slice(0, 3) + '*'.repeat(parts[0].length - 3);
        const maskedEmail = `${maskedUsername}@${parts[1]}`;
        return maskedEmail;
    }

    const maskPinCode = (pinCode) => {
        return 'X'.repeat(pinCode.length - 2) + pinCode.slice(-2);
    };

    const handleDebitCardChange = (event) => {
        fetchData();
        const selectedCardNumber = event.target.value;
        setSelectedDebitCard(selectedCardNumber);

        // Check if userDebitCardDetails is an object
        const selectedCardDetails = userDetails.length > 0 && typeof userDetails[0].userDebitCardDetails === 'object'
            ? userDetails[0].userDebitCardDetails
            : null;

        setSelectedDebitCardDetails(selectedCardDetails);
    };

    const handleSubmit = async () => {

        setFormSubmitted(true);
        if (!selectedDebitCard) {
            // Add a condition to check if the debit card is selected
            console.warn('Please select a debit card before submitting.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:4444/api/createReissueCard', {
                userAccountNumber: userDetails[0].userAccountNumber,
            });
            const { srn } = response.data;
            
            navigate('/user/account/generate-request-lost-service-atm');
        } catch (error) {
            console.error('Error submitting reissue card request:', error);

        }
    };




    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>
                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <div className="container-fluid reissue_card">
                        <h3 className="reissue_card_heading">Reissue  of Lost ATM/debit Card</h3>
                        <div className='col-sm-12'>
                            <div className="reissue_card_steps">
                                <div className="reissue_card_steps_container">
                                    {steps.map((step, index) => (
                                        <Step key={index} title={step.title} isCompleted={step.isCompleted} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card card_details_select p-2">
                            <h6>Generate Request</h6>
                            <div className="row my-3 align-items-center">
                                <div className="col-sm-5 ml-3  ">
                                    <p>Select Savings Account Number*</p>
                                    <select
                                        className="form-control"
                                        value={userDetails.userAccountNumber}
                                        defaultChecked
                                    >
                                        {userDetails.map((account, index) => (
                                            <option key={index} value={account.userAccountNumber}>
                                                {account.userAccountNumber}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-sm-5">
                                    <p>Select preferred address for dispacth*</p>
                                    <select
                                        className="form-control"
                                        value='address'
                                    >
                                        <option value='address'>Communication Address</option>
                                    </select>

                                </div>
                            </div>
                            <div className="row my-3 align-items-center">
                                <h6>Communication Address</h6>
                                <div className="col-sm-5 ml-3  mt-2">
                                    <p>Communication Address</p>
                                    <input type='text' className='form-control' value={userDetails.length > 0 ? userDetails[0].accountHolderAddress.communicationAddress : ''} />
                                </div>
                                <div className="col-sm-5">
                                    <p>City</p>
                                    <input type='text' className='form-control' value={userDetails.length > 0 ? userDetails[0].accountHolderAddress.city : ''} />

                                </div>
                            </div>
                            <div className="row my-3 align-items-center">

                                <div className="col-sm-5 ml-3  ">
                                    <p>PINCode</p>
                                    <input type='text' className='form-control' value={userDetails.length > 0 ? maskPinCode(userDetails[0].accountHolderAddress.pincode) : ''} />
                                </div>
                                <div className="col-sm-5">
                                    <p>State</p>
                                    <input type='text' className='form-control' value={userDetails.length > 0 ? userDetails[0].accountHolderAddress.state : ''} />

                                </div>
                            </div>
                            <div className="row my-3 align-items-center">

                                <div className="col-sm-5 ml-3  ">
                                    <p>Select Debit Card Number*</p>
                                    <select
                                        className="form-control"
                                        value={selectedDebitCard}
                                        onChange={handleDebitCardChange}
                                    >
                                        <option value="">Select</option>
                                        {userDetails.length > 0 && (
                                            <option value={formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}>
                                                {formatDebitCardNumber(userDetails[0].userDebitCardDetails.userDebitCardNumber)}
                                            </option>
                                        )}
                                    </select>
                                    {formSubmitted && !selectedDebitCard && (
                                        <p className="text-danger   ">Please select a debit card before submitting.</p>
                                    )}
                                </div>
                                <div className="col-sm-5">
                                    <p>Customer Name</p>
                                    <input type='text' className='form-control' value={selectedDebitCardDetails ? userDetails[0].accountHolderName : ''} />


                                </div>
                            </div>
                            <div className="row my-3 align-items-center">

                                <div className="col-sm-5 ml-3  ">
                                    <p>Mobile Number*</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="text"
                                        value={`XXXXXX${String(lastFourDigits).slice(-4)}`}
                                        readOnly
                                    />
                                </div>
                                <div className="col-sm-5">
                                    <p>Email*</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="text"
                                        value={`${userDetails.length > 0 ? maskEmail(userDetails[0].userEmailId) : ''}`}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-sm-6 ml-3'>
                                    <p>Is the above mentioned address correct?*</p>
                                </div>
                                <div className='col-sm-4'>
                                    <input
                                        type='radio'
                                        value='yes'
                                        checked={radioButtonValue === 'yes'}
                                        onChange={handleRadioButtonChange}
                                    />
                                    <label className='ml-2'>Yes</label>
                                    <input
                                        type='radio'
                                        className='ml-3'
                                        value='no'
                                        checked={radioButtonValue === 'no'}
                                        onChange={handleRadioButtonChange}
                                    />
                                    <label className='ml-2'>No</label>
                                </div>
                            </div>
                            {radioButtonValue === 'yes' && (
                                <div className='mt-2 d-flex align-items-center'>
                                    <input
                                        type='checkbox'
                                        className='ml-1'
                                        checked={isCheckboxChecked}
                                        onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                                    />
                                    <p className='mt-3 ml-1'>I have read, understood and accept the Terms applicable for Reissue of Card. <Link>Click Here</Link> to read the terms.</p>
                                </div>
                            )}
                            {radioButtonValue === 'no' && (
                                <div>
                                    <p>If you have moved to a new address, request you to update your address and place a request for debit card after 2 working days. To change your address, please <Link>CLICK HERE</Link></p>
                                </div>
                            )}
                        </div>

                        <div className="d-flex my-3">
                            <button type="button" className="reissue_card_button ml-2" onClick={handleBackCard}>BACK</button>
                            {radioButtonValue === 'yes' && (
                                <button
                                    type="button"
                                    className={`reissue_card_button ml-2 ${isCheckboxChecked ? 'reissue_card_button_enabled' : 'reissue_card_button_disabled'}`}
                                    onClick={handleSubmit}
                                    disabled={!isCheckboxChecked}
                                    
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenerateRequestLostATM;