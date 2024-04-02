import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Skill from "../components/Skill";
import Testimonial from "../components/Testimonial";
import NoxfolioLayout from "../layout/NoxfolioLayout";

export default function Home() {
  return (
    <NoxfolioLayout onePageMenu={true}>
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      {/* About Area start */}
      <About />
      {/* About Area end */}
      {/* Resume Area start */}
      <Resume />
      {/* Resume Area end */}
      {/* Skill Area start */}
      <Skill />
      {/* Skill Area end */}
      {/* Projects Area start */}
      <Projects />
      {/* Projects Area end */}
      {/* Testimonial Area start */}
      <Testimonial />
      {/* Testimonial Area end */}
      {/* Contact Area start */}
      <Contact />
      {/* Contact Area end */}
    </NoxfolioLayout>
  );
}
