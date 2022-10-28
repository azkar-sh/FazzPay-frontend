import React from "react";
import Layout from "layout";
import Image from "next/image";
import Cookies from "js-cookie";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { getUserDataById } from "stores/action/user";
import { useEffect } from "react";
import { useState } from "react";

//components
import SideNavbar from "components/SideNavbar";

export default function DetailUser() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUserDataById(Cookies.get("id")))
        .then((res) => setUser(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleNav = (path) => {
    Router.push(path);
  };

  const imageUser = process.env.URL_CLOUDINARY;
  // console.log(user.image);

  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3 bg-white shadow">
            <SideNavbar />
          </div>

          <div className="col-8 border rounded-3 px-3 py-3 ms-3 bg-white shadow">
            <div className="d-flex flex-column">
              <p className="fw-bold mb-2">Personal Information</p>
              <p className="text-muted mb-5">
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
              <div className="border rounded-3 d-flex flex-column mb-3 px-3 py-2 shadow">
                <p className="fw-bold mb-2">First Name</p>
                <p className="p-transaction">{user.firstName}</p>
              </div>
              <div className="border rounded-3 d-flex flex-column mb-3 px-3 py-2 shadow">
                <p className="fw-bold mb-2">Last Name</p>
                <p className="p-transaction">{user.lastName}</p>
              </div>
              <div className="border rounded-3 d-flex flex-column mb-3 px-3 py-2 shadow">
                <p className="fw-bold mb-2">Verified Email</p>
                <p className="p-transaction">{user.email}</p>
              </div>
              <div className="border rounded-3 d-flex flex-column mb-3 px-3 py-2 shadow">
                <p className="fw-bold mb-2">Phone Number</p>
                <p className="p-transaction">{user.noTelp}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
