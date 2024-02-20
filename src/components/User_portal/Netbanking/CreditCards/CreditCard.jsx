import './Creditcard.css';
import React, { useEffect, useState } from 'react';

import creditcard from '../../../../Images/creditcard.jpg';
import rupee_1523526 from '../../../../Images/rupee_1523526.png';
import creditcard1 from '../../../../Images/creditcard1.png';
import creditcard2 from '../../../../Images/creditcard2.jpg';
import primary_credit_card from '../../../../Images/primary_credit_card.jpeg'

import { RiCheckboxBlankFill } from "react-icons/ri";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import apiList from '../../../../lib/apiList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { Tab, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CreditCard = () => {

    const [customerAccData, setCustomerAccData] = useState([]);
    const accountNumber = 123456789;
    const [individualCreditCard, setIndividualCreditCard] = useState({
        atmTransactionLimit: "",
        onlineTransactionLimit: "",
        merchantOutletTransLimit: "",
        tapAndPayTransLimit: "",
        creditCardNumber: "",
        creditCardLimit: "",
        totalAmountDue: "",
        currentOutstanding: "",
        availableCreditLimit: "",
        maximumCreditLimit: ""
    });
    const [creditCardNum, setCreditCardNum] = useState('');
    const [cardLimit, setCardLimit] = useState('');
    const [customerDetails, setCustomerDetails] = useState();
    const [creditCardOtp, setCreditCardOtp] = useState('');

    const [atmStatus, setAtmStatus] = useState();
    const [onlineStatus, setOnlineStatus] = useState();
    const [merchantStatus, setMerchantStatus] = useState();
    const [tapPayStatus, setTapPayStatus] = useState();


    useEffect(() => {
        getUserDetails()
    }, []);
    const getUserDetails = async () => {
        const options = {
            method: 'GET'
        };
        const response = await fetch(`${apiList.customerAccountDetails}${accountNumber}`, options);
        const data = await response.json();
        setCustomerDetails(data.details);
        setCustomerAccData(data.details.userCreditCardDetails);
        setCreditCardNum(data.details.userCreditCardDetails[0].creditCardNumber);
    };


    useEffect(() => {
        if (!creditCardNum && customerAccData.length > 0) {
            setCreditCardNum(customerAccData[0].creditCardNumber);
        }
        else {
            getIndividualCreditCard(creditCardNum);
        }
    }, [creditCardNum]);
    const handleCreditCardNumber = (event) => {
        setCreditCardNum(event.target.value);
    };

    const getIndividualCreditCard = async (selectedCreditCardNum) => {
        const options = {
            method: 'GET'
        };
        try {
            const response = await fetch(`${apiList.customerCreditCardDetails}${accountNumber}/${creditCardNum}`, options);
            const data = await response.json();
            setIndividualCreditCard(data);
            setCardLimit(data.creditCardLimit);
            setAtmStatus(data.atmWithdrawlStatus);
            setOnlineStatus(data.onlineTransactionStatus);
            setMerchantStatus(data.merchantOutletStatus);
            setTapPayStatus(data.tapAndPayStatus);
        } catch (error) {
            console.error('Error fetching individual credit card:', error);
        }
    };


    const [creditLimit, setCreditLimit] = useState(0);
    useEffect(() => {
        if (individualCreditCard) {
            setCreditLimit(parseInt(individualCreditCard.creditCardLimit, 10));
        }
    }, [individualCreditCard]);
    const handleRangeChange = (event) => {
        // const newCreditLimit = Math.min(parseInt(event.target.value, 10), individualCreditCard.maximumCreditLimit);
        const newCreditLimit = Math.min(
            Math.max(parseInt(event.target.value, 10), individualCreditCard.creditCardLimit),
            individualCreditCard.maximumCreditLimit
        );
        setCreditLimit(newCreditLimit);
    };

    const generateOTP = async () => {
        try {
            await settingCreditCardLimit();
        }
        catch (error) {
            console.error(`Error generating OTP: ${error}`);
        }
    };
    const settingCreditCardLimit = async () => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: customerDetails.userEmailId })
        };
        try {
            const response = await fetch(apiList.customerCrediCardLimitOTP, options);
            if (response.ok) {
                toast.success('Successfully Send OTP!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            } else {
                toast.error('Failed to generate OTP', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            }           
        }
        catch (error) {
            console.log(`Error at Credit card limit OTP: ${error}`);
            throw error;
        }
    };
    const readCreditCardLimitOTP = (event) => {
        setCreditCardOtp(event.target.value);
    };


    const verificationOfCreditCardLimitOTP = async () => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: customerDetails.userEmailId, gmailOTP: creditCardOtp })
        };
        try {
            const response = await fetch(apiList.userAuthVerify, options);
            if (response.ok === true) {
                const data = await response.json();
                await updateDomesticCard();
            }
            else {
                const data = await response.json();
                toast.error('Invalid OTP!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            }
        }
        catch (error) {
            console.log('Error Verifying OTP:', error);
        }
    };
    const handleVerifyCreditCardOTP = async (event) => {
        try {
            await verificationOfCreditCardLimitOTP();
        }
        catch (error) {
            console.error(`Error at Verifying OTP: ${error}`);
        }
    };


    const handleAtmStatus = () => {
        setAtmStatus(prevStatus => !prevStatus);
    };
    const handleOnlineStatus = () => {
        setOnlineStatus(prevStatus => !prevStatus);
    };
    const handleMerchantStatus = () => {
        setMerchantStatus(prevStatus => !prevStatus)
    };
    const handleTapPayStatus = () => {
        setTapPayStatus(prevStatus => !prevStatus)
    };


    const handleATMTransaction = (event) => {
        const changedValue1 = event.target.value;
        if(changedValue1 === '' || (parseInt(changedValue1) <= 20000 && parseInt(changedValue1) >= 0) ){
            setIndividualCreditCard((prevData) => ({ ...prevData, atmTransactionLimit: event.target.value }));
        }
        else{
            toast.error("ATM Withdrawl Limit below 20,000", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            })
        }
    };
    const handleOnlineTransaction = (event) => {
        const changedValue2 = event.target.value;
        if(changedValue2 === '' || (parseInt(changedValue2) <= 20000 && parseInt(changedValue2) >= 0)){
            setIndividualCreditCard((prevState) => ({ ...prevState, onlineTransactionLimit: event.target.value }));
        }
        else{
            toast.error('Online Transaction Limit below 20,000', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    };
    const handleMerchantOutlets = (event) => {
        const changedValue3 = event.target.value;
        if(changedValue3 === '' || (parseInt(changedValue3) <= 20000 && parseInt(changedValue3) >= 0)){
            setIndividualCreditCard((prevState) => ({ ...prevState, merchantOutletTransLimit: event.target.value }));
        }
        else{
            toast.error('Merchant Outlets Transaction Limit below 20,000', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    };
    const handlePayTransaction = (event) => {
        const changedValue4 = event.target.value;
        if(changedValue4 === '' || (parseInt(changedValue4) <= 20000 && parseInt(changedValue4) >= 0)){
            setIndividualCreditCard((prevState) => ({ ...prevState, tapAndPayTransLimit: event.target.value }));
        }
        else{
            toast.error('Tap & Pay Transaction Limit below 20,000', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    }

    const updateDomesticCard = async () => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                accountNumber: customerDetails.userAccountNumber,
                creditCardNum: creditCardNum,
                cardLimit: creditLimit,

                atmTransactionStatus: atmStatus,
                atmTransaction: individualCreditCard.atmTransactionLimit,
                onlineTranStatus: onlineStatus,
                onlineTransaction: individualCreditCard.onlineTransactionLimit,
                merchantStatus: merchantStatus,
                merchantTrans: individualCreditCard.merchantOutletTransLimit,
                payTransaction: tapPayStatus,
                payTransLimit: individualCreditCard.tapAndPayTransLimit
            })
        };
        try {
            const response = await fetch(apiList.updateDomesticCardUsage, options);
            if (response.ok === true) {
                toast.success('Credit Card Limits & Usage Updated Successfull!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                });
            }
        }
        catch (error) {
            console.error("Error At Credit Card Limits & Usage Updation", error);
            toast.error('Failed to update Credit Card Limits & Usage', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    };

    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col lg={12}>
                        <ListGroup horizontal>
                            <ListGroup.Item action href="#link1" className='credit_card_tabs_text'>
                                View Your Card
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" className='credit_card_tabs_text'>
                                Manage Your Card
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <div>
                                    <div className='view_your_card_container'>
                                        <div className='d-flex justify-content-center my-2'>
                                            <div className='primary_card_text'>Primary Card</div>
                                            <div>
                                                <img src={primary_credit_card} alt='Primary Credit Card' className='primary_credit_card rounded'>

                                                </img>
                                            </div>
                                        </div>

                                        {/* <div className='my-3'>
                                            <div className='all_credit_cards_text'>All Credit Cards</div>
                                            <div className='all_credit_cards_container'>
                                                <div id='demo' class="carousel slide" data-ride="carousel">
                                                    <div class="carousel-inner d-flex justify-content-center">
                                                        <div class="carousel-item active">
                                                            <img className='all_credit_cards_slider' alt='Credit Card 1'
                                                                src={creditcard}>
                                                            </img>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img className='all_credit_cards_slider'
                                                                src={creditcard1} alt="Credit Card 2">
                                                            </img>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <img className='all_credit_cards_slider'
                                                                src={creditcard2} alt="Credit Card 3">
                                                            </img>
                                                        </div>
                                                    </div>
                                                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                                        <span class="carousel-control-prev-icon"></span>
                                                    </a>
                                                    <a class="carousel-control-next" href="#demo" data-slide="next">
                                                        <span class="carousel-control-next-icon"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className='my-2'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex align-items-center'>
                                                    <div className='credit_card_limit_text'>Credit Limit:</div>
                                                    <div className='d-flex align-items-center'>
                                                        <div><MdCurrencyRupee /></div>
                                                        <div>
                                                            {
                                                                individualCreditCard &&
                                                                <div>{individualCreditCard.creditCardLimit}</div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='credit_card_limit_works_text'>How Credit Limit Works?</div>
                                            </div>

                                            <div class="progress my-2">
                                                <div className="progress-bar"
                                                    style={{
                                                        width: '100%',
                                                        background: `linear-gradient(to right, 
                                                            red ${(individualCreditCard.totalAmountDue / individualCreditCard.creditCardLimit) * 100}%,
                                                            orange ${(individualCreditCard.currentOutstanding / individualCreditCard.creditCardLimit) * 100}%,
                                                            green ${(individualCreditCard.availableCreditLimit / individualCreditCard.creditCardLimit) * 100}%)`
                                                    }}
                                                >
                                                </div>
                                            </div>

                                            <div className='d-flex'>
                                                <div className='view_your_card_amount_cont'>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <RiCheckboxBlankFill className='total_amount_due_icon' />
                                                        </div>
                                                        <div className='credit_card_progress_text'>
                                                            <div>Total Amount Due</div>
                                                            <div className='d-flex align-items-center'>
                                                                <MdCurrencyRupee />
                                                                <div>{individualCreditCard.totalAmountDue}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='view_your_card_amount_cont'>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <RiCheckboxBlankFill className='current_outstanding_icon' />
                                                        </div>
                                                        <div className='credit_card_progress_text'>
                                                            <div>Current Outstanding</div>
                                                            <div className='d-flex align-items-center'>
                                                                <MdCurrencyRupee />
                                                                <div>{individualCreditCard.currentOutstanding}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='view_your_card_amount_cont'>
                                                    <div className='d-flex'>
                                                        <div>
                                                            <RiCheckboxBlankFill className='available_credit_limit_icon' />
                                                        </div>
                                                        <div className='credit_card_progress_text'>
                                                            <div>Available Credit Limit</div>
                                                            <div className='d-flex align-items-center'>
                                                                <MdCurrencyRupee />
                                                                <div>{individualCreditCard.availableCreditLimit}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='d-flex my-3'>
                                                <div className='mr-3'>
                                                    <button type='button' className='credit_card_pay_bill_btn'>
                                                        Pay Bill
                                                    </button>
                                                </div>
                                                <div>
                                                    <div className='credit_card_due_date'>(Due Date: 30-01-2024)</div>
                                                    <div className='credit_card_payment_reflect'>
                                                        Pay instantly through Royal Islamic Bank! Payments made through other platforms may take up to 48 hours to reflect.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-around my-2'>
                                                <div>
                                                    <button type='button' className='credit_card_details_btns'>
                                                        Current Statement
                                                    </button>
                                                </div>
                                                <div>
                                                    <button type='button' className='credit_card_details_btns'>
                                                        EMI Eligible
                                                    </button>
                                                </div>
                                                <div>
                                                    <button type='button' className='credit_card_details_btns'>
                                                        View CVV
                                                    </button>
                                                </div>
                                                <div>
                                                    <button type='button' className='credit_card_details_btns'>
                                                        Last Statement
                                                    </button>
                                                </div>
                                                <div>
                                                    <button type='button' className='credit_card_details_btns'>
                                                        EMI Existing
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='credit_card_manage_subscr_cont'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex'>
                                                <div className='hand_holding_rupee_images_cont'>
                                                    <img className='hand_holding_rupee_images'
                                                        src={rupee_1523526} alt='hand holding rupee'>

                                                    </img>
                                                </div>
                                                <div>
                                                    <div className='view_card_manage_subscrip_headings'>MANAGE SUBSCRIPTION</div>
                                                    <div>Manage standing instruction and recurring charges</div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type='button' className='manage_subscript_btns'>
                                                    Manage Subscriptions
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='credit_card_manage_subscr_cont'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex'>
                                                <div className='hand_holding_rupee_images_cont'>
                                                    <img className='hand_holding_rupee_images'
                                                        src={rupee_1523526} alt='hand holding rupee'>
                                                    </img>
                                                </div>
                                                <div>
                                                    <div className='view_card_manage_subscrip_headings'>MANAGE TOKENS</div>
                                                    <div>Manage your Royal Islamic bank credit card tokens</div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type='button' className='manage_subscript_btns'>
                                                    Manage Tokens
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='credit_card_manage_subscr_cont'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex'>
                                                <div className='hand_holding_rupee_images_cont'>
                                                    <img className='hand_holding_rupee_images'
                                                        src={rupee_1523526} alt='hand holding rupee'>
                                                    </img>
                                                </div>
                                                <div>
                                                    <div className='view_card_manage_subscrip_headings'>CREDIT CARD</div>
                                                    <div>Get a feature-packed Royal Islamic bank credit card on the fly</div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type='button' className='manage_subscript_btns'>
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link2">
                                <div id="manageyourcard" class="">
                                    <div className='manage_your_card_container'>
                                        <div className='manage_credit_limits_header'>
                                            <div className='d-flex align-items-center ml-4'>
                                                <MdOutlineIndeterminateCheckBox className='manage_credit_limits_icon' />
                                                <div className='manage_credit_limits_heading'>Manage Credit Card Limits</div>
                                            </div>
                                        </div>

                                        <div className='manage_your_card_inner_cont'>
                                            <div>
                                                <div className='mb-1'>Select Credit Card Number:</div>
                                                <div>
                                                    <select required className='credit_cards_lists'
                                                        value={creditCardNum} onChange={handleCreditCardNumber}>
                                                        {customerAccData.map((creditcard, index) => (
                                                            <option key={index} value={creditcard.creditCardNumber}>
                                                                {creditcard.creditCardNumber}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='d-flex justify-content-between my-3 existing_credit_card_limit'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='mr-1'>Existing Credit Limit: </div>
                                                        <div>{individualCreditCard.creditCardLimit}</div>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='mr-1'>Maximum Credit Limit: </div>
                                                        <div>{individualCreditCard.maximumCreditLimit}</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>Select your desired credit limit</div>
                                                    <div className="form-group">
                                                        <label htmlFor="formControlRange">Credit Limit (INR)</label>
                                                        <input
                                                            type="range"
                                                            className="form-control-range credit_card_limit_range"
                                                            id="formControlRange"
                                                            value={creditLimit}
                                                            min="0"
                                                            max={individualCreditCard.maximumCreditLimit}
                                                            onChange={handleRangeChange}
                                                            style={{
                                                                width: '100%',
                                                                background: `linear-gradient(to right, #2fb68e ${(creditLimit / individualCreditCard.maximumCreditLimit) * 100}%, #d3d3d3 ${(creditLimit / individualCreditCard.maximumCreditLimit) * 100}%)`,
                                                                height: '13px',
                                                                borderRadius: '4px',
                                                                cursor: 'pointer',
                                                                appearance: 'none',
                                                            }}
                                                        />
                                                        <div className='mt-3'>
                                                            Selected Credit Limit: INR {creditLimit}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='manage_credit_card_usage_cont'>
                                        <div className='manage_credit_limits_header'>
                                            <div className='d-flex align-items-center ml-4'>
                                                <MdOutlineIndeterminateCheckBox className='manage_credit_limits_icon' />
                                                <div className='manage_credit_limits_heading'>Manage Credit Card Usage</div>
                                            </div>
                                        </div>
                                        <div className='manage_card_usage_container'>
                                            <div className='my-3'>
                                                <Tab.Container defaultActiveKey='#domestic'>
                                                    <Row>
                                                        <Col lg={12}>
                                                            <ListGroup horizontal>
                                                                <ListGroupItem action href='#domestic'>
                                                                    Domestic Card Usage
                                                                </ListGroupItem>
                                                                <ListGroupItem action href='#international'>
                                                                    International Card Usage
                                                                </ListGroupItem>
                                                            </ListGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row className='my-3'>
                                                        <Col lg={12}>
                                                            <Tab.Content>
                                                                <Tab.Pane eventKey='#domestic'>
                                                                    <table className='table table-borderless credit_card_usage_table'>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Transaction Type</th>
                                                                                <th>Transaction Status</th>
                                                                                <th>Transaction Limit (Max Limit 20000)</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>ATM Withdrawal</td>
                                                                                <td>
                                                                                    <label>
                                                                                        <Toggle
                                                                                            checked={atmStatus}
                                                                                            icons={false}
                                                                                            value={atmStatus}
                                                                                            className='toggle_button'
                                                                                            onChange={handleAtmStatus} />
                                                                                    </label>
                                                                                </td>
                                                                                <td>
                                                                                    {
                                                                                        atmStatus ?
                                                                                            (<input className='card_trans_limit'
                                                                                                value={individualCreditCard.atmTransactionLimit || ""}
                                                                                                onChange={handleATMTransaction}
                                                                                            />)
                                                                                            :
                                                                                            (<input className='card_trans_limit_empty'
                                                                                                value={""} disabled />
                                                                                            )
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Online Transactions</td>
                                                                                <td>
                                                                                    <label>
                                                                                        <Toggle
                                                                                            checked={onlineStatus}
                                                                                            icons={false}
                                                                                            value={onlineStatus}
                                                                                            onChange={handleOnlineStatus} />
                                                                                    </label>
                                                                                </td>
                                                                                <td>
                                                                                    {
                                                                                        onlineStatus ?
                                                                                            (<input className='card_trans_limit'
                                                                                                value={individualCreditCard.onlineTransactionLimit || ""}
                                                                                                onChange={handleOnlineTransaction}
                                                                                            />
                                                                                            )
                                                                                            :
                                                                                            (<input className='card_trans_limit_empty'
                                                                                                value={""} disabled />
                                                                                            )
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Merchant Outlets</td>
                                                                                <td>
                                                                                    <label>
                                                                                        <Toggle
                                                                                            checked={merchantStatus}
                                                                                            icons={false}
                                                                                            value={merchantStatus}
                                                                                            onChange={handleMerchantStatus} />
                                                                                    </label>
                                                                                </td>
                                                                                <td>
                                                                                    {
                                                                                        merchantStatus ?
                                                                                            (<input className='card_trans_limit'
                                                                                                value={individualCreditCard.merchantOutletTransLimit || ""}
                                                                                                onChange={handleMerchantOutlets} />)
                                                                                            :
                                                                                            (<input className='card_trans_limit_empty'
                                                                                                value={""} disabled />)
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Tap & Pay Transactions</td>
                                                                                <td>
                                                                                    <label>
                                                                                        <Toggle
                                                                                            checked={tapPayStatus}
                                                                                            icons={false}
                                                                                            value={tapPayStatus}
                                                                                            onChange={handleTapPayStatus} />
                                                                                    </label>
                                                                                </td>
                                                                                <td>
                                                                                    {
                                                                                        tapPayStatus ?
                                                                                            (<input className='card_trans_limit'
                                                                                                value={individualCreditCard.tapAndPayTransLimit || ""}
                                                                                                onChange={handlePayTransaction} />)
                                                                                            :
                                                                                            (<input className='card_trans_limit_empty'
                                                                                                value={""} disabled />)
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey='#international'>
                                                                    <table className='table table-borderless credit_card_usage_table'>
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Transaction Type</th>
                                                                                <th>Transaction Status</th>
                                                                                <th>Transaction Limit (Max Limit 20000)</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>ATM Withdrawl</td>
                                                                                <td>
                                                                                    <label>
                                                                                        <Toggle icons={false} />
                                                                                    </label>
                                                                                </td>
                                                                                <td>
                                                                                    <input className='card_trans_limit'>

                                                                                    </input>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Online Transactions</td>
                                                                                <td>
                                                                                    <label>
                                                                                        <Toggle icons={false} />
                                                                                    </label>
                                                                                </td>
                                                                                <td>
                                                                                    <input className='card_trans_limit'>

                                                                                    </input>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Merchant Outlets</td>
                                                                                <td>
                                                                                    <label>
                                                                                        <Toggle icons={false} />
                                                                                    </label>
                                                                                </td>
                                                                                <td>
                                                                                    <input className='card_trans_limit'>

                                                                                    </input>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Tap & Pay Transactions</td>
                                                                                <td>
                                                                                    <label>
                                                                                        <Toggle icons={false} />
                                                                                    </label>
                                                                                </td>
                                                                                <td>
                                                                                    <input className='card_trans_limit'>

                                                                                    </input>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </Tab.Pane>
                                                            </Tab.Content>
                                                        </Col>
                                                    </Row>
                                                </Tab.Container>
                                            </div>
                                            <div>
                                                <div>
                                                    <div className='card_usage_note_heading'>Note:</div>
                                                    <div>
                                                        <ul style={{ fontSize: '14px' }}>
                                                            <li>
                                                                You can only change the transaction type or transaction limit for one card at a time
                                                            </li>
                                                            <li>
                                                                Subject to the maximum daily transaction limits on your Credit card
                                                            </li>
                                                            <li>
                                                                By disabling any transaction type, any Per-Transaction limit set for that transaction type will also get deleted
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='my-3'>
                                                    <button type='button' className='credit_limit_generate_otp_btn'
                                                        onClick={generateOTP}>
                                                        Generate OTP
                                                    </button>
                                                </div>
                                                <div className='px-2'>
                                                    <div className='card_usage_auth_trans'>Enter OTP For Credit Card Limits & Usage:</div>
                                                    {/* <div className='card_usage_otp_text'>One Time Password</div> */}
                                                    <div className='d-flex align-items-center'>
                                                        <input className='card_usage_otp_box'
                                                            onChange={readCreditCardLimitOTP} value={creditCardOtp}>

                                                        </input>
                                                        <div>OTP has been send to your registered Mail Id</div>
                                                    </div>
                                                    <div className='my-3'>
                                                        <div className='card_usage_otp_notes'>
                                                            If there is a delay in receipt of OTP, you can send a request to receive it, SMS IBOTP to 5676766 or
                                                            9215676766. Request should be sent from the mobile number registered in our records.
                                                        </div>
                                                        <div className='card_usage_otp_notes'>
                                                            Please do not share OTP with anyone, even if the person claims to be an Royal Islamic bank official.
                                                            For further details <a href='#ff'>click here</a>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <ToastContainer />
                                                        <button type='button' className='card_usage_submit_btn'
                                                            onClick={handleVerifyCreditCardOTP}>
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>

            </Tab.Container>
        </div>
    )
};
export default CreditCard;