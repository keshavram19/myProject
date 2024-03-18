import React, { useState, useEffect } from "react";
import "./adminhome.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../admin_sidebar/AdminSidebar";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function AdminChequeBookRequest() {
  const [accountDetails, setAccountDetails] = useState([]);
  const [error, setError] = useState(null);
  const [searchAccountNo, setSearchAccountNo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [filteredAccounts, setFilteredAccounts] = useState([]); 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("http://localhost:4444/api/userDetails");
        if (response.status === 200) {
          setAccountDetails(response.data.accountDetails);
          setFilteredAccounts(response.data.accountDetails); // Initialize filteredAccounts with all accounts
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
    // Filter accountDetails based on either account number or service request number
    const filteredByAccountNumber = accountDetails.filter(
      (account) => account.userAccountNumber === parseInt(searchAccountNo)
    );
  
    const filteredByServiceRequestNumber = accountDetails.filter((account) =>
      account.userChequeBookRequest.some(
        (request) => request.srn === parseInt(searchAccountNo)
      )
    );
  
    const mergedFilteredAccounts = [
      ...filteredByAccountNumber,
      ...filteredByServiceRequestNumber,
    ];
  
    const uniqueFilteredAccounts = mergedFilteredAccounts.filter(
      (account, index, self) =>
        index ===
        self.findIndex(
          (t) => t.userAccountNumber === account.userAccountNumber
        )
    );
  
    setFilteredAccounts(uniqueFilteredAccounts); // Update filteredAccounts instead of accountDetails
    setCurrentPage(1); // Reset pagination to first page
  };
  
  

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAccounts.slice(indexOfFirstItem, indexOfLastItem); // Use filteredAccounts instead of accountDetails

  const handleViewClick = (account) => {
    setSelectedAccount(account);
    handleOpen();
  };

  const handleSubmit = async () => {
    try {
      const updatedAccount = {
        ...selectedAccount,
        userChequeBookRequest: [
          {
            ...selectedAccount.userChequeBookRequest[0],
            requestStatus: selectedStatus
          }
        ]
      };
      
      const updatedAccounts = filteredAccounts.map(account => {
        if (account.userAccountNumber === selectedAccount.userAccountNumber) {
          return updatedAccount;
        }
        return account;
      });
  
      setFilteredAccounts(updatedAccounts);
      
      const response = await axios.put(
        `http://localhost:4444/api/updateChequeBookRequest/${selectedAccount.userAccountNumber}/${selectedAccount.userChequeBookRequest[0]?.srn}`,
        { requestStatus: selectedStatus }
      );
      
      console.log("Cheque book request updated:", response.data);
      // Close the dialog after successful update
      handleClose();
    } catch (error) {
      console.error("Error updating cheque book request:", error);
      // Handle error scenario
    }
  };
  
  return (
    <>
      <div>
        <section className="container-fluid">
          <div className="row">
            <div className="col-3">
              <AdminSidebar />
            </div>
            <div className="col-9 chequebook_admin_home" style={{ marginTop: "30px" }}>
              <div className="viewSummary">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="">Cheque Book Request</h1>
                  </div>
                </div>
              </div>
              <div className="services">
                <p className=" chequebook_admin_home_heading">All Customers</p>
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
                  <table className=" table table-bordered admin_Chequebook_table_head w-100">
                    <thead>
                      <tr className="admin_chequebook_table_headings">
                        <th>SR No.</th>
                        <th>Account No.</th>
                        <th>Account Holder Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>Account Holder Address</th>
                        <th>Service ReqNo.</th>
                        <th>status</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {currentItems.map((account, index) => (
                        <tr key={index} className="admin_chequebook_content">
                          <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                          <td>{account.userAccountNumber}</td>
                          <td>{account.accountHolderName}</td>
                          <td>{account.userEmailId}</td>
                          <td>{account.userMobileNumber}</td>
                          <td>{`${account.accountHolderAddress?.village}, ${account.accountHolderAddress?.city}, ${account.accountHolderAddress?.state}, ${account.accountHolderAddress?.pincode}`}</td>
                          {account.userChequeBookRequest.map((chequeBook, index) => (
                            <td key={index}>{chequeBook.srn}</td>
                          ))}
                          {account.userChequeBookRequest.map((chequeBook, index) => (
                            <td key={index}>{chequeBook.requestStatus}</td>
                          ))}
                          <td>
                            <Button
                              onClick={() => handleViewClick(account)}
                              style={{ textTransform: "capitalize", backgroundColor: "#ceece3", color: "#2fb68e" }}
                            >
                              View
                            </Button>
                          </td>
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
                      {Array.from({ length: Math.ceil(filteredAccounts.length / itemsPerPage) }, (_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                          <button onClick={() => paginate(i + 1)} className="page-link">
                            {i + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === Math.ceil(filteredAccounts.length / itemsPerPage) ? "disabled" : ""}`}>
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="admin_chequebook_status">
          ChequeBook Status Approval
        </DialogTitle>
        <DialogContent>
          {selectedAccount && (
            <form>
              <Grid container spacing={2} className="mt-4">
                <Grid item xs={6}>
                  <TextField
                    name="Account Number"
                    label="Account Number"
                    required
                    fullWidth
                    className="text_field"
                    value={selectedAccount.userAccountNumber}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="Account Holder Name"
                    label="Account Holder Name"
                    required
                    fullWidth
                    className="text_field"
                    value={selectedAccount.accountHolderName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="Service Request No."
                    label="Service Request No."
                    required
                    fullWidth
                    className="text_field"
                    value={selectedAccount.userChequeBookRequest[0]?.srn}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="chequebookstatus_Approval">Status</InputLabel>
                    <Select
                      labelId="chequebookstatus_Approval"
                      id="demo-simple-select"
                      label="Status"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <MenuItem value="Approved">Approved</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Rejected">Rejected</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          )}
        </DialogContent>
        <DialogActions style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button color="primary" type="button"  onClick={handleSubmit} >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AdminChequeBookRequest;
