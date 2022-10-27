import React from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axiosClient from "utils/axios";

export default function Header() {
  const router = useRouter();

  const isLogin = Cookies.get("token");

  const handleNav = (path) => {
    router.push(`/${path}`);
  };

  const handleLogout = () => {
    axiosClient.post("/auth/logout");
    Cookies.remove("token");
    Cookies.remove("user");
    alert("Logout Success");
    router.push("/");
  };

  return (
    <header>
      <div className="container-fluid bg-light shadow">
        <div className="py-3 container">
          <div className="d-flex flex-row justify-content-between">
            <button
              className="btn fw-bold text-primary"
              onClick={() => handleNav("")}
            >
              FazzPay
            </button>
            <div>
              {isLogin ? (
                <>
                  <button
                    className="btn btn-outline-primary me-3 px-4"
                    onClick={() => handleNav("home")}
                  >
                    Home
                  </button>
                  <button
                    className="btn btn-outline-danger me-3 px-4"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-primary me-3 px-4"
                    onClick={() => handleNav("login")}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-primary background-blue text-white px-3"
                    onClick={() => handleNav("register")}
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
