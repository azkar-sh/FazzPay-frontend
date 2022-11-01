import React from "react";
import Layout from "layout";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { updateUserPassword } from "stores/action/user";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import SideNavbar from "components/SideNavbar";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const userId = Cookies.get("id");
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(updateUserPassword(userId, form))
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
              <p className="fw-bold mb-2">Personal Information</p>
              <p className="text-muted mb-5">
                You must enter your current password and then type your new
                password twice.
              </p>
              <div className="container">
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="Current password"
                  className="form-control w-50 border-0 border-bottom"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  className="form-control w-50 my-5 border-0 border-bottom"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Repeat new password"
                  className="form-control w-50 border-0 border-bottom"
                  onChange={handleChange}
                />
                <button
                  className="btn btn-primary background-blue mt-5 w-25"
                  onClick={handleSubmit}
                >
                  Continue
                  <ToastContainer />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
