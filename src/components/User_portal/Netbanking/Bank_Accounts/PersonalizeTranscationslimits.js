import React, {useState} from 'react';
import './Accounts.css'

const PersonalizeTransactionlimits=()=> {
  const [option,setOption] = useState();
  return (
    
      <>
    <div className='category_container'>
      <div className='row'>
        
    <div className='col-md-12'>
      <h4 className='personalize_Limit_container'>Personalize my Transaction Limits</h4>
      <h6  className='current_limit_container'>My Current Limit Category: <span>{option}</span></h6> 
       <table className='personalize_container'>
			<tr className='category_tr_container'>
				<th className='category_th_container'>Products</th>
				<th className='category_th_container'>Your Current Daily Transaction Limit (INR)</th>
				<th className='category_th_container'>Select Daily Transaction Limit (INR)</th>
			</tr>

      <tr className='category_tr_container'>
        <td>Combined Transaction Limit</td>
        <td className='category_Price_container'>10,00,000.00</td>
        <td className='category_Price_container'>10,00,000.00</td>
      </tr>

      <tr className='category_tr_container'>
        <td>Buy Gold Self</td>
        <td  className='category_Price_container'>4,00,000.00</td>
        <td  className='category_Price_container'>4,00,000.00</td>
      </tr>

      <tr className='category_tr_container'>
        <td>PMR Recharge</td>
        <td  className='category_Price_container'>10,000.00</td>
        <td  className='category_Price_container'>10,000.00</td>
      </tr>

      <tr className='category_tr_container'>
        <td>DTH Recharge</td>
        <td  className='category_Price_container'>30,000.00</td>
        <td  className='category_Price_container'>30,000.00</td>
      </tr>
      
      <tr className='category_tr_container'>
        <td>Shopping Mall</td>
        <td  className='category_Price_container'>10,00,000.00</td>
        <td  className='category_Price_container'>10,00,000.00</td>
      </tr>

      <tr className='category_tr_container'>
        <td>Bill Pay</td>
        <td  className='category_Price_container'>No Limit</td>
        <td  className='category_Price_container'>No Limit</td>
      </tr>

      <tr className='category_tr_container'>
        <td>Own Account Fund Transfer</td>
        <td  className='category_Price_container'>No Limit</td>
        <td  className='category_Price_container'>No Limit</td>
      </tr>

      <tr className='category_tr_container'>
        <td>Online Tax</td>
        <td  className='category_Price_container'>20,00,00,000.00</td>
        <td  className='category_Price_container'>20,00,00,000.00</td>
      </tr>
		</table>  
     <div  className='Select_category_container'>
    <div>
      <p className='Select_limit_container'>Select Limit Category:</p>
      <input type='radio' name='option' value="Option1" className="option_container" onChange={e=>setOption(e.target.value)}/>Option1
      <input type='radio' name='option' value="Option2" className="option_container" onChange={e=>setOption(e.target.value)}/>Option2
      <input type='radio' name='option' value="Option3" className="option_container" onChange={e=>setOption(e.target.value)}/>Option3
      <input type='radio' name='option' value="Option4" className="option_container" onChange={e=>setOption(e.target.value)}/>Option4
      <input type='radio' name='option' value="Option5" className="option_container" onChange={e=>setOption(e.target.value)}/>Option5
    </div>
    <div>
      <h6 className='Debit_Account_container'>Debit Account Number <span><input placeholder='Please Select' list='data' className='InputDebit_Account_container'/></span></h6>
      <datalist id='data'>
        <option>663456790372</option>
        <option>943465533265</option>
        <option>675427543966</option>
      </datalist>
    </div>
    <div>
      <button className='Next_Account_container'>NEXT</button>
      </div>
    </div> 
    </div>
    </div>
    <div className='row'>
      
      <div className='col-md-12'>
        <p className='Paragraph_category_container'>Note:<span> Select Personalize Limit Category to set new transaction limit for above products.</span></p> 
      </div>

    </div>
    </div>
    </>
  );
}

export default PersonalizeTransactionlimits;