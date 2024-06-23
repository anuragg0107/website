import "./Main.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import image1 from "../../Assests/Image/softwaredevelopment.png";
import image2 from "../../Assests/Image/webdevelopment.jpg";
import image3 from "../../Assests/Image/appdevelopment.jpg";
import image4 from "../../Assests/Image/digitalmarketing.jpg";
import image5 from "../../Assests/Image/d.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBell,
  faBriefcase,
  faBullhorn,
  faHeadphones,
  faLightbulb,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Progressively empower business 'outside the box' thinking with resource-leveling partnerships.",
      icon: faVectorSquare,
    },
    {
      title: "SEO Optimization",
      description:
        "Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.",
      icon: faBriefcase,
    },
    {
      title: "Web Development",
      description:
        "Compellingly embrace empowered e-business after user friendly intellectual capital.",
      icon: faBell,
    },
    {
      title: "Content Writing",
      description:
        "Collaboratively initiate market positioning total linkage with client-centric core competencies.",
      icon: faBullhorn,
    },
    {
      title: "Graphic Design",
      description:
        "Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service.",
      icon: faHeadphones,
    },
    {
      title: "Social Media Management",
      description:
        "Assertively iterate resource maximizing products after leading-edge intellectual capital.",
      icon: faLightbulb,
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
       <SwiperSlide>
          {" "}
          <Image src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image4} />
        </SwiperSlide>
      </Swiper>
      <Container style={{ marginTop: "20px" }}>
        <h5 style={{ textAlign: "center", color: "#e80566" }}>Our Services</h5>
        <h3 style={{ textAlign: "center", color: "#000000" }}>
          What Can We Do For You
        </h3>
        <h4
          style={{ textAlign: "center", color: "#707070", fontWeight: "400" }}
        >
          Let's do something different together, let's do business together,
          stand out from the crowd, create your new identity, in which our
          globalinfotech team will support{" "}
          <span
            style={{
              borderBottom: "2px solid red",
              paddingBottom: "4px",
              paddingLeft: "5px",
            }}
          >
            you all{" "}
          </span>{" "}
          the time
        </h4>
        <Row
          className="text-center"
          style={{
            marginTop: "20px",
          }}
        >
          {services.map((el, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <div className="box">
                <FontAwesomeIcon
                  icon={el.icon}
                  style={{ color: "#e80566", height: "40px", width: "40px" }}
                />
                <h5>{el.title}</h5>
                <p>{el.description}</p>
                <p>
                  Read More
                  <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Main;
