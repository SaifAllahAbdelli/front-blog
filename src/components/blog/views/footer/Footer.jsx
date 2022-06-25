import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{ backgroundColor: "#DBDFFD" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className=" p-2 me-5 d-none d-lg-block" style={{"marginTop":"2%"}}>
          <span>Conatacter-nous sur les réseaux sociaux:</span>
        </div>

        <div className='p2container p-4 pb-0'>
        <section className='mb-4'>
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>

        

         
          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

         
        </section>
      </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="d-flex flex-row justify-content-center flex-wrap">
            <div className="p-2 col-lg-5 col-md-12 col-sm-12">
              <h6 className=" fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>ADN EXPERTISE
              </h6>
              <p style={{ marginLeft: "1%", marginRight: "1%" }}>
                ADN Expertise est un cabinet de consulting en stratégies et
                développement IT. Notre mission principale est de vous
                accompagner dans votre transformation digitale à travers une
                large gamme de services 4.0 : développement Web & Mobile,
                DevOps, Big Data, Méthodologie.. , en misant sur une équipe qui
                a pour devise créativité, réactivité et une approche centrée
                client pour assurer une transformation réussie.
              </p>
            </div>
            <div
              className="p-2 col-lg-5 col-md-12 col-sm-12"
              style={{ marginLeft: "6.5%" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p style={{ marginLeft: "3%", marginRight: "1%" }}>
                <i
                  className="fas fa-home me-3"
                  style={{ marginRight: "3%" }}
                ></i>{" "}
                New York, NY 10012, US
              </p>
              <p style={{ marginLeft: "-10%", marginRight: "1%" }}>
                <i
                  className="fas fa-envelope me-3"
                  style={{ marginRight: "3%" }}
                ></i>
                info@example.com
              </p>
              <p style={{ marginLeft: "-15%", marginRight: "1%" }}>
                <i
                  className="fas fa-phone me-3"
                  style={{ marginRight: "3%" }}
                ></i>{" "}
                + 01 234 567 88
              </p>
            </div>
          </div>
          <div className="row mt-3"></div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          ADN EXPERTISE
        </a>
      </div>
    </MDBFooter>
  );
}
