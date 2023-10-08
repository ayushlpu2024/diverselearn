import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "We focus on comprehensive content development, interactivity, progress tracking, community building, and instructor support. Your platform should offer a wide range of diving courses, catering to various levels of expertise, and use engaging multimedia elements like videos, quizzes, and simulations to enhance the learning experience. ",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Focus on comprehensive content development, interactivity, progress tracking, community building, and instructor support. Your platform should offer a wide range of diving courses, catering to various levels of expertise, and use engaging multimedia elements like videos, quizzes, and simulations to enhance the learning experience. ",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Offering certification through your courses is an excellent way to add value to your educational platform and enhance its appeal to learners. Here's how you can implement certification effectively",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
