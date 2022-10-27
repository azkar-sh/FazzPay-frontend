import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getUserDataById } from "stores/action/user";

//Images
import bellIcon from "../../assets/icons/bell-icon.png";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
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

  console.log(user);

  const isLogin = Cookies.get("token");

  const handleNav = (path) => {
    router.push(`/${path}`);
  };

  const imageUser = process.env.URL_CLOUDINARY;
  console.log(user.image);

  return (
    <header>
      <nav class="navbar bg-light py-3 shadow">
        <div class="container rounded-3">
          <a class="navbar-brand color-blue fw-bold">FazzPay</a>
          {isLogin ? (
            <>
              <div
                className="d-flex align-items-center"
                onClick={() => handleNav("/home")}
              >
                <div className="col-2 me-3 border rounded">Image</div>
                <div className="col-8 me-2">
                  <p className="p-transaction fw-bold">
                    {user.firstName} {user.lastName}
                  </p>{" "}
                  <p>{user.noTelp}</p>
                </div>
                <div className="col-2">
                  <Image
                    src={bellIcon}
                    alt="notification-icon"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
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
      </nav>
      {/* <div className="container-fluid bg-light shadow">
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
      </div> */}
    </header>
  );
}
