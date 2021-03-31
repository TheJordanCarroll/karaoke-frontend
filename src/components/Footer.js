import React from "react";

function Footer() {
  return (
    <footer>
        <div className="container-fluid padding footer-container">
            <div className="row text-center">
                <div className="col-md-4">
                    {/* <img src="https://i.ibb.co/z5g62xh/Screen-Shot-2021-03-11-at-9-17-50-AM.png" alt="logo" width="auto"
            height="60rem" /> */}
                    <hr className="light" />
                    <p>(555)-555-5555</p>
                    <p>jordancarroll1994@gmail.com</p>
                    <p>1 South 1st St</p>
                    <p>Brooklyn, NY, 11269</p>
                </div>
                <div className="col-md-4">
                    <hr className="light" />
                    <h5>Our hours</h5>
                    <hr className="light" />
                    <p>Monday: 9am to 5pm</p>
                    <p>Saturday: Closed</p>
                    <p>Sunday: Closed</p>
                </div>
                <div className="col-md-4">
                    <hr className="light" />
                    <h5>Service Area</h5>
                    <hr className="light" />
                    <p>The Bronx, NY, 10451</p>
                    <p>Brooklyn, NY, 11221</p>
                    <p>New York, NY, 10001</p>
                    <p>Queens, NY, 11105</p>
                    <p>Staten Island, NY, 10301</p>
                </div>
                <div className="col-12 footer-container">
                    <hr className="light-100" />
                    <h5>&copy; Jordan Carroll</h5>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;