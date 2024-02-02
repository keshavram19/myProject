import './Accounts.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState ,useRef,useEffect} from 'react';
import { MdArrowDropDownCircle } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import html2pdf from 'html2pdf.js';
const allTransactionsList = [
    {
        date: '25 Jan 2024',
        narration: 'UPI-BADE NAGARAJU-Q857498653@ybl-YESBOYBLUPI-439140239946-Payment from Phone',
        withdrawl: '20.00',
        deposite: '',
        balance: '1.48'
    },
    {
        date: '24 Jan 2024',
        narration: 'UPI-Mr RAVI TEJA-7032256838@ybl-IDIB000M160-402484923876-Payment to 7032256',
        withdrawl: '10,000.00',
        deposite: '',
        balance: '21.48'
    },
    {
        date: '23 Jan 2024',
        narration: 'UPI-PRATHI PAWAN KALYAN-89788426211@ybl-SBIN0011101-438930608914-Payment from Phone',
        withdrawl: '',
        deposite: '10,000.00',
        balance: '10,021.48'
    },
    {
        date: '21 Jan 2024',
        narration: 'UPI-KANDRA SUNIL-9676350447@ybl-IOBA0003640-402376683037-Payment to 9676350',
        withdrawl: '10,000.00',
        deposite: '',
        balance: '21.48'
    },
    {
        date: '20 Jan 2024',
        narration: 'UPI-Mr SAI TEJA-7032256838@ybl-IDIB000M160-438905881961-Payment from Phone',
        withdrawl: '',
        deposite: '10,000.00',
        balance: '10,021.48'
    },
    {
        date: '19 Jan 2024',
        narration: 'UPI-Southern Power Distr-TELANGANASSPDCL-@ybl-YESBOYBLUPI-438578208304-Payment from Phone',
        withdrawl: '579.00',
        deposite: '',
        balance: '34.43'
    },
    {
        date: '18 Jan 2024',
        narration: 'UPI-S J ENTERPRISES-paytmqr281005050101ohcg3wn30uhq@paytm-PYTM0123456-401914284585-Payment from Phone',
        withdrawl: '30.00',
        deposite: '',
        balance: '613.43'
    },
    {
        date: '17 Jan 2024',
        narration: 'UPI-FAMOUS CHICKEN CENTER-paytmqr1r7sb4s8ks@paytm-PYTM0123456-401897267622-Payment from Phone',
        withdrawl: '45.00',
        deposite: '',
        balance: '643.43'
    }
];
const Estatement = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [isCalendarOpen1, setIsCalendarOpen1] = useState(false);
    const [viewPdf ,setViewPdf] = useState(false);
    const [payLaterTransaction,setTransaction] = useState([]);
    const [payLater,setPayLater] = useState([]);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    


    const handleCalendarToggle = () => {
        setIsCalendarOpen(!isCalendarOpen);

    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsCalendarOpen(false);

    };
    const handleCalendarToggle1 = () => {

        setIsCalendarOpen1(!isCalendarOpen1)
    };

    const handleDateChange1 = (date) => {

        setSelectedDate1(date);
        setIsCalendarOpen1(false);
    };
    let transactionRef = useRef()
  const handleDownload = () => {
    const pdfOptions = { margin: 10, filename: 'transactions.pdf', image: { type: 'jpeg', quality: 0.98 } };

    html2pdf(transactionRef.current, pdfOptions).save();
  };
  const handleStartDateChange = (date) => {
    setFromDate(date);
    if (toDate && toDate < date) {
        setToDate(null);
    }
};
const handleEndDateChange = (date) => {
    if (!fromDate) {
        setFromDate(date);
    } else {
        setToDate(date);
    }
};

