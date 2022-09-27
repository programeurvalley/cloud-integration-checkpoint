import logo from './img/logo.png'
import './App.css';

// Images 
import Img1 from './img/img-01.jpg'
import Img2 from './img/img-02.jpg'
import Euro from './img/tn-img-01.jpg'
import Asie from './img/tn-img-02.jpg'
import Afriq from './img/tn-img-03.jpg'
import SouthAm from './img/tn-img-04.jpg'
import Ham from './img/hammer.JPG'
import Air from './img/airplan.JPG'
import Som from './img/Somthing.JPG'
import location from './img/home-icons/location.jpg'
import agen from './img/home-icons/agenda.JPG'
import adult from './img/home-icons/adult.jpg'
import child from  './img/home-icons/child.JPG'
import room from './img/home-icons/room.JPG'

function App() {
  return (
    <>
    <div class="nav-div">
    <nav class="navbar navbar-expand-lg bg-light" >
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-logo" >
          <li>
            <img src={logo} ></img>
          </li>
          <li id="navbar-header">
            <h1>Level</h1>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-list" >
          <li class="nav-item">
            <a class="nav-link"  href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="#Portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="#blogger">Blog Entries</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
    

  <div id="home">
      <form id="home-form">
        <div class="form-row" >
          <input class="form-item" placeholder='Type your destination...' />
          <img src={location} class="home-form-icon location" />
          <img src={agen} class="home-form-icon agenda1" />
          <img src={agen} class="home-form-icon agenda2" />
          <input class="form-item"  type="date"  />
          <input class="form-item"  type="date" />
        </div>
        <div class="form-row div-select">
          <select name="adult" class="form-item" >
            <option value="">Adult</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <img src={adult} class="home-form-icon location" />
          <img src={child} class="home-form-icon agenda1" />
          <img src={room} class="home-form-icon agenda2" />
          <select name="children" class="form-item" >
            <option value="">Children</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <select name="room" class="form-item" >
            <option value="">Room</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary tm-btn-search" id="chk-ava">Check Availability</button>
        <div id="para-link">
          <div class="home-form-para">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div class="home-form-link">
            <a href='#'  class="home-form-link">Need Help?</a> 
          </div>
        </div>
        <i class="fa fa-map-marker fa-2x tm-form-element-icon"></i>
      </form>
  </div>
  
  <div id="Portfolio">
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <h2 class="port-head">We are here to help you?</h2>
                            <p class="port-para">Subscribe to get our newsletters</p>
                            <a class="port-link" href="#">Subscribe Newletters</a>
                        </div>                
                    </div>
                </div>        
            </div>
            
    <div id="blog">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none" class="tm-section-down-arrow">
              <polygon fill="#ee5057" points="0,0  100,0  50,10"></polygon>                   
            </svg>
            <div class="row">
              <div class="col-md-3 card-pro" >
                  <img src={Ham} class="img-center" />
                  <h3 class="tm-color-primary tm-article-title-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                  <p class="para-color-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reiciendis! Blanditiis facere nemo dolor earum, iure fuga numquam.</p>
                  <a href="#" class="text-uppercase tm-color-primary">Continue reading...</a>
              </div>
              <div class="col-md-3 card-pro" >
                  <img src={Air} class="img-center" />
                  <h3 class="tm-color-primary tm-article-title-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                  <p class="para-color-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reiciendis! Blanditiis facere nemo dolor earum, iure fuga numquam.</p>
                  <a href="#" class="text-uppercase tm-color-primary">Continue reading...</a>
              </div>
              <div class="col-md-3 card-pro" >
                  <img src={Som} class="img-center" />
                  <h3 class="tm-color-primary tm-article-title-1">Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
                  <p class="para-color-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reiciendis! Blanditiis facere nemo dolor earum, iure fuga numquam.</p>
                  <a href="#" class="text-uppercase tm-color-primary">Continue reading...</a>
              </div>
            </div>
            
            <div class="contaier article-main" id="blogger">
              <div class="row">
                <div class="col-md-4">
                  <div class="article1">
                    <img src={Img1}  width="100%" />
                    <h3 class="text-uppercase tm-article-title-1">Nunc in felis aliquet metus luctus iaculis</h3>
                    <p>Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla. Nullam sollicitudin at augue venenatis eleifend. Nulla ligula ligula, egestas sit amet viverra id, iaculis sit amet ligula.</p>
                    <a href="#" class="text-uppercase tm-btn-primary" >Get More Info.</a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="article2">
                    <img src={Img2}  width="100%" />
                    <h3 class="text-uppercase tm-article-title-1">Nunc in felis aliquet metus luctus iaculis</h3>
                    <p>Aliquam ac lacus volutpat, dictum risus at, scelerisque nulla. Nullam sollicitudin at augue venenatis eleifend. Nulla ligula ligula, egestas sit amet viverra id, iaculis sit amet ligula.</p>
                    <a href="#" class="text-uppercase tm-btn-primary" >Get More Info.</a>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="article3">
                    <div class="recommend">
                      <h3>Recommended Places</h3>
                      <p>Enamel pin cliche tilde, kitsch and VHS thundercats</p>
                    </div>
                    <div>
                      <div width="100%" class="country">
                        <div class="country-city" width="100%" >
                          <img src={Euro} width="30%" />
                          <h3 width="65%" class="country-name">Europe</h3>
                        </div>
                        <div class="country-city" width="100%">
                          <img src={Asie} width="30%" />
                          <h3 width="65%" class="country-name">Asia</h3>
                        </div>
                        <div class="country-city" width="100%">
                          <img src={Afriq} width="30%" />
                          <h3 width="65%" class="country-name">Africa</h3>
                        </div>
                        <div class="country-city" width="100%">
                          <img src={SouthAm} width="30%" />
                          <h3 width="65%" class="country-name">South America</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>

    <div id="contact">
      <div class="row">
        <div class="col-md-4">

        </div>
        <div class="col-md-3">
          
        </div>
        <div class="col-md-5">
          <form class="contact-form">
            <input type="text" placeholder='Name' class="form-input" />
            <input type="email" placeholder='Email' class="form-input" />
            <input type="text" placeholder='Subject' class="form-input" /><br/>
            <textarea placeholder='Message' class="form-input form-area" >
            </textarea>
            <button type="submit" class="tm-btn-primary btn-special" >SEND MESSAGE NOW</button>
          </form>
          
        </div>
      </div>
    </div>

    <footer>
          <p class="col-sm-12 text-center bg-black p-4 tm-margin-b-0">
                        Copyright © <span class="tm-current-year">2022</span> GOMYCODE
                        
                        - ReDesigned By : <a rel="nofollow" href="https://www.tooplate.com" class="tm-color-primary tm-font-normal" target="_parent">BADA Abderrahmane</a></p>
    </footer>

    </>
  );
}

export default App;
