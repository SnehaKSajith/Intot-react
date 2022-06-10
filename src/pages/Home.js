import React from "react"
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <React.Fragment>
            <div id="sec1">
    {/* navbar start */}
    <div className="container-fluid"></div>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="#">INTOT</a>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link to= "/Login" style={{textDecoration:"none", color:"white"}}><img src="assets/images/login.png" alt=""/>&nbsp;&nbsp; Login</Link>
          </li>
          <li className="nav-item">
            <Link to= "/Signup" style={{textDecoration:"none", color:"white"}}><img src="assets/images/signup.png" alt=""/>&nbsp;&nbsp; Signup</Link>
          </li>
          <li className="nav-item">
          <Link to= "/" style={{textDecoration:"none", color:"white"}}><img src="assets/images/search-icon.png" alt=""/></Link>
          </li>
          <li className="nav-item">
          <Link to= "/" style={{textDecoration:"none", color:"white"}}><img src="assets/images/menu.png" alt=""/></Link>
          </li>
        </ul>
      </div>
    </nav>
    {/* navbar end */}
    {/* slider img start */}
    <id className=" slider">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-3 offset-md-2">
                <div className="slider_detail">
                  <h1>INNOVATIVE<br/>
                    <span>SOLUTIONS</span>
                  </h1>
                  <p>We find the best solutions fot you, we redesign your home and work places.Discover why over 5,100
                    home owners trust initiative</p>
                  <div><button className="btn btn-outline-light btn-lg read-button">Read More</button></div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="slider_img">
                  <img src="assets/images/slider-img.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3 offset-md-2">
                <div className="slider_detail">
                  <h1>INNOVATIVE<br/>
                    <span>SOLUTIONS</span>
                  </h1>
                  <p>We find the best solutions fot you, we redesign your home and work places.Discover why over 5,100
                    home owners trust initiative</p>
                  <div><button className="btn btn-outline-light btn-lg read-button">Read More</button></div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="slider_img">
                  <img src="assets/images/slider-img.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-container">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span
              className="sr-only">Previous</span></a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span
              className="sr-only">Next</span></a>
        </div>
      </div>
    </id>
    {/* slider img end */}
  </div>
  {/* card sec start */}
  <div className="card_sec">
    <div className="container">
      <h2>WHY INITIATIVE COMPANY</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem</p>
    </div>
    <div className="container">
      <div className="card_sec_container">
        <div className="card_sec_card">
          <div className="card_sec_detail">
            <div className="card_sec_img-box">
              <img src="assets/images/card-img-1.png" alt=""/>
            </div>
            <div className="card_detail">
              <h4>10 YEARS EXPERIENCE</h4>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Morbi leo risus.</p>
            </div>
          </div>
          <div><button className="btn btn-outline-light btn-lg read-btn">Read More</button></div>
        </div>
        <div className="card_sec_card">
          <div className="card_sec_detail">
            <div className="card_sec_img-box">
              <img src="assets/images/card-img-2.png" alt=""/>
            </div>
            <div className="card_detail">
              <h4>A PRO ARCHITECTS TEAM</h4>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Morbi leo risus.</p>
            </div>
          </div>
          <div><button className="btn btn-outline-light btn-lg read-btn">Read More</button></div>
        </div>
        <div className="card_sec_card">
          <div className="card_sec_detail">
            <div className="card_sec_img-box">
              <img src="assets/images/card-img-3.png" alt=""/>
            </div>
            <div className="card_detail">
              <h4>1000+ HAPPY CUSTOMERS</h4>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Morbi leo risus.</p>
            </div>
          </div>
          <div><button className="btn btn-outline-light btn-lg read-btn">Read More</button></div>
        </div>
      </div>
    </div>
  </div>
  {/* card sec end */}
  {/* portfolio start */}
  <div className="portfolio">
    <div className="container">
      <h2>OUR PORTFOLIO</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem</p>
    </div>
    <div className="container padding-top">
      <div className="row">
        <div className="col-md-8">
          <div className="portfolio_img">
            <img src="assets/images/portfolio-img-1.png" alt=""/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="portfolio_img">
            <img src="assets/images/portfolio-img-2.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="portfolio_img">
            <img src="assets/images/portfolio-img-3.png" alt=""/>
          </div>
        </div>
        <div className="col-md-8">
          <div className="portfolio_img">
            <img src="assets/images/portfolio-img-4.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* portfolio end */}
  {/* team sec start */}
  <div className="team_sec">
    <div className="container">
      <h2>OUR TEAM</h2>
      <p>It is a long established fact that a reader will be distracted by the readable</p>
    </div>
    <div className="container">
      <div className="team_container">
        <div className="team-card">
          <div className="team-img-box"><img src="assets/images/team-1.png" alt=""/></div>
          <div className="team-detail-box">
            <h5>JOHN DOE</h5>
            <p>CEO - DESIGNER</p>
            <div className="team-follow">
              <h6>Follow On</h6>
              <div className="team-social">
                <div><a href=""><img src="assets/images/facebook-logo-button.png" alt=""/></a></div>
                <div><a href=""><img src=" assets/images/twitter-logo-button.png" alt=""/></a></div>
                <div><a href=""><img src="assets/images/linkedin.png" alt=""/></a></div>
                <div><a href=""><img src="assets/images/instagram.png" alt=""/></a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-img-box"><img src="assets/images/team-2.png" alt=""/></div>
          <div className="team-detail-box">
            <h5>SANDY DOE</h5>
            <p>CEO - DESIGNER</p>
            <div className="team-follow">
              <h6>Follow On</h6>
              <div className="team-social">
                <div><a href=""><img src="assets/images/facebook-logo-button.png" alt=""/></a></div>
                <div><a href=""><img src=" assets/images/twitter-logo-button.png" alt=""/></a></div>
                <div><a href=""><img src="assets/images/linkedin.png" alt=""/></a></div>
                <div><a href=""><img src="assets/images/instagram.png" alt=""/></a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-img-box"><img src="assets/images/team-3.png" alt=""/></div>
          <div className="team-detail-box">
            <h5>ALEXI DOE</h5>
            <p>CEO - DESIGNER</p>
            <div className="team-follow">
              <h6>Follow On</h6>
              <div className="team-social">
                <div><a href=""><img src="assets/images/facebook-logo-button.png" alt=""/></a></div>
                <div><a href=""><img src=" assets/images/twitter-logo-button.png" alt=""/></a></div>
                <div><a href=""><img src="assets/images/linkedin.png" alt=""/></a></div>
                <div><a href=""><img src="assets/images/instagram.png" alt=""/></a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-card">
          <div className="team-img-box"><img src="assets/images/team-4.png" alt=""/></div>
          <div className="team-detail-box">
            <h5>JOHN DOE</h5>
            <p>CEO - DESIGNER</p>
            <div className="team-follow">
              <h6>Follow On</h6>
              <div className="team-social">
                <div><a href=""><img src="assets/images/facebook-logo-button.png" alt=""/></a></div>
                <div><a href=""><img src=" assets/images/twitter-logo-button.png" alt=""/></a></div>
                <div><a href=""><img src="assets/images/linkedin.png" alt=""/></a></div>
                <div><a href=""><img src="assets/images/instagram.png" alt=""/></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* team sec end */}
  {/* form sec */}
  <div className="form_sec">
    <div className="container">
      <p>Don’t Hesitate To Ask</p>
      <h2 className="">FREE CONSULTATION</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 ">
          <form action="">
            <div className="form-container">
              <div><label>Name<input type="text" /></label></div>
              <div><label>Email<input type="email" /></label></div>
              <div><label>Phone Number<input type="text" /></label></div>
              <div><label>Message<textarea name="" id="" cols="30" rows="10"></textarea></label></div>
              <div className="mt-5"><button type="submit">SEND</button></div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="form_img-box">
            <img src="assets/images/form-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* form sec end */}
  {/* why sec start */}
  <div className="why_sec">
    <div className="container">
      <h2>WHY CHOOSE US?</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
        at its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of using Lorem</p>
    </div>
  </div>
  {/* why sec end */}
  {/* info sec start */}
  <div className="info_sec">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <h5>About Us</h5>
              
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* info sec end */}
        </React.Fragment>
    )
}