import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section
      className="contact"
      id="connect"
      style={{
        background: "rgba(0, 0, 0, 0)",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Connect With Me:</h2>
                  <div className="social-icon" style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="mailto:mahmoudmousa.ds@gmail.com" target="_blank" rel="noopener noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" height="40" width="40" />
                    </a>
                    <a href="https://linkedin.com/in/mahmoudmousa-ds" target="_blank" rel="noopener noreferrer">
                      <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="40" width="40" />
                    </a>
                    <a href="https://github.com/mahmoudmousa-ds" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" height="40" width="40" />
                    </a>
                    <a href="https://share.streamli</a>t.io/user/mahmoudmousa-ds" target="_blank" rel="noopener noreferrer">
                      <img src="https://seeklogo.com/images/S/streamlit-logo-1A3B208AE4-seeklogo.com.png" alt="Streamlit" height="40" width="40" />
                    </a>
                    <a href="https://wa.me/+201229709200" target="_blank" rel="noopener noreferrer">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" height="40" width="40" />
                    </a>
                    
                  </div>
                  <p style={{ textAlign: "center", marginTop: "20px" }}>
                    <strong style={{ fontSize: "18px", color: "#dedede" }}>My Profiles on Learning Platforms</strong>
                    <br />
                    <a
                      href="https://www.datacamp.com/portfolio/Mahmoudmousa"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        margin: "10px",
                        padding: "8px 16px",
                        fontSize: "16px",
                        textDecoration: "none",
                        color: "#fff",
                        backgroundColor: "#03B58C",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = "#02916F")}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = "#03B58C")}
                    >
                      DataCamp
                    </a>
                  </p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};