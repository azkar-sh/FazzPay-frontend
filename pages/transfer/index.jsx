import React from "react";
import Layout from "layout";

//components
import SideNavbar from "components/SideNavbar";
import SearchReceiver from "components/SearchReceiver";

import { getUserData } from "stores/action/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Transfer() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUserData(""))
        .then((response) => setData(response.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetail = () => {
    const receiverId = Cookies.get("id", id);
    console.log(receiverId);
    // Router.push("/transfer/${id}");
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
            <h4 className="mb-4">Search Receiver</h4>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search Receiver"
            />
            <div className="overflow-auto vh-100">
              <div className="d-flex flex-column flex-wrap">
                {data.length > 0 ? (
                  data.map((item) => (
                    <div key={item.id}>
                      <SearchReceiver data={item} />
                    </div>
                  ))
                ) : (
                  <div className="">Data not Found</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
