import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          alt={title}
          style={{
            width: "100%", // Adjust width as needed
            height: "300px", // Fixed height
            objectFit: "cover", // Ensures the image fits nicely
          }}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-btn-container">
            <Button
              style={{
                backgroundColor: "#007bff", // Changed to a standard blue color
                borderColor: "#007bff",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0056b3"; // Darker blue on hover
                e.target.style.borderColor = "#0056b3";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#007bff"; // Revert to original blue
                e.target.style.borderColor = "#007bff";
              }}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
