import React, { useState, useEffect } from 'react';
import BankaccountSidebar from '../Sidebar/BankaccountSidebar';
import jsPDF from 'jspdf';
import axios from "axios";
import apiList from "../../../../lib/apiList";

const Form16A = () => {
  const accountNumber = 12456389;
    const panNumber = "FAFPG7351A"; 
    const [userDetails, setUserDetails] = useState([]);
    const [formData, setFormData] = useState({});
    const [solutionsSubmitted, setSolutionsSubmitted] = useState(0);
    const [ratePerSolution, setRatePerSolution] = useState(0);
    const [payPercentage, setPayPercentage] = useState(0);
    const [grossEarningPreBonus, setGrossEarningPreBonus] = useState(0);
    const [grossBonus, setGrossBonus] = useState(0);
    const [grossEarnings, setGrossEarnings] = useState(0);
    const [tdsDeduction, setTdsDeduction] = useState(0);
    const [netEarnings, setNetEarnings] = useState(0);

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${apiList.customerAccountDetails}${accountNumber}`
      );


      const userDetailsData = response.data.details;

      if (Array.isArray(userDetailsData)) {
        setUserDetails(userDetailsData);
        
        
      } else if (typeof userDetailsData === "object") {
        setUserDetails([userDetailsData]);
        
      } else {
        console.error("Invalid user details format:", userDetailsData);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ userDetails]);


  const fetchFormData = async () => {
    try {
      const response = await fetch('http://localhost:4444/api/accountCreation/12456389');
      if (!response.ok) {
        throw new Error('Failed to fetch form data');
      }
  
      const formData = await response.json();
      const amount = formData.amount;
      setFormData({ ...formData, amount });
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };
  

  const formatPanNumber = (pan) => {
    if (pan.length !== 10) return "Invalid PAN";
    const firstTwo = pan.substring(0, 2);
    const lastTwo = pan.substring(pan.length - 2);
    const middle = "xxxxxx";
    return `${firstTwo}${middle}${lastTwo}`;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const fetchAccountBalance = async () => {
    try {
        const response = await axios.get(
            `${apiList.customerAccountDetails}${accountNumber}`
        );

        const accountBalance = response.data.userAccountBalance;
        console.log('Account Balance:', accountBalance);

        return accountBalance;
    } catch (error) {
        console.error('Error fetching account balance:', error);
        return null;
    }
};

useEffect(() => {
  const fetchAndCalculate = async () => {
      const balance = await fetchAccountBalance();
      if (balance !== null) {
          
          const amountValue = balance;
          const solutionsSubmitted = Math.floor(amountValue / 100);
          const ratePerSolution = 150;
          const payPercentage = 90;
          const grossEarningPreBonus = solutionsSubmitted * ratePerSolution * (payPercentage / 100);
          const grossBonus = 500;
          const grossEarnings = grossEarningPreBonus + grossBonus;
          const tdsDeduction = Math.floor(grossEarnings * 0.1);
          const netEarnings = grossEarnings - tdsDeduction;

        
          setSolutionsSubmitted(solutionsSubmitted);
          setRatePerSolution(ratePerSolution);
          setPayPercentage(payPercentage);
          setGrossEarningPreBonus(grossEarningPreBonus);
          setGrossBonus(grossBonus);
          setGrossEarnings(grossEarnings);
          setTdsDeduction(tdsDeduction);
          setNetEarnings(netEarnings);

        
          
      }
  };

  fetchAndCalculate();
}, []);



  const generatePDF = () => {

    if (!formData.financialYear || !formData.quarter) {
      alert("Please select Financial Year and Period before generating PDF.");
      return; 
    }

    const docWidth = 260; 
    const docHeight = 260; 

    const certificateData = {
        
        accountHolderName: userDetails[0]?.accountHolderName,
        userEmailId: userDetails[0]?.userEmailId,
        bankBranchIfscCode: userDetails[0]?.bankBranchIfscCode,
        accountHolderPAN: userDetails[0]?.accountHolderPAN,
        userAccountNumber: userDetails[0]?.userAccountNumber,
       
      };



      const doc = new jsPDF({
        orientation: "portrait", 
        unit: "mm",
        format: [docWidth, docHeight],
      });
    doc.setFontSize(20);
    doc.text('Form 16A', docWidth / 2, 10,  { align: 'center' });

    doc.setFontSize(12);
    doc.text(`Name: ${certificateData.accountHolderName}`, 10, 20);
    doc.text(`Email ID: ${certificateData.userEmailId}`, 10, 30);
    doc.text(`IFSC Code: ${certificateData.bankBranchIfscCode}`, 10, 40);
    doc.text(`PAN Number: ${certificateData.accountHolderPAN}`, 10, 50);
    doc.text(`Account Number: ${certificateData.userAccountNumber}`, 10, 60);


    
    const tableColumn = ['Month', 'Year', 'Subject', 'No.of Solutions Submitted', 'Rate Per Solution', 'Pay%', 'Gross Earning Prebonus', 'Gross Bonus', 'Gross Earnings', 'TDS Deduction', 'Net Earnings'];
    const tableData = [
      [formData.quarter, formData.financialYear, 'Accounting', `${solutionsSubmitted}`, `${ratePerSolution}`, `${payPercentage}`, `${grossEarningPreBonus}`, `${grossBonus}`, `${grossEarnings}`, `${tdsDeduction}`, `${netEarnings}`]
    ];
    doc.autoTable({
      startY: 80,
      head: [tableColumn],
      body: tableData,
      theme: 'grid',
    });

    const startYNote = doc.autoTable.previous.finalY + 15;
  doc.setFontSize(14);

  doc.text('Note:', 10, startYNote);
  doc.setFontSize(12);
  const textLines = [
    'Pay% - The eligible compensation per Q&A Solution on the Q&A Board will depend on your subject and your performance on the Assignment as evaluated by the Company.',
    'From time to time, your performance will be reviewed and your eligible payment rate per Q&A Solution may be adjusted accordingly.',
    'Gross Amount Pre Bonus = No. of Solutions Submitted * Rate per Solution * Pay%',
    'Bonus prior to Pay% = Gross Bonus / Pay%',
    'Gross Earnings = Gross Amount Pre Bonus + Gross Bonus',
    'There can be a small difference (INR 4-5) in the amount paid & ‘Net Earnings’ due to rounding off the amounts.',
  ];
  const lineHeight = 6;
  const maxTextWidth = 220; 
  let currentY = startYNote + lineHeight;
  textLines.forEach(line => {
    const words = line.split(' ');
    let tempLine = '';
    words.forEach(word => {
      const testLine = tempLine.length ? `${tempLine} ${word}` : word;
      const lineWidth = doc.getStringUnitWidth(testLine) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      if (lineWidth <= maxTextWidth) {
        tempLine = testLine;
      } else {
        doc.text(tempLine, 10, currentY);
        tempLine = word;
        currentY += lineHeight;
      }
    });
    doc.text(tempLine, 10, currentY);
    currentY += lineHeight;
  });


    doc.save('Form16A.pdf');
  };

  return (
    <div>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-3">
            <BankaccountSidebar />
          </div>
          <div className="col-sm-9">
            <h2 style={{color:"#EBCA28" }}>FORM 16A</h2>
            <div className="row mt-3">
              <div className="col-sm-3" style={{ marginLeft: "28px"}}>
                <label htmlFor="text">PAN Number*</label>
              </div>
              <div className="col-sm-3">
                <span>{formatPanNumber(panNumber)}</span>
              </div>
            </div>

            <div className=" row m-3">
              <label htmlFor="financialYear" className='col-sm-3'>Financial Year</label>
              <div className='col-sm-3'>
                <select
                  className="form-control"
                  id="financialYear"
                  name="financialYear"
                  value={formData.financialYear}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Financial Year</option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2022-2023">2022-2023</option>
                  <option value="2021-2022">2021-2022</option>
                  <option value="2020-2021">2020-2021</option>
                  <option value="2019-2020">2019-2020</option>
                </select>
              </div>
            </div>

            <div className="row m-3">
              <label htmlFor="quarter" className='col-sm-3'>Quarter Period</label>
              <div className='col-sm-3'>
                <select
                  className="form-control"
                  id="quarter"
                  name="quarter"
                  value={formData.quarter}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Quarter</option>
                  <option value="Quarter 1">Quarter 1</option>
                  <option value="Quarter 2">Quarter 2</option>
                  <option value="Quarter 3">Quarter 3</option>
                  <option value="Quarter 4">Quarter 4</option>
                </select>
              </div>
            </div>
            <div style={{padding: "0px"}}>
              <button type="button" className="Form16A_genratepdf_submits2"  onClick={generatePDF}>
                GENERATE PDF
              </button>
            </div>
            <div style={{padding: "10px"}}>
              <h6>Notes:</h6>
              <p>1. TDS certificate shall be available only for the periods 
                in which TDS has got deducted. For any clarification or more information in this
                regard, please call our <a href=''>24-hour Customer Care</a> or contact your Relationship Manager.
                Alternatively, you may visit your nearest Royal Islamic Bank Branch.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form16A;
