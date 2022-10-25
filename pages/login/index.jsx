import React from "react";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

//Images
import authBackground from "../../assets/images/auth-background.png";

export default function Login() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
                Start Accessing Banking Needs With All Devices and All Platforms
                With 30.000+ Users
              </h4>
              <small className="text-muted">
                Transfering money is eassier than ever, you can access FazzPay
                wherever you are. Desktop, laptop, mobile phone? we cover all of
                that for you!
              </small>

              <input
                type="email"
                name="email"
                className="form-control mb-4 mt-5 border-0 border-bottom"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                className="form-control mb-4 border-0 border-bottom"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <div className="text-end mb-5">
                <button
                  className="btn"
                  onClick={() => handleNavigate("reset-password")}
                >
                  Forgot Password?
                </button>
              </div>

              <button
                className="btn btn-outline-primary w-100 mb-4"
                onClick={handleSubmit}
              >
                Login
              </button>

              <div className="text-center">
                <p className="text-muted">
                  Don{"'"}t have an account? Let{"'"}s{" "}
                  <Link href="/register">
                    <a className="text-primary fw-bold">Sign Up</a>
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
