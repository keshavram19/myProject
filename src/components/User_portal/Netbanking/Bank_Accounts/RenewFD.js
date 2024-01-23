import React from 'react'
import { Container,Row ,Col} from 'reactstrap'
import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';

function RenewFD() {
  return (
   <section>
     
    <div className='container-fluid' style={{marginTop:"90px"}}>
        <Row>
          <div className='col-3'>
<BankaccountSidebar />
          </div>
          <div className='col-9'>

          
            <div className='renew_container'>
                <h1>Renew your fixed deposit</h1>
                <div className='renew_deposits_container  user d-flex justify-content-center align-item-center'>
                <i class="fa-sharp fa-solid fa-rectangle-xmark"></i>
                     <p> you currently do not have any FDs for Renewall</p>
                </div>
            </div>
            </div>
        </Row>
    </div>
   </section>
  )
}



export default RenewFD;