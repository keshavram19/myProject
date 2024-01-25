import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Accounts.css'
import Registered from './Registers';
import PaySection from './Paysection';

const PayBills = () => {
    const [payBillsBtn, setPayBillsBtn] = useState("payBills");


    return (
        <>

            <div className='PayBiller_section_container'>
                <div className='row'>

                    <div className='col-md-8'>
                        <h4>PAY BILLS</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='Resgistered_container'>

                            <button className={payBillsBtn === 'payBills' ? 'payBillsBtn' : 'payBillsBtn payBillsBtn_off'} onClick={(() => setPayBillsBtn('payBills'))}>Pay Bills</button>
                            <button className={payBillsBtn === 'Your Registered Bills' ? 'payBillsBtn' : 'payBillsBtn payBillsBtn_off'} onClick={(() => setPayBillsBtn('Your Registered Bills'))} >Your Registered Bills</button>

                        </div>
                    </div>
                    {payBillsBtn === 'Your Registered Bills' ? <Registered /> : <PaySection />}


                </div>
                <div>
                    <div className='row'>

                        <div className='col-md-8'>
                            <h3 className='Biller_payBiller_container'> Enter Biller details</h3>

                        </div>
                        <div>
                            <div className='row'>

                                <div className='col-md-12'>
                                    <input type='text' id='name' placeholder='Serach Biller' className='input_serachbiller_container' />
                                    < FaSearch className='searchbiller_icon_card' />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='row'>

                    <div className=' after_Paybill_container'>
                        <p className='After_Note_container'>Notes:</p>
                        <span>As per the guidnelines, SEBI/HO/IMD/DF2/CIR/P/2020/253 dated Dec 31, 2020; effective from Feb 01, 2021, the applicable Net Asset Value (NAV),With respect to the purchase of the followiing units of the Mutual Fund scheme, shall be subject to the data of credit of the funds, to the MutualFund house. This Credit shall take place on the Transaction date (T) + 1 working day basis.
                            For example, if the transaction has been initiated on the 1st, the NAV alloted shall be applicable foe the 2nd. In case 2nd is a non-working day. the NAV alloted shall be applicable, as per the next working day.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayBills;