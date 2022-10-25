import React from "react";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

import authBackground from "../../assets/images/auth-background.png";

export default function ResetPassword() {
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
                Did You Forgot Your Password? Don’t Worry, You Can Reset Your
                Password In a Minutes.
              </h4>
              <small className="text-muted">
                To reset your password, you must type your e-mail and we will
                send a link to your email and you will be directed to the reset
                password screens.
              </small>

              <input
                type="email"
                name="email"
                className="form-control mb-4 mt-5 border-0 border-bottom"
                placeholder="Enter your email"
                onChange={handleChange}
              />

              <button
                className="btn btn-outline-primary w-100 mb-4"
                onClick={handleSubmit}
              >
                Confirm
              </button>

              <div className="text-center">
                <p className="text-muted">
                  Back to{" "}
                  <Link href="/login">
                    <a className="text-primary fw-bold">Sign In</a>
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
