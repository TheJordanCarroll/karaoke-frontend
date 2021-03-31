import React from "react";

function LandingPage() {
    return (
        <div>
            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="./images/singing1.png" alt="First slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="./images/singing2.png" alt="Second slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="./images/singing3.png" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
            </div> */}
            {/* <div id="slides" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#slides" data-slide-to={0} className="active" />
                <li data-target="#slides" data-slide-to={1} />
                <li data-target="#slides" data-slide-to={2} />
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/singing1.png" /> */}
                {/* <div className="carousel-caption">
                    <h1 className="display-2">Bootstrap</h1>
                    <h3>Complete Website Layout</h3>
                    <button type="button" className="btn btn-outline-light btn-lg">VIEW DEMO</button>
                    <button type="button" className="btn btn-primary btn-lg">Get Started</button>
                </div> */}
                {/* </div>
                <div className="carousel-item">
                    <img src="images/singing2.jpeg" />
                </div>
                <div className="carousel-item">
                <img src="images/singing3.png"/>
                </div>
            </div>
            </div> */}
<div id="carouselExampleIndicators" className="carousel slide landing-page" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://i.ibb.co/fFcDgxj/singing-1.png" alt="First slide" />
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>My Caption Title (1st Image)</h5>
        <p>The whole caption will only show up if the screen is at least medium size.</p>
      </div> */}
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://i.ibb.co/xX2Y3vr/singing-2.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://i.ibb.co/pjZFkjP/singing-3.png" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
    );
  }
  
  export default LandingPage;