import React from "react";
import Image from "next/image";
import personIcon from "../../assets/icons/person-icon.png";

export default function TransactionHistory() {
  return (
    <>
      <div className="col-1 mb-3">
        <Image
          src={personIcon}
          alt="image-transaction"
          className="border rounded-3"
          width={50}
          height={50}
          layout="fixed"
        />
      </div>
      <div className="col-11">
        <p className="p-transaction fw-bold">Samuel Suhi</p>
        <p className="p-transaction">+62 813-8492-9994</p>
      </div>
      <hr />
    </>
  );
}
