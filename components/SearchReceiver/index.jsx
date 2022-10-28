import React from "react";
import Image from "next/image";
import personIcon from "../../assets/icons/person-icon.png";
import Router from "next/router";
import Cookies from "js-cookie";

export default function TransactionHistory(props) {
  const handleDetail = () => {
    const receiverId = props.data.id;
    Router.push("transfer/" + receiverId);
    Cookies.set("receiverId", receiverId);
  };

  return (
    <>
      <div className="border mb-4 d-flex py-2 px-3 rounded shadow">
        <div className="col-1">
          <Image
            src={personIcon}
            alt="image-transaction"
            className="border rounded-3"
            width={50}
            height={50}
            layout="fixed"
          />
        </div>
        <div className="col-10 ms-2">
          <p className="p-transaction fw-bold" onClick={handleDetail}>
            {props.data.firstName} {props.data.lastName}
          </p>
          <p className="p-transaction">{props.data.noTelp}</p>
        </div>
      </div>
    </>
  );
}
