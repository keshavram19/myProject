import './Accounts.css';
import paylaterimage from '../../../../Images/paylaterimage.jpg'
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';


const PayLater = () => {
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
        <div>
          <img src={paylaterimage} className="paylater_image1" alt="paylaterimage" />
        </div>
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
                <td><input type="radio" /></td>
                <td>987654356353121</td>
                <td>25000.00</td>
                <td>-10000.89</td>
                <td>14999.11</td>
                <td>0.0</td>
                <td>15-01-2024</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="paylater_payment">
          <div><button className=" btn paylater_paynow">PAY NOW</button></div>
          <div><button className="btn paylater_statement">DETAILED STATEMENT</button></div>
          <div><button className="btn paylater_bill">BILL DETAILS</button></div>
        </div>
        <div className="paylater_transactions">
          <div>LAST 10 TRANSACTIONS</div>
        </div>
        <div className="table-responsive-lg paylater_transaction_table">
          <table className="table table-bordered ">
            <thead className="paylater_tablehead">
              <tr >
                <th>Serial Number</th>
                <th>Transaction Date</th>
                <th>Transaction Remark</th>
                <th>CR/DR</th>
                <th>Amount(INR)</th>
              </tr>
            </thead>
            <tbody className="paylater_body">
              <tr>
                <td>1</td>
                <td>01/01/24</td>
                <td>UPI Payment - Grocery Store</td>
                <td>Dr.</td>
                <td>1000.50</td>
              </tr>
              <tr>
                <td>2</td>
                <td>02/01/24</td>
                <td>Salary/perfex</td>
                <td>Cr.</td>
                <td>22850.22</td>
              </tr>
              <tr>
                <td>3</td>
                <td>03/01/24</td>
                <td>UPI Payment -Fruits/Store</td>
                <td>Dr.</td>
                <td>568.50</td>
              </tr>
              <tr>
                <td>4</td>
                <td>04/01/24</td>
                <td>tollfee/sapathagiri_toll</td>
                <td>Dr.</td>
                <td>120.00</td>
              </tr>
              <tr>
                <td>5</td>
                <td>05/01/24</td>
                <td>UPI Payment - Grocery Store</td>
                <td>Dr.</td>
                <td>1000.50</td>
              </tr>
              <tr>
                <td>6</td>
                <td>06/01/24</td>
                <td>imps/icici/vasu</td>
                <td>Cr.</td>
                <td>22850.22</td>
              </tr>
              <tr>
                <td>7</td>
                <td>07/01/24</td>
                <td>UPI Payment -Fruits/Store</td>
                <td>Dr.</td>
                <td>568.50</td>
              </tr>
              <tr>
                <td>8</td>
                <td>08/01/24</td>
                <td>tollfee/sapathagiri_toll</td>
                <td>Dr.</td>
                <td>120.00</td>
              </tr>
              <tr>
                <td>9</td>
                <td>09/01/24</td>
                <td>UPI Payment - Grocery Store</td>
                <td>Dr.</td>
                <td>1000.50</td>
              </tr>
              <tr>
                <td>10</td>
                <td>10/01/24</td>
                <td>Ramu/netbanking/imps/hdfc</td>
                <td>Cr.</td>
                <td>22850.22</td>
              </tr>
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