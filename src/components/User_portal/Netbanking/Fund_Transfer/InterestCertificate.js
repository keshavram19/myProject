import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./FundTransfer.css";
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";
import jsPDF from "jspdf";
import "jspdf-autotable";
import apiList from "../../../../lib/apiList";
import logo from "../../../../Images/banklogo.png";



const InterestCertificate = () => {
  // const accountNumber = 114912720;
  const [userDetails, setUserDetails] = useState([]);
  const [LastVisited, setLastVisited] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [interestPeriod, setInterestPeriod] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [interestPeriodDate, setInterestPeriodDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [interestPaid, setInterestPaid] = useState(0);
  const [taxWithheld, setTaxWithheld] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [totalTaxWithheld, setTotalTaxWithheld] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");

  const interestPeriodRef = useRef();

  useEffect(() => {
    if (interestPeriodRef.current) {
      interestPeriodRef.current.click();
    }
  }, []);

 

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



  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = sessionStorage.getItem('loginToken');
        const requestOptions = {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
        const response = await fetch(apiList.requestedUserDetailsByEmail, requestOptions);
        if (response.ok) {
          const data = await response.json();
          const userDetailsFromAPI = data.user;
          console.log("Data received from API:", data);
          setUserDetails([data.user]); 
          // setUserDetails(userDetailsFromAPI);

          
          setLastVisited(new Date());
          
        } else {
          console.error('Error fetching user details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUserDetails();
  }, []);



  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
    console.log("Selected Account:", event.target.value);
  };

  const handleInterstPeriod = (selectedValue) => {
    if (selectedValue.trim() === "") {
      console.log("Please select a valid financial year");
      setSelectedYear("");
      setInterestPeriod("");
      setStartDate(null);
      setEndDate(null);
      setSelectedPeriod("");
    } else if (selectedValue === "select") {
      console.log("Selected 'Select'");
      const currentDate = new Date();
      const financialYear = getFinancialYear(currentDate);
      console.log("Financial Year:", financialYear);
      setInterestPeriod(financialYear);
      setInterestPeriodDate("InterestPeriodDate");
      setSelectedYear(financialYear); // Set selectedYear state to the calculated financial year
      setStartDate(currentDate);
      setEndDate(null);
      setSelectedPeriod(selectedValue);
      console.log("Selected else if:", financialYear);
    } else {
      console.log("Selected financial year:", selectedValue);
      const selectedYear = selectedValue; 
      const startYear = selectedYear.substring(0, 4); 
      const endYear = selectedYear.substring(5, 9); 
      setInterestPeriod(selectedValue);
      setInterestPeriodDate("InterestPeriodDate");
      setSelectedYear(selectedYear); 
      setStartDate(new Date(`${startYear}-04-01`)); 
      setEndDate(new Date(`${endYear}-03-31`)); 
      setSelectedPeriod(selectedValue);
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
    const selectedDate = new Date(event.target.value);
    const isValidDate = !isNaN(selectedDate.getTime()); // Check if the selected date is valid
  
    if (isValidDate) {
      setStartDate(selectedDate);
      const diffInDays = (endDate - selectedDate) / (1000 * 60 * 60 * 24);
      if (diffInDays < 28 || diffInDays > 31) {
        alert("Please select a valid end date exactly one month after the start date.");
        setEndDate(null);
      }
    } else {
      alert("Please select a valid start date.");
      setStartDate(null);
    }
  };
  
  const handleEndDate = (event) => {
    const selectedDate = new Date(event.target.value);
    const isValidDate = !isNaN(selectedDate.getTime()); // Check if the selected date is valid
  
    if (isValidDate) {
      setEndDate(selectedDate);
      const diffInDays = (selectedDate - startDate) / (1000 * 60 * 60 * 24);
      if (diffInDays < 28 || diffInDays > 31) {
        alert("Please select a valid start date exactly one month before the end date.");
        setStartDate(null);
      }
    } else {
      alert("Please select a valid end date.");
      setEndDate(null);
    }
  };
  

  function calculateValues() {
    const interestRate = 0.05; // 5%
    const taxRate = 0.1; // 10%

    if (userDetails.length === 0 || typeof userDetails[0].userAccountBalance !== 'string') {
      return { interestPaid: 0, taxWithheld: 0 };
    }

    const userAccountBalance = parseFloat(
      userDetails[0].userAccountBalance.replace(/,/g, "")
    );
    const interestPeriodInMonths = calculateMonthsDifference(
      startDate,
      endDate
    );

    const interestPaid =
      userAccountBalance * interestRate * interestPeriodInMonths;

    const calculatedInterestPaid = isNaN(interestPaid) ? 0 : interestPaid;

    const taxWithheld = calculatedInterestPaid * taxRate;

    const calculatedTaxWithheld = isNaN(taxWithheld) ? 0 : taxWithheld;

    return {
      interestPaid: calculatedInterestPaid,
      taxWithheld: calculatedTaxWithheld,
    };
}


const calculateValuesForAccount = async (
  userDetails,
  selectedPeriod,
  startDate,
  endDate,
  selectedYear // add selectedYear parameter
) => {
  const interestRate = 0.05; // 5%
  const taxRate = 0.1; // 10%
  
  if (!Array.isArray(userDetails) || userDetails.length === 0 || typeof userDetails[0].userAccountBalance !== 'string') {
    return { interestPaid: 0, taxWithheld: 0 };
  }

  const userAccountBalance = parseFloat(
    userDetails[0].userAccountBalance.replace(/,/g, "")
  );

  let interestPeriodInMonths = 0;

  const interestPaid =
    userAccountBalance * interestRate * interestPeriodInMonths;
  const calculatedInterestPaid = isNaN(interestPaid) ? 0 : interestPaid;

  const taxWithheld = calculatedInterestPaid * taxRate;
  const calculatedTaxWithheld = isNaN(taxWithheld) ? 0 : taxWithheld;

  if (selectedPeriod === "yearly") {
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
  } else if (selectedPeriod === "monthly" && startDate && endDate) {
    interestPeriodInMonths = calculateMonthsDifference(startDate, endDate);
  } else {
    console.error("Invalid selection or missing date range");
    return { interestPaid: 0, taxWithheld: 0 };
  }

  return {
    interestPaid: calculatedInterestPaid,
    taxWithheld: calculatedTaxWithheld,
  };
};



  useEffect(() => {
    if (selectedAccount && userDetails.length > 0 && interestPeriod) {
      const values = calculateValuesForAccount(userDetails, selectedPeriod, startDate, endDate, selectedYear);


      setInterestPaid(values.interestPaid);
      setTaxWithheld(values.taxWithheld);

      setTotalInterestPaid((prevTotal) => prevTotal + values.interestPaid);
      setTotalTaxWithheld((prevTotal) => prevTotal + values.taxWithheld);
    }
  }, [
    selectedAccount,
    userDetails,
    interestPeriod,
    startDate,
    endDate,
    selectedYear,
  ]);




  const handledownload = async (event) => {
    event.preventDefault();
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    if (!userDetails || userDetails.length === 0) {
      console.error("User details not populated correctly.");
      alert("User details not populated correctly. Please try again later.");
      return;
    }

    if (!selectedAccount) {
      console.error("Please select an account number");
      alert("Please select an account number");
      return;
    }

    const isInterestPeriodSelected = selectedPeriod === "select";
    const areDatesSelected = startDate && endDate;
    const isOneMonthPeriod =
      areDatesSelected && calculateMonthsDifference(startDate, endDate) === 1;

    if (isInterestPeriodSelected && areDatesSelected && !isOneMonthPeriod) {
      console.error(
        "Please select a start and end date exactly one month apart."
      );
      alert("Please select a start and end date exactly one month apart.");
      return;
    }

    try {
      let interestPeriodValue = isInterestPeriodSelected ? selectedYear : "";

      if (isInterestPeriodSelected) {
        interestPeriodValue = selectedYear;
      }

      const values = await calculateValuesForAccount(
        userDetails,
        selectedPeriod,
        startDate,
        endDate
      );
      const { interestPaid, taxWithheld } = values;

      console.log("Interest Paid:", interestPaid);
      console.log("Tax Withheld:", taxWithheld);

      const certificateData = {
        accountHolderName:
          userDetails[0].firstname + " " + userDetails[0].lastname,
        userAccountNumber: selectedAccount,
        bankBranchName: userDetails[0].branchName,
        accountHolderAddress: userDetails[0].currentAddress,
        userAccountType: userDetails[0].openaccount,

        interestPeriod: interestPeriodValue,
        startDate:
          startDate instanceof Date ? startDate.toLocaleDateString() : "",
        endDate: endDate instanceof Date ? endDate.toLocaleDateString() : "",
        interestPaid: interestPaid,
        taxWithheld: taxWithheld,
      };
      console.log("Selected Year:", selectedYear);

      const pdf = new jsPDF();
      const centerX = pdf.internal.pageSize.getWidth() / 2;
      const centerY = pdf.internal.pageSize.getHeight() / 2;
      pdf.addImage(logo, "PNG", centerX - 40, 10, 70, 40);

      const dateText = `Date: ${new Date().toLocaleDateString()}`;
      const dateTextWidth =
        pdf.getStringUnitWidth(dateText) * pdf.internal.getFontSize();

      pdf.text(dateText, pdf.internal.pageSize.getWidth() - 20, 40, {
        align: "right",
      });

      pdf.text(20, 50, `Name: ${certificateData.accountHolderName}`);
      console.log("User Details:", userDetails);

      const address = userDetails[0].currentAddress;
      const street =
        address && address.buildingname ? address.buildingname : "Unknown";
      const city = address && address.city ? address.city : "Unknown";
      const zipCode = address && address.pincode ? address.pincode : "Unknown";

      // Print address fields
      pdf.text(20, 60, ` Address: ${street}, ${city}, ${zipCode}`);

      // pdf.text(20, 70, `Bank Branch : ${certificateData.bankBranchName}`);
      const interestCertificateText = "Interest Certificate";
      const interestCertificateTextWidth =
        pdf.getStringUnitWidth(interestCertificateText) *
        pdf.internal.getFontSize();
      const interestCertificateTextX =
        (pdf.internal.pageSize.getWidth() - interestCertificateTextWidth) / 2;

      pdf.text(interestCertificateTextX, 80, interestCertificateText);

      pdf.text(20, 90, "Dear Customer,");
      pdf.text(
        20,
        100,
        `Please find below confirmation of the Interest paid and Tax withheld/Tax 
        Deducted at Source/Interest Collected towards various 
        Deposit/Loan accounts held under for 
        the Interest Period: ${certificateData.interestPeriod} ${certificateData.startDate} - ${certificateData.endDate}`
      );
      pdf.text(20, 110, ``);
      pdf.text(
        20,
        130,
        `User Account Type: ${certificateData.userAccountType}`
      );

      const data = [
        [
          certificateData.userAccountNumber,
          interestPaid.toString(),
          taxWithheld.toString(),
        ],
        ["Total", parseInt(interestPaid) + parseInt(taxWithheld)],
      ];

      data.slice(0, -1).forEach((row, index) => {
        row.unshift(index + 1);
      });

      data[data.length - 1][0] = {
        content: "Total",
        styles: { fontStyle: "bold" },
      };

      pdf.autoTable({
        startY: 140,
        head: [
          [
            "Sr.No",
            "Account Number",
            "Interest Paid (Amt. in INR)",
            "Tax Withheld (Amt. in INR)",
          ],
        ],
        body: data,
        didDrawPage: function (data) {},
      });

      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "InterestCertificateWithDetails.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.location.reload();
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
            <h3 style={{ color: "#2fb68e" }}>
              Download Interest & TDS Certificate
            </h3>
          </div>
          <div className="interest_certificate_baground card">
            <div className="interest_certificate_heading5">
              <h5>Interest & TDS Certificate</h5>
            </div>
            <div className="interest_all_forms">
              <div className="interest_from_account row">
                <label className="col-sm-3 interest_form_label">
                  Account Number:
                </label>
                <div className="col-sm-6">
                  <div className="interest_account_select">
                    {/* <select
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
                    </select> */}
                    <select
    className="inerest_selection_form form-control"
    value={selectedAccount}
    onChange={handleAccountChange}
>
    <option value="">Select Account Number</option>
    {userDetails.map((account, index) => (
        <option key={index} value={account.accountNumber}>
            {account.accountNumber}
        </option>
    ))}
</select>
                  </div>
                </div>
              </div>

              <div className="interest_form_label_radio row">
                <label className="interest_form_radio_label col-sm-3">
                  {/* <input
                    type="radio"
                    id="interestPeriod"
                    name="interestOption"
                    value={interestPeriodRef}
                    onChange={() => setInterestPeriod("FinancialYear")}
                  />{" "} */}
                  Interest Period
                </label>
                <div className="col-sm-6">
                  <select
                    typeof="number"
                    id="number"
                    className="inerest_selection_form form-control"
                    value={selectedPeriod}
                    onChange={(event) =>
                      handleInterstPeriod(event.target.value)
                    }
                  >
                    <option value="select">Select FY</option>
                    <option value="2015-2016">2015-2016</option>
                    <option value="2016-2017">2016-2017</option>
                    <option value="2017-2018">2017-2018</option>
                  </select>
                </div>
              </div>
              <p style={{ textAlign: "center", paddingTop: "30px" }}>OR</p>

              <div className="interest_form_label_radio_period row">
                <label className="interest_form_radio_label col-sm-3">
                  {/* <input
      type="radio"
      id="interestPeriodDate"
      name="interestOption"
      value="interestPeriodDate"
      checked={interestPeriodDate === "InterestPeriodDate"}
      onChange={() => setInterestPeriodDate("InterestPeriodDate")}
    />{" "} */}
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
                  <label className="" style={{ marginRight: "20px" }}>
                    to
                  </label>
                  <input
                    type="date"
                    className="interest_period"
                    id="date"
                    placeholder="dd-mm-yyyy"
                    onChange={handleEndDate}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn_interest_button"
              onClick={handledownload}
            >
              Download PDF
            </button>
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
