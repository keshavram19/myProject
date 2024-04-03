import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import "./Loans.css";

function Loanservices1() {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [emiStatementData, setEmiStatementData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const fetchEmiStatements = async () => {
    try {
      setLoading(true);
      setError(null); // Reset error state
      const res = await axios.get(`http://localhost:4444/api/loan-accounts`);
      if (res.status === 200) {
        setEmiStatementData(res.data);
      } else {
        setError("Error in fetching EMI statements");
      }
    } catch (error) {
      console.error("Error in getting the data", error);
      setError("Error in fetching EMI statements");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch EMI statements when the selected account changes
    if (selectedAccount) {
      fetchEmiStatements();
    }
  }, [selectedAccount]);

  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className="renew_hero_container">
            <div className="loan_container_fluid">
              <h3>Service Request</h3>
            </div>
            <div className="loan_service_container">
              <div className="row">
                <div className="col-md-5">
                  <label htmlFor="crediCardNumber" className="form-inline pt-4">
                    <span className="col-md-5">Loan Account :</span>
                    <select
                      name="cardNumber"
                      className="custom-select custom-select-sm col-md-5"
                      value={selectedAccount}
                      onChange={handleAccountChange}
                    >
                      <option value="">Select an account</option>
                      <option value="ABS_HOP00000072032">123456789</option>
                      <option value="ABS_HOP00000082846">1234567890</option>
                      {/* Add more options */}
                    </select>
                  </label>
                </div>
                <div className="col-md-5">
                  <label htmlFor="crediCardNumber" className="form-inline pt-4">
                    <span className="col-md-5">Service Request :</span>
                    <select
                      name="cardNumber"
                      className="custom-select custom-select-sm col-md-5"
                    >
                      <option value="option1">How can we help you</option>
                      {/* Add more options */}
                      <option value="option3">mobile number</option>
                        <option value="option4">Disbursement Request</option>
                        <option value="option5">Loan Account Tracker</option>
                        <option value="option6">NACH Change Request</option>
                        <option value="option7">Part Pre payment</option>
                        <option value="option8">TDS Refund</option>
                        <option value="option9">BounceMemo</option>
                        <option value="option10">GSTUpdate</option>
                      <option value="option">Loan Statement</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="loan_submit_container">
            <button type="button" onClick={fetchEmiStatements}>
              Get EMI Statements
            </button>
          </div>
          {loading && <div className="loading-indicator">Loading...</div>}
          {error && <div className="error-message">{error}</div>}
           <table className="table"> 
             <thead>
              <tr> 
                {/* <th>Account Number</th> */}
                 <th>Sanctioned Amount</th>
                <th>Principal Amount</th>
                <th>Current Amount</th>
                <th>Due Date</th>
                <th>Overdue Amount</th>
              </tr>
            </thead> 
            <tbody>
              {emiStatementData.map((data) => (
                <tr key={data.id}>
                  {/* <td>{data.accountnumber}</td> */}
                  <td>{data.sanctionedAmount}</td>
                  <td>{data.principalAmount}</td>
                  <td>{data.currentAmount}</td>
                  <td>{data.dueDate}</td>
                  <td>{data.overdueAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}

export default Loanservices1;
