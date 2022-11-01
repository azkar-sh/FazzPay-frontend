import React from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";

//Images
import gridIcon from "../../assets/icons/grid-icon.png";
import arrowUp from "../../assets/icons/arrow-up.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import userIcon from "../../assets/icons/user-icon.png";
import logoutIcon from "../../assets/icons/logout-icon.png";
import { useDispatch } from "react-redux";
import { logout } from "stores/action/auth";
import { topUp } from "stores/action/history";
import { useState } from "react";

export default function SideNavbar() {
  const [form, setForm] = useState({});
  const router = useRouter();
  const handleNav = (path) => {
    router.push(path);
  };

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(topUp(form))
      .then((res) => Router.push(`${res.value.data.data.redirectUrl}`))
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    const logoutConfirm = window.confirm("Do you want to log out?");
    if (logoutConfirm) {
      dispatch(logout()).then(() => {
        Cookies.remove("token", "id", "receiverId");
        localStorage.clear();
        Router.push("login");
      });
    } else {
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column" style={{ height: "60vh" }}>
          <div className="d-flex align-items-center my-3 text-left">
            <Image src={gridIcon} alt="grid-icon" />
            <button
              className="btn w-100 text-start"
              onClick={() => handleNav("/home")}
            >
              Dashboard
            </button>
          </div>

          <div className="d-flex align-items-center">
            <Image src={arrowUp} alt="grid-icon" />
            <button
              className="btn w-100 text-start"
              onClick={() => handleNav("/transfer")}
            >
              Transfer
            </button>
          </div>

          <div className="d-flex align-items-center my-3">
            <Image src={plusIcon} alt="grid-icon" />
            <button
              className="btn w-100 text-start"
              data-bs-toggle="modal"
              data-bs-target="#TopUpModal"
            >
              Top Up
            </button>
          </div>

          <div className="">
            <div
              className="modal fade"
              id="TopUpModal"
              tabindex="-1"
              aria-labelledby="TopUpModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-dark"
                      id="TopUpModalLabel"
                    >
                      Top Up
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-dark">
                    Enter the amount of money, and click submit
                    <div className="my-3">
                      <input
                        type="text"
                        className="form-control"
                        name="amount"
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <Image src={userIcon} alt="grid-icon" />
            <button
              className="btn w-100 text-start"
              onClick={() => handleNav("/user")}
            >
              Profile
            </button>
          </div>
        </div>

        <div className="d-flex flex-column my-auto">
          <div className="d-flex align-items-center">
            <Image src={logoutIcon} alt="grid-icon" />
            <button
              className="btn w-100 text-start text-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
