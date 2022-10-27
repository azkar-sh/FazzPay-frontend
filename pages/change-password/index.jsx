import React from "react";
import Layout from "layout";
import Cookies from "js-cookie";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { getUserDataById } from "stores/action/user";
import { useEffect } from "react";
import { useState } from "react";

//components
import SideNavbar from "components/SideNavbar";

export default function ChangePassword() {
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

      dispatch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleNav = (path) => {
    Router.push(path);
  };

  const imageUser = process.env.URL_CLOUDINARY;
  console.log(user.image);

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
                You must enter your current password and then type your new
                password twice.
              </p>
              <div className="container text-center">
                <input
                  type="text"
                  placeholder="Current password"
                  className="form-control w-50 border-0 border-bottom"
                />
                <input
                  type="text"
                  name="newPassword"
                  placeholder="New Password"
                  className="form-control w-50 my-5 border-0 border-bottom"
                />
                <input
                  type="text"
                  name="confirmNewPassword"
                  placeholder="Repeat new password"
                  className="form-control w-50 border-0 border-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
