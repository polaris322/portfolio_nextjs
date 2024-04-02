const Resume = () => {
  return (
    <section id="resume" className="resume-area py-130 rpy-100 rel z-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
              <i className="flaticon-asterisk-1" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">My Resume</span>
                  <h2>
                    Real <span>Problem Solutions</span> Experience
                  </h2>
                </div>
              </div>
            </div>
            <div className="resume-items-wrap">
              <div className="row justify-content-between">
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2021 - 2023</span>
                      <h4>Quality Assurance Manager</h4>
                      <span className="company">WeCode Inc, Tsukuba</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2016 - 2020</span>
                      <h4>Lead Backend / Blockchain Developer</h4>
                      <span className="company">The Verticals, Singapore</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2014 - 2025</span>
                      <h4>Front-end Developer</h4>
                      <span className="company">Grab, Singapore</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6">
                  <div className="resume-item wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="far fa-arrow-right" />
                    </div>
                    <div className="content">
                      <span className="years">2013 - 2014 </span>
                      <h4>Intern Developer</h4>
                      <span className="company">Grab, Singapore</span>
                    </div>
                  </div>
                </div>
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
export default Resume;