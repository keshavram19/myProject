import './Accounts.css';

import { useEffect, useState } from 'react';
import { MdCurrencyRupee } from "react-icons/md";
import { AiFillPrinter } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar'
import Navbar from '../Overview/Navbar';




const Accounts = () => {

    const [viewAccStatement, setViewAccStatement] = useState()
    const accountStatement = () => {
        if (viewAccStatement === 'true') {
            setViewAccStatement('false')
        }
        else {
            setViewAccStatement('true')
        }
    }

    useEffect(()=> {
        getUserAccountDetails()
    },[]);
    let accountNumber = 123456789;
    const [accountDetails, setAccountDetails] = useState()
    const getUserAccountDetails = async ()=> {

        const url = `http://localhost:4444/api/userDetails/${accountNumber}`;
        const options = {
            method: 'GET'
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setAccountDetails(data.details)
    };
    //console.log(accountDetails);
    
    
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
                            <div className='table table-bordered savings_acct_trans_table'>
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
                                    <tr>
                                        <td>11 Jan 2024</td>
                                        <td>TRANSFER TO 4897693162099 - UPI/DR/401791877356/NAGESWAR/COAS/borranages/Payme</td>
                                        <td>-10.00</td>
                                        <td>0.00</td>
                                        <td><MdCurrencyRupee />2,122.46</td>
                                    </tr>
                                    <tr>
                                        <td>10 Jan 2024</td>
                                        <td>TRANSFER TO 4897693162093 - UPI/DR/437757098770/SANGEETA/YESB/Q428020154/Payme</td>
                                        <td>-10.00</td>
                                        <td>0.00</td>
                                        <td><MdCurrencyRupee />2,132.46</td>
                                    </tr>
                                    <tr>
                                        <td>09 Jan 2024</td>
                                        <td>TRANSFER TO 4897733162090 - UPI/CR/437511208118/TARUNKUM/UTIB/tarunkasi1991/Payme</td>
                                        <td>0.00</td>
                                        <td>+500.00</td>
                                        <td><MdCurrencyRupee />2,142.46</td>
                                    </tr>
                                    <tr>
                                        <td>08 Jan 2024</td>
                                        <td>TRANSFER TO 4897690162095 - UPI/DR/400859774683/Mrs.NAG/PYTM/paytmqr6wi/Payme</td>
                                        <td>-20.00</td>
                                        <td>0.00</td>
                                        <td><MdCurrencyRupee />1,642.46</td>
                                    </tr>
                                </tbody>
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