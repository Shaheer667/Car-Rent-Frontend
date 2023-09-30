import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <div className="container-fluid topBar bg-dark py-3 px-lg-5 d-none d-lg-block">
            <div className="row">
                <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <Link className="text-body pr-3" href=""><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</Link>
                        <span className="text-body">|</span>
                        <Link className="text-body px-3" href=""><i className="fa fa-envelope mr-2"></i>info@CaRent.com</Link>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <Link className="text-body px-3" href="">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="text-body px-3" href="">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="text-body px-3" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link className="text-body px-3" href="">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="text-body pl-3" href="">
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid position-relative nav-bar p-0">
            <div className="position-relative px-lg-5" style={{ zIndex: 9 }}>
                <Nav className="navbar navbar-expand-lg myNavBar bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                    <Link to="" className="navbar-brand">
                        <h1 className="text-warning mb-1">CaRent</h1>
                    </Link>
                    <Button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link className="nav-item nav-link">About</Link>
                            <Link className="nav-item nav-link">Service</Link>
                            <div className="nav-item dropdown">
                                <Link href="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Cars</Link>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <Link className="dropdown-item" to="/Booking">Car Booking</Link>
                                </div>
                            </div>
                            <Link href="contact.html" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </Nav>
            </div>
        </div>
        <br />
        </>
    );
}

export default Navbar;
