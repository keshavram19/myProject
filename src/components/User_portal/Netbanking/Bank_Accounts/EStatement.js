import "./Accounts.css";
import { useState, useRef, useEffect } from "react";
import BankaccountSidebar from "../Sidebar/BankaccountSidebar";
import { useNavigate } from "react-router-dom";
import { MdPictureAsPdf } from "react-icons/md";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { html2pdf } from "html2pdf.js";
import apiList from "../../../../lib/apiList";

const allTransactionsList = [
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "25 Jan 2024",
    narration: "Credit Card Payment",
    withdrawl: "20.00",
    deposit: "",
    balance: "1.48",
  },
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "24 Jan 2024",
    narration: "Online Shopping",
    withdrawl: "10,000.00",
    deposit: "",
    balance: "21.48",
  },
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "23 Jan 2024",
    narration: "Restaurant Bill",
    withdrawl: "",
    deposit: "10,000.00",
    balance: "10,021.48",
  },
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "21 Jan 2024",
    narration: "Travel Booking",
    withdrawl: "10,000.00",
    deposit: "",
    balance: "21.48",
  },
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "20 Jan 2024",
    narration: "Grocery Shopping",
    withdrawl: "",
    deposit: "10,000.00",
    balance: "10,021.48",
  },
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "19 Jan 2024",
    narration: "Online Subscription",
    withdrawl: "579.00",
    deposit: "",
    balance: "34.43",
  },
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "18 Jan 2024",
    narration: "Movie Tickets",
    withdrawl: "30.00",
    deposit: "",
    balance: "613.43",
  },
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "17 Jan 2024",
    narration: "Online Purchase",
    withdrawl: "45.00",
    deposit: "",
    balance: "643.43",
  },
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "16 Jan 2024",
    narration: "Clothing Shopping",
    withdrawl: "10,000.00",
    deposit: "",
    balance: "653.43",
  },
  {
    type: "credit card",
    number: "1234 5678 9012 3456",
    date: "15 Jan 2024",
    narration: "Electronics Purchase",
    withdrawl: "10,000.00",
    deposit: "",
    balance: "663.43",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "25 Jan 2024",
    narration: "Salary Deposit",
    withdrawl: "20.00",
    deposit: "",
    balance: "1.48",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "24 Jan 2024",
    narration: "Rent Payment",
    withdrawl: "10,000.00",
    deposit: "",
    balance: "21.48",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "23 Jan 2024",
    narration: "Utility Bill Payment",
    withdrawl: "",
    deposit: "10,000.00",
    balance: "10,021.48",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "21 Jan 2024",
    narration: "Loan Repayment",
    withdrawl: "10,000.00",
    deposit: "",
    balance: "21.48",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "20 Jan 2024",
    narration: "Grocery Shopping",
    withdrawl: "",
    deposit: "10,000.00",
    balance: "10,021.48",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "19 Jan 2024",
    narration: "Health Insurance Payment",
    withdrawl: "579.00",
    deposit: "",
    balance: "34.43",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "18 Jan 2024",
    narration: "Car Loan Payment",
    withdrawl: "30.00",
    deposit: "",
    balance: "613.43",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "17 Jan 2024",
    narration: "Home Repair Payment",
    withdrawl: "45.00",
    deposit: "",
    balance: "643.43",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "16 Jan 2024",
    narration: "Charity Donation",
    withdrawl: "10,000.00",
    deposit: "",
    balance: "653.43",
  },
  {
    type: "bank account",
    number: "9876543210",
    date: "15 Jan 2024",
    narration: "School Fees Payment",
    withdrawl: "10,000.00",
    deposit: "",
    balance: "663.43",
  },
];

