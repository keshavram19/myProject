import './Accounts.css';
import { useState ,useRef,useEffect} from 'react';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { MdPictureAsPdf } from "react-icons/md";

const allTransactionsList = [
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '25 Jan 2024',
        narration: 'Credit Card Payment',
        withdrawl: '20.00',
        deposit: '',
        balance: '1.48'
    },
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '24 Jan 2024',
        narration: 'Online Shopping',
        withdrawl: '10,000.00',
        deposit: '',
        balance: '21.48'
    },
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '23 Jan 2024',
        narration: 'Restaurant Bill',
        withdrawl: '',
        deposit: '10,000.00',
        balance: '10,021.48'
    },
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '21 Jan 2024',
        narration: 'Travel Booking',
        withdrawl: '10,000.00',
        deposit: '',
        balance: '21.48'
    },
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '20 Jan 2024',
        narration: 'Grocery Shopping',
        withdrawl: '',
        deposit: '10,000.00',
        balance: '10,021.48'
    },
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '19 Jan 2024',
        narration: 'Online Subscription',
        withdrawl: '579.00',
        deposit: '',
        balance: '34.43'
    },
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '18 Jan 2024',
        narration: 'Movie Tickets',
        withdrawl: '30.00',
        deposit: '',
        balance: '613.43'
    },
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '17 Jan 2024',
        narration: 'Online Purchase',
        withdrawl: '45.00',
        deposit: '',
        balance: '643.43'
    },
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '16 Jan 2024',
        narration: 'Clothing Shopping',
        withdrawl: '10,000.00',
        deposit: '',
        balance: '653.43'
    },
    {
        type: 'credit card',
        number: '1234 5678 9012 3456',
        date: '15 Jan 2024',
        narration: 'Electronics Purchase',
        withdrawl: '10,000.00',
        deposit: '',
        balance: '663.43'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '25 Jan 2024',
        narration: 'Salary Deposit',
        withdrawl: '20.00',
        deposit: '',
        balance: '1.48'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '24 Jan 2024',
        narration: 'Rent Payment',
        withdrawl: '10,000.00',
        deposit: '',
        balance: '21.48'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '23 Jan 2024',
        narration: 'Utility Bill Payment',
        withdrawl: '',
        deposit: '10,000.00',
        balance: '10,021.48'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '21 Jan 2024',
        narration: 'Loan Repayment',
        withdrawl: '10,000.00',
        deposit: '',
        balance: '21.48'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '20 Jan 2024',
        narration: 'Grocery Shopping',
        withdrawl: '',
        deposit: '10,000.00',
        balance: '10,021.48'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '19 Jan 2024',
        narration: 'Health Insurance Payment',
        withdrawl: '579.00',
        deposit: '',
        balance: '34.43'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '18 Jan 2024',
        narration: 'Car Loan Payment',
        withdrawl: '30.00',
        deposit: '',
        balance: '613.43'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '17 Jan 2024',
        narration: 'Home Repair Payment',
        withdrawl: '45.00',
        deposit: '',
        balance: '643.43'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '16 Jan 2024',
        narration: 'Charity Donation',
        withdrawl: '10,000.00',
        deposit: '',
        balance: '653.43'
    },
    {
        type: 'bank account',
        number: '9876543210',
        date: '15 Jan 2024',
        narration: 'School Fees Payment',
        withdrawl: '10,000.00',
        deposit: '',
        balance: '663.43'
    }
];



