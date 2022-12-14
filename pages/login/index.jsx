import React from "react";
import Image from "next/image";
import Link from "next/link";
// import router from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getUserDataById } from "stores/action/user";
import { login } from "stores/action/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Imagess
import authBackground from "../../assets/images/auth-background.png";
import { useRouter } from "next/router";

export default function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(login(form))
      .then((response) => {
        toast.success(response.value.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        });
        dispatch(getUserDataById(response.value.data.data.id));
        Cookies.set("token", response.value.data.data.token);
        Cookies.set("id", response.value.data.data.id);
        response.value.data.data.pin === null
          ? router.push("update-pin") //page for create pin
          : router.push("/home");
      })
      .catch((error) =>
        toast.error(error.response.data.msg, {
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  const handleNavigate = (path) => {
    router.push(`/${path}`);
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
                <ToastContainer />
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
