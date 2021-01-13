import React, { useEffect, useState, useRef } from "react";
import "./mainpage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import { TweenMax, Power3 } from "gsap";
import { Link } from "react-scroll";
import KitchenIcon from "@material-ui/icons/Kitchen";
import SendIcon from "@material-ui/icons/Send";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CloudIcon from "@material-ui/icons/Cloud";
import Particles from "react-particles-js";
import emailjs from "emailjs-com";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import GitHubIcon from "@material-ui/icons/GitHub";

function MainPage() {
  const [open, setOpen] = useState(false);

  let welcomeText = useRef(null);
  let letBuild = useRef(null);
  let getStarted = useRef(null);
  let header = useRef(null);
  let background = useRef(null);
  let secondpagetext = useRef(null);
  let logo = useRef(null);
  let successText = useRef(null);
  let particles = useRef(null);

  useEffect(() => {
    TweenMax.to(welcomeText, 3, {
      x: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.to(letBuild, 3, {
      x: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.to(getStarted, 2, {
      x: 0,
      delay: 5,
      ease: Power3.easeInOut,
    });
    TweenMax.to(header, 2, {
      delay: 5,
      y: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.to(secondpagetext, 7, {
      ease: Power3.easeInOut,
      opacity: 1,
    });
    TweenMax.to(particles, 3, {
      ease: Power3.easeInOut,
      delay: 2,
      opacity: 0,
    });
    TweenMax.to(background, 4, {
      ease: Power3.easeInOut,
      delay: 2,
      x: 0,
      opacity: 0.4,
    });
    TweenMax.to(logo, 4, {
      ease: Power3.easeInOut,
      y: 0,
      x: 0,
    });

    Aos.init({
      disableMutationObserver: true,
      offset: 220,
      mirror: true,
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);

  const clickHandler = () => {
    setOpen(!open);
  };

  const formHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2yvlws6",
        "template_t7fbmv9",
        e.target,
        "user_LjND7seNNuxBCLrJaaU5w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    successText.style.display = "block";
    setTimeout(() => {
      successText.style.display = "none";
    }, 3300);
    e.target.reset();
  };

  return (
    <div className="main-page">
      {/*-------header-------*/}
      <header
        className="header"
        ref={(e) => {
          header = e;
        }}
      >
        <div onClick={clickHandler} className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-list${open ? "-open" : ""}`}>
          <Link
            onClick={clickHandler}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
            to="main-page"
          >
            <li>Home</li>
          </Link>
          <Link
            onClick={clickHandler}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
            to="second-page"
          >
            <li>Ours Sevices</li>
          </Link>
          <Link
            onClick={clickHandler}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
            to="our-projects"
          >
            <li>Our Projects</li>
          </Link>
          <Link
            onClick={clickHandler}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1500}
            to="contact-section"
          >
            <li>Get intouch with us</li>
          </Link>
        </ul>
      </header>
      {/*-------main-page-body-------*/}
      <div className="full-page">
        <form
          ref={(e) => {
            getStarted = e;
          }}
          action="submit"
          className="getStaretdForm"
        >
          <Button>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1500}
              to="contact-section"
            >
              GET STARTED
            </Link>
          </Button>
        </form>
        <div
          ref={(e) => {
            logo = e;
          }}
          className="logo"
        />
        <div className="body">
          <Particles
            className="particles"
            ref={(e) => {
              particles = e;
            }}
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 1000,
                  },
                },
              },
              size: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  bubble: {
                    distance: "10",
                    size: "50",
                  },
                },
              },
              retina_detect: true,
            }}
          />
          <div
            ref={(e) => {
              background = e;
            }}
            className="image-bg"
          />
          <div className="home-text">
            <h1
              ref={(e) => {
                welcomeText = e;
              }}
            >
              Welcome home
            </h1>
            <h2
              ref={(e) => {
                letBuild = e;
              }}
            >
              lets build your website
            </h2>
          </div>
        </div>
        {/*---------second-page----------*/}
        <section className="second-page">
          <div
            ref={(e) => {
              secondpagetext = e;
            }}
            className="second-page-text"
            data-aos-offset="100"
            data-aos="slide-down"
          >
            <h2>What you get from our services</h2>
          </div>
          <div className="cards">
            <div data-aos-offset="150" data-aos="fade-right" className="card1">
              <h3>fully functional website</h3>
              <p>
                We build a fully functional websites. From back-end,
                <br /> front-end even user authentication by phone, number,email
                or google account.
                <br /> we got you cover from security issues
              </p>
            </div>
            <div
              data-aos-offset="150"
              data-aos="fade-right"
              className="pic1"
            ></div>
            <div data-aos-offset="150" data-aos="fade-left" className="card2">
              <h3>mobile friendly</h3>
              <p>
                Our websites are mobile responsive. We design your website with
                animations, page transitions and more tricks to make your
                website
                <br /> really stand out.
              </p>
            </div>
            <div data-aos-offset="150" data-aos="fade-left" className="card3">
              <h3>we host your website</h3>
              <p>
                If you are satisfied with your website, we will deploy and host
                your website with a domian name of your choice. <br /> <br />{" "}
                This will depending on your price plan
              </p>
            </div>
          </div>
        </section>
        {/*---------about-page----------*/}
        <section className="about-section">
          <div data-aos-offset="100" data-aos="fade-up" className="about-text">
            <h3>About</h3>
            <p>
              We build websites that meets your requirements. Not only do we
              fill your websites with random affect, we build it with
              correspondence to your business model.
            </p>
          </div>
          {/*---------our-projects-page----------*/}
          <div className="our-projects">
            <div className="line1">
              <div className="wave wave1"></div>
            </div>
            <div className="line2">
              <div className="wave wave2"></div>
            </div>
            <div className="line3">
              <div className="wave wave3"></div>
            </div>
            {/* <section className="pic6"></section> */}
            {/*--------cards----*/}
            <h2>Our projects</h2>
            <div className="cards1">
              <div
                data-aos-offset="200"
                data-aos="flip-right"
                data-aos-duration="4000"
              >
                <h3>group chat website</h3>
                <p>
                  A web application that handles real time communication between
                  users. It features google authentication for signing in
                  <br />
                  please check it out here <br /> 🖨 {/*---insert-link---*/}
                </p>
                <a
                  href="https://whatsapp-clone-d0a0d.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SendIcon />
                </a>
              </div>
              <div
                data-aos-mirror="true"
                data-aos-offset="200"
                data-aos="flip-right"
                data-aos-duration="4000"
              >
                <h3>weather website</h3>
                <p>
                  A website that shows weather of any city around the world.
                  This web fetches an weather API and display the current
                  weather at the location of your choice <br /> visit here 🌪
                  {/*---insert-link---*/}
                </p>
                <a
                  href="https://weather-website-30aeb.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CloudIcon />
                </a>
              </div>
              <div
                data-aos-offset="200"
                data-aos="flip-right"
                data-aos-duration="4000"
              >
                <h3>recipe website</h3>
                <p>
                  Looking for any recipe? <br />
                  We got u covered, with this website you can get any recipe you
                  want just search and it will display your result easy as that!
                  <br />
                  <br /> {/*---link----*/}
                  🍽
                </p>
                <a
                  className="border-bottom"
                  href="https://recipe-website-7b335.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <KitchenIcon />
                </a>
              </div>
              <div
                data-aos-offset="200"
                data-aos="flip-right"
                data-aos-duration="4000"
              >
                <h3>next project?</h3>
                <p>
                  If you want a website that has complex functionality or just a
                  simple portfolio for your work or business, then contact us
                  below and we will be happy to work on <br /> 🛠
                </p>
                <Link
                  className="border-bottom"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1500}
                  to="contact-section"
                >
                  <ArrowDownwardIcon />
                </Link>
              </div>
            </div>
          </div>
          {/*---------vision-page----------*/}
          <div
            data-aos-mirror="true"
            data-aos-offset="100"
            data-aos="zoom-out"
            data-aos-duration="4000"
            data-aos-easing="ease-in-out-quart"
            className="about-vision"
          >
            <div className="pic7"></div>
            <div className="card-about">
              <div className="Vision">
                <h4>Vision</h4>
                <p>
                  Our Vision is to inspire and bring change to the youth of
                  africa. And show them that ,its possible
                </p>
              </div>
              <div className="Mission">
                <h4>Mission</h4>
                <p>
                  Our main business is to create websites for companies,
                  decrease youth unemployement,create job opportunities even for
                  non degree or qualification youth, we acept and encourage self
                  tought programmers to join our movement
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*---------contact-page----------*/}
        <div className="contact-section">
          <h3 data-aos-offset="100" data-aos="slide-left">
            Connect with us
          </h3>
          <p data-aos-offset="100" data-aos="slide-right">
            If you have any question or like to see more of our work <br />{" "}
            <a href="mailto:xgamerpurge@gmail.com">
              <MailOutlineIcon id="emailIcon" />
            </a>{" "}
            <a
              href="https://github.com/DemonDickUser"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon id="emailIcon" />
            </a>
            <br />
            We will respond as soon as possible. <br />
            <br />
            Follow our movement and be part of us.
          </p>
        </div>

        {/*---------form--------*/}

        <form onSubmit={formHandler} className="form">
          <h4
            data-aos-mirror="true"
            data-aos-offset="100"
            data-aos="fade"
            data-aos-duration="4000"
            data-aos-easing="ease-in-quart"
          >
            Leave us a message.
          </h4>

          <div className="name-email">
            <TextField
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter your name"
              data-aos-mirror="true"
              data-aos-offset="50"
              data-aos="slide-left"
              data-aos-duration="4000"
              data-aos-easing="ease-in-out"
            />
            <TextField
              type="text"
              id="email"
              name="user_email"
              placeholder="leave your Email"
              data-aos-mirror="true"
              data-aos-offset="50"
              data-aos="slide-right"
              data-aos-duration="4000"
              data-aos-easing="ease-in-out"
            />
          </div>
          <TextareaAutosize
            id="input"
            name="message"
            placeholder="Lets Talk"
            data-aos-mirror="true"
            data-aos-offset="50"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-easing="ease-out-quart"
            type="text"
            rowsMin={3}
            aria-label="minimum height"
          />
          <span
            ref={(e) => {
              successText = e;
            }}
            className="submitted"
          >
            Thank you. Message submited!
          </span>
          <Button
            type="submit"
            data-aos-mirror="true"
            data-aos-offset="-100"
            data-aos="slide-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            Submit
          </Button>
        </form>
        {/*---------footer----------*/}
        <footer>
          <span className="add-pic8"></span>
          <span className="add-pic9"></span>
          <span className="add-pic10"></span>
          <div className="footer-text">
            <div className="footer-textDisplay">
              <h3>Site Map</h3>
              <ul>
                <li>
                  <Link
                    onClick={clickHandler}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-1000}
                    duration={1500}
                    to="header-brand"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={clickHandler}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    to="second-page"
                  >
                    Ours Sevices
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={clickHandler}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    to="our-projects"
                  >
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={clickHandler}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    to="contact-section"
                  >
                    Get intouch with us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-text2">
              <section className="wrap">
                <h3>objectives</h3>
                <p>
                  These Company help small takeoff with a new and exciting
                  website. The languages used to programme websites CSS, React
                  with all your functionality.
                </p>
              </section>
            </div>
          </div>
          <div data-aos-offset="200" data-aos="flip-down" className="git"></div>
          <div data-aos-offset="10" data-aos="flip-up" className="final-text">
            <h3>All Rights Reserved</h3>
            <p>©Copyrihgt 2020 </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainPage;
