import React from "react";
import Layout from "layout";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getUserDataById, updatePhone } from "stores/action/user";
import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import SideNavbar from "components/SideNavbar";

export default function DetailUser() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const userId = Cookies.get("id");

  const [form, setForm] = useState({
    noTelp: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUserDataById(userId))
        .then((res) => setUser(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(updatePhone(userId, form))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) =>
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };
  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3 bg-white shadow">
            <SideNavbar />
          </div>

          <div className="col-8 border rounded-3 px-3 py-3 ms-3 bg-white shadow">
            <div className="d-flex flex-column">
              <p className="fw-bold mb-2 h4">Personal Information</p>
              <p className="text-muted mb-5">
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
              <div className="border rounded-3 d-flex flex-column mb-3 px-3 py-2 shadow">
                <p className="mb-2">First Name</p>
                <p className="p-transaction fw-bold">{user.firstName}</p>
              </div>
              <div className="border rounded-3 d-flex flex-column mb-3 px-3 py-2 shadow">
                <p className=" mb-2">Last Name</p>
                <p className="p-transaction  fw-bold">{user.lastName}</p>
              </div>
              <div className="border rounded-3 d-flex flex-column mb-3 px-3 py-2 shadow">
                <p className="mb-2">Verified Email</p>
                <p className="p-transaction  fw-bold">{user.email}</p>
              </div>
              <div className="border rounded-3 d-flex flex-column mb-3 px-3 py-2 shadow">
                <div className="d-flex justify-content-between">
                  <div className="">
                    <p className="mb-2">Phone Number</p>
                    <p className="p-transaction fw-bold">
                      {user.noTelp ? user.noTelp : "Not updated"}
                    </p>
                  </div>
                  <button
                    className="btn color-blue"
                    data-bs-toggle="modal"
                    data-bs-target="#managePhoneModal"
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="managePhoneModal"
            tabindex="-1"
            aria-labelledby="managePhoneModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5 text-dark"
                    id="managePhoneModalLabel"
                  >
                    Update Phone Number
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-dark">
                  New Phone Number
                  <div className="my-3">
                    <input
                      type="text"
                      className="form-control"
                      name="noTelp"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary background-blue w-25"
                    onClick={handleSubmit}
                  >
                    Submit
                    <ToastContainer />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