const Estatement = () => {
    const [viewPdf ,setViewPdf] = useState('');
    const [selectedMonth, setSelectedMonth] = useState(null);
      const [selectedType, setSelectedType] = useState('Bank Account');
      const [bankAccountNumber, setBankAccountNumber] = useState('9876543210');
      const [creditCardNumber, setCreditCardNumber] = useState('');
      const [selectedBankAccountMonth, setSelectedBankAccountMonth] = useState(null);
    const [selectedCreditCardMonth, setSelectedCreditCardMonth] = useState(null);

  
    let transactionRef = useRef()
  const handleDownload = () => {
    const pdfOptions = { margin: 10, filename: 'transactions.pdf', image: { type: 'jpeg', quality: 0.98 } };

    html2pdf(transactionRef.current, pdfOptions).save();
    
  };
  

      const filterTransactions = () => {
        let selectedMonth = selectedType === 'Bank Account' ? selectedBankAccountMonth : selectedCreditCardMonth;
        if (selectedMonth === null || selectedType === null) {
            return [];
        }

        let filteredTransactions = allTransactionsList.filter(transaction => {
            const isCorrectMonth = transaction.date.includes(selectedMonth);
            const isCorrectType = transaction.type === selectedType.toLowerCase();
            const isCorrectNumber = selectedType === 'Credit Card' ? transaction.number === creditCardNumber : transaction.number === bankAccountNumber;
            return isCorrectMonth && isCorrectType && isCorrectNumber;
        });

        if (viewPdf) {
            filteredTransactions = filteredTransactions.slice(0, 10); 
        }

        return filteredTransactions;
    };
  
    const handleBankAccountMonthChange = (e) => {
        setSelectedBankAccountMonth(e.target.value);
    };

    const handleCreditCardMonthChange = (e) => {
        setSelectedCreditCardMonth(e.target.value);
    };
  
    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setBankAccountNumber('9876543210');
        setCreditCardNumber('1234 5678 9012 3456');
    };
  
  
    const transactions = filterTransactions();

    const LastTen=()=>{
        setViewPdf('view')

    }

    let navigate = useNavigate();

    const statementNavigate=()=>{
        navigate('/user/account/statement')
    }
      


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
                        <div className='estatement_anumber'>Download e-statement for my:</div>
                        <div className='estatement_select'>
                            <select id="sel1" className='estatement_option' onChange={handleTypeChange} value={selectedType || ''}>
                                <option value='Bank Account' >Savings Account</option>
                                <option  value='Credit Card'>Credit Card</option>
                                
                            </select>
                            
                        </div>
                    </div>
                </div>
                {/* account number */}
                
                        {selectedType === 'Bank Account'&&(<>
                        <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Account number:</div>
                        <div className='estatement_select'>
                        <input
                        type="text"
                        id="bank-account-number"
                        value={bankAccountNumber}
                        readOnly
                        className='estatement_bankinput'
                        
                    />
                        </div> </div>
                </div>

                
                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Period:</div>
                        <div className='estatement_select'>
                            <div className='estatement_option'>
                            <select id="month-select" className='estatement_periodselect1' onChange={handleBankAccountMonthChange} value={selectedBankAccountMonth || ''}>
                <option value="">Select</option>
                <option value="Jan 2024">January 2024</option>
                <option value="Feb 2023">February 2023</option>
            </select>
                            </div>

                        </div>
                    </div>
                    <p style={{marginTop:'10px'}}>To download Annual statements, please go to <span style={{color:'#ebca28'}}> Detailed statements - Select Transaction Period - Select Year from dropdown</span> Save Trees. Please print only when necessary.</p>
                </div></>)}
                        {selectedType === 'Credit Card'&&(<>
                            <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Credit Card number:</div>
                        <div className='estatement_select'>
                        <input
                        type="text"
                        id="credit-card-number"
                        value={creditCardNumber}
                        readOnly
                        className='estatement_bankinput'
                    />
                        </div>
                        </div> </div>
                        {/* period */}
                <div className='container-fluid estatement_accountmain'>
                    <div className='estatement_accounttype'>
                        <div className='estatement_anumber'>Period:</div>
                        
                            <select id="month-select" className='estatement_periodselect' onChange={handleCreditCardMonthChange} value={selectedCreditCardMonth || ''}>
                <option value="">Select</option>
                <option value="Jan 2024">January 2024</option>
                <option value="Feb 2023">February 2023</option>
            </select>
            
                           
                    </div>
                    <p style={{marginTop:'10px'}}>To download Annual statements, please go to<span style={{color:'#ebca28'}}> Detailed statements - Select Transaction Period - Select Year from dropdown </span> Save Trees. Please print only when necessary.</p>
                </div>
                        </>)}
                   
                {/* statement */}
                
                

                <div className='container-fluid estatement_buttons'>
                    <button onClick={LastTen} className='estatement_view'>Last 10 Transactions</button>
                    <button onClick={statementNavigate}  className='estatement_detailstatement'>Detailed Statement</button>
                    <button onClick={handleDownload} className='estatement_download'>Download PDF</button>

                </div>

                {viewPdf==='view'&&<div ref={transactionRef}  ><div  className="paylater_transactions">
          <div>Statement</div>
        </div>
          
       {transactions.length>0?
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
         {transactions.map((transaction, index) => (
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
            </div>
                        </div>
                    </div>
            </div>
           

        </>
    )
}



export default Estatement;