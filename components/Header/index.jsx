import React from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const handleNav = (path) => {
    router.push(`/${path}`);
  };

  return (
    <header>
      <div className="container-fluid bg-light shadow">
        <div className="py-2 container">
          <div className="d-flex flex-row justify-content-between">
            <button
              className="btn fw-bold text-primary"
              onClick={() => handleNav("")}
            >
              FazzPay
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handleNav("home")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
