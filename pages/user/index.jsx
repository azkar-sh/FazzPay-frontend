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

export default function UserProfile() {
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

  const imageUser = `${process.env.URL_CLOUDINARY}/${user.image}`;
  const imageDefault = `https://ui-avatars.com/api/?name=${user.firstName}&background=random&size=44`;

  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3 bg-white shadow">
            <SideNavbar />
          </div>

          <div className="col-8 border rounded-3 px-3 py-3 ms-3 text-center bg-white shadow">
            <div className="d-flex flex-column">
              <div>
                {user.image === null ? (
                  <>
                    <Image
                      loader={() => imageDefault}
                      src={imageDefault}
                      alt="image-user"
                      width={75}
                      height={75}
                      className="rounded-3"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      loader={() => imageUser}
                      src={imageUser}
                      alt="image-user"
                      width={75}
                      height={75}
                      className="rounded-3"
                    />
                  </>
                )}
              </div>
              <button className="btn">Edit</button>
              <h5>
                {user.firstName} {user.lastName}
              </h5>
              <small className="mb-5">
                {user.noTelp ? user.noTelp : "Phone number not updated"}
              </small>
              <button
                className="btn btn-secondary mb-3 py-2"
                onClick={() => handleNav("detail-user")}
              >
                Personal Information
              </button>
              <button
                className="btn btn-secondary mb-3 py-2"
                onClick={() => handleNav("change-password")}
              >
                Change Password
              </button>
              <button className="btn btn-secondary mb-3 py-2">
                Change PIN
              </button>
              <button className="btn btn-outline-danger mb-3 py-2">
                Logout
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
