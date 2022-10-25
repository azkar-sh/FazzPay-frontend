import React from "react";
import Image from "next/image";
import gridIcon from "../../assets/icons/grid-icon.png";
import arrowUp from "../../assets/icons/arrow-up.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import userIcon from "../../assets/icons/user-icon.png";

export default function SideNavbar() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column" style={{ height: "55vh" }}>
          <div className="d-flex align-items-center my-3">
            <Image src={gridIcon} alt="grid-icon" />
            <button className="btn">Dashboard</button>
          </div>

          <div className="d-flex align-items-center">
            <Image src={arrowUp} alt="grid-icon" />
            <button className="btn">Transfer</button>
          </div>

          <div className="d-flex align-items-center my-3">
            <Image src={plusIcon} alt="grid-icon" />
            <button className="btn">Top Up</button>
          </div>

          <div className="d-flex align-items-center">
            <Image src={userIcon} alt="grid-icon" />
            <button className="btn">Profile</button>
          </div>
        </div>
        <div className="d-flex align-items-center my-3 mt-auto">
          <Image src={gridIcon} alt="grid-icon" />
          <button className="btn">Logout</button>
        </div>
      </div>
    </>
  );
}
