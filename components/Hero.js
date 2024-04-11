import Link from "next/link";
import Counter from "./Counter";

const counterData = [
  { id: 1, text: "Years Of Experience", value: "7", valueType: "plus" },
  { id: 2, text: "Project Complete", value: "50", valueType: "plus" },
  { id: 3, text: "Client Satisfactions", value: "99", valueType: "percent" },
];

const Hero = () => {
  return (
    <section id="home" className="main-hero-area pt-150 pb-80 rel z-1">
      <div className="container container-1620">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-7">
            <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
              <span className="h2">Hello, i’m </span>
              <h1>
                <b>Thomas Chan</b> web engineer
              </h1>
              <p>
                Welcome to my portfolio, where innovation meets efficiency in crafting cutting-edge software solutions for a digital world.
              </p>
              <div className="hero-btns">
                <Link legacyBehavior href="/#contact">
                  <a className="theme-btn">
                    Hire Me <i className="far fa-angle-right" />
                  </a>
                </Link>
                <Link legacyBehavior href="/resume.pdf">
                  <a className="read-more">
                    Download Resume <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-5 order-lg-3">
            <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
              {counterData.map((count) => (
                <div className="counter-item counter-text-wrap" key={count.id}>
                  <Counter end={count.value} extraClass={count.valueType} />
                  <span className="counter-title">{count.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="author-image-part wow fadeIn delay-0-3s">
              <img src="/assets/images/hero/chan.jpg" alt="Author" className="img img-thumbnail rounded-circle w-75"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
