import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <>
        {/* Hello world */}
        <header>
          {/* Header Start */}
          <div className="header-area header-sticky">
            <div className="main-header ">
              <div className="container">
                <div className="row align-items-center">
                  {/* logo */}
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          src="images/logFurama.png"
                          alt=""
                          style={{ height: "2rem", width: "8rem" }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8">
                    {/* main-menu */}
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <NavLink to="/">Home</NavLink>
                          </li>
                          <li>
                            <NavLink to="/about">About</NavLink>
                          </li>
                          <li>
                            <NavLink to="/service">Service</NavLink>
                          </li>
                          <li>
                            <NavLink to="/customer">Customer</NavLink>
                          </li>
                          <li>
                            <NavLink to="/contract">Contract</NavLink>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                            <ul className="submenu">
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="single-blog.html">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Pages</a>
                            <ul className="submenu">
                              <li>
                                <a href="rooms.html">Rooms</a>
                              </li>
                              <li>
                                <a href="elements.html">Element</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2">
                    {/* header-btn */}
                    <div className="header-btn">
                      <a href="#" className="btn btn1 d-none d-lg-block ">
                        Book Online
                      </a>
                    </div>
                  </div>
                  {/* Mobile Menu */}
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header End */}
        </header>
      </>
    </div>
  );
}
export default Header;
