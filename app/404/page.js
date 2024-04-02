import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

export const metadata = {
  title: "404 Error",
};

const E404 = () => {
  return (
    <NoxfolioLayout noFooter={true} onePageMenu={true} noHeader={true}>
      <section className="error-area pt-185 rpt-130 pb-130 rpb-100 rel z-1 text-center">
        <div className="container">
          <div className="error-content">
            <div className="image mb-85 rmb-55 wow fadeInUp delay-0-2s">
              <img src="/assets/images/shape/404-error.png" alt="Error" />
            </div>
            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
              <h1>OPPS!</h1>
              <h2>This Page Are Can't be Found</h2>
            </div>
            <Link legacyBehavior href="/">
              <a className="theme-btn wow fadeInUp delay-0-2s">
                Go To Homepage <i className="far fa-angle-right" />
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
    </NoxfolioLayout>
  );
};
export default E404;