const Estatement = () => {
  const [viewPdf, setViewPdf] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedType, setSelectedType] = useState("Bank Account");
  const [bankAccountNumber, setBankAccountNumber] = useState("9876543210");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [selectedBankAccountMonth, setSelectedBankAccountMonth] =
    useState(null);
  const [selectedCreditCardMonth, setSelectedCreditCardMonth] = useState(null);
  const [userDetails, setUserDetails] = useState([]);
  let transactionRef = useRef();
  const handleDownload = () => {
    const pdf = new jsPDF();

    pdf.setFontSize(8);
    pdf.text(`Account Number:123456789 `, 10, 10);
    pdf.text(`Account Holder Name:Moola Srinivasa Reddy `, 10, 20);
    pdf.text(`Branch Bank Name:Royal Islamic Bank `, 10, 30);
    pdf.text(`Account type :Savings`, 10, 40);
    pdf.text(`Account Holder DOB:24-08-1999 `, 10, 50);
    pdf.text(`Bank Branch IfscCode:RIBN0000201 `, 10, 60);
    pdf.text(`Account Balance:2000`, 10, 70);
    pdf.text(`Mobile Number:8106423221`, 10, 80);
    pdf.text(`Email ID:srinivasreddy@gmail.com`, 10, 90);

    const input = transactionRef.current;
    const A4_WIDTH = 210;
    const A4_HEIGHT = 297;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = A4_WIDTH;
      const imgHeight = (A4_WIDTH / canvas.width) * canvas.height; // Maintain aspect ratio
      pdf.addImage(imgData, "PNG", 2, 100, imgWidth, imgHeight); // Adjust x, y, width, and height as needed
      pdf.save("transactions.pdf");
    });
  };

  const filterTransactions = () => {
    let selectedMonth =
      selectedType === "Bank Account"
        ? selectedBankAccountMonth
        : selectedCreditCardMonth;
    if (selectedMonth === null || selectedType === null) {
      return [];
    }

    let filteredTransactions = allTransactionsList.filter((transaction) => {
      const isCorrectMonth = transaction.date.includes(selectedMonth);
      const isCorrectType = transaction.type === selectedType.toLowerCase();
      const isCorrectNumber =
        selectedType === "Credit Card"
          ? transaction.number === creditCardNumber
          : transaction.number === bankAccountNumber;
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
    setBankAccountNumber("9876543210");
    setCreditCardNumber("1234 5678 9012 3456");
  };

  const transactions = filterTransactions();

  const LastTen = () => {
    setViewPdf("view");
  };

  let navigate = useNavigate();

  const statementNavigate = () => {
    navigate("/user/account/statement");
  };

  const generateRandomTransactionId = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    return `RIB${String(randomNumber).padStart(4, "0")}`;
  };

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-3">
            <div>
              <BankaccountSidebar />
            </div>
          </div>
          <div className="col-9">
            <div className="estatement_container">
              <p className="estatement_heading">e-Statement</p>
              <div className="container-fluid estatement_accountmain">
                <div className="estatement_accounttype">
                  <div className="estatement_anumber">
                    Download e-statement for my:
                  </div>
                  <div className="estatement_select">
                    <select
                      id="sel1"
                      className="estatement_option"
                      onChange={handleTypeChange}
                      value={selectedType || ""}
                    >
                      <option value="Bank Account">Savings Account</option>
                      <option value="Credit Card">Credit Card</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* account number */}

              {selectedType === "Bank Account" && (
                <>
                  <div className="container-fluid estatement_accountmain">
                    <div className="estatement_accounttype">
                      <div className="estatement_anumber">Account number:</div>
                      <div className="estatement_select">
                        <input
                          type="text"
                          id="bank-account-number"
                          value={bankAccountNumber}
                          readOnly
                          className="estatement_bankinput"
                          style={{
                            width: "250px",
                            border: "1px solid #ced4da",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid estatement_accountmain">
                    <div className="estatement_accounttype">
                      <div className="estatement_anumber">Period:</div>
                      <div className="estatement_select">
                        <select
                          id="month-select"
                          className="estatement_periodselect1"
                          onChange={handleBankAccountMonthChange}
                          value={selectedBankAccountMonth || ""}
                        >
                          <option value="Jan 2024">January 2024</option>
                          <option value="Feb 2023">February 2023</option>
                        </select>
                      </div>
                    </div>
                    <p style={{ marginTop: "10px" }}>
                      To download Annual statements, please go to{" "}
                      <span style={{ color: "#ebca28" }}>
                        {" "}
                        Detailed statements - Select Transaction Period - Select
                        Year from dropdown
                      </span>{" "}
                      Save Trees. Please print only when necessary.
                    </p>
                  </div>
                </>
              )}
              {selectedType === "Credit Card" && (
                <>
                  <div className="container-fluid estatement_accountmain">
                    <div className="estatement_accounttype">
                      <div className="estatement_anumber">
                        Credit Card number:
                      </div>
                      <div className="estatement_select">
                        <input
                          type="text"
                          id="credit-card-number"
                          value={creditCardNumber}
                          readOnly
                          className="estatement_bankinput"
                          style={{
                            width: "250px",
                            border: "1px solid #ced4da",
                          }}
                        />
                      </div>
                    </div>{" "}
                  </div>
                  {/* period */}
                  <div className="container-fluid estatement_accountmain">
                    <div className="estatement_accounttype">
                      <div className="estatement_anumber">Period:</div>
                      <div className="estatement_select">
                        <select
                          className="estatement_periodselect1"
                          onChange={
                            selectedType === "Bank Account"
                              ? handleBankAccountMonthChange
                              : handleCreditCardMonthChange
                          }
                          value={
                            selectedType === "Bank Account"
                              ? selectedBankAccountMonth || ""
                              : selectedCreditCardMonth || ""
                          }
                        >
                          <option value="Jan 2024">January 2024</option>
                          <option value="Feb 2023">February 2023</option>
                        </select>
                      </div>
                    </div>
                    <p style={{ marginTop: "10px" }}>
                      To download Annual statements, please go to
                      <span style={{ color: "#ebca28" }}>
                        {" "}
                        Detailed statements - Select Transaction Period - Select
                        Year from dropdown{" "}
                      </span>{" "}
                      Save Trees. Please print only when necessary.
                    </p>
                  </div>
                </>
              )}

              {/* statement */}

              <div className="container-fluid estatement_buttons p-4">
                <button onClick={LastTen} className="estatement_view">
                  Last 10 Transactions
                </button>
                <button
                  onClick={statementNavigate}
                  className="estatement_detailstatement"
                >
                  Detailed Statement
                </button>
              </div>

              {viewPdf === "view" && (
                <div ref={transactionRef}>
                  <div className="paylater_transactions">
                    <div>Statement</div>
                  </div>

                  {transactions.length > 0 ? (
                    <div className="table-responsive-lg paylater_transaction_table">
                      <table className="table table-bordered ">
                        <thead className="paylater_tablehead">
                          <tr>
                            <th>Date</th>
                            <th>TransactionID</th>
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
                              <td>{generateRandomTransactionId()}</td>
                              <td>{transaction.narration}</td>
                              <td>{transaction.withdrawl}</td>
                              <td>{transaction.deposite}</td>
                              <td>{transaction.balance}</td>
                            </tr>
                          ))}
                        </tbody>{" "}
                      </table>
                    </div>
                  ) : (
                    <div className="estatement_noFound">
                      No Transactions Found
                    </div>
                  )}
                </div>
              )}
              {viewPdf === "view" && transactions.length > 0 && (
                <div className="d-flex justify-content-end">
                  <button
                    onClick={handleDownload}
                    className="estatement_download"
                  >
                    Download PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Estatement;
