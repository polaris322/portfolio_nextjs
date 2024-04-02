"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

const Pricing = ({ extraClass }) => {
  return (
    <section className={`pricing-area pt-130 rpt-100 rel z-1 ${extraClass}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Pricing Package</span>
              <h2>
                Amazing <span>Pricing</span> For your Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-item wow fadeInUp delay-0-2s">
              <div className="pricing-header">
                <h4 className="title">Basic Plan</h4>
                <p className="save-percent">
                  Try Out Basic Plan Save <span>20%</span>
                </p>
                <span className="price">19.95</span>
              </div>
              <div className="pricing-details">
                <p>
                  Sed perspiciatis unde natus totam see rem aperiam eaque
                  inventore
                </p>
                <ul>
                  <li>Website Design</li>
                  <li>Mobile Apps Design</li>
                  <li>Product Design</li>
                  <li className="unable">Digital Marketing</li>
                  <li className="unable">Custom Support</li>
                </ul>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Choose Package <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-item wow fadeInUp delay-0-4s">
              <div className="pricing-header">
                <h4 className="title">Standard Plan</h4>
                <p className="save-percent">
                  Try Out Basic Plan Save <span>35%</span>
                </p>
                <span className="price">19.95</span>
              </div>
              <div className="pricing-details">
                <p>
                  Sed perspiciatis unde natus totam see rem aperiam eaque
                  inventore
                </p>
                <ul>
                  <li>Website Design</li>
                  <li>Mobile Apps Design</li>
                  <li>Product Design</li>
                  <li>Digital Marketing</li>
                  <li>Custom Support</li>
                </ul>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Choose Package <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-item wow fadeInUp delay-0-6s">
              <div className="pricing-header">
                <h4 className="title">Basic Plan</h4>
                <p className="save-percent">
                  Try Out Basic Plan Save <span>45%</span>
                </p>
                <span className="price">19.95</span>
              </div>
              <div className="pricing-details">
                <p>
                  Sed perspiciatis unde natus totam see rem aperiam eaque
                  inventore
                </p>
                <ul>
                  <li>Website Design</li>
                  <li>Mobile Apps Design</li>
                  <li>Product Design</li>
                  <li>Digital Marketing</li>
                  <li>Custom Support</li>
                </ul>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Choose Package <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
};
export default Pricing;

export const Pricing2 = () => {
  return (
    <section
      id="pricing"
      className="pricing-area-two bgc-black pt-140 rpt-100 rel z-1"
    >
      <div className="container">
        <Tab.Container defaultActiveKey={"monthly"}>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-25 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> explore pricing plan
                </span>
                <h2>
                  amazing <span>pricing</span> plan
                </h2>
              </div>
              <Nav as={"ul"} className="nav pricing-tab mb-60" role="tablist">
                <Nav.Item as={"li"}>
                  <Nav.Link as={"button"} eventKey="monthly">
                    Monthly
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"li"}>
                  <Nav.Link as={"button"} eventKey="yearly">
                    Yearly
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <Tab.Content className="tab-content wow fadeInUp delay-0-4s">
            <Tab.Pane className="tab-pane fade" eventKey="monthly">
              <div className="row">
                <div className="col-xl-6">
                  <div className="pricing-item style-two">
                    <div className="row justify-content-between">
                      <div className="col-sm-6">
                        <div className="title">
                          <div className="icon">
                            <i className="far fa-check" />
                          </div>
                          <div className="content">
                            <h4>Private plan</h4>
                            <span className="save">Save 20%</span>
                          </div>
                        </div>
                        <span className="price">29.</span>
                        <div className="arrow">
                          <img
                            src="assets/images/icons/price-arrow.png"
                            alt="Arrow"
                          />
                        </div>
                        <Link legacyBehavior href="/contact">
                          <a className="theme-btn">Get started</a>
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <ul className="list">
                          <li>
                            All Financial Tasks <i className="far fa-check" />
                          </li>
                          <li>
                            Economic Market Survey{" "}
                            <i className="far fa-check" />
                          </li>
                          <li>
                            Sales Operations <i className="far fa-check" />
                          </li>
                          <li>
                            Auto Intelligence <i className="far fa-check" />
                          </li>
                          <li>
                            24/7 Support <i className="far fa-check" />
                          </li>
                          <li>
                            Financila Technology Se{" "}
                            <i className="far fa-check" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="pricing-item style-two">
                    <div className="row justify-content-between">
                      <div className="col-sm-6">
                        <div className="title">
                          <div className="icon">
                            <i className="far fa-check" />
                          </div>
                          <div className="content">
                            <h4>Private plan</h4>
                            <span className="save">Save 20%</span>
                          </div>
                        </div>
                        <span className="price">29.</span>
                        <div className="arrow">
                          <img
                            src="assets/images/icons/price-arrow.png"
                            alt="Arrow"
                          />
                        </div>
                        <Link legacyBehavior href="/contact">
                          <a className="theme-btn">Get started</a>
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <ul className="list">
                          <li>
                            All Financial Tasks <i className="far fa-check" />
                          </li>
                          <li>
                            Economic Market Survey{" "}
                            <i className="far fa-check" />
                          </li>
                          <li>
                            Sales Operations <i className="far fa-check" />
                          </li>
                          <li>
                            Auto Intelligence <i className="far fa-check" />
                          </li>
                          <li>
                            24/7 Support <i className="far fa-check" />
                          </li>
                          <li>
                            Financila Technology Se{" "}
                            <i className="far fa-check" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade yearly" eventKey="yearly">
              <div className="row">
                <div className="col-xl-6">
                  <div className="pricing-item style-two wow fadeInUp delay-0-2s">
                    <div className="row justify-content-between">
                      <div className="col-sm-6">
                        <div className="title">
                          <div className="icon">
                            <i className="far fa-check" />
                          </div>
                          <div className="content">
                            <h4>Private plan</h4>
                            <span className="save">Save 20%</span>
                          </div>
                        </div>
                        <span className="price">29.</span>
                        <div className="arrow">
                          <img
                            src="assets/images/icons/price-arrow.png"
                            alt="Arrow"
                          />
                        </div>
                        <Link legacyBehavior href="/contact">
                          <a className="theme-btn">Get started</a>
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <ul className="list">
                          <li>
                            All Financial Tasks <i className="far fa-check" />
                          </li>
                          <li>
                            Economic Market Survey{" "}
                            <i className="far fa-check" />
                          </li>
                          <li>
                            Sales Operations <i className="far fa-check" />
                          </li>
                          <li>
                            Auto Intelligence <i className="far fa-check" />
                          </li>
                          <li>
                            24/7 Support <i className="far fa-check" />
                          </li>
                          <li>
                            Financila Technology Se{" "}
                            <i className="far fa-check" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="pricing-item style-two wow fadeInUp delay-0-4s">
                    <div className="row justify-content-between">
                      <div className="col-sm-6">
                        <div className="title">
                          <div className="icon">
                            <i className="far fa-check" />
                          </div>
                          <div className="content">
                            <h4>Private plan</h4>
                            <span className="save">Save 20%</span>
                          </div>
                        </div>
                        <span className="price">29.</span>
                        <div className="arrow">
                          <img
                            src="assets/images/icons/price-arrow.png"
                            alt="Arrow"
                          />
                        </div>
                        <Link legacyBehavior href="/contact">
                          <a className="theme-btn">Get started</a>
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <ul className="list">
                          <li>
                            All Financial Tasks <i className="far fa-check" />
                          </li>
                          <li>
                            Economic Market Survey{" "}
                            <i className="far fa-check" />
                          </li>
                          <li>
                            Sales Operations <i className="far fa-check" />
                          </li>
                          <li>
                            Auto Intelligence <i className="far fa-check" />
                          </li>
                          <li>
                            24/7 Support <i className="far fa-check" />
                          </li>
                          <li>
                            Financila Technology Se{" "}
                            <i className="far fa-check" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
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
    </section>
  );
};
