import React from "react";
import './Creditcard.css'
const PrepaidCard = () => {


    return (
        <div className='prepaidcard container-fluid'>
            <div className='Prepaidcard_header'></div>
            <div className='row'>
                
                <div className='col-sm-12 p-2 prepaidcard_id' >
                    <h4>Prepaid Card</h4>
                    <div className=" p-2 prepaidcard_heading">
                        <h5>Apply for Prepaid Card</h5>
                    </div>
                    <div className="prepaid_card p-3">
                        <div className="row mt-3">
                            <div className="col-sm-3">
                                <label for="card-number">CorporateID*</label>
                            </div>
                            <div className="col-sm-3">

                                    <input value="" selected></input>
                                
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm-3">
                                <label for="card-number">CorporateName*</label>
                                </div>
                                <div className="col-sm-3">

                                    <input value="" selected></input>
                                
                            </div>
                            </div>
                            
                            
                            
                        </div>
                        <div className="col-sm-12 mt-4">
                            <button className=" prepaidcard_button">
                            Submit</button></div>
                    </div>
                </div>
            </div>

        

    );
};


export default PrepaidCard;