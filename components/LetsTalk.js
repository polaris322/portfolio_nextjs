import Link from "next/link";

const LetsTalk = () => {
  return (
    <div className="lets-talk-area bgc-black rel z-1 text-center pb-115 rpb-100">
      <div className="container">
        <Link legacyBehavior href="/contact">
          <a className="lets-talk-text wow zoomIn delay-0-2s">
            Get In Touch <i className="fal fa-arrow-right" />
          </a>
        </Link>
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
  );
};
export default LetsTalk;
