import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';
import './Creditcard.css';
import html2pdf from 'html2pdf.js';


const VirtualCreditCards = () => {
    const creditCardRef = useRef(null);
    const [pdfOption, setPdfOption] = useState('PDF file');
    const [userDetails, setUserDetails] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [selectedCreditCard, setSelectedCreditCard] = useState('');
    const [lastFourDigits, setLastFourDigits] = useState('');
    const accountNumber = 1124563456;

    

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiList.customerAccountDetails}${accountNumber}`);
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
        if (selectedAccount === '') {
            fetchData();
        }
    }, [selectedAccount]);

    const handleAccountChange = (event) => {
        setSelectedAccount(event.target.value);
    };

    const formatCreditCardNumber = (cardNumber) => {
        const cardNumberString = String(cardNumber);
        const firstFourDigits = cardNumberString.substring(0, 4);
        const lastFourDigits = cardNumberString.substring(cardNumberString.length - 4);
        const maskedDigits = 'X'.repeat(cardNumberString.length - 8);
        return ` ${firstFourDigits}${maskedDigits}${lastFourDigits}`;
    };

   
    

    const handlePdfOptionChange = (event) => {
        setPdfOption(event.target.value);
    };

    const handlePdfDownload = () => {
        const opt = {
            margin: 0.5,
            filename: 'credit_card_details.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
    
        if (creditCardRef.current) {
            const formattedContent = `
                <div>
                    <p>Royal Islamic Credit card</p>
                    <p>Card Number: ${userDetails[0].userCreditCardDetails[0].creditCardNumber}</p>
                    <p>Account Holder Name: ${userDetails[0].accountHolderName}</p>
                    <p>Expiry Date: ${userDetails[0].userCreditCardDetails[0].userCreditCardExpiryDate}</p>
                    <p>Credit Card Limit: ${userDetails[0].userCreditCardDetails[0].creditCardLimit}</p>
                    <p>Total Amount Due: ${userDetails[0].userCreditCardDetails[0].totalAmountDue}</p>
                    <p>Current Outstanding: ${userDetails[0].userCreditCardDetails[0].currentOutstanding}</p>
                    <p>Available Credit Limit: ${userDetails[0].userCreditCardDetails[0].availableCreditLimit}</p>
                    <p>CVV: ${userDetails[0].userCreditCardDetails[0].userCreditCardcvv}</p>
                    <p>Status: ${userDetails[0].userCreditCardDetails[0].userCreditCardStatus}</p>
                </div>
            `;
    
            html2pdf().from(formattedContent).set(opt).save();
        } else {
            console.error('Element not found:', creditCardRef.current);
        }
    };
    
    

    return (
        <div>
            <div className='virtual_credit_card container-fluid' style={{ marginTop: '80px' }}>
                <div className='row'>
                    <div className='col-sm-3'>
                        <BankaccountSidebar />
                    </div>
                    <div className='col-sm-9'>
                        <div>
                            <h4 style={{ color: '#ebca28' }}>Virtual Credit Cards</h4>
                        </div>
                        <div className=' virtual_credit_card_details card'>

                            <div className="credit-card ml-4 mt-3" id="credit-card" ref={creditCardRef}>
                                <div className='d-flex'>
                                    <div class="chip"></div>
                                    <h6 style={{ marginLeft: '120px' }}>Royal Islamic Credit</h6>
                                </div>
                                <div class="card-number">

                                    <p
                                        className="credit_card_input"
                                        value={selectedCreditCard}
                                        onChange={(event) => setSelectedCreditCard(event.target.value)}
                                    >
                                        {userDetails.length > 0 && (
                                            <p value={formatCreditCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}>
                                                {formatCreditCardNumber(userDetails[0].userCreditCardDetails[0].creditCardNumber)}
                                            </p>
                                        )}

                                    </p>
                                </div>
                                <div class="card-details">
                                    <div class="card-holder">
                                        <p
                                            className="form_input"
                                            value={selectedAccount}
                                            onChange={handleAccountChange}
                                        >
                                            {userDetails.map((account, index) => (
                                                <p key={index} value={account.userAccountNumber}>
                                                    <p>{account.accountHolderName}</p>
                                                </p>
                                            ))}
                                        </p>

                                        <p className="credit_card_input"
                                            value={selectedCreditCard}
                                            onChange={(event) => setSelectedCreditCard(event.target.value)}
                                        >
                                            {userDetails.length > 0 && (
                                                <p value={userDetails[0].userCreditCardDetails[0].userCreditCardExpiryDate}>
                                                    {userDetails[0].userCreditCardDetails[0].userCreditCardExpiryDate}
                                                </p>
                                            )}
                                        </p>

                                    </div>

                                </div>
                            </div>
                            <div className="container-fluid">
                                <div>
                                    <div className="container-fluid p-3 virtual_credit_card_details">
                                        <div className='col-sm-8'>
                                            <div className='download_details mt-3'>
                                                <label htmlFor="pdfOption">Download Details As:</label>
                                                <select className="virtual_credit_card_input ml-3" id="pdfOption"
                                                    value={pdfOption}
                                                    onChange={handlePdfOptionChange}>
                                                    <option value="PDF file">PDF file</option>
                                                </select>
                                                <button className={`ml-3 ok_Btn`} onClick={handlePdfDownload}>
                                                    OK
                                                </button>
                                            </div>
                                        </div>
                                       <div style={{marginTop:'80px'}}>
                                       <ul className='virtual_credit_card_links'>
                                            <li>Useful Links :</li>
                                            <li><Link to="">Terms and Conditions</Link></li>
                                            <li><Link to="">FAQs</Link></li>
                                        </ul>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualCreditCards;