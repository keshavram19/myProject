import React from 'react'
import { Container,Row ,Col} from 'reactstrap'
import './Accounts.css';

function RenewFD() {
  return (
   <section>
     <Container>
        <Row>
          <Col lg="12">
            <div className="renew_hero_container"></div>
          </Col>
        </Row>
      </Container>
    <Container>
        <Row>
            <div className='renew_container'>
                <h1>Renew your fixed deposit</h1>
                <div className='renew_deposits_container col-md-12 user d-flex justify-content-between align-item-center'>
                <i class="fa-sharp fa-solid fa-rectangle-xmark"></i>
                     <p> you currently do not have any FDs for Renewall</p>
                   
                </div>
            </div>
        </Row>
    </Container>
   </section>
  )
}



export default RenewFD;