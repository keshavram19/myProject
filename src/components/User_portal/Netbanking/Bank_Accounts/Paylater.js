import './Accounts.css';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import apiList from '../../../../lib/apiList';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
const allTransactionsList = [
  {
      date: '25 Mar 2024',
      narration: 'UPI-BADE NAGARAJU-Q857498653@ybl-YESBOYBLUPI-439140239946-Payment from Phone',
      withdrawl: '20.00',
      deposite: '',
      balance: '1.48'
  },
  {
      date: '24 Mar 2024',
      narration: 'UPI-Mr RAVI TEJA-7032256838@ybl-IDIB000M160-402484923876-Payment to 7032256',
      withdrawl: '10,000.00',
      deposite: '',
      balance: '21.48'
  },
  {
      date: '23 Mar 2024',
      narration: 'UPI-PRATHI PAWAN KALYAN-89788426211@ybl-SBIN0011101-438930608914-Payment from Phone',
      withdrawl: '',
      deposite: '10,000.00',
      balance: '10,021.48'
  },
  {
      date: '21 Mar 2024',
      narration: 'UPI-KANDRA SUNIL-9676350447@ybl-IOBA0003640-402376683037-Payment to 9676350',
      withdrawl: '10,000.00',
      deposite: '',
      balance: '21.48'
  },
  {
      date: '20 Mar 2024',
      narration: 'UPI-Mr SAI TEJA-7032256838@ybl-IDIB000M160-438905881961-Payment from Phone',
      withdrawl: '',
      deposite: '10,000.00',
      balance: '10,021.48'
  },
  {
      date: '19 Mar 2024',
      narration: 'UPI-Southern Power Distr-TELANGANASSPDCL-@ybl-YESBOYBLUPI-438578208304-Payment from Phone',
      withdrawl: '579.00',
      deposite: '',
      balance: '34.43'
  },
  {
      date: '18 Mar 2024',
      narration: 'UPI-S J ENTERPRISES-paytmqr281005050101ohcg3wn30uhq@paytm-PYTM0123456-401914284585-Payment from Phone',
      withdrawl: '30.00',
      deposite: '',
      balance: '613.43'
  },
  {
      date: '17 Mar 2024',
      narration: 'UPI-FAMOUS CHICKEN CENTER-paytmqr1r7sb4s8ks@paytm-PYTM0123456-401897267622-Payment from Phone',
      withdrawl: '45.00',
      deposite: '',
      balance: '643.43'
  }
];

const PayLater = () => {
  const [payLater,setPayLater] = useState([]);
  const [payLaterTransaction,setTransaction] = useState([]);
  useEffect(()=>{
    getPayLater()
  },[])
  const getPayLater = async()=>{
    const url = `${apiList.payLater}`;

    const options = {
      method:'GET'
    }

    const response = await fetch(url,options)
    if(response.ok===true){
      const data = await response.json()
      setPayLater(data.payLater[0])
      setTransaction(data.payLater[0].payLaterTransaction)
    }
  }

  const generateRandomTransactionId = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    return `RIB${String(randomNumber).padStart(4, '0')}`;
  };

  
  return (
    <>
      <div className='container-fluid' style={{marginTop:"90px"}}>
        <div className='row'>
          <div className='col-3'>
          <BankaccountSidebar />
          </div>
          <div className='col-9'>
          <div className="paylater_container">
        <p className="paylater_heading">View and manage my PayLater</p>
        <hr />
        <div className="table-responsive-lg paylater_table">
          <table className="table table-bordered">
            <thead className="paylater_tablehead">
              <tr className="paylater_row">
                <th>Select</th>
                <th>Account Number</th>
                <th>Total Credit Limit(INR)</th>
                <th>Utilised Credit Limit(INR)</th>
                <th>Available Credit Limit(INR)</th>
                <th>Total Amount Due(INR)</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody className="paylater_body">
           
              <tr>
              <td><input type="radio" checked/></td>
              <td>{payLater.accountNumber}</td>
              <td>{payLater.totalCreditLimit}</td>
              <td>{payLater.utilisedLimit}</td>
              <td>{payLater.availableLimit}</td>
              <td>{payLater.amountDue}</td>
              <td>{payLater.dueDate}</td>
            </tr>
              
            </tbody>
          </table>
        </div>
        <div className="paylater_payment">
          <div><Link to='/user/account/billDetails'><button className="paylater_paynow">PAY NOW</button></Link></div>
          <div><Link to="/user/account/statement"><button className="paylater_statement">DETAILED STATEMENT</button></Link></div>
          <div><Link to='/user/account/billDetails'><button className="paylater_bill">BILL DETAILS</button></Link></div>
        </div>
        <div className="paylater_transactions">
          <div>LAST 10 TRANSACTIONS</div>
        </div>
        <div className="table-responsive-lg paylater_transaction_table">
          <table className="table table-bordered ">
            <thead className="paylater_tablehead">
              <tr >
                <th>Date</th>
                <th>TransactionID</th>
                <th>Transaction Remark</th>
    <th>DR</th>
                <th>CR</th>
                <th>Amount(INR)</th>
              </tr>
            </thead>
            <tbody className="paylater_body">
              
            {allTransactionsList.map((transaction, index) => (
                                                    <tr key={index}>
                                                        <td>{transaction.date}</td>
                                                        <td>{generateRandomTransactionId()}</td>
                                                        <td>{transaction.narration}</td>
                                                        <td>{transaction.withdrawl}</td>
                                                        <td>{transaction.deposite}</td>
                                                        <td>{transaction.balance}</td>
                                                    </tr>
                                                ))}
            </tbody>
          </table>

        </div>


      </div>
          </div>
        </div>
        </div>
      

    </>
  )
}





export default PayLater;