import React from "react";
import Image from "next/image";
import personIcon from "../../assets/icons/person-icon.png";

export default function TransactionHistory() {
  const handleAmountColor = (amount) => {
    if (amount < 0) {
      return "fw-bold text-danger";
    } else {
      return "fw-bold text-success";
    }
  };

  return (
    <>
      <div className="col-2 mb-3">
        <Image
          src={personIcon}
          alt="image-transaction"
          className="border rounded-3"
          width={50}
          height={50}
        />
      </div>
      <div className="col-6">
        <p className="p-transaction fw-bold">Samuel Suhi</p>
        <p className="p-transaction">Accept</p>
      </div>
      <div className="col-4 text-end">
        <p className={handleAmountColor(120000)}>Rp. 120.000</p>
      </div>

      <div className="col-2 mb-3">
        <Image
          src={personIcon}
          alt="image-transaction"
          className="border rounded-3"
          width={50}
          height={50}
        />
      </div>
      <div className="col-6">
        <p className="p-transaction fw-bold">Samuel Suhi</p>
        <p className="p-transaction">Accept</p>
      </div>
      <div className="col-4 text-end">
        <p className={handleAmountColor(-120000)}>Rp. 120.000</p>
      </div>

      <div className="col-2 mb-3">
        <Image
          src={personIcon}
          alt="image-transaction"
          className="border rounded-3"
          width={50}
          height={50}
        />
      </div>
      <div className="col-6">
        <p className="p-transaction fw-bold">Samuel Suhi</p>
        <p className="p-transaction">Accept</p>
      </div>
      <div className="col-4 text-end">
        <p className={handleAmountColor(+120000)}>Rp. 120.000</p>
      </div>
    </>
  );
}
