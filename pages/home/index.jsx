import React, { useEffect, useState } from "react";
import Layout from "layout";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";
import currency from "utils/currency";

//components
import SideNavbar from "components/SideNavbar";
import TransactionHistory from "components/TransactionHistory";
import Chart from "components/Chart";

import arrowUp from "../../assets/icons/arrow-up.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import upIcon from "../../assets/icons/up-icon.png";
import downIcon from "../../assets/icons/down-icon.png";

import { getUserDataById } from "stores/action/user";
import { getHistoryData, topUp } from "stores/action/history";
import { getUserBalance } from "stores/action/user";

export default function Home() {
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  const [balance, setBalance] = useState({});
  const [form, setForm] = useState({});

  const dispatch = useDispatch();
  const router = useRouter;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUserDataById(Cookies.get("id")))
        .then((res) => setUser(res.value.data.data))
        .catch((err) => console.log(err));

      dispatch(getHistoryData(1, 50, "MONTH"))
        .then((res) => setData(res.value.data.data))
        .catch((err) => console.log(err));

      dispatch(getUserBalance(Cookies.get("id")))
        .then((res) => setBalance(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(topUp(form))
      .then((res) => Router.push(`${res.value.data.data.redirectUrl}`))
      .catch((err) => console.log(err));
  };

  const handleNav = (path) => {
    Router.push(`/${path}`);
  };

  const totalBalance = balance?.totalIncome - balance?.totalExpense;

  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3 bg-white shadow">
            <SideNavbar />
          </div>

          <div className="col-9">
            <div className="d-flex flex-column">
              {/* Balance */}
              <div className="col-12 rounded-3 mb-3 background-blue text-white shadow">
                <div className="row py-3 px-3">
                  <div className="col-9">
                    <small>Balance</small>
                    <h2>{currency.format(totalBalance)}</h2>
                    <small>{user.noTelp ? user.noTelp : "-"}</small>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-outline-primary d-flex align-items-center w-75 justify-content-center btn-balance"
                      onClick={() => handleNav("transfer")}
                    >
                      <Image
                        src={arrowUp}
                        alt="grid-icon"
                        width={20}
                        height={20}
                      />{" "}
                      Transfer
                    </button>
                    <button
                      className="btn btn-outline-primary d-flex align-items-center w-75 justify-content-center btn-balance mt-3"
                      data-bs-toggle="modal"
                      data-bs-target="#TopUpModal"
                    >
                      <Image
                        src={plusIcon}
                        alt="grid-icon"
                        width={20}
                        height={20}
                      />{" "}
                      Top Up
                    </button>
                    <div className="mt-5">
                      <div
                        className="modal fade"
                        id="TopUpModal"
                        tabindex="-1"
                        aria-labelledby="TopUpModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5 text-dark"
                                id="TopUpModalLabel"
                              >
                                Top Up
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body text-dark">
                              Enter the amount of money, and click submit
                              <div className="my-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="amount"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-primary background-blue w-25"
                                onClick={handleSubmit}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction */}
              <div className="d-flex justfiy-content-evenly">
                <div className="col-6 border rounded-3 px-3 py-3 me-1 shadow bg-white">
                  <div className="row">
                    <div className="col-6">
                      <Image src={downIcon} alt="income" />
                      <p>Income</p>
                      <p className="fw-bold">
                        {" "}
                        {currency.format(balance?.totalIncome)}{" "}
                      </p>
                    </div>
                    <div className="col-6">
                      <Image src={upIcon} alt="expence" />
                      <p>Expence</p>
                      <p className="fw-bold">
                        {" "}
                        {currency.format(balance?.totalExpense)}{" "}
                      </p>
                    </div>
                    <Chart />
                  </div>
                </div>
                <div className="col-6 border rounded-3 px-3 py-3 ms-1 shadow bg-white">
                  <h6 className="mb-4">
                    <Link href={"history"}>Transaction History</Link>{" "}
                  </h6>
                  <div className="overflow-auto" style={{ height: "50vh" }}>
                    <div className="d-flex flex-column flex-wrap">
                      {data.length > 0 ? (
                        data.map((item) => (
                          <div key={item.id}>
                            <TransactionHistory data={item} />
                          </div>
                        ))
                      ) : (
                        <div className="">
                          You have not make any Transaction
                        </div>
                      )}
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
