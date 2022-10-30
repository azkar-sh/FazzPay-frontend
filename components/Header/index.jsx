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
    } catch (error) {
      console.log(error);
    }
  };

  const isLogin = Cookies.get("token");

  const handleNav = (path) => {
    router.push(`/${path}`);
  };

  const imageUser = `${process.env.URL_CLOUDINARY}/${user.image}`;
  const imageDefault = `https://ui-avatars.com/api/?name=${user.firstName}&background=random&size=44`;

  return (
    <header>
      <nav className="navbar bg-light py-3 shadow">
        <div className="container rounded-3">
          <a
            className="navbar-brand color-blue fw-bold link-selected"
            onClick={() => handleNav("")}
          >
            FazzPay
          </a>
          {isLogin ? (
            <>
              <div
                className="d-flex align-items-center link-selected"
                onClick={() => handleNav("/home")}
              >
                <div className="col-2 me-3 rounded">
                  {" "}
                  {user.image === null ? (
                    <>
                      <Image
                        loader={() => imageDefault}
                        src={imageDefault}
                        alt="image-user"
                        width={100}
                        height={100}
                        className="rounded-3"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        loader={() => imageUser}
                        src={imageUser}
                        alt="image-user"
                        width={100}
                        height={100}
                        className="rounded-3"
                      />
                    </>
                  )}
                </div>
                <div className="col-8 me-2 mt-2">
                  <p className="p-transaction fw-bold">
                    {user.firstName} {user.lastName}
                  </p>{" "}
                  <p>{user.noTelp ? user.noTelp : "-"}</p>
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
    </header>
  );
}
