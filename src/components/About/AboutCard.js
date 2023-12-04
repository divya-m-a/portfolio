import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple"> Divya Murugesan </span>, a
            passionate Frontend Maestro currently weaving digital wonders at
            <span className="purple"> Lakeba IT Solutions</span> in Coimbatore.{" "}
            <br /> Armed with a{" "}
            <span className="purple">B.Tech in Information Technology</span>{" "}
            from Kamaraj College of Engineering and Technology, I thrive on
            transforming ideas into visually stunning realities. <br />
            {/* Hi Everyone, I am <span className="purple"> Divya Murugesan </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I am currently employed as a software developer at Lakeba.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do! */}
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          {false && (
            <>
              <p style={{ color: "black" }}>
                "Strive to build things that make a difference!"{" "}
              </p>
              <footer className="blockquote-footer">Soumyajit</footer>
            </>
          )}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
