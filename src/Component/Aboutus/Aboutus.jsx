import React from "react";
import "./Aboutus.css";
import { Col, Container, Image, Row } from "react-bootstrap";

const Aboutus = () => {
    const services = [
        {
          title: "Our Vision",
          description:
            "Our vision is to leverage our deep expertise and understanding of the business domain area and requirements of clients to create a solution for their individual business needs. To help clients in creating a positive and strong relationship with their audience and in brand building. To be known for our unique approaches and quality work towards providing the highest satisfaction to every client we work with.",
        },
        {
          title: "Our Mission",
          description:
           "To enhance our client’s online presence by constantly upgrading our technology and competencies. Maintain a decent relationship with our clients and provide services to expand their reach to new markets. Provide impeccable customer service with the highest level of expertise and advice."
        },
        {
          title: "Our Values",
          description:
            "Delivering excellent services to our clients. Honesty and mutual trust are significant to foster relationships with our clients. Transparency in what we deliver. Commitment towards work and getting the job done in the best possible way. Personalized and customized services to the clients."

        },
        {
          title: "Comfortable support",
          description:
            "Our Smart, creative, and experienced team is dedicated to helping you 24*7 by maintaining a decent relationship and providing you the best support regarding all your queries to scale your business by delivering innovative digital marketing solutions.",
          
        },
      ];
  return (
    <>
      <h2>
        ABOUT <span className="aboutus">Global Infotech</span>
      </h2>
      <p className="desc">
        We are a bunch of ambitious and self-motivated professionals, where we
        focus on servicing our e-commerce client’s challenge to demonstrate a
        commitment to enhance their Business.
      </p>
      <div className="impact-container">
        <h2 className="impact">
          Innovative, Impactful and <span className="aboutus"> Responsive</span>
        </h2>
      </div>
      <p className="smalldesc">
        We also provide all types of digital marketing services to boost the
        online presence of your product and brand.
      </p>
      <Row
          className="text-center"
          style={{
            marginTop: "20px",
          }}
        >
          {services.map((el, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <div className="box">
                <h5>{el.title}</h5>
                <p>{el.description}</p>
              </div>
            </Col>
          ))}
        </Row>
    </>
  );
};

export default Aboutus;
