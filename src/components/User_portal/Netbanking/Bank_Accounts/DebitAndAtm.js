import React from 'react';
import './Accounts.css';
import { SiSpringsecurity } from "react-icons/si";
import { TbRefresh } from "react-icons/tb";
import { TbSettingsCog } from "react-icons/tb";
import { CiCreditCardOff } from "react-icons/ci";
import { Link } from "react-router-dom";

const DebitAndAtm = () => {

    return (
        <div className='card_details_container container-fluid'>
            <div className='row'>
                <div className='col-12' >
                    <div className='card atm_card_details_heading'>
                        <h6>Virtual Debit Card</h6>
                    </div>
                    <div className="card atm_card_details mt-2">
                        <div className="atm_card_details_button_container">
                            <SiSpringsecurity className='atm_card_details_logo' />
                            <Link to='/user/account/generate-debitcard-pin' className='atm_card_details_button'>Generate Pin</Link>
                        </div>
                        <div className="atm_card_details_button_container">
                            < CiCreditCardOff className='atm_card_details_logo' />
                            <Link to='/user/account/block-debit-card' className='atm_card_details_button'>Block Card</Link>
                        </div>
                        <div className="atm_card_details_button_container">
                            <TbRefresh className='atm_card_details_logo' />
                            <Link to='/user/account/reissue-card' className='atm_card_details_button'>Reissue Card</Link>
                        </div>
                        <div className="atm_card_details_button_container">
                            <TbSettingsCog className='atm_card_details_logo' />
                            <Link className='atm_card_details_button' to="/user/account/manage-cardlimit">Manage Card Limit</Link>
                        </div>
                    </div>
                    <div className='card atm_card_details_debit_card mt-2'>
                        <div>
                            <h6>Upgrade Debit Card</h6>
                            <p>Enjoy exclusive privileges on entertainment, shopping and added rewards with our premium range of Royal islamaic Debit Cards</p>
                        </div>
                        <div>
                            <button className='atm_card_details_button_upgrade'><p className='atm_card_details_para_upgrade'>Upgrade Now</p></button>
                        </div>
                    </div>
                    <div className='card atm_card_details_debit_card mt-2'>
                        <div>
                            <h6>Manage Subscription</h6>
                            <p>Manage Standing instruction and recurring charges</p>
                        </div>
                        <div>
                            <button className='atm_card_details_button_upgrade'><p className='atm_card_details_para_upgrade'>Manage Subscriptions</p></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DebitAndAtm;