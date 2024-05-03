import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  // faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AboutImage from "../../assets/about/about_img.jpg";

export default function About() {
  // Icons
  const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />;
  const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />;
  const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />;
  const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />;
  const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />;
  // const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;

  return (
    <>
      <section id="about">
        <div class="container">
          <div className="title_headling">
            <h3>What Happens At Global Smart Build Summit & Awards ?</h3>
            <p>
              We hope to bring every stakeholder involved in the construction
              industry to a common platform where they can explore the
              regulatory framework governing sustainable development, shedding
              light on government policies and legal considerations that shape
              the industry and participate in advanced innovation driven
              procurement goals laid down in the form of pre-scheduled B2B
              meetings.
            </p>
          </div>
          <div className="about_box_wrapper">
            <div className="about_box">
              <div className="about_icon">{faBusinessIcon}</div>
              <div className="about_content">
                <h5>National Recognition</h5>
                <p>
                  Unveiling of the Grand Event & Inauguration by Government of
                  India
                </p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon green_icon">{faChartPieIcon}</div>
              <div className="about_content">
                <h5>Business Integration</h5>
                <p>B2B , B2G Meetings and Inspiring Networking Sessions</p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon blue_icon">{faTruckFastIcon}</div>
              <div className="about_content">
                <h5>Branding</h5>
                <p>
                  Conference & Innovation Showcases to audience profile of over
                  300 + Industry Experts & Decision Maker’s
                </p>
              </div>
            </div>
          </div>

          <div className="about_box_details">
            <div className="about_col">
              <div className="about_image">
                <img src={AboutImage} alt="about" className="about_main" />
              </div>
              {/* <div className="img_info__box">
                <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                <p>
                  Nemo enim ipsam oluptatem quia oluptas <br />
                  sit aspernatur aut odit aut fugit.
                </p>
                <a href="/">
                  {faPhoneIcon} <span>1-800-654-3210</span>
                </a>
              </div> */}
            </div>
            <div className="about_col more_space">
              <h3>#Time2Leap Awards 2024</h3>
              <p>
                The #Time2Leap National Awards is one of the most prestigious
                awards recognized by the Government of India, with its wings
                spread nationally the awards over the past editions.
              </p>

              <div className="grid_info">
                <div className="icon">{faUserClockIcon}</div>
                <div className="detail">
                  <h4>Interact with visionaries</h4>
                  <p>
                    The inclusion of infrastructure, warehousing, logistics and
                    Telecom in the following addition will only take it a step
                    further this year!
                  </p>
                </div>
              </div>
              <div className="grid_info">
                <div className="icon green_icon">{faHouseLaptopIcon}</div>
                <div className="detail">
                  <h4>Exciting Opportunities</h4>
                  <p>
                    #Time2Leap hosts VVIPs, decision makers, industry experts,
                    performers, brands and state various heads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
