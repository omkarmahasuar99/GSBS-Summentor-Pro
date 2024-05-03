import React from "react";
import "./Home.css";
import BannerImage from "../../assets/banner/banner-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faShieldHalved,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // Icons
  const faChartIcon = <FontAwesomeIcon icon={faChartLine} />;
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />;
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />;

  return (
    <>
      <section id="home">
        <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">
                DEVELOPMENT REDEVELOPMENT <span>REGENERATION</span>
              </h3>
              <p>
                GSBS (Global Smart Build Summit and Awards – 7th Edition) aims
                to navigate the dynamic landscape, offering a comprehensive
                overview that encapsulates current market dynamics, regulatory
                shifts, economic influences, and evolving consumer preferences.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  19th June 2024 || Taj SantaCruz Mumbai
                </a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={BannerImage} alt="Banner_image" />
              </div>
              <div className="banner_style_1">
                {faChartIcon}
                <h4>Business Insights</h4>
              </div>
              <div className="banner_style_1 banner_style_2">
                {faShieldIcon}
                <h4>Investor Relations</h4>
              </div>
              <div className="banner_style_1 banner_style_3">
                {faChartAreaIcon}
                <h4>Strategy</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
