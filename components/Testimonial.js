"use client";
import { noxfolioSlider } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="testimonials-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
          <div className="container">
            <div className="row gap-90">
              <div className="col-lg-4">
                <div className="testimonials-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">
                      Clients Testimonials
                    </span>
                    <h2>
                      I’ve 53+ Clients <span>Feedback</span>
                    </h2>
                    <p>
                      Sed ut perspiciatis unde omnin natus totam rem aperiam
                      eaque inventore veritatis
                    </p>
                  </div>
                  <div className="slider-arrows">
                    <button
                      className="testimonial-prev slick-arrow"
                      onClick={this.previous}
                    >
                      <i className="fal fa-arrow-left" />
                    </button>
                    <button
                      className="testimonial-next slick-arrow"
                      onClick={this.next}
                    >
                      <i className="fal fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <Slider
                  ref={(c) => (this.slider = c)}
                  {...noxfolioSlider.testimonials}
                  className="testimonials-wrap"
                >
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      At vero eoset accusamus et iusto odio dignissimos ducimus
                      quie blanditiis praesentium voluptatum deleniti atque
                      corrupti dolores
                    </div>
                    <div className="testi-des">
                      <h5>Rodolfo E. Shannon</h5>
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author2.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Nam libero tempore cumsoluta nobise est eligendi optio
                      cumque nihil impedit quominus idquod maxime placeat facere
                      possimus
                    </div>
                    <div className="testi-des">
                      <h5>Kenneth J. Dutton</h5>
                      <span>Web Developer</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      At vero eoset accusamus et iusto odio dignissimos ducimus
                      quie blanditiis praesentium voluptatum deleniti atque
                      corrupti dolores
                    </div>
                    <div className="testi-des">
                      <h5>Rodolfo E. Shannon</h5>
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author2.png"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Nam libero tempore cumsoluta nobise est eligendi optio
                      cumque nihil impedit quominus idquod maxime placeat facere
                      possimus
                    </div>
                    <div className="testi-des">
                      <h5>Kenneth J. Dutton</h5>
                      <span>Web Developer</span>
                    </div>
                  </div>
                </Slider>
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
  }
}
