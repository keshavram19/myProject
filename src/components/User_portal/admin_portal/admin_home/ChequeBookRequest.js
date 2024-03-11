import React, { useState, useEffect } from "react";
import "./adminhome.css";
import axios from "axios";

function AdminChequeBookRequest() {
  const [accountDetails, setAccountDetails] = useState([]);
  const [error, setError] = useState(null);
  const [searchAccountNo, setSearchAccountNo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4444/api/userDetails`);
        if (response.status === 200) {
          setAccountDetails(response.data.accountDetails);
          setError(null);
        } else {
          setError("Failed to fetch user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Error fetching user details");
      }
    };

    fetchUserDetails();
  }, []);
  const handleSearch = () => {
    // Filter accountDetails based on the searchAccountNo
    const filteredAccounts = accountDetails.filter(
      (account) => account.userAccountNumber === parseInt(searchAccountNo)
    );
    setAccountDetails(filteredAccounts);
  };

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = accountDetails.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div>
        <section className="container-fluid" style={{ marginTop: "90px" }}>
          <div className="row">
            <div className="col-12 accounts_admin_home">
              <div className="viewSummary">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="">Cheque Book Request</h1>
                  </div>
                </div>
              </div>
              <div className="services">
                <p className=" admin_home_heading">All Customers</p>
                <div className="d-flex my-4">
                  <input
                    placeholder="Enter Account no"
                    className="form-control mr-2 w-25"
                    value={searchAccountNo}
                    onChange={(e) => setSearchAccountNo(e.target.value)}
                  />
                  <button
                    className="admin_chequebook_searchbtn"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
                <div>
                  {error && <p>{error}</p>}
                  <table className="table table-bordered admin_home_table_head ">
                    <thead>
                      <tr className="admin_home_table_headings text-center">
                        <th>SR No.</th>
                        <th>Account No.</th>
                        <th>Account Holder Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>PAN No.</th>
                        <th>Account Holder Address</th>
                       
                        <th>Service ReqNo.</th>
                        
                        
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {currentItems.map((account, index) => (
                        <tr key={index} className="admin_chequebook_content">
                          <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                          <td>{account.userAccountNumber}</td>
                          <td>{account.accountHolderName}</td>
                          <td>{account.userEmailId}</td>
                          <td>{account.userMobileNumber}</td>
                          <td>{account.accountHolderPAN}</td>
                          <td>{`${account.accountHolderAddress?.village}, ${account.accountHolderAddress?.city}, ${account.accountHolderAddress?.state}, ${account.accountHolderAddress?.pincode}`}</td>

                          {account.userChequeBookRequest.map((chequeBook, index) => (
                            <td key={index}>{chequeBook.srn}</td>
                          ))}
                          
                          
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="pagination-container admin_chequeBook_pagination">
                  {/* Pagination */}
                  <nav>
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button onClick={() => paginate(currentPage - 1)} className="page-link">
                          {"<"}
                        </button>
                      </li>
                      {Array.from({ length: Math.ceil(accountDetails.length / itemsPerPage) }, (_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                          <button onClick={() => paginate(i + 1)} className="page-link">
                            {i + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === Math.ceil(accountDetails.length / itemsPerPage) ? "disabled" : ""}`}>
                        <button onClick={() => paginate(currentPage + 1)} className="page-link">
                          {">"}
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AdminChequeBookRequest;
