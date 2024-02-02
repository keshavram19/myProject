import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { useState,useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';





const BillDetails = () => {
  const [payLater,setPayLater] = useState([]);
  const [billDetails,setBillDetails]= useState('ok')
  const [paid,setPaid] = useState('')
  let navigate = useNavigate();
  useEffect(()=>{
    getPayLater()
  },[])
  const getPayLater = async()=>{
    const url = 'http://localhost:4444/api/payLaterAccount';

    const options = {
      method:'GET'
    }

    const response = await fetch(url,options)
    if(response.ok===true){
      const data = await response.json()
      setPayLater(data.payLater[0])
      
    }
  }

  
  const paidBill = async()=>{
    const url1 = 'http://localhost:4444/api/payLaterAccount/pay'

    const options = {
        headers: {
            'Content-Type': 'application/json',
          },
        method:'PUT',
        body:JSON.stringify({
        accountNumber:payLater.accountNumber
            
        })
    }

    const response = await fetch(url1,options);

    const data = await response.json();

    if(response.ok===true){
        setPayLater(data.payLater)
        setPaid(data.message)
        
    
    }
  }

 

  
  return (
    <>
      <div className='container-fluid' style={{marginTop:"90px"}}>
        <div className='row'>
          <div className='col-3'>
          <BankaccountSidebar />
          </div>
          <div className='col-9'>
            <div className='container-fluid'>
                <h4 className='paylater_heading'>Bill Details</h4>
                <div className='billDetails_mybill'>
                    <div>My Bill Details For</div>
                    <div><input type='text' className='pl-2 billDetails_input1' value={payLater.accountNumber}/></div>
                    <div ><button onClick={()=>setBillDetails('bill')} className='billDetails_okbtn'>GET</button></div>
                </div>
                <hr/>
                {billDetails==='bill'&&
                <div className='container-fluid'>
                    <div className='container-fluid billDetails_cont1'>
                        <b>Bill Details</b>
                    </div>
                    <div className='container-fluid'>
                        <div className='dillDetails_billcontent'>
                        <div className='dillDetails_billcontent1'>
                        <p >Available Credit Limit</p>
                        <p>{payLater.availableLimit}</p>
                        </div>
                        <div className='dillDetails_billcontent1'>
                        <p >Late Payment Fees</p>
                        <p>{payLater.lateFee}</p>
                        </div>
                        </div>

                        <div className='dillDetails_billcontent'>
                        <div className='dillDetails_billcontent1'>
                        <p >Total Credit Limit</p>
                        <p>{payLater.totalCreditLimit}</p>
                        </div>
                        <div className='dillDetails_billcontent1'>
                        <p>Total Adjust Amount</p>
                        <p>{payLater.totalAdjustAmount}</p>
                        </div>
                        </div>

                        <div className='dillDetails_billcontent'>
                        <div className='dillDetails_billcontent1'>
                        <p>Total Amount Utilised</p>
                        <p>{payLater.utilisedLimit}</p>
                        </div>
                        <div className='dillDetails_billcontent1'>
                        <p>Total Amount Payable</p>
                        <p>{payLater.totalAmountPayable}</p>
                        </div>
                        </div>

                        <div className='dillDetails_billcontent'>
                        <div className='dillDetails_billcontent1'>
                        <p>Bill Due Date</p>
                        <p>{payLater.dueDate}</p>
                        </div>
                        <div className='dillDetails_billcontent1'>
                        <p>Bill Period</p>
                        <p>{payLater.billPeriod}</p>
                        </div>
                        </div>

                    </div>
                    
                    
                    <div className='container-fluid billDetails_cont1'>
                      <div className='mr-5'><Link to='/user/account/paylater' className='billDetails_link'><button className='billDetails_backbtn'>BACK</button></Link></div>
                      <div><button className='billDetails_pay' onClick={paidBill}>PAY DUES</button></div>
                    </div>
                    <div className='text-center text-success mt-5'>
                        {paid}
                    </div>
                    </div>}

            </div>
        
          </div>
        </div>
        </div>
      

    </>
  )
}





export default BillDetails;