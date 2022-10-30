import React from "react";
import Image from "next/image";
import currency from "utils/currency";

export default function TransactionHistory(props) {
  const handleAmountColor = () => {
    if (props.data.type !== "accept" && props.data.type !== "topup") {
      return "fw-bold text-danger";
    } else {
      return "fw-bold color-blue";
    }
  };

  const imageUser = `${process.env.URL_CLOUDINARY}/${props.data.image}`;
  const imageDefault = `https://ui-avatars.com/api/?name=${props.data.firstName}&background=random&size=44`;

  return (
    <>
      <div className="d-flex py-2 px-3 rounded mb-4 border shadow">
        <div className="col-2">
          {props.data.image === null ? (
            <>
              <Image
                loader={() => imageDefault}
                src={imageDefault}
                alt="image-user"
                width={50}
                height={50}
                className="rounded-3"
              />
            </>
          ) : (
            <>
              <Image
                loader={() => imageUser}
                src={imageUser}
                alt="image-user"
                width={50}
                height={50}
                className="rounded-3"
              />
            </>
          )}
        </div>
        <div className="col-6 ms-2">
          <p className="p-transaction fw-bold ">
            {props.data.firstName} {props.data.lastName}
          </p>
          <p className="p-transaction">
            {props.data.status ? props.data.status : "-"}
          </p>
        </div>

        <div className="col-2 ms-2">
          <p className={handleAmountColor(props.data.amount)}>
            {currency.format(props.data.amount)}
          </p>
        </div>
      </div>
    </>
  );
}
