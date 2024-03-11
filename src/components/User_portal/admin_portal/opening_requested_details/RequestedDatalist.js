import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./opening_requested.css";
import axios from "axios";
import apiList from "../../../../lib/apiList";
const RequestedDatalist = () => {
  const [requestedDatalist, setRequestedDataList] = useState([]);
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    pannumber: "",
    mobilenumber: "",
    email: "",
  });

  //   const applyFilters = () => {
  //     let filteredData = requestedDatalist.filter((customer) => {
  //       return (
  //         customer.pannumber.includes(filters.pannumber) &&
  //         customer.mobilenumber.includes(filters.mobilenumber) &&
  //         customer.email.includes(filters.email)
  //       );
  //     });
  //     return filteredData;
  //   };

  const applyFilters = () => {
    let filteredData = requestedDatalist.filter((customer) => {
      // Check if accountNumber exists and return false if it does
      if (!customer.mobilenumber || customer.accountNumber) {
        return false;
      }
      // Check other filters
      return (
        customer.pannumber.includes(filters.pannumber) &&
        customer.mobilenumber.includes(filters.mobilenumber) &&
        customer.email.includes(filters.email)
      );
    });
    return filteredData;
  };

  const navigateIndividual = (requestedemail) => {
    navigate("/confirm-details", { state: requestedemail });
  };

  const getRequestedDetailslist = async (req, res) => {
    try {
      const response = await axios.get(apiList.getuserrequesteddetails);
      const filteredData = response.data.filter(
        (customer) => !customer.accountNumber || !customer.mobilenumber
      );
      setRequestedDataList(filteredData);
      console.log(filteredData);
    } catch (err) {
      console.log("Error in getting requested details list", err);
    }
  };

  const handleNavigateAllcustomers = () => {
    navigate("/all-data");
  };

  useEffect(() => {
    getRequestedDetailslist();
  }, []);
  return (
    <div>
      <section className="container-fluid"       style={{marginTop:"90px"}}>
        <div className="row">
          {/* <div style={{ height: "1px", border: "1px solid #cdcdcd" }}></div> */}

          <div className="col-12 accounts_requested_data_list">
            <div className="services">
              <p className=" requested_data_list_heading">
                Account opening requested list
              </p>
              <div className="d-flex my-4">
                {/* <input
                                    placeholder='Enter Account no '
                                    className='form-control mr-2 w-50'
                                    value={filters.pannumber}
                                    onChange={(e) => setFilters({ ...filters, pannumber: e.target.value })}
                                /> */}
                <input
                  placeholder="Enter Mobile no"
                  className="form-control ml-2 w-25"
                  value={filters.mobilenumber}
                  onChange={(e) =>
                    setFilters({ ...filters, mobilenumber: e.target.value })
                  }
                />
                <input
                  placeholder="Enter E-mail"
                  className="form-control ml-2 mr-4 w-25"
                  value={filters.email}
                  onChange={(e) =>
                    setFilters({ ...filters, email: e.target.value })
                  }
                />
                <button
                  className="requested_data_list_Add_customer mr-4"
                  onClick={applyFilters}
                >
                  Search
                </button>
                <button
                  className="requested_data_list_Add_customer "
                  onClick={handleNavigateAllcustomers}
                >
                  All Customers
                </button>
              </div>
              <div>
                <table className="requested_data_list_table_head">
                  <tbody>
                    <tr className="requested_data_list_table_headings">
                      <th>SR No.</th>
                      <th>Account Type</th>
                      <th>Requested User</th>
                      <th>E-mail</th>
                      <th>Phone number</th>
                      <th>View</th>
                    </tr>
                    {applyFilters().map((customer, index) => (
                      <tr
                        key={index}
                        className="requested_data_list_table_content"
                      >
                        <td>{index + 1}</td>
                        <td>{customer.openaccount}</td>
                        <td>{`${customer.firstname} ${customer.lastname}`}</td>
                        <td>{customer.email}</td>
                        <td>{customer.mobilenumber}</td>
                        <td onClick={() => navigateIndividual(customer.email)}>
                          View
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestedDatalist;


