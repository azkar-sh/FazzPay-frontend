import React from "react";
import Layout from "layout";
import Image from "next/image";
import { useRouter } from "next/router";

//Images
import landingBanner from "assets/images/landing-banner.png";
import dropboxIcon from "assets/icons/dropbox-icon.png";
import microsoftIcon from "assets/icons/microsoft-icon.png";
import hnmIcon from "assets/icons/hnm-icon.png";
import dellIcon from "assets/icons/dell-icon.png";
import canonIcon from "assets/icons/canon-icon.png";
import airbnbIcon from "assets/icons/airbnb-icon.png";
import phoneRounded from "assets/icons/phone-rounded.png";
import lockRounded from "assets/icons/lock-rounded.png";
import downloadRounded from "assets/icons/download-rounded.png";

export default function LandingPage() {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <Layout>
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="col-6">
            <Image
              src={landingBanner}
              alt="fazzpay-banner"
              layout="responsive"
            />
          </div>
          <div className="col-6">
            <p className="h1 mb-3 fw-bold">Awesome App</p>
            <p className="h1 mb-5 fw-bold">
              for Saving <span className="color-blue"> Time</span>{" "}
            </p>
            <p className="h5 mb-3">
              We bring you a mobile app for banking problems that
            </p>
            <p className="h5 mb-5">oftenly wasting much of your times.</p>
            <button
              className="btn background-blue text-white"
              onClick={handleRegister}
            >
              Try it Free!
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid landing-sparator my-5">
        <div className="container py-5">
          <div className="d-flex flex-row justify-content-center">
            <Image src={microsoftIcon} alt="microsoft-icon" />
            <Image src={dropboxIcon} alt="dropbox-icon" />
            <Image src={hnmIcon} alt="hnm-icon" />
            <Image src={airbnbIcon} alt="airbnb-icon" />
            <Image src={canonIcon} alt="canon-icon" />
            <Image src={dellIcon} alt="dell-icon" />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="text-center">
          <h1>About the Application</h1>
          <h6 className="my-4">
            We have some great features from the application and it’s totally
            free <br /> to use by all users around the world.
          </h6>
          <div className="d-flex">
            <div className="col-4 text-center py-5">
              <Image src={phoneRounded} alt="phone-rounded" />
              <h5 className="my-4">24/7 Support</h5>
              <small>
                We have 24/7 contact support so you <br /> can contact us
                whenever you want <br /> and we will respond it.
              </small>
            </div>
            <div className="col-4 text-center bg-white rounded-3 py-5">
              <Image src={lockRounded} alt="lock-rounded" />
              <h5 className="my-4">Data Privacy</h5>
              <small>
                We make sure your data is safe in our <br /> database and we
                will encrypt any <br /> data you submitted to us.
              </small>
            </div>
            <div className="col-4 text-center py-5">
              <Image src={downloadRounded} alt="download-rounded" />
              <h5 className="my-4">Easy Download</h5>
              <small>
                Zwallet is 100% totally free to use it’s <br /> now available on
                Google Play Store <br /> and App Store.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid landing-sparator my-5">
        <div className="container py-5">
          <div className="d-flex align-items-center">
            <div className="col-6">
              <Image src={landingBanner} alt="fazzpay-banner" />
            </div>
            <div className="col-6">
              <h1 className="fw-bold mb-5">
                All the <span className="color-blue">Great</span> <br /> FazzPay
                Features
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="text-center">
          <h1>
            What Users are <span className="color-blue fw-bold"> Saying.</span>{" "}
          </h1>
          <h6 className="my-4">
            We have some great features from the application and it’s totally
            free <br /> to use by all users around the world.
          </h6>
          <div className="d-flex align-items-center">
            <div className="col-2 text-center">
              <button className="btn">
                <Image src={phoneRounded} alt="phone-rounded" />
              </button>
            </div>
            <div className="col-8 text-center bg-white rounded-3 py-5 px-3">
              <Image src={lockRounded} alt="lock-rounded" />
              <h5 className="my-4">Alex Hansiburg</h5>
              <h6>Designer</h6>
              <small>
                “This is the most outstanding app that I’ve ever try in my live,
                this app is such an amazing masterpiece and it’s suitable for
                you who is bussy with their bussiness and must transfer money to
                another person aut there. Just try this app and see the power!”
              </small>
            </div>
            <div className="col-2 text-center">
              <button className="btn">
                <Image src={downloadRounded} alt="download-rounded" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid background-blue mt-5">
        <div className="container pt-5 pb-2 text-white">
          <h1 className="fw-bold mb-5">Fazzpay</h1>
          <small>
            Simplify financial needs and saving <br /> much time in banking
            needs with <br /> one single app.
          </small>
          <hr />
        </div>
      </div>
    </Layout>
  );
}
