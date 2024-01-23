import React from "react";
import "./ChangeFormat.css";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";

const ChangeFormat = () => {
  return (
    <div>
      <section className="container-fluid" style={{marginTop:"90px"}}>
        <div className="row">
        <div className="col-3">
            <div className="">
             <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 change_format">
            <div className="change_format_profile">
              <p>Date and Amount Format </p>
            </div>
            <div className="change_format_side_headings">
              <p className="heading">Date and Amount Format</p>
             
              <p className="d-flex align-items-center">
                <div className="">Date Format </div>
                <select className=" w-25">
                  <option className="" hidden>
                    select
                  </option>
                  <option className="">DD MM YYYY</option>
                  <option className="">MM DD YYYY</option>
                </select>{" "}
              </p>
              <p className="d-flex align-items-center">
                <div className="">Amount Format </div>
                <select className=" w-25">
                  <option className="" hidden>
                    select
                  </option>
                  <option className="">Lakh Format</option>
                  <option className="">Million Format</option>
                </select>{" "}
              </p>
             

              <button>Update</button>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangeFormat;
