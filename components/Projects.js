import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                Explore My Popular <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/koyap.png" alt="koyap" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Wordpress</span>
              <h2>
                <Link legacyBehavior href="https://koyap.com">
                  Booking Luxury Cruise Travel
                </Link>
              </h2>
              <p>
                Book luxury cruise vacation packages with Koyap. We are a reliable travel agency helping clients book cruises & flights for their dream vacation easily at the best prices. Get in touch with our cruise travel specialists & agents!
              </p>
              <Link legacyBehavior href="https://koyap.com">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="/assets/images/projects/bridepay.png" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">React</span>
              <h2>
                <Link legacyBehavior href="https://bridepay.com">
                  Marketplace for bride and grooms
                </Link>
              </h2>
              <p>
                Wedding Deals, Everyday, KLPJ Wedding Fair, Bride, Brides, Bridal, Wedding, Weddings, Marriage, Bridesmaid, Bridegroom, Bridegrooms, Pengantin, Kahwin, Kawin, Perkahwinan, Wedding Vendors, Wedding Packages,  Wedding Products, Wedding Essentials, Pre-Wedding, Actual Day Wedding, Malaysia, Kuala Lumpur, Selangor, Penang, Johor, Perak, Pahang, Negeri Sembilan, Melaka, Malacca, Kedah, Perlis, Terengganu, Kelantan, Sarawak, Sabah, Wedding Fair, Wedding Expo, Bridal Fair, Pameran Pengantin, Chinese Weddings, Malay Weddings, Indian Weddings
              </p>
              <Link legacyBehavior href="https://bridepay.com">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/aabohome.png" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Laravel</span>
              <h2>
                <Link legacyBehavior href="https://www.aabohome.com/">
                  AABO Home Security
                </Link>
              </h2>
              <p>
                The Aabo Home Touch Screen is designed for how you really live, with a
                wireless, secure platform that makes your home safer, smarter and more
                enjoyable than ever.
              </p>
              <Link legacyBehavior href="https://www.aabohome.com/">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/rantic.png" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Social Marketing</span>
              <h2>
                <Link legacyBehavior href="project-details">
                  Become a star on social media
                </Link>
              </h2>
              <p>
                Rantic is the worlds leading social media marketing company. We are unique in our industry in that we offer marketing solutions that drive quality followers to your accounts through our own reliable technologies.

                Buy Instagram Followers, Facebook Likes, and more today with Rantic.
              </p>
              <Link legacyBehavior href="https://www.rantic.com/">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="#">
            <a className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
            </a>
          </Link>
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
export default Projects;