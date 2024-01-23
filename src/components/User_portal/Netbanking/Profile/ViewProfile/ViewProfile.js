import React from "react";
import './viewprofile.css'
import OverviewSidebar from "../../Sidebar/OverViewSidebar";

const ViewProfile = () => {
  return (
    <div>
      <section className="container-fluid" style={{marginTop:"90px"}}>
        <div className="row">
        <div className="col-3">
            <div className="">
             <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 View-profile">
            <div className="mt-1">
              <h6>K Deepak Kumar</h6>
              <div>
                <div className="row my-1">
                  <div className="col-3">
                    <span>First Name</span>
                  </div>
                  <div className="col-9">
                    <span>Kavati</span>
                  </div>
                </div>
                <div className="row  my-1">
                  <div className="col-3">
                    <span>Last Name</span>
                  </div>
                  <div className="col-9">
                    <span> Deepak Kumar</span>
                  </div>
                </div>{" "}
                <div className="row  my-1">
                  <div className="col-3">
                    <span>Address</span>
                  </div>
                  <div className="col-9">
                    <span>
                      3rd Floor, Greennest Apartments, Poranki, Vijayawada
                    </span>
                  </div>
                </div>{" "}
                <div className="row  my-1">
                  <div className="col-3">
                    <span>State</span>
                  </div>
                  <div className="col-9">
                    <span>Andhra Pradesh</span>
                  </div>
                </div>{" "}
                <div className="row  my-1">
                  <div className="col-3">
                    <span>ZIP</span>
                  </div>
                  <div className="col-9">
                    <span>521137</span>
                  </div>
                </div>{" "}
                <div className="row  my-1">
                  <div className="col-3">
                    <span>Country</span>
                  </div>
                  <div className="col-9">
                    <span>India</span>
                  </div>
                </div>
                <div className="row  my-1">
                  <div className="col-3">
                    <span>Phone </span>
                  </div>
                  <div className="col-9">
                    <span>+918978842621</span>
                  </div>
                </div>
                <div className="row  my-1">
                  <div className="col-3">
                    <span>E-Mail</span>
                  </div>
                  <div className="col-9">
                    <span>kdeepak42621@gmail.com</span>
                  </div>
                </div>
                <div className="row  my-1">
                  <div className="col-3">
                    <span>Nominee</span>
                  </div>
                  <div className="col-9">
                    <span>K Sunil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewProfile;
