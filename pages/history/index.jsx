import React from "react";
import Layout from "layout";

//components
import SideNavbar from "components/SideNavbar";
import TransactionHistory from "components/TransactionHistory";

import { getHistoryData } from "stores/action/history";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  // const [history, setHistory] = useState({});
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getHistoryData(1, 20, "MONTH"))
        .then((res) => setData(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(history);

  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3 bg-white shadow">
            <SideNavbar />
          </div>

          <div className="col-8 border rounded-3 px-3 py-3 ms-3 bg-white shadow">
            <h4 className="mb-4">Transaction History</h4>

            <div className="d-flex flex-column flex-wrap">
              {data.length > 0 ? (
                data.map((item) => (
                  <div key={item.id}>
                    <TransactionHistory data={item} />
                  </div>
                ))
              ) : (
                <div className="">You have not make any Transaction</div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
