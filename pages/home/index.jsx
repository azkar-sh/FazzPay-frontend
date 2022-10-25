import React from "react";
import Layout from "layout";
import SideNavbar from "components/SideNavbar";
import Image from "next/image";

import arrowUp from "../../assets/icons/arrow-up.png";
import plusIcon from "../../assets/icons/plus-icon.png";

export default function Home() {
  return (
    <Layout>
      <main className="container my-5" style={{ height: "100%" }}>
        <div className="row">
          <div className="col-3 border rounded-3 me-3">
            <SideNavbar />
          </div>

          <div className="col-8">
            <div className="row">
              {/* Balance */}
              <div className="col-11 rounded-3 mb-3 background-blue text-white">
                <div className="row">
                  <div className="col-9 py-4 ">
                    <small>Balance</small>
                    <h2>Rp. 120.000</h2>
                    <small>+62 813 9387 7946</small>
                  </div>
                  <div className="col-3 py-4">
                    <button className="btn btn-outline-primary d-flex align-items-center w-75 justify-content-center btn-balance">
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
              <div className="row">
                <div className="col-6 border rounded-3 me-4">
                  <h1>RECENT TRANSACTION</h1>
                </div>
                <div className="col-5 border rounded-3">
                  <h1>RECENT ACTIVITY</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
