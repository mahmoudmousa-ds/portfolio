import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/profile.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';





export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Scientist", "Analyst" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline" style={{ background: "none" }}>Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mahmoud Mousa a Data `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Scientist", "Analyst" ]'><span className="wrap">{text}</span></span></h1>
                <p>
                    An Engineer and a curiosity-driven data scientist, eager to leverage machine
                    learning and data analytics to extract meaningful insights, make informed
                    decisions. Specializing in exploratory analysis and statistical experimentation,
                    I contributed to a culture of informed decision-making.
                    <br />
                    My academic journey at Benha University laid a strong foundation in computer
                    systems engineering, and I am currently expanding my expertise through a Master
                    of Data Science at Cairo University.
                  
                  </p>
                  <Button 
                    style={{
                      background: "linear-gradient(to right, #00008b, #000080)",
                      borderColor: "#0000ff",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "linear-gradient(to right, #000080, #00008b)";
                      e.target.style.borderColor = "#00008b";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "linear-gradient(to right, #00008b, #000080)";
                      e.target.style.borderColor = "#0000ff";
                    }}
                    href="https://drive.google.com/file/d/1eXTq8k3ZGROl-cvPt5bBIVhFyvXFy09V/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer">
                    View My Resume
                 </Button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
