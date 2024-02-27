import { AppDispatch, themesActions } from "@/reduxStore";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "@/assets/css/home/index.css";
import {
  BlogBanner1,
  BlogBanner2,
  BlogBanner3,
  Features1,
  Features2,
  HeroBanner,
  LogoHome,
  LogoHomeFooter,
} from "@/assets";
import { Link } from "react-router-dom";
import { userData } from "@/utils";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(themesActions.handleSetPageSidebar(false));
    dispatch(themesActions.handleSetPageHeader(false));
    dispatch(themesActions.handleSetFooter(false));
    return () => {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
      dispatch(themesActions.handleSetFooter(true));
      dispatch(themesActions.handleSetContent(true));
    };
  }, [dispatch]);

  const [header, setheader] = useState(false);

  return (
    <>
      <header
        className={`header-home ${header ? "active" : ""}`}
        data-header-home=""
      >
        <div className="container-home">
          <a href="#" className="logo">
            <img src={LogoHome} alt="Landio logo" />
          </a>
          <button
            className="menu-toggle-btn"
            onClick={() => setheader(!header)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <nav className="navbar-home">
            <ul className="navbar-home-list">
              <li>
                <a href="#hero" className="navbar-home-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="navbar-home-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="navbar-home-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#blog" className="navbar-home-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="navbar-home-link">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="header-home-actions">
              {userData.length !== 0 ? (
                <Link to="/admin/dashboard" className="header-home-action-link">
                  Dashboard
                </Link>
              ) : (
                <React.Fragment>
                  <Link to="/login-admin" className="header-home-action-link">
                    Log in
                  </Link>
                  <a href="#" className="header-home-action-link">
                    Register
                  </a>
                </React.Fragment>
              )}
            </div>
          </nav>
        </div>
      </header>
      <main>
        <article>
          <section className="hero" id="hero">
            <div className="container-home">
              <div className="hero-content">
                <h1 className="h1 hero-title">Creative Landing Page</h1>
                <p className="hero-text">
                  A creative &amp; modern landing page with Landio template
                  &amp; We love make things amazing.
                </p>
                <p className="form-text">
                  <span>🥳</span> Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur that is fugit.
                </p>
                <form action="" className="hero-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="email-field"
                  />
                  <button type="submit" className="btn-app btn-primary-home">
                    Subscribe
                  </button>
                </form>
              </div>
              <figure className="hero-banner">
                <img src={HeroBanner} alt="Hero image" />
              </figure>
            </div>
          </section>

          <section className="about">
            <div className="container-home">
              <div className="about-content">
                <div className="about-icon">
                  <i className="fa-solid fa-cube"></i>
                </div>
                <h2 className="h2 about-title">Why Choose Us ?</h2>
                <p className="about-text">
                  Nam libero tempore cum soluta as nobis est eligendi optio
                  cumque nihile impedite quo minus id quod maxime.
                </p>
                <button className="btn-app btn-outline">Learn More</button>
              </div>
              <ul className="about-list">
                <li>
                  <div className="about-card">
                    <div className="card-icon">
                      <i className="fa-solid fa-thumbs-up"></i>
                    </div>
                    <h3 className="h3 card-title-home">Esay To Use</h3>
                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="about-card">
                    <div className="card-icon">
                      <i className="fa-regular fa-thumbs-up"></i>
                    </div>
                    <h3 className="h3 card-title-home">Grow Your Revenue</h3>
                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="about-card">
                    <div className="card-icon">
                      <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <h3 className="h3 card-title-home">Analytics Security</h3>
                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="about-card">
                    <div className="card-icon">
                      <i className="fa-solid fa-file-shield"></i>
                    </div>
                    <h3 className="h3 card-title-home">Data Privacy</h3>
                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
    - FEATURES
  */}
          <section className="features" id="features">
            <div className="container-home">
              <h2 className="h2 section-title">Awesome Features</h2>
              <p className="section-text">
                Et harum quidem rerum facilis est et expedita distinctio nam
                libero tempore cum soluta nobis eligendi cumque.
              </p>
              <div className="features-wrapper">
                <figure className="features-banner">
                  <img src={Features1} alt="illustration art" />
                </figure>
                <div className="features-content">
                  <p className="features-content-subtitle">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    <span>CREATIVE FEATURES</span>
                  </p>
                  <h3 className="features-content-title">
                    Build <strong>community</strong> &amp;{" "}
                    <strong>conversion</strong> with our suite of{" "}
                    <strong>social tool</strong>
                  </h3>
                  <p className="features-content-text">
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    a necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint molestiae non recusandae itaque.
                  </p>
                  <ul className="features-list">
                    <li className="features-list-item">
                      <i className="fa-brands fa-square-font-awesome-stroke"></i>
                      <p>Donec pede justo fringilla vel nec.</p>
                    </li>
                    <li className="features-list-item">
                      <i className="fa-solid fa-bullhorn"></i>
                      <p>Cras ultricies mi eu turpis hendrerit fringilla.</p>
                    </li>
                  </ul>
                  <div className="btn-group">
                    <button className="btn btn-primary">Read More</button>
                    <button className="btn btn-secondary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="features-wrapper">
                <figure className="features-banner">
                  <img src={Features2} alt="illustration art" />
                </figure>
                <div className="features-content">
                  <p className="features-content-subtitle">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    <span>CREATIVE FEATURES</span>
                  </p>
                  <h3 className="features-content-title">
                    We do the work you <strong>stay focused</strong> on{" "}
                    <strong>your customers.</strong>
                  </h3>
                  <p className="features-content-text">
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    a necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint molestiae non recusandae itaque.
                  </p>
                  <ul className="features-list">
                    <li className="features-list-item">
                      <i className="fa-solid fa-rocket"></i>
                      <p>Donec pede justo fringilla vel nec.</p>
                    </li>
                    <li className="features-list-item">
                      <i className="fa-solid fa-wifi"></i>
                      <p>Cras ultricies mi eu turpis hendrerit fringilla.</p>
                    </li>
                  </ul>
                  <div className="btn-group">
                    <button className="btn btn-primary">Read More</button>
                    <button className="btn btn-secondary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="blog" id="blog">
            <div className="container-home">
              <h2 className="h2 section-title">Latest News</h2>
              <p className="section-text">
                Et harum quidem rerum facilis est et expedita distinctio nam
                libero tempore cum soluta nobis eligendi cumque.
              </p>
              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="blog-banner">
                      <img src={BlogBanner1} alt="Best Traveling Place" />
                    </figure>
                    <div className="blog-meta">
                      <span>
                        <i className="fa-solid fa-calendar"></i>
                        <time dateTime="2021-04-10">april 10 2021</time>
                      </span>
                      <span>
                        <i className="fa-solid fa-person"></i>
                        <p>admin</p>
                      </span>
                    </div>
                    <h3 className="blog-title">Best Traveling Place</h3>
                    <p className="blog-text">
                      Integer ante arcu accumsan a consectetuer eget posuere
                      mauris praesent adipiscing phasellus ullamcorper ipsum
                      rutrum punc.
                    </p>
                    <a href="#" className="blog-link-btn">
                      <span>Learn More</span>
                      <i className="fa-solid fa-circle-chevron-right"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="blog-banner">
                      <img src={BlogBanner2} alt="Private Meeting Room" />
                    </figure>
                    <div className="blog-meta">
                      <span>
                        <i className="fa-solid fa-calendar"></i>
                        <time dateTime="2021-04-10">april 10 2021</time>
                      </span>
                      <span>
                        <i className="fa-solid fa-person"></i>
                        <p>admin</p>
                      </span>
                    </div>
                    <h3 className="blog-title">Private Meeting Room</h3>
                    <p className="blog-text">
                      Integer ante arcu accumsan a consectetuer eget posuere
                      mauris praesent adipiscing phasellus ullamcorper ipsum
                      rutrum punc.
                    </p>
                    <a href="#" className="blog-link-btn">
                      <span>Learn More</span>
                      <i className="fa-solid fa-circle-chevron-right"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="blog-banner">
                      <img src={BlogBanner3} alt="The Best Business Ideas" />
                    </figure>
                    <div className="blog-meta">
                      <span>
                        <i className="fa-solid fa-calendar"></i>

                        <time dateTime="2021-04-10">april 10 2021</time>
                      </span>
                      <span>
                        <i className="fa-solid fa-person"></i>

                        <p>admin</p>
                      </span>
                    </div>
                    <h3 className="blog-title">The Best Business Ideas</h3>
                    <p className="blog-text">
                      Integer ante arcu accumsan a consectetuer eget posuere
                      mauris praesent adipiscing phasellus ullamcorper ipsum
                      rutrum punc.
                    </p>
                    <a href="#" className="blog-link-btn">
                      <span>Learn More</span>
                      <i className="fa-solid fa-circle-chevron-right"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
    - CONTACT
  */}
          <section className="contact" id="contact">
            <div className="container-home">
              <h2 className="h2 section-title">Contact Us</h2>
              <p className="section-text">
                Et harum quidem rerum facilis est et expedita distinctio nam
                libero tempore cum soluta nobis eligendi cumque.
              </p>
              <div className="contact-wrapper-home">
                <form action="" className="contact-form">
                  <div className="wrapper-flex">
                    <div className="input-wrapper">
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                        className="input-field"
                      />
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="emai">Email*</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <label htmlFor="message">Message*</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type Your Message"
                    className="input-field"
                    defaultValue={""}
                  />
                  <button type="submit" className="btn btn-primary">
                    <span>Send Message</span>
                    {/* <ion-icon name="paper-plane-outline" /> */}
                  </button>
                </form>
                <ul className="contact-list">
                  <li>
                    <a
                      href="mailto:support@website.com"
                      className="contact-link"
                    >
                      <i className="fa-solid fa-envelope"></i>
                      <span>: support@website.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="contact-link">
                      <i className="fa-solid fa-globe"></i>
                      <span>: www.website.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+0011234567890" className="contact-link">
                      <i className="fa-solid fa-phone"></i>
                      <span>: (+001) 123 456 7890</span>
                    </a>
                  </li>
                  <li>
                    <div className="contact-link">
                      <i className="fa-solid fa-clock"></i>
                      <span>: 9:00 AM - 6:00 PM</span>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="contact-link">
                      <i className="fa-solid fa-location-pin"></i>
                      <address>
                        : 1644 Deer Ridge Drive Rochelle Park, NJ 07662
                      </address>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
      <footer>
        <div className="footer-top">
          <div className="container-home">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src={LogoHomeFooter} alt="Landio logo" />
              </a>
              <p className="footer-text">
                Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum
                ante ipsum primis in faucibus ultrices posuere cubilia.
              </p>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-facebook" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-twitter" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-instagram" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-linkedin" /> */}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link-box">
              <ul className="footer-list">
                <li>
                  <p className="footer-item-title">ABOUT US</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Releases
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Mission
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-item-title">CUSTOMERS</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Tranding
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Popular
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Features
                  </a>
                </li>
              </ul>
              <ul className="footer-list">
                <li>
                  <p className="footer-item-title">SUPPORT</p>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Developers
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Customer Service
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container-home">
            <p className="copyright">
              © 2023{" "}
              <a
                target="_blank"
                href="https://github.com/codewithsadee/landio?ref=morioh.com&utm_source=morioh.com"
              >
                codewithsadee
              </a>
              . All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Home);
