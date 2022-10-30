import React from "react";
import Image from "next/image";
import Router from "next/router";
import Cookies from "js-cookie";

export default function TransactionHistory(props) {
  const handleDetail = () => {
    const receiverId = props.data.id;
    Router.push("transfer/" + receiverId);
    Cookies.set("receiverId", receiverId);
  };

  const imageUser = `${process.env.URL_CLOUDINARY}/${props.data.image}`;
  const imageDefault = `https://ui-avatars.com/api/?name=${props.data.firstName}&background=random&size=44`;

  return (
    <>
      <div className="d-flex py-2 px-3 rounded mb-4 border shadow">
        <div className="col-1">
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
        <div className="col-10 ms-2">
          <p
            className="p-transaction fw-bold link-selected"
            onClick={handleDetail}
          >
            {props.data.firstName ? props.data.firstName : "-"}{" "}
            {props.data.lastName}
          </p>
          <p className="p-transaction">
            {props.data.noTelp ? props.data.noTelp : "-"}
          </p>
        </div>
      </div>
    </>
  );
}
