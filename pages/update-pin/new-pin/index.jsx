import React from "react";
import Layout from "layout";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { updatePIN } from "stores/action/user";
import { useState } from "react";
import PinInput from "react-pin-input";

//components
import SideNavbar from "components/SideNavbar";
import { useRouter } from "next/router";

export default function ChangePassword() {
  const [form, setForm] = useState({});
  const userId = Cookies.get("id");

  const handleChange = (e) => {
    setForm({
      ...form,
      pin: e, // just need pin value
    });
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = () => {
    dispatch(updatePIN(userId, form))
      .then((response) => {
        alert(response.value.data.msg);
        router.push("/home");
      })
      .catch((error) => console.log(error));
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
              <p className="fw-bold mb-2 h4">Set New PIN</p>
              <p className="text-muted mb-5">
                Type your new 6 digit security PIN to use in Fazzpay
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
