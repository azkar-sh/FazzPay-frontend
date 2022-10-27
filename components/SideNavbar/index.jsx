import React from "react";
import Image from "next/image";
import Router from "next/router";

//Images
import gridIcon from "../../assets/icons/grid-icon.png";
import arrowUp from "../../assets/icons/arrow-up.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import userIcon from "../../assets/icons/user-icon.png";

export default function SideNavbar() {
  const handleNav = (path) => {
    Router.push(path);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column">
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

        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <Image src={gridIcon} alt="grid-icon" />
            <button className="btn w-100 text-start">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
}
