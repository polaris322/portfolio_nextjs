import Link from "next/link";

const items = [
  {
    id: 1,
    name: "React & Next",
    image: "assets/images/skills/react.svg",
    value: "96",
  },
  {
    id: 2,
    name: "Vue & Nuxt",
    image: "assets/images/skills/vue.svg",
    value: "94",
  },
  {
    id: 3,
    name: "Typescript",
    image: "assets/images/skills/typescript.svg",
    value: "85",
  },
  {
    id: 5,
    name: "Node.js",
    image: "assets/images/skills/nodejs.svg",
    value: "90",
  },
  {
    id: 6,
    name: "Laravel",
    image: "assets/images/skills/laravel.svg",
    value: "92",
  },
  {
    id: 7,
    name: "Django",
    image: "assets/images/skills/django.svg",
    value: "78",
  },
  {
    id: 8,
    name: "Spring Boot",
    image: "assets/images/skills/spring.svg",
    value: "90",
  },
  {
    id: 9,
    name: "ASP.NET MVC",
    image: "assets/images/skills/aspdotnet.svg",
    value: "78",
  },
  {
    id: 10,
    name: "Blockchain",
    image: "assets/images/skills/blockchain.svg",
    value: "75",
  },
  {
    id: 11,
    name: "SQL",
    image: "assets/images/skills/sql.svg",
    value: "88",
  },
  {
    id: 12,
    name: "NoSQL",
    image: "assets/images/skills/mongodb.svg",
    value: "90",
  },
  {
    id: 13,
    name: "AWS Cloud",
    image: "assets/images/skills/aws.svg",
    value: "82",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let’s Explore Popular <span>Skills &amp; Experience</span>
                  </h2>
                  <p>
                    My relentless drive to absorb new technologies manifests in my constant pursuit of knowledge and skill enhancement. Embracing each new challenge with enthusiasm, I eagerly delve into the intricacies of emerging technologies, seeking to understand their potential applications and nuances. From coding languages to cutting-edge frameworks and tools
                  </p>
                </div>
                <Link legacyBehavior href="/resume.pdf">
                  <a className="theme-btn">
                    Download Resume <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {items.map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={item.image} alt="Skill" className='w-50'/>
                        <h5>{item.name}</h5>
                        <span className="percent">{item.value}%</span>
                      </div>
                    </div>
                  ))}
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
export default Skill;
