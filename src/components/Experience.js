import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  return (
    <section className="experience" id="experience" style={{ padding: "80px 0", position: "relative", backgroundColor: "#000" }}>
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ fontSize: "45px", fontWeight: "700", textAlign: "center", color: "#fff", marginBottom: "30px" }}>
                    Experience
                  </h2>
                  <div className="experience-bx" style={{ background: "#151515", borderRadius: "20px", padding: "40px", color: "#fff" }}>
                    <h3 style={{ fontSize: "30px", fontWeight: "700", marginBottom: "10px" }}>
                      Data Scientist - African Waves Communication
                    </h3>
                    <p style={{ color: "#B8B8B8", fontSize: "18px", marginBottom: "10px" }}>
                      <strong>Duration:</strong> July 2023 – February 2025
                    </p>
                    <p style={{ color: "#B8B8B8", fontSize: "18px", marginBottom: "10px" }}>
                      <strong>Location:</strong> Hybrid
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#B8B8B8", fontSize: "18px", lineHeight: "1.5em" }}>
                      <li>Analyzed large datasets, improving data-driven decision-making.</li>
                      <li>Developed dashboards, reducing manual reporting time by 30%.</li>
                      <li>Built and deployed ML models, improving predictive accuracy by 15–20%.</li>
                      <li>Automated data pipelines, cutting processing time from 5 hours to 45 minutes.</li>
                      <li>Delivered 15+ projects, collaborating with cross-functional teams.</li>
                    </ul>

                    <h3 style={{ fontSize: "30px", fontWeight: "700", marginBottom: "10px", marginTop: "30px" }}>
                      Data Scientist, ML Engineer - Technocolabs Softwares
                    </h3>
                    <p style={{ color: "#B8B8B8", fontSize: "18px", marginBottom: "10px" }}>
                      <strong>Duration:</strong> March 2023 – June 2023
                    </p>
                    <p style={{ color: "#B8B8B8", fontSize: "18px", marginBottom: "10px" }}>
                      <strong>Location:</strong> Remote
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#B8B8B8", fontSize: "18px", lineHeight: "1.5em" }}>
                      <li>Fine-tuned and deployed ML models on AWS EC2, improving accuracy by 15%.</li>
                      <li>Scraped and processed unstructured data for business insights.</li>
                      <li>Built predictive models to optimize sales performance.</li>
                      <li>Designed AI models for success prediction and strategic planning.</li>
                    </ul>

                    <h3 style={{ fontSize: "30px", fontWeight: "700", marginBottom: "10px", marginTop: "30px" }}>
                      Freelancer - Data Scientist
                    </h3>
                    <p style={{ color: "#B8B8B8", fontSize: "18px", marginBottom: "10px" }}>
                      <strong>Duration:</strong> June 2020 – Present
                    </p>
                    <p style={{ color: "#B8B8B8", fontSize: "18px", marginBottom: "10px" }}>
                      <strong>Location:</strong> Remote
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#B8B8B8", fontSize: "18px", lineHeight: "1.5em" }}>
                      <li>Analyzed structured, unstructured, and imbalanced datasets as a Data Analyst.</li>
                      <li>Transitioned to Data Scientist, building ML models and delivering 30+ projects.</li>
                    </ul>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};