import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  const DS_projects = [
    {
      title: "Companies Success Prediction",
      description:
        "This project analyzes key performance indicators (KPIs) across sales, marketing, product, and customer.",
      imgUrl: "https://github.com/mahmoudmousa-ds/AWS-Deployment/blob/main/img.jpg?raw=true",
      linkUrl: "https://github.com/mahmoudmousa-ds/AWS-Deployment",
    },
    {
      title: "Movie Recommendation Systems",
      description:
        "Developed personalized recommendation systems using deep learning & collaborative filtering.",
      imgUrl: "https://storage.googleapis.com/kaggle-datasets-images/3375918/5872805/e6c438e764799de9a90ae10bd32c51cc/dataset-cover.jpg?t=2023-06-08-06-58-37",
      linkUrl: "https://github.com/mahmoudmousa-ds/MovieLens-Recommendation-System",
    },
    {
      title: "Music Recommendation System",
      description:
        "Developed personalized recommendation systems using K-Nearest Neighbors (KNN) algorithm to provide tailored recommendations based on user preferences and behavior.",
      imgUrl: "https://www.androidheadlines.com/wp-content/uploads/2020/11/spotify-stories-feature.jpg",
      linkUrl: "https://github.com/mahmoudmousa-ds/Spotify-Recommendation-System",
    },
    {
      title: "BigMart Outlet Sales Analysis",
      description:
        "Segmented customers based on demographic, income, spending, and behavior data to enhance marketing personalization. Used clustering techniques like K-means and hierarchical methods.",
      imgUrl: "https://github.com/mahmoudmousa-ds/AWS-Deployment/blob/main/img.png?raw=true",
      linkUrl: "https://github.com/mahmoudmousa-ds/BigMart-Outlet-Sales"
    },
    {
      title: "Starbucks Capstone Challenge",
      description:
      "Analyzed customer behavior & optimized promotional offers using machine learning.",
      imgUrl: "https://github.com/mahmoudmousa-ds/Starbucks-Capstone-Challenge/blob/main/image.png?raw=true",
      linkUrl: "https://github.com/mahmoudmousa-ds/Starbucks-Capstone-Challenge",
    },{
      title: "Flight Delays Prediction",
      description:
        "Built predictive models to estimate airline delay probabilities",
      imgUrl: "https://github.com/mahmoudmousa-ds/AWS-Deployment/blob/main/img.jpeg?raw=true",
      linkUrl: "#" ,
    },
  ];

  const DA_projects = [
    {
      title: "Sales Analysis (Python)",
      description:
        "Conducted an in-depth analysis of sales data using Python to uncover trends, patterns, and insights. Applied clustering techniques to segment customers based on purchasing behavior, enabling targeted marketing strategies and improved decision-making.",
      imgUrl: "https://github.com/mahmoudmousa-ds/AWS-Deployment/blob/main/img.png?raw=true",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20Python/Sales-Analysis-by-Python",
    },
    {
      title: "Uber Analysis (Python)",
      description:
        "Analyzed Uber trip data to identify key trends in ride demand, peak hours, and customer preferences. Leveraged clustering algorithms to group customers based on ride patterns, providing actionable insights for operational optimization.",
      imgUrl: "https://www.pymnts.com/wp-content/uploads/2024/12/Uber.jpg",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20Python/Uber_Analysis_by-Python",
    },
    {
      title: "Ecommerce Analysis (Python)",
      description:
        "Explored ecommerce transaction data to understand customer purchasing behavior and product performance. Utilized clustering techniques to segment customers, enabling personalized recommendations and enhanced user experience.",
      imgUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/blob/main/Analysis%20by%20Python/Ecommerce%20Analysis/image.gif?raw=true",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20Python/Ecommerce%20Analysis",
    },
    {
      title: "Zara Analysis (Python)",
      description:
        "Performed a comprehensive analysis of Zara's sales data to identify key drivers of revenue and customer preferences. Applied clustering methods to categorize customers, aiding in inventory management and marketing strategies.",
      imgUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/blob/main/Analysis%20by%20Python/Zara-Sales-Analysis/ZARA.gif?raw=true",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20Python/Zara-Sales-Analysis",
    },
    {
      title: "Sales & Customer Analytics(Power BI)",
      description:
        "This project is implemented using Power BI to analyze sales data. The goal is to provide insights into sales trends, revenue, and key performance indicators (KPIs) to support data-driven decision-making.",
      imgUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/raw/main/Analysis%20by%20Power%20BI/Sales-Analysis-Power-BI/output_images/Mahmoud%20Mosaad%20Mousa%20-%20Power%20BI%20Final%20Project_page-0001.jpg",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20Power%20BI/Sales-Analysis-Power-BI",
    },
    {
      title: "Customer Churn Analytics(Power BI)",
      description:
        "This project aims to analyze customer churn using data-driven insights. The analysis identifies key factors influencing customer retention and provides strategic recommendations to reduce churn rates.",
      imgUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/raw/main/Analysis%20by%20Power%20BI/Customers-Churn-Analysis-Power-BI/output_images/Customers%20Churn_page-0002.jpg",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20Power%20BI/Customers-Churn-Analysis-Power-BI",
    },
    {
      title: "Grocery Store Sales Analysis(SQL)",
      description:
        "FoodYum is a grocery store chain aiming to optimize product stocking across various price ranges. This analysis identifies sales trends to enhance inventory management and customer satisfaction.",
      imgUrl: "https://shoppermotion.com/wp-content/uploads/2020/03/portada1-1-scaled-1.jpg",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20SQL/Grocery%20Store%20Sales",
    },
    {
      title: "Danny Diner Case Study(SQL)",
      description:
        "Analyzed customer transactions, loyalty points, and menu items to gain insights into customer behavior and enhance business operations.",
      imgUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/raw/main/Analysis%20by%20SQL/Danny%20Diner%20Case%20Study/Images/image.png",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20SQL/Danny%20Diner%20Case%20Study",
    },
    {
      title: "Data Bank Case Study(SQL)",
      description:
     "Data Bank wants to better understand customer spending habits and transaction patterns.",
      imgUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/raw/main/Analysis%20by%20SQL/Data%20Bank%20Case%20Study/Images/Data%20Bank%20Logo.png",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20SQL/Data%20Bank%20Case%20Study",
    },
    {
      title: "Airbnb Listing Analysis(Tableau)",
      description:
        "This repository contains analysis and visualization of Airbnb listing data from 2016. It provides insights into rental properties, pricing patterns, and geographical distribution of Airbnb accommodations.",
      imgUrl: "https://github.com/mahmoudmousa-ds/airbnb-listing-2016/raw/main/AirBnb%20Dashboard.png",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20Tableau/airbnb-listing-2016-by-Tableau",
    },
    {
      title: "Sales Analysis (Excel)",
      description:
        "This repository contains sales, revenue, customer, and operational data for a business. It includes metrics on revenue, top-selling products, customer behavior, order fulfillment, and supplier details.",
      imgUrl: "https://github.com/mahmoudmousa-ds/AWS-Deployment/blob/main/img.png?raw=true",
      linkUrl: "https://github.com/mahmoudmousa-ds/Data-Analytics-Visualization/tree/main/Analysis%20by%20Excel/Excel-Sales-Analysis-Project",
    }
  ];
  
  
  const AI_SE_projects = [
    {
      title: "Real Estate Market Scraper (Riyadh)",
      description:
        "This project focuses on analyzing the real estate market in the Riyadh region by scraping data from the Bayut website, cleaning and transforming it, performing feature engineering, and visualizing insights using Power BI and python.",
      imgUrl: "https://github.com/mahmoudmousa-ds/RealEstate-Scraping-Project/raw/main/dashboard.jpg",
      linkUrl: "https://github.com/mahmoudmousa-ds/RealEstate-Scraping-Project",
    },
    {
      title: "Wuzzuf Data Scraping",
      description:
        "This project involves web scraping from the WUZZUF website using BeautifulSoup and CSV, traversing specific HTML elements.",
      imgUrl: "https://static.wuzzuf-data.net/og-img-762b889817010ae3653ef89cf0a9d9e9.jpg",
      linkUrl: "https://github.com/mahmoudmousa-ds/wuzzuf-Scraping",
    },
    {
      title: "Student Management System(POSTGRES & Python)",
      description:
        "This project is a Python-based Student Management System built using the Tkinter library. It provides functionalities to efficiently manage student information, including adding, searching, updating, deleting, displaying, and exporting student data to a CSV file.",
      imgUrl: "https://github.com/mahmoudmousa-ds/Students-Managment-System/raw/main/Dashboard.png",
      linkUrl: "https://github.com/mahmoudmousa-ds/Students-Managment-System",
    },
    {
      title: "Job Recruitment System(TSQL)",
      description:
        "This project is a Job Recruitment Database designed using Microsoft SQL Server. It efficiently manages job postings, applications, interviews, and applicant data, streamlining the recruitment workflow for recruiters and applicants.",
      imgUrl: "https://github.com/mahmoudmousa-ds/Job-Recruitment-System/raw/main/ERD.png",
      linkUrl: "https://github.com/mahmoudmousa-ds/Job-Recruitment-System",
    }

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row> 
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Data Scientist</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Analyst</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Data Engineering & Web Scraping</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          DS_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          DA_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          AI_SE_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
