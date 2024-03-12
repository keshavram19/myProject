import './Accounts.css';

import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { MdCurrencyRupee } from "react-icons/md";

import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import Navbar from '../Overview/Navbar';
import apiList from '../../../../lib/apiList';


const Accounts = () => {

    const [viewAccStatement, setViewAccStatement] = useState();
    const [accountDetails, setAccountDetails] = useState({
        userAccountType: '',
        userAccountBalance: '',
        userAccountNumber: '',
        accountHolderName: '',
        userDateOfBirth: '',
        accountHolderPAN: '',
        bankBranchName: ''
    });
    const [recentTransactions, setRecentTransactions] = useState([]);

    // let navigate = useNavigate();
    // let logintoken = sessionStorage.getItem('loginToken')
    // useEffect(() => {
    //     if(!logintoken){
    //         navigate('/netbanking-personal-login');
    //     }
    //     const timeout = setTimeout(() => {
    //         sessionStorage.removeItem('loginToken');
    //         navigate('/netbanking-personal-login');
    //     }, 60000); //300000
    //     return () => clearTimeout(timeout);
    // }, [logintoken, navigate]);

    // let navigate = useNavigate();
    // let logintoken = sessionStorage.getItem('loginToken')
    // if(!logintoken){
    //     navigate('/netbanking-personal-login');
    // }

    // let token = sessionStorage.getItem('loginToken');
    // let tokenTime = sessionStorage.getItem('expireTime');
    // let navigate = useNavigate();
    // useEffect(() => {
    //     if (token && tokenTime) {
    //         const expireTime = new Date(tokenTime);
    //         const currentTime = new Date();   
    //         if (currentTime > expireTime) { 
    //           sessionStorage.removeItem('loginToken');
    //           sessionStorage.removeItem('expireTime');
    //           navigate('/netbanking-personal-login');
    //         }
    //       }
    //       else {
    //         navigate('/netbanking-personal-login');
    //       }
    // }, []);

    const navigate = useNavigate();
    let logintoken = sessionStorage.getItem('loginToken')
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
        else if (!logintoken) {
            navigate('/netbanking-personal-login');
        }
    }, [navigate]);


    const accountStatement = () => {
        if (viewAccStatement === 'true') {
            setViewAccStatement('false')
        }
        else {
            setViewAccStatement('true')
        }
    };

    useEffect(() => {
        getUserAccountDetails()
    }, []);
    let accountNumber = 123456789;
    const getUserAccountDetails = async () => {

        const options = {
            method: 'GET'
        };

        try {
            const response = await fetch(`${apiList.customerAccountDetails}${accountNumber}`, options);
            if (response.ok) {
                const data = await response.json();
                setAccountDetails(data.details);
                setRecentTransactions(data.details.transactions);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };

    const latestTransactions = recentTransactions.slice().reverse();
    const reversedArray = latestTransactions.slice(0, 3);


    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            {/* <Navbar /> */}
            <div className='row'>
                {/* <OverviewSidebar/> */}
                <div className="col-3">
                    <div className="">
                        <BankaccountSidebar />
                    </div>
                </div>
                <div className='col-9'>

                    <div className='accounts_container'>
                        <div className='savings_account_header'>
                            <div className='d-flex align-items-center'>
                                <div className='savings_acct_type_heading'>
                                    Account Type:
                                </div>
                                <div className='savings_acct_type_text'>
                                    {accountDetails.userAccountType}
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='savings_acct_avail_bal'>
                                    Available Balance:
                                </div>
                                <div className='savings_acct_avail_bal_text'>
                                    {accountDetails.userAccountBalance}
                                </div>
                            </div>
                        </div>
                        <div className='savings_account_user_details_cont'>
                            <div>
                                <div className='savings_acct_user_headings'>Account No:</div>
                                <div>{accountDetails.userAccountNumber}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>Name</div>
                                <div>{accountDetails.accountHolderName}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>Date of Birth</div>
                                <div>{accountDetails.userDateOfBirth}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>PAN</div>
                                <div>{accountDetails.accountHolderPAN}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>Branch</div>
                                <div>{accountDetails.bankBranchName}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>Balance</div>
                                <div className='d-flex align-items-center'><MdCurrencyRupee />{accountDetails.userAccountBalance}</div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <button onClick={accountStatement} className='account_statement_view_btn'>
                                    {viewAccStatement === 'true' ? 'Hide' : 'View'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {viewAccStatement === 'true' ?
                        <div>
                            <div className='d-flex align-items-center'>
                                <div className='acct_statement_acct_num'>
                                    Account Number:
                                </div>
                                <div className='acct_statement_num_text'>
                                    {accountDetails.userAccountNumber}, {accountDetails.bankBranchName}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between savings_acc_another_acct'>
                                <div><Link to='/user/account/statement'>Select Another Account/Period</Link></div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <div className='d-flex align-items-center'>
                                    <div className='savings_acct_mybalnace'>
                                        My Balance:
                                    </div>
                                    <div className='savings_acct_mybal_text'>
                                        {accountDetails.userAccountBalance}
                                    </div>
                                </div>
                            </div>
                            <div className='my-3'>
                                <table className='table table-bordered savings_acct_trans_table'>
                                    <thead className='savings_acct_trans_table_header'>
                                        <tr>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>Debited</th>
                                            <th>Credited</th>
                                            <th>Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody className='savings_acct_trans_table_body'>
                                        {
                                            reversedArray.map((transaction) => (
                                                <tr>
                                                    <td style={{ width: '100px' }}>{transaction.date}</td>
                                                    <td>{transaction.description}</td>
                                                    <td>{transaction.withdrawal}</td>
                                                    <td>{transaction.deposit}</td>
                                                    <td>{transaction.balance}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        ''
                    }
                    <div>
                        <div className='savings_account_note'>Notes:</div>
                        <ul>
                            <li className='savings_acct_note_points'>
                                The available balance mentioned reflects both the credit balance any existing overdraft limit, if applicable.
                            </li>
                            <li className='savings_acct_note_points'>
                                This balance does not encompass funds that are yet to be cleared.
                            </li>
                            <li className='savings_acct_note_points'>
                                Savings account holders now have the option to receive monthly statements via email at no cost. To enroll, <a className='savings_acc_note_atag'>click</a> on the provided link.
                            </li>
                            <li className='savings_acct_note_points'>
                                For verification of your PAN card details, please <a className='savings_acc_note_atag'>click</a> on the provided link.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Accounts;