import React, { useEffect, useState } from "react";
import Layout from "layout";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Router from "next/router";
import currency from "utils/currency";

//components
import SideNavbar from "components/SideNavbar";
import TransactionHistory from "components/TransactionHistory";
import Chart from "components/Chart";

import arrowUp from "../../assets/icons/arrow-up.png";
import plusIcon from "../../assets/icons/plus-icon.png";

import { getUserDataById } from "stores/action/user";
import { getHistoryData } from "stores/action/history";
import { getUserBalance } from "stores/action/user";

export default function Home() {
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  const [balance, setBalance] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUserDataById(Cookies.get("id")))
        .then((res) => setUser(res.value.data.data))
        .catch((err) => console.log(err));

      dispatch(getHistoryData(1, 20, "MONTH"))
        .then((res) => setData(res.value.data.data))
        .catch((err) => console.log(err));

      dispatch(getUserBalance(Cookies.get("id")))
        .then((res) => setBalance(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleNav = (path) => {
    Router.push(`/${path}`);
  };

  const totalBalance = balance.totalIncome - balance.totalExpense;

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
                    <small>{user.noTelp}</small>
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
                    <button className="btn btn-outline-primary d-flex align-items-center w-75 justify-content-center btn-balance mt-3">
                      <Image
                        src={plusIcon}
                        alt="grid-icon"
                        width={20}
                        height={20}
                      />{" "}
                      Top Up
                    </button>
                  </div>
                </div>
              </div>

              {/* Transaction */}
              <div className="d-flex justfiy-content-evenly">
                <div className="col-6 border rounded-3 px-3 py-3 me-1 shadow bg-white">
                  <div className="row">
                    <div className="col-6">
                      <p>Income</p>
                      <p className="fw-bold">
                        {" "}
                        {currency.format(balance.totalIncome)}{" "}
                      </p>
                    </div>
                    <div className="col-6">
                      <p>Expence</p>
                      <p className="fw-bold">
                        {" "}
                        {currency.format(balance.totalExpense)}{" "}
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
