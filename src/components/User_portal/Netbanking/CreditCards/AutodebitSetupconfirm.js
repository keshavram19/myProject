import React, { useEffect, useState } from 'react';
import './Creditcard.css';
import { useNavigate } from 'react-router-dom';

const AutoDebitConfirm = () => {
    const [autodebitData, setAutodebitData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("AutoDebitConfirm mounted");
        const storedData = localStorage.getItem('autodebitData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log("Stored data:", parsedData);
            setAutodebitData(parsedData);
        } else {
            console.log("No autodebit data found in localStorage.");
        }
    }, []);


    const handlesubmitconfirm = async() =>{
        try {
            alert('auto Debit Confirmed!')
            navigate('/user/credit-cards');
        } catch (error) {
            error.message  && alert(error)
             }
    } 

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
                        ) : (
                            <p>No autodebit data found.</p>
                        )}
                        <hr />
                        <div>
                            <button className="auto_debit_buttons">Reset</button>
                            <button className="ml-4 auto_debit_buttons" onClick={handlesubmitconfirm}>confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoDebitConfirm;
