import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    case 2:
      return <Footer2 />;

    default:
      return <Footer1 />;
  }
};

export default Footer;

const Footer1 = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className="main-footer rel z-1">
      <div className="footer-bottom pt-20 pb-5 rpt-25 bgc-black">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Copyright @{date},{" "}
                  <Link legacyBehavior href="/">
                    Thomas Chan
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="footer-bottom-nav">
                <li>
                  <a href="mailto:chanthomas2203@gmail.com" target="_blank">Email</a>
                </li>
                <li>
                  <a href="callto:+85296684026" target="_blank">Whatsapp</a>
                </li>
                <li>
                  <a href="https://t.me/tomchan322" target="_blank">Telegram</a>
                </li>
                <li>
                  <a href="https://join.skype.com/invite/srCbOlkR3Vqo" target="_blank">Skype</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <a href="#" className="scroll-top scroll-to-target d-inline-block">
            <span className="fas fa-angle-double-up" />
          </a>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </footer>
  );
};

export const Footer2 = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <footer className="main-footer footer-two pt-75 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 col-md-5">
            <div className="footer-widget widget_logo text-center text-md-start wow fadeInUp delay-0-2s">
              <div className="footer-logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="footer-widget widget_nav_menu me-0 wow fadeInUp delay-0-4s">
              <ul>
                <li>
                  <Link legacyBehavior href="services">
                    Service
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="services#pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="about#faqs">
                    Faqs
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="blog">
                    News
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <hr className="mb-40" />
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="footer-widget widget_text text-center text-lg-start wow fadeInUp delay-0-2s">
              <div className="text pb-20">
                These Terms will be applied fully and affect to your use of this
                Website. By using this Website, you agreed to accept all terms
                and conditions written in here.
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="footer-widget widget_social text-center text-lg-end wow fadeInUp delay-0-4s">
              <div className="social-flow">
                <h4>Follow :</h4>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <hr className="mt-0" />
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-10 pb-15">
        <div className="container">
          <div className="copyright-text text-center">
            <p>
              Copyright @{date},{" "}
              <Link legacyBehavior href="/">
                Noxfolio
              </Link>{" "}
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
