import React from "react";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import axiosClient from "utils/axios";
import Cookies from "js-cookie";
import PinInput from "react-pin-input";

//Imagess
import authBackground from "../../assets/images/auth-background.png";

export default function Login() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      pin: e,
    });
  };

  const handleSubmit = async () => {
    try {
      //   const result = await axiosClient.patch("/auth/pin", form);
      //   alert(result.data.msg);
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
              <h4 className="mb-4">
                Secure Your Account, Your Wallet, and Your Data With 6 Digits
                PIN That You Created Yourself.
              </h4>
              <small className="text-muted">
                Create 6 digits pin to secure all your money and your data in
                FazzPay app. Keep it secret and don’t tell anyone about your
                FazzPay account password and the PIN.
              </small>

              <div className="pin-input text-center my-5">
                <PinInput
                  length={6}
                  initialValue=""
                  secret
                  type="numeric"
                  inputMode="number"
                  style={{ padding: "10px" }}
                  inputStyle={{
                    borderColor: "#DADADA",
                    borderRadius: "5px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    color: "black",
                    margin: "0 10px",
                  }}
                  inputFocusStyle={{ borderColor: "blue" }}
                  onComplete={(value, index) => {
                    console.log("Completed! Value: ", value, " Index: ", index);
                  }}
                  onChange={(value, index) => {
                    console.log("Changed! Value: ", value, " Index: ", index);
                    handleChange(value);
                  }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>

              <button
                className="btn btn-outline-primary w-100 mb-4"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
