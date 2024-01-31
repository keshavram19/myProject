import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./FundTransfer.css";
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";
import jsPDF from "jspdf";
import "jspdf-autotable";

const InterestCertificate = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [interestPeriod, setInterestPeriod] = useState("Select FY");
  const [interestPeriodDate, setInterestPeriodDate] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [certificateDownloadUrl, setCertificateDownloadUrl] = useState(null);
  const [interestPaid, setInterestPaid] = useState(0);
  const [taxWithheld, setTaxWithheld] = useState(0);

  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [totalTaxWithheld, setTotalTaxWithheld] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");

  const interestPeriodRef = useRef();

  useEffect(() => {
    // Programmatically select the first radio button when the component mounts
    if (interestPeriodRef.current) {
      interestPeriodRef.current.click();
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedAccount, userDetails]);

  useEffect(() => {
    if (userDetails.length > 0) {
      const calculatedValues = calculateValues();
      setInterestPaid(calculatedValues.interestPaid);
      setTaxWithheld(calculatedValues.taxWithheld);
    }
  }, [userDetails, interestPeriod, startDate, endDate]);

  function calculateMonthsDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start) || isNaN(end)) {
      console.error("Invalid date input in calculateMonthsDifference");
      return 0;
    }

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      end.getMonth() -
      start.getMonth();

    if (isNaN(months)) {
      console.error("Error in calculating months in calculateMonthsDifference");
      return 0;
    }

    return months;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4444/api/userDetails/12456389"
      );

      // console.log("API Response:", response.data);

      const userDetailsData = response.data.details;

      if (Array.isArray(userDetailsData)) {
        setUserDetails(userDetailsData);
        // console.log("User Details:", userDetailsData);

        // Calculate interestPaid and taxWithheld on the frontend
        const calculatedValues = calculateValues();
        setInterestPaid(calculatedValues.interestPaid);
        setTaxWithheld(calculatedValues.taxWithheld);
      } else if (typeof userDetailsData === "object") {
        setUserDetails([userDetailsData]);
        // console.log("User Details (Object):", userDetailsData);
      } else {
        console.error("Invalid user details format:", userDetailsData);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedAccount, userDetails]);

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
    console.log("Selected Account:", event.target.value);
  };

  const handleInterstPeriod = (event) => {
    const selectedValue = event.target.value;
  
    if (selectedValue.trim() === "") {
      console.log("Please select a valid financial year");
      setSelectedYear("");
      setInterestPeriod("");
      setStartDate(null);
      setEndDate(null);
    } else if (selectedValue === "select") {
      console.log("Selected 'Select'");
      const currentDate = new Date();
      const financialYear = getFinancialYear(currentDate);
      console.log("Financial Year:", financialYear);
      setInterestPeriod(financialYear);
      setInterestPeriodDate("InterestPeriodDate");
      setSelectedYear(financialYear);
      setStartDate(currentDate);
      setEndDate(null);
      document.getElementById("interestPeriod").checked = true;
      console.log("Selected else if:", financialYear);
    } else {
      setInterestPeriod(selectedValue);
      setInterestPeriodDate("");
      setSelectedYear(selectedValue);
      setStartDate(null);
      setEndDate(null);
      document.getElementById("interestPeriod").checked = true;
  
      if (selectedValue === "monthly") {
        setStartDate(new Date()); 
        setEndDate(new Date()); 
      }
  
      
  
      const values = calculateValuesForAccount(userDetails, selectedValue, startDate, endDate);
      setInterestPaid(values.interestPaid);
      setTaxWithheld(values.taxWithheld);
  
      console.log("Selected else condition:", selectedValue);
     
    }
  };
  
    

  const getFinancialYear = (date) => {
    const fiscalStartMonth = 3;
    const fiscalYear =
      date.getMonth() >= fiscalStartMonth
        ? date.getFullYear()
        : date.getFullYear() - 1;
  
    const startYear = fiscalYear.toString().substring(2, 4);
    const endYear = (fiscalYear + 1).toString().substring(2, 4);
  
    return `${startYear}-${endYear}`;
  };
  


  const handleStartDate = (event) => {
    setStartDate(new Date(event.target.value));
  };

  const handleEndDate = (event) => {
    setEndDate(new Date(event.target.value));
  };

  const calculateValues = async () => {
    const interestRate = 0.05; // 5%
    const taxRate = 0.1; // 10%
  
    if (userDetails.length === 0) {
      return { interestPaid: 0, taxWithheld: 0 };
    }
  
    const userAccountBalance = parseFloat(userDetails[0].userAccountBalance.replace(/,/g, ""));
    const interestPeriodInMonths = calculateMonthsDifference(startDate, endDate);
  
    const interestPaid = userAccountBalance * interestRate * interestPeriodInMonths;
  
    const calculatedInterestPaid = isNaN(interestPaid) ? 0 : interestPaid;
  
    const taxWithheld = calculatedInterestPaid * taxRate;
  
    const calculatedTaxWithheld = isNaN(taxWithheld) ? 0 : taxWithheld;
  
    return {
      interestPaid: calculatedInterestPaid,
      taxWithheld: calculatedTaxWithheld,
    };
  };
  
  const calculateValuesForAccount = async (userDetails, selectedPeriod, startDate, endDate) => {
    const interestRate = 0.05; // 5%
    const taxRate = 0.1; // 10%
  
    if (userDetails.length === 0) {
      return { interestPaid: 0, taxWithheld: 0 };
    }
  
    const userAccountBalance = parseFloat(userDetails[0].userAccountBalance.replace(/,/g, ""));
  
    let interestPeriodInMonths = 0;
  
    const interestPaid = userAccountBalance * interestRate * interestPeriodInMonths;
    const calculatedInterestPaid = isNaN(interestPaid) ? 0 : interestPaid;
  
    const taxWithheld = calculatedInterestPaid * taxRate;
    const calculatedTaxWithheld = isNaN(taxWithheld) ? 0 : taxWithheld;

    if (selectedPeriod === 'yearly') {
      const getFinancialYearRange = (date, selectedYear) => {
        const fiscalStartMonth = 3;
        const fiscalYear =
          date.getMonth() >= fiscalStartMonth
            ? date.getFullYear()
            : date.getFullYear() - 1;
  
        const startYear = selectedYear || fiscalYear;
        const endYear = parseInt(startYear, 10) + 1;
  
        const startDate = new Date(`${startYear}-04-01`);
        const endDate = new Date(`${endYear}-03-31`);
  
        interestPeriodInMonths = calculateMonthsDifference(startDate, endDate);
      };
      getFinancialYearRange(new Date(), selectedYear);
    } else if (selectedPeriod === 'monthly' && startDate && endDate) {
      interestPeriodInMonths = calculateMonthsDifference(startDate, endDate);
    } else {
      console.error('Invalid selection or missing date range');
      return { interestPaid: 0, taxWithheld: 0 };
    }
  
    return {
      interestPaid: calculatedInterestPaid,
      taxWithheld: calculatedTaxWithheld,
    };
  };
  
  
  


  useEffect(() => {
    if (selectedAccount && userDetails.length > 0 && interestPeriod) {
      const values = calculateValuesForAccount(userDetails, selectedYear);
      setInterestPaid(values.interestPaid);
      setTaxWithheld(values.taxWithheld);
  
      setTotalInterestPaid((prevTotal) => prevTotal + values.interestPaid);
      setTotalTaxWithheld((prevTotal) => prevTotal + values.taxWithheld);
    }
  }, [selectedAccount, userDetails, interestPeriod, startDate, endDate, selectedYear]);
  
  
  const handledownload = async (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

 
    if (!selectedAccount) {
      console.error("Please select an account number");
      return;
    }
  
    const isInterestPeriodSelected = document.getElementById("interestPeriod").checked;
  
    
  
    try {

      let interestPeriodValue = isInterestPeriodSelected ? selectedYear : "";

      if (isInterestPeriodSelected) {
        interestPeriodValue = selectedYear;
      }



      const values = await calculateValuesForAccount(userDetails);
      const { interestPaid, taxWithheld } = values;
  
  
      console.log("Interest Paid:", interestPaid);
      console.log("Tax Withheld:", taxWithheld);
  
      const certificateData = {
        userId: userDetails[0]?.userAccountNumber,
        accountHolderName: userDetails[0]?.accountHolderName,
        bankBranchName: userDetails[0]?.bankBranchName,
        userAccountNumber: userDetails[0]?.userAccountNumber,
        userAccountType: userDetails[0]?.userAccountType,
        accountHolderAddress: userDetails[0]?.accountHolderAddress,
        interestPeriod: interestPeriodValue,
        startDate: startDate instanceof Date ? startDate.toISOString() : null,
        endDate: endDate instanceof Date ? endDate.toISOString() : null,
        interestPaid: values.interestPaid,
        taxWithheld: values.taxWithheld,
      };
  
      const pdf = new jsPDF();
      pdf.text(20, 10, `Date: ${new Date().toLocaleDateString()}`);
      pdf.text(20, 20, "Interest Certificate");
  
      pdf.text(
        20,
        30,
        `Account Holder Name: ${certificateData.accountHolderName}`
      );
      pdf.text(20, 40, `Bank Branch Name: ${certificateData.bankBranchName}`);
      pdf.text(
        20,
        50,
        `User Account Number: ${certificateData.userAccountNumber}`
      );
      pdf.text(20, 60, `User Account Type: ${certificateData.userAccountType}`);
      pdf.text(
        20,
        70,
        `Account Holder Address: ${certificateData.accountHolderAddress}`
      );
  
      pdf.text(
        20,
        80,
        isInterestPeriodSelected
          ? `Interest Period Date: ${certificateData.startDate} to ${certificateData.endDate}`
          : `Interest Period: ${certificateData.interestPeriod}`
      );
      pdf.text(20, 90, `Selected FY: ${certificateData.interestPeriod}`);
      pdf.text(20, 100, `Start Date: ${certificateData.startDate}`);
      pdf.text(20, 110, `End Date: ${certificateData.endDate}`);
  
      const data = [
        ["Account Number", certificateData.userAccountNumber],
        ["Interest Paid (Amt. in INR)", interestPaid.toString()],
        ["Tax Withheld (Amt. in INR)", taxWithheld.toString()],
        ["Total", parseInt(interestPaid) + parseInt(taxWithheld)],
      ];
  
      pdf.autoTable({
        startY: 120,
        head: [
          ["Sr.No", "Details of Account Holder & Tax Payment"],
        ],
        body: data,
        didDrawPage: function (data) {
          pdf.text(20, data.cursor.y + 10, "Dear Customer,");
          pdf.text(
            20,
            data.cursor.y + 20,
            "Please find below confirmation of the Interest paid and Tax withheld..."
          );
        },
      });
  
      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = url;
      link.download = "InterestCertificateWithDetails.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      console.log("Certificate Data:", certificateData);
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
  };
  
  

  return (
    <div
      className="interest_container_fluid container-fluid"
      style={{ marginTop: "90px" }}
    >
      <div class="row">
        <div className="col-3">
          <PaymentSidebar />
        </div>
        <div class=" col-9">
          <div className="interest_head">
            <h1 style={{ color: "#f18121" }}>
              Download Interest & TDS Certificate
            </h1>
          </div>
          <div className="interest_certificate_baground card">
            <div className="interest_certificate_heading5">
              <h4>Interest & TDS Certificate</h4>
            </div>
            <div className="interest_all_forms">
              <div className="interest_from_account row">
                <label className="col-sm-3 interest_form_label">
                  Account Number:
                </label>
                <div className="col-sm-6">
                  <div className="interest_account_select">
                    <select
                      typeof="number"
                      id="number"
                      className="inerest_selection_form form-control"
                      value={selectedAccount}
                      onChange={handleAccountChange}
                    >
                      <option value="">Select Account Number</option>
                      {userDetails.map((account, index) => (
                        <option key={index} value={account.userAccountNumber}>
                          {account.userAccountNumber}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="interest_form_label_radio row">
              <label className="interest_form_radio_label col-sm-3">
          <input
            type="radio"
            id="interestPeriod"
            name="interestOption"
            value={interestPeriodRef}
            onChange={() => setInterestPeriod("FinancialYear")}
          />
          Interest Period
        </label>
        <div className="col-sm-6">
          <select
            typeof="number"
            id="number"
            className="inerest_selection_form form-control"
            value={interestPeriod}
            onChange={handleInterstPeriod}
          >
            <option value="select">Select FY</option>
            <option value="2015-2016">2015-2016</option>
            <option value="2016-2017">2016-2017</option>
            <option value="2017-2018">2017-2018</option>
          </select>
        </div>
      </div>
              <div className="interest_form_label_radio_period row">
                <label class="interest_form_radio_label col-sm-3">
                  <input
                    type="radio"
                    id="interestPeriodDate"
                    name="interestOption"
                    value="interestPeriodDate"
                    checked={interestPeriodDate === "InterestPeriodDate"}
                    onChange={() => setInterestPeriodDate("InterestPeriodDate")}
                  />{" "}
                  Interest Period Date
                </label>

                <div className="col-sm-4">
                  <label style={{ marginRight: "20px" }}>from</label>
                  <input
                    type="date"
                    className="interest_period"
                    id="date"
                    placeholder="dd-mm-yyyy"
                   
                    onChange={handleStartDate}
                  />
                </div>
                <div className="col-sm-3">
                  <label className=" " style={{ marginRight: "10px" }}>
                    to
                  </label>
                  <input
                    type="date"
                    className="interest_period"
                    id="id"
                    placeholder="dd-mm-yyyy"
                    
                    onChange={handleEndDate}
                  />
                </div>
              </div>
            </div>
            <div className="interet_buuton">
              <button
                type="button"
                className="btn btn_interest_button"
                style={{ background: "#f18121", color: "white" }}
                onClick={handledownload}
              >
                Download OAD PDF
              </button>
            </div>
          </div>

          <div className="inerest_heading6">
            <h6>Notes:</h6>
          </div>
          <p>
            1. Interest Certificates are available online from April 2015
            onwards.
          </p>
          <p>
            2. The information displayed in the Interest Statement is for all
            accounts linked under the selected Customer ID.
          </p>
          <p>
            3. The TDS amount is displayed only for NRO Accounts. For details on
            tax deducted, please visit Payments & Transfer - Tax Centre - TDS
            Certificate.
          </p>
          <p>
            4. In case you wish to generate an interest certificate for a
            Financial year e. April 1 to March 31, please use the 'Interest
            Period" option.
          </p>
          <p>
            5. In case you wish to generate an interest certificate for a
            Calendar year i e, from January 1 to December 31, please use the
            'Interest Period Date' option.
          </p>
          <p>6. All details are available as on previous business day only.</p>
          <p>
            7. To access your Interest Certificate in PDF your computer must
            have Adobe Reader. If you do not have Adode Reader on your computer
            please <a href="#">Click here</a>
          </p>
          <p>8. For any clarification, please visit the nearest branch.</p>
        </div>
      </div>
    </div>
  );
};

export default InterestCertificate;
