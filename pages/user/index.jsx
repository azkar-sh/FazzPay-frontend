import React from "react";
import Layout from "layout";
import Image from "next/image";
import Cookies from "js-cookie";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import { updateUserImage, getUserDataById } from "stores/action/user";

//components
import SideNavbar from "components/SideNavbar";

export default function UserProfile() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const [newImage, setNewImage] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUserDataById(Cookies.get("id")))
        .then((res) => setUser(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleNav = (path) => {
    Router.push(path);
  };

  const handleLogout = () => {
    const logout = window.confirm("Do you want to log out?");
    if (logout) {
      Cookies.remove("token", "id", "receiverId");
      localStorage.clear();
      Router.push("login");
    } else {
    }
  };

  const handleInputImage = (e) => {
    const { files } = e.target;
    setNewImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(files[0]));
  };

  const handleUpdateImage = () => {
    const imageData = new FormData();
    imageData.append("image", newImage);
    dispatch(updateUserImage(user.id, imageData)).then(() => {
      dispatch(getUserDataById(user.id));
      location.reload();
    });
  };

  const imageUser = `${process.env.URL_CLOUDINARY}/${user.image}`;
  const imageDefault = `https://ui-avatars.com/api/?name=${user.firstName}&background=random&size=44`;

  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3 bg-white shadow">
            <SideNavbar />
          </div>

          <div className="col-8 border rounded-3 px-3 py-3 ms-3 text-center bg-white shadow">
            <div className="d-flex flex-column">
              <div>
                {user.image === null ? (
                  <>
                    <Image
                      loader={() => imageDefault}
                      src={imageDefault}
                      alt="image-user"
                      width={75}
                      height={75}
                      className="rounded-3"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      loader={() => imageUser}
                      src={imageUser}
                      alt="image-user"
                      width={75}
                      height={75}
                      className="rounded-3"
                    />
                  </>
                )}
              </div>
              <div className="my-3">
                <button
                  type="button"
                  className="btn btn-white  w-25"
                  data-bs-toggle="modal"
                  data-bs-target="#editImageModal"
                >
                  &#x270E; Edit
                </button>

                <div
                  className="modal fade"
                  id="editImageModal"
                  tabindex="-1"
                  aria-labelledby="editImageModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="editImageModalLabel"
                        >
                          Choose Image
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex flex-column align-items-center">
                          <div className="my-3">
                            <input
                              type="file"
                              className="form-control"
                              onChange={handleInputImage}
                              name="image"
                              id="image"
                            />
                            <div
                              className="mt-3 mx-auto rounded"
                              style={{ width: "150px", height: "150px" }}
                            >
                              {imagePreview ? (
                                <Image
                                  src={imagePreview}
                                  alt="image-preview"
                                  layout="responsive"
                                  width={100}
                                  height={100}
                                  className="rounded"
                                />
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary background-blue w-25"
                          onClick={handleUpdateImage}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5>
                {user.firstName} {user.lastName}
              </h5>
              <small className="mb-5">
                {user.noTelp ? user.noTelp : "Phone number not updated"}
              </small>
              <button
                className="btn btn-secondary mb-3 py-2"
                onClick={() => handleNav("detail-user")}
              >
                Personal Information
              </button>
              <button
                className="btn btn-secondary mb-3 py-2"
                onClick={() => handleNav("change-password")}
              >
                Change Password
              </button>
              <button
                className="btn btn-secondary mb-3 py-2"
                onClick={() => handleNav("update-pin")}
              >
                Change PIN
              </button>
              <button
                className="btn btn-outline-danger mb-3 py-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
