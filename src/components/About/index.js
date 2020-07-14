import React from "react";
import Row from "react-bootstrap/Row";
import "./style.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RoundImage from "../RoundImage";

function About() {
  return (
    <>
      <Row>
        <Col xs={4}>
          <RoundImage />
        </Col>
        <Col xs={8}>
          <h1 className="about-header">About Me</h1>
          <p className="about-body">
            {" "}
            I currently work at the Edith Cowan University Survey Research
            Centre as a research interviewer, conducting research for various
            government agencies. I'm presently working towards a career in web
            development, undertaking studies with UWA's Cooding Bootcamp program
            to become a full stack developer.
          </p>

          <p>
            I was born in the town of Numurkah in northern Victoria, but
            currently live in Yanchep, Western Australia. In my free time i
            enjoy hiking, photography, gaming as well as spending time with my
            family.
          </p>
          <Button href="https://www.linkedin.com/in/nathan-rosenboom-5410571a6/">
            LinkedIn
          </Button>
          <Button href="https://github.com/Nathan-Rosenboom">Github</Button>
          <Button href="#">Resume</Button>
        </Col>
      </Row>
    </>
  );
}

export default About;
