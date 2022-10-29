import React from "react";
import Layout from "layout";
import Cookies from "js-cookie";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import { getUserDataById } from "stores/action/user";
import { getUserBalance } from "stores/action/user";

//components
import SideNavbar from "components/SideNavbar";

//images

export default function Confimation() {
  const [data, setData] = useState({});
  const [balance, setBalance] = useState({});
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const receiver = Cookies.get("receiverId");
  const userId = Cookies.get("id");

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
      receiverId: receiver,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  const totalBalance = balance.totalIncome - balance.totalExpense;
  const totalBalances = totalBalance.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

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
              <p className="mt-3 h5">Details</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
