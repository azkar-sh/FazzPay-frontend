import React from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const handleNav = (path) => {
    router.push(`/${path}`);
  };

  return (
    <footer className="footer mt-auto background-blue">
      <div className="container">
        <div className="py-3">
          <div className="d-flex flex-row">
            <div className="col-8 text-white">
              <p>2020 FazzPay. All right reserved.</p>
            </div>
            <div className="col-2 text-white">
              <p>+62 5637 8882 9901</p>
            </div>
            <div className="col-2 text-white">
              <p>contact@fazzpay.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
