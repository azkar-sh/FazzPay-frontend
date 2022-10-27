import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import Cookies from "js-cookie";
import axiosClient from "utils/axios";

// Images
import authBackground from "../../assets/images/auth-background.png";

export default function Register() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const result = await axiosClient.post("/auth/register", form);
      alert(result.data.msg);
      Router.push("/login");
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
              <h4 className="mb-3">
                Start Accessing Banking Needs With All Devices and All Platforms
                With 30.000+ Users
              </h4>
              <small className="text-muted">
                Transfering money is eassier than ever, you can access FazzPay
                wherever you are. Desktop, laptop, mobile phone? we cover all of
                that for you!
              </small>

              <input
                type="text"
                name="firstName"
                className="form-control mb-3 mt-5 border-0 border-bottom"
                placeholder="Enter your firstname"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                className="form-control mb-3  border-0 border-bottom"
                placeholder="Enter your lastname"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="form-control mb-3 border-0 border-bottom"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                className="form-control mb-5 border-0 border-bottom"
                placeholder="Enter your password"
                onChange={handleChange}
              />

              <button
                className="btn btn-outline-primary w-100 mb-3"
                onClick={handleSubmit}
              >
                Sign Up
              </button>

              <div className="text-center">
                <p className="text-muted">
                  Already have an account? Let{"'"}s{" "}
                  <Link href="/login">
                    <a className="text-primary fw-bold">Login</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
