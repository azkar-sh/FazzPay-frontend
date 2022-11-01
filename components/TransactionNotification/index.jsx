import React from "react";
import Image from "next/image";
import currency from "utils/currency";
import upIcon from "../../assets/icons/up-icon.png";
import downIcon from "../../assets/icons/down-icon.png";

export default function TransactionNotification(props) {
  const handleAmountColor = () => {
    if (props.data.type !== "accept" && props.data.type !== "topup") {
      return "fw-bold text-danger";
    } else {
      return "fw-bold color-blue";
    }
  };

  return (
    <>
      <div className="d-flex py-2 px-3 rounded mb-4 border shadow">
        <div className="col-2">
          {props.data.type !== "accept" && props.data.type !== "topup" ? (
            <>
              <Image src={upIcon} alt="image-user" width={50} height={50} />
            </>
          ) : (
            <>
              <Image src={downIcon} alt="image-user" width={50} height={50} />
            </>
          )}
        </div>
        <div className="col-8 ms-2 me-5">
          {props.data.type === "accept" || props.data.type === "topup" ? (
            <>{props.data.type}</>
          ) : (
            <>
              {props.data.type} to {props.data.firstName} {props.data.lastName}
            </>
          )}
          <p className={handleAmountColor(props.data.amount)}>
            {currency.format(props.data.amount)}
          </p>
        </div>
      </div>
    </>
  );
}
