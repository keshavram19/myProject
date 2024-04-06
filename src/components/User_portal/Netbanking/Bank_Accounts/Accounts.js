import './Accounts.css';

import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import Navbar from '../Overview/Navbar';
import apiList from '../../../../lib/apiList';


const Accounts = ({withinViewSummaryPage }) => {

    const [viewAccStatement, setViewAccStatement] = useState();
    const [accountDetails, setAccountDetails] = useState({
        accountNumber: '',
        firstname: '',
        lastname: '',
        prefix: '',
        dateofbirth: '',
        pannumber: '',
        ifscCode: '',
        openaccount: '',
        mobilenumber: '',
        userAccountBalance: ''
    });
    const [recentTransactions, setRecentTransactions] = useState([]);


    const navigate = useNavigate();
    let logintoken = sessionStorage.getItem('loginToken');
    const isTokenExpired = () => {
        const expirationTime = sessionStorage.getItem("expireTime");
        return expirationTime && new Date().getTime() > parseInt(expirationTime, 10);
    };
    useEffect(() => {
        if (isTokenExpired()) {
            sessionStorage.clear();
            sessionStorage.removeItem('loginToken');
            navigate('/netbanking-personal-login');
        }
        else if (!logintoken) {
            navigate('/netbanking-personal-login');
        }
    }, [navigate]);

    // const expiredTime = sessionStorage.getItem('expireTime');
    // console.log(new Date().getTime());
    // console.log(parseInt(expiredTime, 10));

    const accountStatement = () => {
        if (viewAccStatement === 'true') {
            setViewAccStatement('false')
        }
        else {
            setViewAccStatement('true')
        }
    };


    useEffect(() => {
        customerDetails()
    }, []);

    // const customerDetails = async () => {

    //     const options = {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${logintoken}`
    //         }
    //     };

    //     try {
    //         const response = await fetch(apiList.customerDetails, options);
    //         if (response.ok) {
    //             const data = await response.json();
    //             setAccountDetails(data.user)
    //             setRecentTransactions(data.user.transactions)
    //         }
    //         else {
    //             console.log(response);
    //         }
    //     }
    //     catch (error) {
    //         console.log(error.message);
    //     }
    // };

    const customerDetails = async () => {
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${logintoken}`
            }
        };

        try {
            const response = await fetch(apiList.customerDetails, options);
            if (response.ok) {
                const data = await response.json();

                // Format dates in recentTransactions
                const formattedTransactions = data.user.transactions.map(transaction => ({
                    ...transaction,
                    date: new Date(transaction.date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                    })
                }));

                setAccountDetails(data.user);
                setRecentTransactions(formattedTransactions);
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    // console.log(recentTransactions);


    const latestTransactions = recentTransactions.slice().reverse();
    const reversedArray = latestTransactions.slice(0, 3);

    // const lastThreeDigits = (accountDetails.mobilenumber).slice(-4)
    // const maskedDigits = 'X'.repeat(6);


    return (
        <div className='container-fluid' style={{ marginTop: "90px" }}>
            {/* <Navbar /> */}
            <div className='row'>
                {/* <OverviewSidebar/> */}
                <div className="col-3">
                    <div className="">
                    {!withinViewSummaryPage && <BankaccountSidebar />}
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
                                    {accountDetails.openaccount}
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
                                <div>{accountDetails.accountNumber}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>First Name</div>
                                <div>{accountDetails.prefix} {accountDetails.firstname} {accountDetails.lastname}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>Date of Birth</div>
                                <div>{accountDetails.dateofbirth}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>PAN</div>
                                <div>{accountDetails.pannumber}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>IFSC Code</div>
                                <div>{accountDetails.ifscCode}</div>
                            </div>
                            <div>
                                <div className='savings_acct_user_headings'>Mobile No:</div>
                                <div>{accountDetails.mobilenumber}</div>
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
                                    {accountDetails.accountNumber}
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