import React, { useEffect, useState } from 'react';
import './Creditcard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import apiList from '../../../../lib/apiList';

const AutoDebitConfirm = () => {
    const [autodebitData, setAutodebitData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
       
        const storedData = localStorage.getItem('autodebitData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
         
            setAutodebitData(parsedData);
           
        } else {
            console.log("No autodebit data found in localStorage.");
        }
    }, []);
    


    const handleSubmitConfirm = async () => {
        try {
            if (autodebitData.setupAutoDebit === 'yes') {
                console.log('Data posted successfully')
                axios.post(`${apiList.autoDebitSetupYes}`, autodebitData)
                    .then(response => {
                        console.log('Data posted successfully:', response.data);
                    })
                    .catch(error => {
                        console.error('Error posting data:', error);
                    });
                    alert('Auto Debit Confirmed!')
                    navigate('/user/credit-cards');
            } else if (autodebitData.setupAutoDebit === 'no') {
                axios.post(`${apiList.autoDebitSetupNo}`, autodebitData)
                    .then(response => {
                        console.log('Data stored successfully:', response.data);
                    })
                    .catch(error => {
                        console.error('Error storing data:', error);

                    });
                    alert('Auto Debit Cancelled!')
                    navigate('/user/credit-cards');
            }
           
        } catch (error) {
            error.message && alert(error)
        }
    }

    const handleReset = () => {
        localStorage.removeItem('autodebitData');
        setAutodebitData(null);
    };

    return (
        <div className="container-fluid" style={{ marginTop: "90px" }}>
            <div className="row  mt-2">
                <div className="col-sm-12 auto_debit_instructions ">
                    <div>
                        <h3>Auto Debit Confirmation</h3>
                        <hr />
                    </div>
                    <div className="card auto_debit_instructions_card p-3">
                        {autodebitData ? (
                            <React.Fragment>
                                <div className="row align-items-center">
                                    <div className="col-sm-3">
                                        <p>Select Credit Card: </p>
                                    </div>
                                    <div className="col-sm-3">
                                        <p>{autodebitData.selectedCreditCard}</p>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-sm-3">
                                        <p>Setup Auto Debit: </p>
                                    </div>
                                    <div className="col-sm-3">
                                        <p>{autodebitData.setupAutoDebit}</p>
                                    </div>
                                </div>
                                {autodebitData.setupAutoDebit === 'yes' && (
                                    <React.Fragment>
                                        <div className="row align-items-center mt-2">
                                            <div className="col-sm-3">
                                                <p>Bank Account Number</p>
                                            </div>
                                            <div className="col-sm-3">
                                                <p>{autodebitData.selectedAccount}</p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mt-2">
                                            <div className="col-sm-3">
                                                <p>Mode</p>
                                            </div>
                                            <div className="col-sm-3">
                                                <p>{autodebitData.autodebitMode}</p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        ) : (
                            <p>No autodebit data found.</p>
                        )}
                        <hr />
                        <div>
                            <button className="auto_debit_buttons" onClick={handleReset}>Reset</button>
                            {autodebitData  && (
                                <button className="ml-4 auto_debit_buttons" onClick={handleSubmitConfirm}>Confirm</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoDebitConfirm;
