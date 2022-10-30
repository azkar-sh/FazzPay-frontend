import React from "react";
import Layout from "layout";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getUserDataById, checkPIN } from "stores/action/user";
import { useEffect } from "react";
import { useState } from "react";
import PinInput from "react-pin-input";

//components
import SideNavbar from "components/SideNavbar";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [form, setForm] = useState({});

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

  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      pin: e, // just need pin value
    });
  };

  const handleSubmit = () => {
    dispatch(checkPIN(form.pin))
      .then((response) => {
        alert(response.value.data.msg);
        router.push("update-pin/new-pin");
      })
      .catch((error) => {
        console.log(error);
        alert("Wrong PIN!");
      });
  };

  const handleNav = (path) => {
    Router.push(path);
  };

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
              <p className="fw-bold mb-2 h4">Update PIN</p>
              <p className="text-muted mb-5">
                Enter your <b> current </b> 6 digit Fazzpay PIN below <br />
                to continue to the next step
              </p>
              <div className="container text-center">
                <PinInput
                  length={6}
                  initialValue=""
                  //   secret
                  type="numeric"
                  inputMode="number"
                  style={{ padding: "10px" }}
                  inputStyle={{
                    borderColor: "#DADADA",
                    borderRadius: "5px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                    color: "black",
                    margin: "0 10px",
                  }}
                  inputFocusStyle={{ borderColor: "blue" }}
                  onComplete={(value, index) => {}}
                  onChange={(value, index) => {
                    handleChange(value);
                  }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />

                <button
                  className="btn btn-primary background-blue mt-5 w-25"
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
