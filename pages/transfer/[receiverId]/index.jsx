import React from "react";
import Layout from "layout";
import { getUserDataById } from "stores/action/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";

//components
import SideNavbar from "components/SideNavbar";

//images
import personIcon from "../../../assets/icons/person-icon.png";
import Image from "next/image";

export default function TransferDetail() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const receiver = Cookies.get("receiverId");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUserDataById(receiver))
        .then((response) => setData(response.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
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
            <h6 className="mb-4">Transfer Money</h6>

            <div className="overflow-auto vh-100">
              <div className="d-flex flex-column flex-wrap">
                <div className="border mb-4 d-flex py-2 px-3 rounded shadow">
                  <div className="col-1">
                    <Image
                      src={personIcon}
                      alt="image-transaction"
                      className="border rounded-3"
                      width={50}
                      height={50}
                      layout="fixed"
                    />
                  </div>
                  <div className="col-10 ms-2">
                    <p className="p-transaction fw-bold">
                      {data.firstName} {data.lastName}
                    </p>
                    <p className="p-transaction">{data.noTelp}</p>
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
