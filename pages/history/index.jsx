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
  const [data, setData] = useState({});
  const [filterType, setFilterType] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [page, filterType]);

  const getData = () => {
    try {
      dispatch(getHistoryData(page, 5, filterType))
        .then((res) => setData(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page < 0) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  console.log(data);

  return (
    <Layout>
      <main className="container my-5">
        <div className="row">
          {/* Side Navbar */}
          <div className="col-3 border rounded-3 bg-white shadow">
            <SideNavbar />
          </div>

          <div className="col-8 border rounded-3 px-3 py-3 ms-3 bg-white shadow">
            <div className="d-flex mb-4 ">
              <h4 className="col-9">Transaction History</h4>
              <div className="dropdown col-4">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  -- Select Filter --
                </button>
                <ul className="dropdown-menu">
                  <li
                    className="mx-3 my-2 filter-history"
                    onClick={() => setFilterType("WEEK")}
                  >
                    By Week
                  </li>
                  <li
                    className="mx-3 filter-history"
                    onClick={() => setFilterType("WEEK")}
                  >
                    By Month
                  </li>
                  <li
                    className="mx-3 my-2 filter-history"
                    onClick={() => setFilterType("WEEK")}
                  >
                    By Year
                  </li>
                </ul>
              </div>
            </div>

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
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-outline-primary"
                onClick={handlePrevPage}
              >
                {" < "}
              </button>
              <button
                className="btn btn-outline-primary background-blue text-white"
                onClick={handleNextPage}
              >
                {" > "}
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
