import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-underline">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="PortFolio"
              description="Precision meets innovation in my personal portfolio, 
              powered by React.js, Material-UI, and Bootstrap. The Home page introduces my professional 
              journey, the About section provides key insights, and the Resume page details my 
              qualifications. Dive into the Projects section for a showcase of my technical proficiency.
               This sleek portfolio is a testament to my commitment to modern web
                development and user-centric design.
               Explore for a quick, comprehensive view of my skills and achievements."
              ghLink="https://github.com/divya-m-a/portfolio"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Pixel-Perfect Web Replication: HTML, CSS, JS Mastery"
              description="
I meticulously replicated a demo website using HTML, CSS, and JavaScript, 
achieving a 99% match. This project exemplifies my prowess in front-end development,
 showcasing precision in design and functionality. The use of these core technologies 
underscores my ability to create polished, true-to-form web experiences."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Attendance Tracking System"
              description="Elevate attendance tracking with our precise Attendance
               Management System. Powered by Node.js, Express.js, and PostgreSQL,
                it seamlessly executes CRUD operations, enabling effortless record
                 management. A testament to efficiency and reliability in attendance tracking,
                  our system ensures precision and user-friendly functionality"
              ghLink="https://github.com/divya-m-a/AttendanceMangaement"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
