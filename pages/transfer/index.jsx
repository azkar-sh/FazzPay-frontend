import React from "react";
import Layout from "layout";

//components
import SideNavbar from "components/SideNavbar";
import SearchReceiver from "components/SearchReceiver";

export default function Transfer() {
  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3">
            <SideNavbar />
          </div>

          <div className="col-8 border rounded-3 px-3 py-3 ms-5">
            <h6 className="mb-4">Search Receiver</h6>
            <div className="d-flex flex-row flex-wrap">
              <SearchReceiver />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
