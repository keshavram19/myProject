import React from 'react';
import './Accounts.css';
const Registered = () => {
    return (
        <>
            <div>
                <div className='row'>

                    <div className='col-md-12'>
                        <h6 className='billers_registered_container'>You do not have any Registered Billers</h6>
                    </div>

                </div>
            </div>

            <div className='Notes_Registered_container'>

                <p className='Registered_container'>Notes:</p><span className='Registered_span_container'> Increase of an invalid registered, the biller will not appear in your registered biller list. Kindly refer to your physical bill and re-register with correct biller details.
                    Please note that the bill will be uploaded on the slite and auto-pay will be executed. This wil take place when the bill is received from the biller. Any change initiated in "Your Registered Billers" option will be effective from your next billing cycle. # -Payment to this biller can be made only through your linked Royal Isalamic Bank Account. All other billers cab be paid through yours linked Bank Account or credit Card</span>
            </div>



        </>
    )
}
export default Registered;