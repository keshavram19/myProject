import './Accounts.css';

import { useEffect, useState } from 'react';
import { MdCurrencyRupee } from "react-icons/md";
import { AiFillPrinter } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar'
import Navbar from '../Overview/Navbar';


const allTransactionsList = [
    {
        date: '25 Jan 2024',
        narration: 'UPI-BADE NAGARAJU-Q857498653@ybl-YESBOYBLUPI-439140239946-Payment from Phone',
        withdrawl: '20.00',
        deposite: '',
        balance: '1.48'
    },
    {
        date: '24 Jan 2024',
        narration: 'UPI-Mr RAVI TEJA-7032256838@ybl-IDIB000M160-402484923876-Payment to 7032256',
        withdrawl: '10,000.00',
        deposite: '',
        balance: '21.48'
    },
    {
        date: '23 Jan 2024',
        narration: 'UPI-PRATHI PAWAN KALYAN-89788426211@ybl-SBIN0011101-438930608914-Payment from Phone',
        withdrawl: '',
        deposite: '10,000.00',
        balance: '10,021.48'
    },
    {
        date: '21 Jan 2024',
        narration: 'UPI-KANDRA SUNIL-9676350447@ybl-IOBA0003640-402376683037-Payment to 9676350',
        withdrawl: '10,000.00',
        deposite: '',
        balance: '21.48'
    },
    {
        date: '20 Jan 2024',
        narration: 'UPI-Mr SAI TEJA-7032256838@ybl-IDIB000M160-438905881961-Payment from Phone',
        withdrawl: '',
        deposite: '10,000.00',
        balance: '10,021.48'
    },
    {
        date: '19 Jan 2024',
        narration: 'UPI-Southern Power Distr-TELANGANASSPDCL-@ybl-YESBOYBLUPI-438578208304-Payment from Phone',
        withdrawl: '579.00',
        deposite: '',
        balance: '34.43'
    },
    {
        date: '18 Jan 2024',
        narration: 'UPI-S J ENTERPRISES-paytmqr281005050101ohcg3wn30uhq@paytm-PYTM0123456-401914284585-Payment from Phone',
        withdrawl: '30.00',
        deposite: '',
        balance: '613.43'
    },
    {
        date: '17 Jan 2024',
        narration: 'UPI-FAMOUS CHICKEN CENTER-paytmqr1r7sb4s8ks@paytm-PYTM0123456-401897267622-Payment from Phone',
        withdrawl: '45.00',
        deposite: '',
        balance: '643.43'
    }
];

const Accounts = () => {

    const [viewAccStatement, setViewAccStatement] = useState()
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
    const [accountDetails, setAccountDetails] = useState()
    const getUserAccountDetails = async () => {

        const url = `http://localhost:4444/api/userDetails/${accountNumber}`;
        const options = {
            method: 'GET'
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setAccountDetails(data.details)
    };
    //console.log(accountDetails);

    const latestTransactions = allTransactionsList.slice(0, 3)


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
                    {accountDetails && (
                        <div className='accounts_container'>
                            <div className='savings_account_header'>
                                <div>
                                    <span className='savings_acct_type_heading'>Account Type</span>: {accountDetails.userAccountType}
                                </div>
                                <div>
                                    <span className='savings_acct_avail_bal'>Available Balance:</span> <MdCurrencyRupee />{accountDetails.userAccountBalance}
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
                                <div>
                                    <button onClick={accountStatement} className='account_statement_view_btn'>
                                        {viewAccStatement === 'true' ? 'Hide' : 'View'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {viewAccStatement === 'true' ?
                        <div>
                            <div className='d-flex justify-content-between savings_acct_statement'>
                                <div className='savings_acc_statement_cont_heading'>View/Download Account Statement</div>
                                <div className='d-flex'>
                                    <div><AiFillPrinter className='acct_statement_printer_icon' /></div>
                                    <div className='acct_statement_printer_text'>Print This Page</div>
                                </div>
                            </div>
                            <div>
                                <div><span className='acct_statement_acct_num'>Account Number:</span> {accountDetails.userAccountNumber}, {accountDetails.bankBranchName}</div>
                            </div>
                            <div className='d-flex justify-content-between savings_acc_another_acct'>
                                <div><Link to='/user/account/statement'>Select Another Account/Period</Link></div>
                                <div>Page 1 of 1</div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <div className='d-flex align-items-center'>
                                    <span className='savings_acct_mybalnace'>My Balance:</span> <MdCurrencyRupee />{accountDetails.userAccountBalance}
                                </div>
                            </div>
                            <div className='my-3'>
                                <table className='table table-bordered savings_acct_trans_table'>
                                    <thead className='savings_acct_trans_table_header'>
                                        <tr>
                                            <th>Date</th>
                                            <th>Narration</th>
                                            <th>Withdrawal</th>
                                            <th>Deposit</th>
                                            <th>Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            latestTransactions.map((eachTran) => (
                                                <tr>
                                                    <td>{eachTran.date}</td>
                                                    <td>{eachTran.narration}</td>
                                                    <td>{eachTran.withdrawl}</td>
                                                    <td>{eachTran.deposite}</td>
                                                    <td>{eachTran.balance}</td>
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
                        <div className='savings_account_note'>Note:</div>
                        <ul className='savings_account_note_points'>
                            <li className='savings_acct_note_first_point'>
                                The available balance displayed includes the credit balance and overdraft limit (if any) in your account.
                            </li>
                            <ol type='i'>
                                <li className='savings_acct_note_order_list'>It does not include uncleared funds.</li>
                                <li className='savings_acct_note_order_list'>It includes amount marked for hold.</li>
                            </ol>
                            <li className='savings_acct_note_points'>
                                The hold balance may also include pending service charges due to be recovered from your account.
                            </li>
                            <li className='savings_acct_note_points'>
                                Savings account customers can now receive their statements monthly by email for free. To register - <a className='savings_acc_note_atag'>click here</a>
                            </li>
                            <li className='savings_acct_note_points'>
                                What's new! now recharge your prepaid mobile and DTH connections through BillPay & recharge <a className='savings_acc_note_atag'>click here</a> to know more.
                            </li>
                            <li className='savings_acct_note_points'>
                                Please <a className='savings_acc_note_atag'>click here</a> to check your PAN card details.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Accounts;