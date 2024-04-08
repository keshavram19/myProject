import React, { useState, useRef } from "react";
import "./UpdateProfilePhoto.css";
import OverviewSidebar from "../../Sidebar/OverViewSidebar";
// import avatar from './images/avatar.png'

const UpdateProfilePhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  console.log(selectedFile);

  const onFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <section className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="row">
          <div className="col-3">
            <div className="">
              <OverviewSidebar />
            </div>
          </div>
          <div className="col-9 upload_profile">
            <div className="upload_profile_headings">
              <p>Update Profile Photo </p>
            </div>
            <div className="profile_side_headings">
              <p className="update_profile_heading_pera">Upload Photo</p>
              <div className="d-flex">
                <div>
                  <img
                    // src={"./images/avatar.png" || selectedFile}
                    src={"./images/avatar.png"}
                    alt="Profile"
                    width={173}
                    height={173}
                  />
                </div>

                <div>
                  {" "}
                  <p>The Photo/file must adhere to following conditions:</p>
                  <p>File Size: 3kb - 5mb</p>

                  <p>File Format: JPG,GIF,BMP,PNG</p>

                  <button className="update_profile_button" onClick={openFileInput}>
                    Upload
                  </button>
                  {/* Hidden file input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={onFileChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfilePhoto;
