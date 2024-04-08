import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
//  import 'jspdf-autotable';
import "./FundTransfer.css";
import PaymentSidebar from "../Sidebar/PaymentsAndTransferSidebar";
import apiList from "../../../../lib/apiList";
import Userdetails from "../UserDetails/UserDetails";
import { TbH3 } from "react-icons/tb";

const ScheduledTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const transactionsRef = useRef(null);
  // const accountNumber = 1124563456;
  const [userDetails, setUserDetails] = useState([]); // Define userDetails state
  // const [accountNumber, setAccountNumber] = useState([]);

  //

  const handleSearch = async () => {
    if (transactionType === "") {
      setErrorMessage("Please select a transaction type and click Search.");
      setTransactions([]); // Clear transactions if there's an error
      return;
    }

    try {
      const token = sessionStorage.getItem("loginToken");

      let apiUrl = "";
      if (transactionType === "payment") {
        apiUrl = apiList.paymentTransaction;
      } else if (transactionType === "transfer") {
        apiUrl = apiList.transferTransaction;
      }

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTransactions(response.data);
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      console.error("Error retrieving transactions:", error.message);
      setErrorMessage("Error retrieving transactions");
    }
  };
  console.log(transactions);

  const handleDownloadPDF = () => {
    // if (!userDetails) {
    if (!userDetails || transactions.length === 0) {
      return; // Exit early if userDetails is not defined or populated
    }
    console.log(userDetails);

    const downloadOption = document.getElementById("trandownloadOption").value;
    if (downloadOption !== "pdf") {
      // If option is not "PDF", do nothing

      return;
    }
    const pdf = new jsPDF();

    pdf.setFontSize(12);

    pdf.text(`Account Number: ${userDetails[0].accountNumber}`, 10, 10);

    pdf.text(`Email: ${userDetails[0].email}`, 10, 20);
    pdf.text(`Mobile Number: ${userDetails[0].mobilenumber}`, 10, 30);
    pdf.text(`First Name: ${userDetails[0].firstname}`, 10, 40);
    pdf.text(`Last Name: ${userDetails[0].lastname}`, 10, 50);
    pdf.text(`IFSC Code: ${userDetails[0].ifscCode}`, 10, 60);

    const input = transactionsRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 2, 100); // Adjust width and height as needed
      pdf.save("transactions_and_user_details.pdf");
    });
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = sessionStorage.getItem("loginToken");
        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(
          apiList.requestedUserDetailsByEmail,
          requestOptions
        );
        if (response.ok) {
          const data = await response.json();
          setUserDetails([data.user]);
          // setLastVisited(new Date());
        } else {
          console.error("Error fetching user details:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-3">
            <PaymentSidebar />
          </div>
          <div className="col-9">
            <div className="My_sch_transaction">
              <div className="sub_heading_myschedule_Trans"></div>

              {/* <hr/> */}

              <h3 className="main_my_scheduled_tran">Scheduled Transactions</h3>

              <div className="my_main_header_transch">
                <div className="search_section_mainheader_mytran">
                  <h4>Search Transactions</h4>
                </div>
                <div className="myalabel_trans_type_sch">
                  <label
                    className="mya_sch_transaction_Type"
                    htmlFor="transactionType"
                  >
                    Transaction Type:
                  </label>

                  <select
                    className="my_Tatransaction_Type"
                    id="transactionType"
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                  >
                    <option value="">SELECT</option>
                    <option value="payment">Payment</option>
                    <option value="transfer">Transfer</option>
                  </select>
                </div>
                <hr />

                <button
                  className="mya_sch_searchbtn"
                  type="submit"
                  onClick={handleSearch}
                >
                  Search
                </button>

                <hr />
              </div>
              {errorMessage && <p>{errorMessage}</p>}

              {/* Table data starts here */}
              <div className="Transaction_type_table_mail">
                <div ref={transactionsRef}>
                  {transactions.length > 0 && (
                    <table
                      style={{ width: "86%" }}
                      class="table table-striped table-hover  "
                    >
                      {/* width for table */}

                      {/* width for table */}

                      <thead>
                        <tr className="Transaction_type_Table_row">
                          <th>Receiver Name</th>
                          <th>Account Number</th>
                          <th>Phone Number</th>
                          <th>Payment Transfer Time</th>
                          <th>Transfer Date</th>
                          <th>IFSC Code</th>
                          <th>Amount</th>
                          <th>Generated Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((transaction) => (
                          <tr
                            className="Transaction_type_row_data"
                            key={transaction._id}
                          >
                            {/* <td>{transaction.senderName}</td> */}
                            <td>{transaction.receiverName}</td>
                            <td>{transaction.accountNumber}</td>
                            <td>{transaction.phoneNumber}</td>
                            <td>{transaction.paymentTransferTime}</td>
                            <td>{transaction.transferDate}</td>
                            <td>{transaction.ifscCode}</td>
                            {/* <td>{transaction.transactionType}</td> */}
                            <td>{transaction.amount}</td>
                            <td>{transaction.generatedDate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div className="mya_Trasch_download_detail">
                <label
                  className="my_sch_tra_label_downl"
                  htmlFor="downloadOption"
                >
                  Download Details As:
                </label>
                <select className="my_tran_sel_downl" id="trandownloadOption">
                  <option value="">Select</option>
                  <option value="pdf">PDF file</option>
                  {/* <option value="csv">CSV file</option> */}
                </select>

                <button
                  type="submit"
                  className="My_transac_download_ok_button"
                  onClick={handleDownloadPDF}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduledTransaction;
