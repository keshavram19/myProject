import React, { useState, useEffect } from "react";
import './viewprofile.css'
import OverviewSidebar from "../../Sidebar/OverViewSidebar";
import apiList from "../../../../../lib/apiList";
import { Link } from "react-router-dom";




const ViewProfile = () => {
  const [userDetails, setUserDetails] = useState(null);



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
          setUserDetails(data.user);
        } else {
          console.error('Error fetching user details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);




  return (
    <div>
      {userDetails && (
        <div className="container-fluid" style={{ marginTop: '90px' }}>
          <div className="d-flex">
            <div className="col-3">
              <div className="">
                <OverviewSidebar />
              </div>
            </div>
            <div className="col-sm-9 personal_details_card">
              <div className="card mt-2">
                <div className="contact_details_heading pt-2">
                  <h5 className="col-sm-3">Contact Details</h5>
                </div>
                <div className="d-flex pt-3">
                  <div className="col-sm-3">Customer ID</div>
                  <div className="col-sm-6">{userDetails.customerID}</div>
                </div>
                <hr />
                <div className="d-flex">
                  <div className="col-sm-3">Customer Name</div>
                  <div className="col-sm-6">{userDetails.firstname} {userDetails.lastname}</div>
                </div>
                <hr />
                <div className="d-flex">
                  <div className="col-sm-3">Address</div>
                  <div className="col-sm-6">{userDetails.currentAddress.flatnumber}, {userDetails.currentAddress.buildingname}</div>
                </div>
                <hr />
                <div className="d-flex">
                  <div className="col-sm-3">City</div>
                  <div className="col-sm-6">{userDetails.currentAddress.city}</div>
                </div>
                <hr />
                <div className="d-flex">
                  <div className="col-sm-3">State</div>
                  <div className="col-sm-6">{userDetails.currentAddress.state}</div>
                </div>
                <hr />
                <div className="d-flex">
                  <div className="col-sm-3">Zip</div>
                  <div className="col-sm-6">{userDetails.currentAddress.pincode}</div>
                </div>
                <hr />
                <div className="d-flex">
                  <div className="col-sm-3">Country</div>
                  <div className="col-sm-6">{userDetails.currentAddress.country}</div>
                </div>
                <hr />
                <div className="d-flex">
                  <div className="col-sm-3">Date of Birth</div>
                  <div className="col-sm-6">{userDetails.dateofbirth}</div>
                </div>
                <hr />
                <div className="d-flex pb-2">
                  <div className="col-sm-3">PAN Card No</div>
                  <div className="col-sm-6">{userDetails.pannumber}</div>
                  {/* <div><Link to={"/user/account/view-update-pancard"}>Edit PAN Number</Link></div> */}
                </div>
              </div>
              <div className="card mt-3 pt-3">
                <div className="d-flex">
                  <div className="col-sm-3">Email ID</div>
                  <div className="col-sm-6">{userDetails.email}</div>
                  <div><Link to={"/user/profile/changeemail"}>Download Email ID update form</Link></div>
                </div>
                <hr />
                <div className="d-flex pb-2">
                  <div className="col-sm-3">Mobile No</div>
                  <div className="col-sm-6">{userDetails.mobilenumber}</div>
                </div>
              </div>
              <div className="d-flex mt-2">
                <div className="col-sm-9"></div>
                <div><Link to={"/user/accountsummary/viewsummary"}>Return to Account summary</Link></div>
              </div>
              <h6 className="mt-4">The above Address is applicable only to the following accounts</h6>
              <table className="custom-table col-sm-12">
                <tr className="table_heading">
                  <td>Account No</td>
                  <td>Account Type</td>
                  <td>Relationship</td>
                </tr>
                <tr>
                  <td>{userDetails.accountNumber}</td>
                  <td>{userDetails.openaccount}</td>
                  <td>Sole Owner</td>
                </tr>
              </table>
              <div className="contact_details_notes mt-3 mb-4">
                <h6>Notes</h6>
                <ul>
                  <li>To Update PAN CARD details of non-individual (Partnerships,Companies,HUF etc.)
                    Please visit your nearest Royal Islamic branch to submit the same</li>
                  <li>In case you have any concern on yor contact details being used for sales calls,
                    you can register for Do Not Call facility offered by Royal Islamic Bank <Link to={"/"}>Click here</Link> to register contact No's under Do not call facility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProfile;
