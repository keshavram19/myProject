import React, { useState, useEffect, useRef } from 'react';
import './Accounts.css';
import { useNavigate } from 'react-router-dom';
import { IoCaretDownCircleOutline } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { AiFillPrinter } from "react-icons/ai";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import apiList from '../../../../lib/apiList';
import banklogo from '../../../../Images/banklogo.png';
import { format } from 'date-fns';
import html2pdf from 'html2pdf.js';
import { usePDFData } from '../../../../PDFDataContext.js';
import { ToastContainer, toast } from 'react-toastify';


const Statements = () => {
    const { pdfData, setPDFData } = usePDFData();
    const datePickerRef = useRef(null);
    const datePickerReference = useRef(null);
    const [savingsAccNumber, setAccountNumber] = useState('');
    const [accountType, setAccountType] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [transactionType, setTransactionType] = useState('allTransactions');
    const [perPageTransactions, setPerPageTransactions] = useState('');
    const [accountTypeDetails, setAccountTypeDetails] = useState({
        accountNumber: '',
        firstname: "",
        lastname: "",
        openaccount: "",
        ifscCode: "",
        userAccountBalance: ''
    });
    const [formattedFromDate, setFormattedFromDate] = useState(null);
    const [formattedToDate, setFormattedToDate] = useState(null);
    const [accountTransactions, setAccountTransactions] = useState([]);
    const [errorMsgStatus, setErrorMsgStatus] = useState('false');
    const [errorMsg, setErrorMsg] = useState('');
    const [periodRangeStatus, setPeriodRangeStatus] = useState(false);
    const [customerAddress, setCustomerAddress] = useState({
        flatnumber: '',
        buildingname: '',
        landmark: '',
        city: '',
        state: '',
        country: '',
        pincode: ''
    });
    const formatTodayDate = format(new Date(), "dd MMM yyyy");

    let token = sessionStorage.getItem('loginToken');
    const transactionRef = useRef(null);
    

    const navigate = useNavigate();
    const isTokenExpired = () => {
        const expirationTime = sessionStorage.getItem("expireTime");
        return expirationTime && new Date().getTime() > parseInt(expirationTime, 10);
    };
    useEffect(() => {
        if (isTokenExpired()) {
            sessionStorage.clear();
            sessionStorage.removeItem('loginToken')
            navigate('/netbanking-personal-login');
        }
    }, [navigate]);


    const handleStartDateChange = (date) => {
        setFromDate(date);
        if (toDate && toDate < date) {
            setToDate(null);
        }
        const fromFormatted = format(date, 'dd MMM yyyy');
        setFormattedFromDate(fromFormatted)
    };
    const handleEndDateChange = (date) => {
        if (!fromDate) {
            setFromDate(date);
        } else {
            setToDate(date);
        }
        const toFormatted = format(date, 'dd MMM yyyy');
        setFormattedToDate(toFormatted)
    };

    const handleAccountNumber = (event) => {
        setAccountNumber(event.target.value)
    };

    const handleAccountType = (event) => {
        setAccountType(event.target.value)
    };

    const handleTransactionType = (event) => {
        setTransactionType(event.target.value)
    };

    const handlePerPageTransactions = (event) => {
        setPerPageTransactions(event.target.value)
    };

    const handlePeriodRange = () => {
        setPeriodRangeStatus(!periodRangeStatus)
    };


    useEffect(() => {
        getAccountTypeDetails()
    }, []);
    const getAccountTypeDetails = async () => {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const response = await fetch(apiList.customerDetails, options);
            if (response.ok) {
                const data = await response.json();
                setAccountTypeDetails(data.user);
                setCustomerAddress(data.user.currentAddress)
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };


    const generatePDF = () => {
   
        const options = {
            margin: 10,
            filename: 'transactions.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 }
        };
    
        const bankLogo = `
            <div class='statements_bank_logo_container'>
                <div>
                    <img src=${banklogo} class='statements_bank_logo'>
                </div>
            </div>    
        `;
    
        const customerInfo = `
            <div class='customer_info_container'>
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Account Name</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>${accountTypeDetails.firstname} ${accountTypeDetails.lastname}</div>
                </div>
    
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Address</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>
                        ${customerAddress.flatnumber}, ${customerAddress.buildingname}, ${customerAddress.landmark}, ${customerAddress.city},
                        ${customerAddress.state}, ${customerAddress.country} ${customerAddress.pincode}
                    </div>
                </div>
    
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Date</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>${formatTodayDate}</div>
                </div>
    
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Account Number</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>${accountTypeDetails.accountNumber}</div>
                </div>
                
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Account Type</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>${accountTypeDetails.openaccount}</div>
                </div>
    
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>CIF No</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>90132177309</div>
                </div>
    
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>IFS Code</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>${accountTypeDetails.ifscCode}</div>
                </div>
                
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>MICR Code</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>520002682</div>
                </div>
    
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Balance</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>INR ${accountTypeDetails.userAccountBalance}</div>
                </div>
    
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Transaction Type</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>${transactionType}</div>
                </div>
    
                <div class='customer_account_info'>
                    <div class='customer_details_heading'>Search for</div>
                    <div class='customer_details_heading_semicol'>:</div>
                    <div>${formattedFromDate} to ${formattedToDate}</div>
                </div>
            </div>
        `;
    
        const footerInfo = `
            <div class='footer_info'>
                <div class='footer_info_statement'>
                    Please do not share your ATM, Debit/Credit card number, PIN and OTP with anyone over mail, SMS, phone call
                    or any other media. Bank never ask for such information.
                </div>
                <div>
                    *** This is computer generated statement and does not require a signature.
                </div>
            </div>
        `;
        const transactionTableHTML = transactionRef.current ? transactionRef.current.innerHTML : '';
        
        const combinedHTML = `
            <div>
                ${bankLogo}
                ${customerInfo}
                ${transactionTableHTML}
                ${footerInfo}
            </div>
        `;
    
        return { options, combinedHTML };
    };

    const handleDownloadTransactions = () => {
        const { options, combinedHTML } = generatePDF();
        html2pdf().from(combinedHTML).set(options).save();
    };
    const handleemailotp = async () => {
        await fetchTransactions();

        const { options, combinedHTML } = generatePDF();
        const pdf = html2pdf().from(combinedHTML).set(options);
    
        pdf.outputPdf('datauristring').then(data => {
            setPDFData(data);
            navigate('/user/account/statement-by-email');
        }).catch(error => {
            console.error('Error generating PDF:', error);
        });
    };

    const showToast = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        }); 
    };

    const handleTransStatement = () => {
        if (!accountType) {
            showToast('Please select an account type.');
            return;
        }
        if (!savingsAccNumber) {
            showToast('Please select an account number.');
            return;
        }
        if (!fromDate || !toDate) {
            showToast('Please select both from and to dates.');
            return;
        }
        fetchTransactions();
    };


    const fetchTransactions = async () => {

        const fromDate = formattedFromDate;
        const toDate = formattedToDate;
        const acctNum = savingsAccNumber;
        const acctType = accountType;
        const transType = transactionType;

        const url = `http://localhost:4444/api/getTransaction/${acctNum}/${acctType}?fromDate=${fromDate}&toDate=${toDate}&transType=${transType}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        try {
            const response = await fetch(url, options);
            const responseData = await response.json();

            if (response.status === 200) {
                setErrorMsgStatus('false')
                const formattedTransactions = responseData.transactions.map(transaction => ({
                    ...transaction,
                    date: new Date(transaction.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                    })
                }));
                setAccountTransactions(formattedTransactions);
            } else {
                setErrorMsgStatus('true')
                setErrorMsg(responseData.message)
            }
        }
        catch (error) {
            console.log('Error while fetching transactions:', error);
        }
    };
    let reverseTransactions = accountTransactions.slice().reverse();

    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            <div className='row'>
                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9'>
                    <ToastContainer /> 
                    <div className='acct_statements_months_cont' >
                        <div className='savings_acct_statement_heading'>
                            Current & Previous Months Account Statements:
                        </div>
                        <div className='acct_type_cont'>
                            <div className='acct_type_text'>Account Type:</div>
                            <div className='d-flex align-items-center'>
                                <select className='form-control statement_select_format' onChange={handleAccountType}>
                                    <option hidden> Select Account Type </option>
                                    <option value='savings'>Savings</option>
                                    <option value='Current'>Current</option>
                                </select>
                                <IoCaretDownCircleOutline className='statement_acct_type_icon' />
                            </div>
                        </div>

                        <div className='acct_num_cont'>
                            <div className='acct_num_text'>Account Number:</div>
                            <div className='d-flex align-items-center'>
                                <select className='form-control statement_select_format'
                                    disabled={accountType === 'Current'} onChange={handleAccountNumber}>
                                    <option hidden>Select Account Number</option>
                                    <option>{accountTypeDetails.accountNumber}</option>
                                </select>
                                <IoCaretDownCircleOutline className='statement_acct_type_icon' />
                            </div>
                        </div>

                        <div className='d-flex period_cont'>
                            <div className='d-flex align-items-center period_data_cont'>
                                <div>
                                    <input type='radio' id='period' className='period_radio_btn'
                                        disabled={accountType === 'Current'} name='radioBtn' value='2'
                                        onChange={handlePeriodRange}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor='period'>Select Period</label>
                                </div>
                            </div>
                            <div>
                                <div className='mb-2 d-flex align-items-center'>
                                    <div className='period_from_to'>From:</div>
                                    <div className='d-flex align-items-center'>
                                        <DatePicker
                                            ref={datePickerRef}
                                            selected={fromDate} onChange={handleStartDateChange}
                                            className='from_date_period' disabled={periodRangeStatus === false}
                                            selectsStart dateFormat="dd MMM yyyy" fromDate={fromDate} toDate={toDate}
                                        />
                                        <FcCalendar className='calender_icon' onClick={() => datePickerRef.current.setOpen(true)} />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='period_from_to'>To:</div>
                                    <div className='d-flex align-items-center'>
                                        <DatePicker
                                            ref={datePickerReference}
                                            selected={toDate} dateFormat="dd MMM yyyy" onChange={handleEndDateChange}
                                            disabled={periodRangeStatus === false} selectsEnd fromDate={fromDate}
                                            toDate={toDate} minDate={fromDate} className='from_date_period'>

                                        </DatePicker>
                                        <FcCalendar className='calender_icon' onClick={() => datePickerReference.current.setOpen(true)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='show_transactions_cont'>
                            <div className='show_transactions_text'>Show Transactions:</div>
                            <div className='show_all_transa'>
                                <select className='form-control transaction_statement_option'
                                    disabled={accountType === 'Current'} onChange={handleTransactionType}>
                                    <option value='allTransactions '>All Transactions</option>
                                    <option value='withdrawal'>Withdrawals</option>
                                    <option value='deposit'>Deposits</option>
                                </select>
                                <IoCaretDownCircleOutline className={`all_trans_icon`} />
                            </div>

                            <div className='per_page_tarns'>
                                <div className='mr-2'>Transactions</div>
                                <div >
                                    <select className='form-control transaction_statement_option'
                                    
                                        disabled={accountType === 'Current'} onChange={handlePerPageTransactions}>
                                        <option>10</option>
                                        <option>15</option>
                                        <option>20</option>
                                    </select>
                                </div>
                                <div>
                                    <IoCaretDownCircleOutline className='page_trans_icon' />
                                </div>
                            </div>
                        </div>
                        <div className='transactions_view_btn_cont'>
                            <button className='transactions_view_btn' type='button' onClick={handleTransStatement}>
                                View
                            </button>
                            
                        </div>
                    </div>
                    {
                        reverseTransactions.length > 0 &&
                        (<div className='my-5'>
                            <div>
                                <div className='d-flex justify-content-between'>
                                    <div className='savings_acc_statement_cont_heading'>
                                        View/Download Account Statement
                                    </div>
                                    <div className='d-flex'>
                                        <div><AiFillPrinter className='acct_statement_printer_icon' /></div>
                                        <div className='acct_statement_printer_text'>Print This Page</div>
                                    </div>
                                </div>
                                <div className='d-flex statement_savings_acct_num_cont'>
                                    <div className='statement_savings_acct_num'>Savings Account No: </div>
                                    <div className='statement_savings_acct_branch'>
                                        {accountTypeDetails.accountNumber}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex align-items-center' style={{ fontSize: '15px' }}>
                                        <div className='mr-2'>Period: </div>
                                        <div className='mr-2'>{formattedFromDate} to {formattedToDate}</div>
                                    </div>
                                    <div>
                                        <div className='trans_statement_pages'>Page 1 of 1</div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex justify-content-end'>
                                <div className='tran_statement_closing_bal'>Closing Balance:</div>
                                <div className='tran_statement_balance'>
                                    INR {accountTypeDetails.userAccountBalance}
                                </div>
                            </div>

                            <div className='my-3' ref={transactionRef}>
                                <table className='table table-bordered'>
                                    <thead className='tran_statement_table_header' >
                                        <tr>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>Debited</th>
                                            <th>Credited</th>
                                            <th>Balance</th>
                                        </tr>
                                    </thead>

                                    <tbody className='tran_statement_table_body'>
                                        {reverseTransactions.map((transaction, index) => (
                                            <tr key={index}>
                                                <td style={{ width: '100px' }}>{transaction.date}</td>
                                                <td>{transaction.description}</td>
                                                <td>{transaction.withdrawal}</td>
                                                <td>{transaction.deposit}</td>
                                                <td>{transaction.balance}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                            <div>
                                <button type='button' className='statement_download_btn'
                                    onClick={handleDownloadTransactions}>
                                    Download
                                </button>
                                <button type='button' className='statement_download_btn ml-3'
                                    onClick={handleemailotp}>
                                    Statement by Email
                                </button>
                                
                            </div>
                        </div>)
                    }

                    {
                        errorMsgStatus === 'true' ?
                            (<div className='d-flex justify-content-center my-3 text-danger'>
                                {errorMsg}
                            </div>) : ''
                    }

                    <div>
                        <div className='savings_acct_statement_note'>Notes:</div>
                        <ul>
                            <li className='savings_acct_statement_note_points'>
                                Transactions can be viewed or downloaded for the selected period only.
                            </li>
                            <li className='savings_acct_statement_note_points'>
                                User can navigate through transaction pages, with each page displaying up to 20 transactions.
                            </li>
                            <li className='savings_acct_statement_note_points'>
                                If the total number of transactions exceeds 2000 for a period of six months or less, the statement can be downloaded
                                in parts by adjusting the date range accordingly.
                            </li>
                            <li className='savings_acct_statement_note_points'>
                                Remember to confirm your selection by clicking on the 'Select Period' option to save and
                                download the account statement.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Statements;