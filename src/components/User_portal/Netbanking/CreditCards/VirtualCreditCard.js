import React from 'react';
import { Link } from 'react-router-dom';


const VirtualCreditCards = () => {

    return (

        <div>
            <div className='virtual_credit_card container-fluid mt-3'>
                <div className='col-sm-12'>
                    <div className="container-fluid virtual_credit_card my-2">
                        <div className="d-flex">
                            <h3>Virtual Credit Cards</h3>
                        </div>
                        <div className="card my-3">
                            <div className="card container-fluid virtual_credit_card_details p-3">
                                <div className='virtual_credit_card_warning col-sm-8 d-flex'>
                                    <img className='red_cross_img' src='https://static.vecteezy.com/system/resources/thumbnails/017/350/109/small/red-cross-button-in-round-shape-png.png' alt='error-img' />
                                    <p className='ml-1'> There were no Credit Cards found.In case you require any further case assistance .
                                        please call our Customer Care or write to customer care @royalislamic.com</p>
                                </div>
                                <div className='col-sm-8'>
                                    <div className='download_details mt-3'>
                                        <label for="text">Download Details As:</label>
                                        <select className="virtual_credit_card_input ml-3" id="text">
                                            <option value="">PDF file</option>
                                            <option value="card2">Word</option>
                                        </select>
                                        <button className='ml-3 ok_Btn'>OK</button>
                                    </div>
                                </div>
                                <ul className='mt-3 virtual_credit_card_links'>
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
    );
};

export default VirtualCreditCards;