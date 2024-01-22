import React from 'react';
import Select from 'react-select';
import './Accounts.css';


const steps = [
    { title: "Generate Request", isCompleted: true },
    { title: "Service Request Confirmation", isCompleted: false },
    { title: "Request Generated", isCompleted: false},
];

const Reissuecard = () => {

    const Step = ({ title, isCompleted }) => {
      
        return (
          <div className="reissue_card_step">
            <div className="reissue_card_circle_container ">
              <div className={`reissue_card_circle ${isCompleted ? 'reissue_card_completed' : 'reissue_card_circle'}`}></div>
          
            {isCompleted}
              </div>
            <p className="title">{title}</p>
          </div>
        );
      };
      
  
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className="container-fluid reissue_card">
                        <h5 className="">Reissue  of Lost ATM/debit Card</h5>
                        <div className='col-sm-12'>
                            <div className="reissue_card_steps">
                                <div className="reissue_card_steps_container">
                                    {steps.map((step, index) => (
                                        <Step key={index} title={step.title} isCompleted={step.isCompleted} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card card_details_select p-2">
                            <h6>Generate Request</h6>
                            <div className="row my-3 align-items-center">
                                <div className="col-sm-5 ml-3  ">
                                    <p>Select Savings Account Number*</p>
                                </div>
                                <div className="col-sm-5">
                                    <Select
                                        name=""
                                        id=""
                                        options={[
                                            { value: "select a reason", label: "select a reason" }
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <button type="button" className="reissue_card_button ml-2">BACK</button>
                            <button type="submit" className="reissue_card_button_submit ml-4">SUBMIT</button>
                        </div>
                        <div className="note">
                            <p>Note: Upon submission system will validate your account details, please wait for a while</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reissuecard;