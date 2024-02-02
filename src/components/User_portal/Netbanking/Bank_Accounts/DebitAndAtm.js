import React from 'react';
import './Accounts.css';
import { SiSpringsecurity } from "react-icons/si";
import { TbRefresh } from "react-icons/tb";
import { TbSettingsCog } from "react-icons/tb";
import { CiCreditCardOff } from "react-icons/ci";
import { Link } from "react-router-dom";
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';

const DebitAndAtm = () => {

    return (
        <div className='card_details_container atm_card_details container-fluid' style={{ marginTop: '90px' }}>
            <div className='row'>
                <div className='col-3'>
                    <BankaccountSidebar />
                </div>
                <div className='col-9' >
                    <div className='card atm_card_details_debit_card p-2'>
                        <h6>Virtual Debit Card</h6>
                    </div>
                    <div className="card atm_card_details_debit_card  mt-2">
                        <div className="atm_card_details_button_container">
                            <SiSpringsecurity className='atm_card_details_logo' />
                            <Link to='/user/account/generate-debitcard-pin' ><button className='atm_card_details_button'>Generate Pin</button></Link>
                        </div>
                        <div className="atm_card_details_button_container">
                            < CiCreditCardOff className='atm_card_details_logo' />
                            <Link to='/user/account/block-debit-card'><button className='atm_card_details_button'>Block Card</button></Link>
                        </div>
                        <div className="atm_card_details_button_container">
                            <TbRefresh className='atm_card_details_logo' />
                            <Link to='/user/account/reissue-card'><button className='atm_card_details_button'>Reissue Card</button></Link>
                        </div>
                        <div className="atm_card_details_button_container">
                            <TbSettingsCog className='atm_card_details_logo' />
                            <Link to="/user/account/manage-cardlimit"><button className='atm_card_details_button'>Manage Card Limit</button></Link>
                        </div>
                    </div>
                    <div className='card atm_card_details_debit_card p-2 mt-2'>
                        <div className='container-fluid'>
                            <div className='row align-items-center'>
                                <div className='col-sm-10'>
                                    <h6>Upgrade Debit Card</h6>
                                    <p>Enjoy exclusive privileges on entertainment, shopping and added rewards with our premium range of Royal islamaic Debit Cards</p>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='atm_card_details_button_upgrade ml-2'><p className='atm_card_details_para_upgrade'>Upgrade Now</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card atm_card_details_debit_card p-2 mt-2'>
                        <div className='container-fluid'>
                            <div className='row align-items-center'>
                                <div className='col-sm-9'>
                                    <h6>Manage Subscription</h6>
                                    <p>Manage Standing instruction and recurring charges</p>
                                </div>
                                <div className='col-sm-3'>
                                    <button className='atm_card_details_button_upgrade ml-4'><p className='atm_card_details_para_upgrade'>Manage Subscriptions</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DebitAndAtm;