import React from "react";
import Layout from "layout";
import Cookies from "js-cookie";
import Image from "next/image";
import PinInput from "react-pin-input";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import { checkPIN, getUserDataById } from "stores/action/user";
import { getUserBalance } from "stores/action/user";

//components
import SideNavbar from "components/SideNavbar";
import currency from "utils/currency";
import { transferBalance } from "stores/action/history";
import Router, { useRouter } from "next/router";

//images

export default function Confimation() {
  const router = useRouter({});

  const [data, setData] = useState({});
  const [balance, setBalance] = useState({});
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const receiver = Cookies.get("receiverId");
  const userId = Cookies.get("id");
  const amount = Cookies.get("amount");
  const notes = Cookies.get("notes");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUserDataById(receiver))
        .then((response) => setData(response.value.data.data))
        .catch((err) => console.log(err));

      dispatch(getUserBalance(userId))
        .then((response) => setBalance(response.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      pin: e,
    });
  };

  const transferData = useState({
    receiverId: receiver,
    amount: amount,
    notes: notes,
  });

  const handleSubmit = () => {
    dispatch(checkPIN(form.pin))
      .then((response) => {
        alert(response.value.data.msg);

        dispatch(transferBalance(transferData[0])).then((response) => {
          alert(response.value.data.msg);
          Router.push("/home");
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Wrong PIN!");
      });
  };

  const balanceSubTotal = balance.totalIncome - balance.totalExpense;
  const balanceLeft = balanceSubTotal - amount;
  const currentDate = new Date().toLocaleString() + "";

  const imageUser = `${process.env.URL_CLOUDINARY}/${data.image}`;
  const imageDefault = `https://ui-avatars.com/api/?name=${data.firstName}&background=random&size=44`;

  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3 bg-white shadow">
            <SideNavbar />
          </div>

          <div className="col-8 border rounded-3 px-3 py-3 ms-3 bg-white shadow">
            <h4 className="mb-4">Transfer Confirmation</h4>

            <div className="overflow-auto vh-100">
              <div className="d-flex flex-column flex-wrap">
                <div className="border mb-4 d-flex py-2 px-3 rounded shadow">
                  <div className="col-1">
                    {data.image === null ? (
                      <>
                        <Image
                          loader={() => imageDefault}
                          src={imageDefault}
                          alt="image-user"
                          width={50}
                          height={50}
                          className="rounded-3"
                        />
                      </>
                    ) : (
                      <>
                        <Image
                          loader={() => imageUser}
                          src={imageUser}
                          alt="image-user"
                          width={50}
                          height={50}
                          className="rounded-3"
                        />
                      </>
                    )}
                  </div>
                  <div className="col-10 ms-2">
                    <p className="p-transaction fw-bold">
                      {data.firstName} {data.lastName}
                    </p>
                    <p className="p-transaction">
                      {data.noTelp ? data.noTelp : "-"}
                    </p>
                  </div>
                </div>
              </div>
              {/* Transfer Form */}
              <p className="my-3 h5">Details</p>
              <div className="border rounded-3 py-2 px-3 shadow mb-3">
                <p className="p-transaction">Amount</p>
                <p className="h4 mt-2">{currency.format(amount)}</p>
              </div>

              <div className="border rounded-3 py-2 px-3 shadow mb-3">
                <p className="p-transaction">Balance Left</p>
                <p className="h4 mt-2">{currency.format(balanceLeft)}</p>
              </div>

              <div className="border rounded-3 py-2 px-3 shadow mb-3">
                <p className="p-transaction">Date & Time</p>
                <p className="h4 mt-2">{currentDate}</p>
              </div>

              <div className="border rounded-3 py-2 px-3 shadow mb-3">
                <p className="p-transaction">Notes</p>
                <p className="h4 mt-2">{notes}</p>
              </div>

              <div className="mt-5">
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-primary background-blue w-25"
                    data-bs-toggle="modal"
                    data-bs-target="#PINConfirmationModal"
                  >
                    Continue
                  </button>
                </div>

                <div
                  className="modal fade"
                  id="PINConfirmationModal"
                  tabindex="-1"
                  aria-labelledby="PINConfirmationModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="PINConfirmationModalLabel"
                        >
                          Enter PIN to Transfer
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Enter your 6 digits PIN for confirmation to continue
                        transfering money.
                        <div className="my-5">
                          <PinInput
                            length={6}
                            initialValue=""
                            // secret
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
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary background-blue w-25"
                          onClick={handleSubmit}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
