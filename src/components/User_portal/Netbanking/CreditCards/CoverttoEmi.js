import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";


const ConvertToEMI = () => {

    return (
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col-md-12">
                    <div className="convert_to_emi_card">
                        <div>
                            <h3>Convert To EMI</h3>
                            <hr />
                        </div>
                        <div className="card  p-4">
                            <div className="row convert_to_emi_row">
                                <div className="col-sm-2">
                                    <p className="mt-3">Select a Credit Card :</p>
                                </div>
                                <div className="col-sm-3">
                                    <Select
                                        type='select'
                                        name=""
                                        id=""
                                        options={[
                                            { value: "cardno", label: "5419XXXXXXXXXXX2194" }
                                        ]}
                                        className="convert_to_emi_select_tag_focus"
                                        
                                    />
                                </div>
                            </div>
                            <div className="mt-3">
                                    <button className="convert_to_emi_button">Back</button>
                                    <Link to='/user/emi-submit'><button className="ml-3 convert_to_emi_button">Submit </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConvertToEMI;