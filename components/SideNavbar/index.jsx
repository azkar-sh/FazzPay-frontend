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

export default function SideNavbar() {
  const router = useRouter();
  const handleNav = (path) => {
    router.push(path);
  };

  const dispatch = useDispatch();

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
            <button className="btn w-100 text-start">Top Up</button>
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
