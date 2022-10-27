import React from "react";
import Layout from "layout";

//components
import SideNavbar from "components/SideNavbar";
import TransactionHistory from "components/TransactionHistory";

export default function Home() {
  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3 bg-white shadow">
            <SideNavbar />
          </div>

          <div className="col-8 border rounded-3 px-3 py-3 ms-3 bg-white shadow">
            <h6 className="mb-4">Transaction History</h6>
            <div className="d-flex flex-row flex-wrap">
              <TransactionHistory />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