const filteredTransactions = allTransactionsList.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    if (fromDate && toDate ) {
        const from = new Date(fromDate);
        const to = new Date(toDate);
        return transactionDate >= from && transactionDate <= to;
    }
   
});
    

      const filtered = filteredTransactions.length<0;



    return (
        <>
            <div className='container-fluid' style={{marginTop:"90px"}}>
                <div className='row'>
                    <div className='col-3'>
                        <div>
                            <BankaccountSidebar />
                        </div>
                        </div>
                    <div className='col-9'>
                    <div className="estatement_container">
                <p className='estatement_heading' >e-Statement</p>
                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Account type:</div>
                        <div className='estatement_select'>
                            <select id="sel1" className='estatement_option'>
                                <option value=''>-Select Type of Account- </option>
                                <option >Savings Account</option>
                                
                            </select>
                            <div className='estatement_downicon'><MdArrowDropDownCircle className='estatement_icon1' /></div>
                        </div>
                    </div>
                </div>
                {/* account number */}
                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Account number:</div>
                        <div className='estatement_select'>
                            <select id="sel1" className='estatement_option'>
                                <option value=''>-Select An Account- </option>
                                <option >698076353563525</option>
                            </select>
                            <div className='estatement_downicon'><MdArrowDropDownCircle className='estatement_icon1' /></div>
                        </div>
                    </div>
                </div>
                {/* statement */}
                {/* period */}
                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Period:</div>
                        <div className='estatement_select'>
                            <div className='estatement_option'>
                                <DatePicker className='estatement_datepick'
                                  selected={fromDate} onChange={handleStartDateChange}
                                   
                                  selectsStart dateFormat="dd MMM yyyy" fromDate={fromDate} toDate={toDate}
                                  placeholderText='FROM'
                                    
                                />
                            </div>
                            <div className='estatement_downicon1'>
                                <button className='estatement_calenderbtn' onClick={handleCalendarToggle}><FcCalendar className='estatement_fccalender' /></button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Period:</div>
                        <div className='estatement_select'>
                            <div className='estatement_option'>

                                <DatePicker className='estatement_datepick'
                                   selected={toDate} dateFormat="dd MMM yyyy" onChange={handleEndDateChange}
                                   selectsEnd fromDate={fromDate}
                                   toDate={toDate} minDate={fromDate} placeholderText='TO'
                                    
                                />
                            </div>
                            <div className='estatement_downicon1'>
                                <button className='estatement_calenderbtn' onClick={handleCalendarToggle1}><FcCalendar className='estatement_fccalender' /></button>
                            </div>

                        </div>
                    </div>
                </div>

                

                <div className='container-fluid estatement_buttons'>
                    <button onClick={()=>setViewPdf(!viewPdf)} className='estatement_view'>{viewPdf?'Hide':'View'}</button>
                    <button onClick={handleDownload} className='estatement_download'>Download</button>
                </div>

                {viewPdf&&<div  ref={transactionRef}  ><div  className="paylater_transactions">
          <div>Statement</div>
        </div>
          
       {filteredTransactions.length>0?
       <div className="table-responsive-lg paylater_transaction_table">
       <table className="table table-bordered ">
         <thead className="paylater_tablehead">
           <tr >
           <th>Date</th>
                <th>Transaction Remark</th>
    <th>DR</th>
                <th>CR</th>
                <th>Amount(INR)</th>
           </tr>
         </thead>
       <tbody className="paylater_body">
         {filteredTransactions.map((transaction, index) => (
                                                    <tr key={index}>
                                                        <td>{transaction.date}</td>
                                                        <td>{transaction.narration}</td>
                                                        <td>{transaction.withdrawl}</td>
                                                        <td>{transaction.deposite}</td>
                                                        <td>{transaction.balance}</td>
                                                    </tr>
                                                ))}</tbody> </table></div>:
                                                <div className='estatement_noFound'>No Transactions Found</div>}
         

        </div>}
                <h6 className='estatement_note'>Note:</h6>
                <div className='container-fluid'>
                    
                    <ul>
                        <li>Transactions for the current and previous month only can be viewed / downloaded through this option.eg: You can view/download statement from 01/12/2023 upto 12/01/2024.</li>
                        <li>To download statements prior to last month, kindly use the e-statement - Upto 5 Years' option or click here.</li>
                        <li>Please click on 'Select Period' option to save and download your Account Statement.</li>
                    </ul>

                </div>
            </div>
                        </div>
                    </div>
            </div>
           

        </>
    )
}



export default Estatement;