import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      I absolutely loved the diving courses on this platform! The content was engaging, and the instructors were knowledgeable and supportive. I learned so much about diving safety, techniques, and marine life. The certification I earned here helped me land my dream job as a dive instructor!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Ayush Singh</h6>
                        <p>LPU,Jalandhar</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      The course content was comprehensive and informative, and I appreciated the flexibility to learn at my own pace. However, the user interface was a bit clunky, and I had trouble navigating the platform at times. Overall, I gained valuable knowledge, but the user experience could be improved.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Shashikant Raut</h6>
                        <p>LPU, Jalandhar</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      I can't express how impressed I am with this diving platform. From the moment I started, I knew I was in good hands. The courses are incredibly well-structured and comprehensive, covering everything from the basics to advanced techniques. 
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Bhuvi Sunil</h6>
                        <p>LPU, Jalandhar</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
