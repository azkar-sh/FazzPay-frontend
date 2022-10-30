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
import { useRouter } from "next/router";
import currency from "utils/currency";

//images

export default function TransferDetail() {
  const router = useRouter();
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
    Cookies.set("amount", form.amount);
    Cookies.set("notes", form.notes);
    router.push("/confirmation");
  };

  const totalBalance = balance.totalIncome - balance.totalExpense;
  const totalBalances = currency.format(totalBalance);
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
            <h4 className="mb-4">Transfer Money</h4>

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
              <p className="mt-3">
                Type the amount you want to transfer and then press continue to
                the next step
              </p>
              <div className="col-12 d-flex flex-column align-items-center my-5">
                <input
                  type="number"
                  name="amount"
                  className="bg-white border-0 transfer-input"
                  placeholder="0.00"
                  min="10000"
                  max={totalBalance}
                  onChange={handleChange}
                />
                <p className="fw-bold">{totalBalances} Available</p>
                <input
                  type="text"
                  name="notes"
                  placeholder="Add note"
                  className="note-input border-0 border-bottom"
                  onChange={handleChange}
                />
                <button
                  className="btn btn-primary background-blue w-25"
                  onClick={handleSubmit}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
