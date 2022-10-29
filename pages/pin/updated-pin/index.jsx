import React from "react";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import axiosClient from "utils/axios";
import successIcon from "../../../assets/icons/success-icon.png";

//Imagess
import authBackground from "../../../assets/images/auth-background.png";

export default function UpdatedPin() {
  const handleSubmit = async () => {
    try {
      const result = await axiosClient.patch(`/user/pin/${userId}`, form);
      alert(result.data.msg);
      console.log(form);
      //   Router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigate = (path) => {
    Router.push(`/${path}`);
  };

  return (
    <>
      {/* Side Background */}
      <div className="d-flex flex-row">
        <div className="col-6 background-blue">
          <Image
            src={authBackground}
            alt="login"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            onClick={() => handleNavigate("")}
          />
        </div>

        {/* Login Form */}
        <div className="col-6">
          <div className="container d-flex flex-column vh-100">
            <div className="my-auto mx-5">
              <Image src={successIcon} alt="success-icon" className="" />
              <h4 className="my-5">Your Pin Was Successfully Created</h4>
              <small className="text-muted">
                You have created PIN successfully and now you may access all
                Fazzpay great feature
              </small>

              <div className="pin-input text-center my-5"></div>

              <button
                className="btn btn-primary w-100 mb-4 background-blue text-white"
                onClick={() => handleNavigate("")}
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
