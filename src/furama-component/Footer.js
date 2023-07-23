import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer>
  {/* Footer Start*/}
  <div className="footer-area black-bg footer-padding">
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
          <div className="single-footer-caption mb-30">
            {/* logo */}
            <div className="footer-logo">
              <a href="index.html">
                <img
                  src="images/logFurama.png"
                  alt=""
                  style={{ height: "2rem", width: "8rem" }}
                />
              </a>
            </div>
            <div className="footer-social footer-social2">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fas fa-globe" />
              </a>
              <a href="#">
                <i className="fab fa-behance" />
              </a>
            </div>
            <div className="footer-pera">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="ti-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5">
          <div className="single-footer-caption mb-30">
            <div className="footer-tittle">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">About Furama</a>
                </li>
                <li>
                  <a href="#">Our Best Rooms</a>
                </li>
                <li>
                  <a href="#">Our Photo Gellary</a>
                </li>
                <li>
                  <a href="#">Pool Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
          <div className="single-footer-caption mb-30">
            <div className="footer-tittle">
              <h4>Reservations</h4>
              <ul>
                <li>
                  <a href="#">Tel: 345 5667 889</a>
                </li>
                <li>
                  <a href="#">Skype: Marianabooking</a>
                </li>
                <li>
                  <a href="#">reservations@hotelriver.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4  col-sm-5">
          <div className="single-footer-caption mb-30">
            <div className="footer-tittle">
              <h4>Our Location</h4>
              <ul>
                <li>
                  <a href="#">198 West 21th Street,</a>
                </li>
                <li>
                  <a href="#">Suite 721 New York NY 10016</a>
                </li>
              </ul>
              {/* Form */}
              <div className="footer-form">
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                    method="get"
                    className="subscribe_form relative mail_part"
                  >
                    <input
                      type="email"
                      name="email"
                      id="newsletter-form-email"
                      placeholder="Email Address"
                      className="placeholder hide-on-focus"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = ' Email Address '"
                    />
                    <div className="form-icon">
                      <button
                        type="submit"
                        name="submit"
                        id="newsletter-submit"
                        className="email_icon newsletter-submit button-contactForm"
                      >
                        <img src="assets/img/logo/form-iocn.jpg" alt="" />
                      </button>
                    </div>
                    <div className="mt-10 info" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End*/}
</footer>

            
        </div>
    );
}

export default Footer;