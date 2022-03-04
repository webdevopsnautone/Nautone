class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {


      this.innerHTML = `
    <footer class="container-fluid p-3 p-sm-5">
      <div class="row footer-row">
          <div class="col-12 col-lg-5 col-xl-4">
              <p><img class="img-fluid" src="images/web-logo-white.png" alt="#"></p>

              <strong class="pronounced">Pronounced as
                  <span>&nbsp; Naut(nɑːt) - One(wʌn)</span>&nbsp; and sounds like
              </strong>

              <div class="d-flex footer-icons">
                  <div class="footer-icon"> Dot
                      <img class="img-fluid" src="images/circle.png" alt="#">
                  </div>
                  <div class="footer-icon"> not
                      <img class="img-fluid" src="images/cross.png" alt="#">
                  </div>
                  <div class="footer-icon"> knot
                      <img class="img-fluid" src="images/knot.png" alt="#">
                  </div>
                  <div class="footer-icon"> hot
                      <img class="img-fluid" src="images/hot.png" alt="#">
                  </div>
              </div>

              <strong class="d-flex pronunciation">
                  Play Pronunciation
                  <a href="javascript:playSound('nautone-s');" style="margin-left: 5px;">
                      <i class="fas fa-volume-up fa-2x"></i>
                  </a>
                  <a href="javascript:playSound('nautone-s')"></a>
                  <audio id="nautone-s" src="audio/sounds.mp3" preload="auto"></audio>
              </strong>

              <ul class="d-flex social-network">
                  <li>
                      <a href="https://www.facebook.com/Nautone001/">
                          <i class="fab fa-facebook fa-3x"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://instagram.com/nautone01?igshid=199flvmven2fq">
                          <i class="fab fa-instagram fa-3x"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://twitter.com/Nautonetweets?s=09">
                          <i class="fab fa-twitter fa-3x"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/company/nautone">
                          <i class="fab fa-linkedin fa-3x"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://www.pinterest.it/Nautone_India/">
                          <i class="fab fa-pinterest fa-3x"></i>
                      </a>
                  </li>
              </ul>
              <div class="footer-links my-4">
                  <a href="terms-conditions.html">Terms &amp; Conditions</a>
                  <a href="privacy-policy.html">Privacy Policy</a>
              </div>
          </div>
          <div class="col-12 col-lg-7 col-xl-8">
              <div class="footer-links my-lg-5 footer-links-two">
                  <a class="" href="index.html">Home</a>
                  <a class="" href="humans-of-nautone.html">Humans of Nautone</a>
                  <a class="" href="https://www.blog.nautone.com/">Blog</a>
                  <a class="" href="contact-us.html">Contact Us</a>
              </div>
              <div class="d-flex mt-5 mb-2 footer-content-main">
                  <div class="footer-content-div">
                      <h4 class="subtitle mt-4 mb-2">Who are we?</h4>
                      <p class="footer-content mb-4">A lot of businesses enter the market to solve a problem and we solve the problems of those businesses. Nautone takes a major chunk of work off their plate by taking care of their sales, marketing and support needs while they focus on making their product better. </p>
                  </div>
                  <div class="footer-content-div">
                      <h4 class="subtitle mt-4 mb-2">&nbsp;</h4>
                      <p class="footer-content mb-4">We believe from our heart that innovative and groundbreaking businesses such as yours should focus on the product while we play with the numbers and help them head northwards. </p>
                  </div>
              </div>
              <div class="d-flex flex-row footer-content" style="font-size: 12px;">
                  Disclaimer: Icons inherit the font-size of their parent container which allow them to match any text you might use with them. With the following classes, we can increase or decrease the size of icons relative to that inherited font-size.    
              </div>
          </div>
      </div>
      <div class="row footer-row mb-md-5">
          <div class="col-12 col-lg-5">
              <div class="my-2">© Nautone Pvt. Ltd.&nbsp;2021</div>
          </div>
          <div class="col-12 col-lg-7">
              <div class="my-2 made-with">Made with &nbsp;<img class="img-fluid" src="images/yellow-heart.png" alt="#"> &nbsp; in India for  &nbsp;<img class="img-fluid" src="images/globe.png" alt="#"> </div>
          </div>
      </div>
  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);