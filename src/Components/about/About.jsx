import React from 'react';


const About = () => {
  // Your component code...
  return(
    <>
    {/* Navbar Start */}
    <div className="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
        <a href="" className="navbar-brand">
          <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">
            Gymnast
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto p-4 bg-secondary">
            <a href="index.html" className="nav-item nav-link">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link active">
              About Us
            </a>
            <a href="feature.html" className="nav-item nav-link">
              Our Features
            </a>
            <a href="class.html" className="nav-item nav-link">
              Classes
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu text-capitalize">
                <a href="blog.html" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="single.html" className="dropdown-item">
                  Blog Detail
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
    {/* Navbar End */}
    {/* Page Header Start */}
    <div className="container-fluid page-header mb-5">
      <div
        className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
        style={{ minHeight: 400 }}
      >
        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">
          About Us
        </h4>
        <div className="d-inline-flex">
          <p className="m-0 text-white">
            <a className="text-white" href="">
              Home
            </a>
          </p>
          <p className="m-0 text-white px-2">/</p>
          <p className="m-0 text-white">About Us</p>
        </div>
      </div>
    </div>
    {/* Page Header End */}
    {/* About Start */}
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <img
            className="img-fluid mb-4 mb-lg-0"
            src="img/about.jpg"
            alt="Image"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-4 font-weight-bold mb-4">10 Years Experience</h2>
          <p>
            Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore
            takima ipsum lorem rebum
          </p>
          <div className="row py-2">
            <div className="col-sm-6">
              <i className="flaticon-barbell display-2 text-primary" />
              <h4 className="font-weight-bold">Certified GYM Center</h4>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>
            <div className="col-sm-6">
              <i className="flaticon-medal display-2 text-primary" />
              <h4 className="font-weight-bold">Award Winning</h4>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>
          </div>
          <a href="" className="btn btn-lg px-4 btn-outline-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Features Start */}
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-lg-4 p-0">
          <div
            className="d-flex align-items-center bg-secondary text-white px-5"
            style={{ minHeight: 300 }}
          >
            <i className="flaticon-training display-3 text-primary mr-3" />
            <div className="">
              <h2 className="text-white mb-3">Progression</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div
            className="d-flex align-items-center bg-primary text-white px-5"
            style={{ minHeight: 300 }}
          >
            <i className="flaticon-weightlifting display-3 text-secondary mr-3" />
            <div className="">
              <h2 className="text-white mb-3">Workout</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div
            className="d-flex align-items-center bg-secondary text-white px-5"
            style={{ minHeight: 300 }}
          >
            <i className="flaticon-treadmill display-3 text-primary mr-3" />
            <div className="">
              <h2 className="text-white mb-3">Nutrition</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Features End */}
    {/* Team Start */}
    <div className="container pt-5 team">
      <div className="d-flex flex-column text-center mb-5">
        <h4 className="text-primary font-weight-bold">Our Trainers</h4>
        <h4 className="display-4 font-weight-bold">Meet Our Expert Trainers</h4>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-5">
          <div className="card border-0 bg-secondary text-center text-white">
            <img className="card-img-top" src="img/team-1.jpg" alt="" />
            <div className="card-social d-flex align-items-center justify-content-center">
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="card-body bg-secondary">
              <h4 className="card-title text-primary">Trainer Name</h4>
              <p className="card-text">Trainer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <div className="card border-0 bg-secondary text-center text-white">
            <img className="card-img-top" src="img/team-2.jpg" alt="" />
            <div className="card-social d-flex align-items-center justify-content-center">
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="card-body bg-secondary">
              <h4 className="card-title text-primary">Trainer Name</h4>
              <p className="card-text">Trainer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <div className="card border-0 bg-secondary text-center text-white">
            <img className="card-img-top" src="img/team-3.jpg" alt="" />
            <div className="card-social d-flex align-items-center justify-content-center">
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="card-body bg-secondary">
              <h4 className="card-title text-primary">Trainer Name</h4>
              <p className="card-text">Trainer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <div className="card border-0 bg-secondary text-center text-white">
            <img className="card-img-top" src="img/team-4.jpg" alt="" />
            <div className="card-social d-flex align-items-center justify-content-center">
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
                style={{ width: 40, height: 40 }}
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="card-body bg-secondary">
              <h4 className="card-title text-primary">Trainer Name</h4>
              <p className="card-text">Trainer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
    {/* Footer Start */}
    <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
      <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-primary mb-4">Get In Touch</h4>
          <p>
            <i className="fa fa-map-marker-alt mr-2" />
            123 Street, New York, USA
          </p>
          <p>
            <i className="fa fa-phone-alt mr-2" />
            +012 345 67890
          </p>
          <p>
            <i className="fa fa-envelope mr-2" />
            info@example.com
          </p>
          <div className="d-flex justify-content-start mt-4">
            <a
              className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
              style={{ width: 40, height: 40 }}
              href="#"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
              style={{ width: 40, height: 40 }}
              href="#"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
              style={{ width: 40, height: 40 }}
              href="#"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              className="btn btn-outline-light rounded-circle text-center mr-2 px-0"
              style={{ width: 40, height: 40 }}
              href="#"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-primary mb-4">Quick Links</h4>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Home
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              About Us
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Our Features
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Classes
            </a>
            <a className="text-white" href="#">
              <i className="fa fa-angle-right mr-2" />
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-primary mb-4">Popular Links</h4>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Home
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              About Us
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Our Features
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Classes
            </a>
            <a className="text-white" href="#">
              <i className="fa fa-angle-right mr-2" />
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-primary mb-4">Opening Hours</h4>
          <h5 className="text-white">Monday - Friday</h5>
          <p>8.00 AM - 8.00 PM</p>
          <h5 className="text-white">Saturday - Sunday</h5>
          <p>2.00 PM - 8.00 PM</p>
        </div>
      </div>
      <div className="container border-top border-dark pt-5">
        <p className="m-0 text-center text-white">
          ©{" "}
          <a className="text-white font-weight-bold" href="#">
            Your Site Name
          </a>
          . All Rights Reserved. Designed by
          <a className="text-white font-weight-bold" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
    </div>
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-outline-primary back-to-top">
      <i className="fa fa-angle-double-up" />
    </a>
  </>
  

  )
};

export default About;