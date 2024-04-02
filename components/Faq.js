"use client";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <Accordion
      defaultActiveKey="collapseTwo"
      className="accordion wow fadeInUp delay-0-4s"
      id="faq-accordion"
    >
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button"
            eventKey="collapseOne"
          >
            What Service We Provide ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseOne"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <p>
              To take a trivial example which undertakes laborious physical
              exercise except to obtain some advantage pleasure annoying
              consequences
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseTwo"
          >
            How Many Years Of Experience ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseTwo"
          className="accordion-collapse"
        >
          <div className="accordion-body">
            <p>
              At vero eos et accusamus dignissimos ducimus voluptatum corrupti
              quos dolores quas molestias excepturie
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseThree"
          >
            Have Any Professional Team Member ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseThree"
          className="accordion-collapse"
        >
          <div className="accordion-body">
            <p>
              To take a trivial example which undertakes laborious physical
              exercise except to obtain some advantage pleasure annoying
              consequences
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseFour"
          >
            Are You Awards Winning Agency ?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseFour"
          className="accordion-collapse "
        >
          <div className="accordion-body">
            <p>
              To take a trivial example which undertakes laborious physical
              exercise except to obtain some advantage pleasure annoying
              consequences
            </p>
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
};
export default Faq;
