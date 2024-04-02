import Link from "next/link";

const PageBanner = ({ pageName }) => {
  return (
    <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
      <div className="container">
        <div className="banner-inner text-white">
          <h1 className="page-title wow fadeInUp delay-0-2s">{pageName}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
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
export default PageBanner;
