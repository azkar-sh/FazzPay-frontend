import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getUserBalance } from "stores/action/user";
import Cookies from "js-cookie";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function HandleChart() {
  const [balance, setBalance] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUserBalance(Cookies.get("id")))
        .then((res) => setBalance(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data:
          Object.keys(balance).length !== 0
            ? balance.listIncome.map((item) => item.total)
            : [],
        backgroundColor: "rgb(99, 121, 244)",
        barThickness: 12,
        borderRadius: 12,
      },
      {
        label: "Expense",
        data:
          Object.keys(balance).length !== 0
            ? balance.listExpense.map((item) => item.total)
            : [],
        backgroundColor: "grey",
        barThickness: 12,
        borderRadius: 12,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="container text-center">
      <Bar options={options} data={data} />
    </div>
  );
}
