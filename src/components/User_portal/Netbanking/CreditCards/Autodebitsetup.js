import React from "react";
import Select from "react-select";


const AutoDebitInstructions = () => {
    return(
        <div className="container-fluid">
            <div className="row  mt-2">
                <div className="col-sm-12 auto_debit_instructions ">
                    <div>
                        <h3>Auto Debit Instructions</h3>
                        <hr />
                    </div>
                    <div className="card auto_debit_instructions_card p-3">
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <p>Select Your Card</p>
                            </div>
                            <div className="col-sm-3">
                            <Select
                                     isSearchable={false}
                                        type='select'
                                        name=""
                                        id=""
                                        options={[
                                            { value: "cardno", label: "5419XXXXXXXXXXX2194" }
                                        ]}
                                        placeholder="Please Select"
                                        className="auto_debit_instructions_select"
                                    />
                            </div>
                        </div>
                        <div className="row align-items-center mt-2">
                            <div className="col-sm-3">
                                <p>Setup Auto Debit</p>
                            </div>
                            <div className="col-sm-3">
                            <Select
                                        type='select'
                                        name=""
                                        id=""
                                        options={[
                                            { value: "yes", label: "Yes" },
                                            { value: "no", label: "No" },
                                        ]}
                                        placeholder="Please Select"
                                        className="auto_debit_instructions_select"
                                    />
                            </div>
                        </div>
                        <div className="row align-items-center mt-2">
                            <div className="col-sm-3">
                                <p>Bank Account Number</p>
                            </div>
                            <div className="col-sm-3">
                            <Select
                                        type='select'
                                        name=""
                                        id=""
                                        options={[
                                            { value: "accno", label: "9182XXXXXXXXXXX1239" }
                                        ]}
                                        placeholder="Please Select"
                                        className="auto_debit_instructions_select"
                                    />
                            </div>
                        </div>
                        <div className="row align-items-center mt-2">
                            <div className="col-sm-3">
                                <p>Mode</p>
                            </div>
                            <div className="col-sm-3">
                            <Select
                                        type='select'
                                        name=""
                                        id=""
                                        options={[
                                            { value: "minimumdue", label: "Minimum Amount Due" },
                                            { value: "totaldue", label: "Total Amount Due" }
                                        ]}
                                        placeholder="Please Select"
                                        className="auto_debit_instructions_select"
                                    />
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <button className="auto_debit_buttons">Reset</button>
                            <button className="ml-4 auto_debit_buttons">Submit</button>
                        </div>
                        
                    </div>

                        <div className="mt-3">
                            <h6>Notes:</h6>
                        </div>
                        <div>
                            <ol>
                                <li>Your auto-debit instruction will be recorded instantly and executed as per the credit card payment due date.</li>
                            </ol>
                        </div>
                        <div className="mt-3">
                            <h6>Example:</h6>
                        </div>
                        <div>
                            <ol>
                                <li>Your credit card statement is generated on August 20, 2017 with the due date of September 11, 2017. You set up an auto-debit instruction on August 24, 2017, the auto-debit instruction will be recorded instantly and effective for the due date of September 11, 2017. However if the auto-debit instruction has been setup after September 11, 2017. the same would be effective for the next credit card statement generated on September 20, 2017</li>
                            </ol>
                        </div>

                </div>
            </div>
        </div>
    )
}


export default AutoDebitInstructions;