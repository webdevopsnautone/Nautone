class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
     
      <div class="head-container">
        <input type="checkbox" name="" id="check">
        <div class="logo-container">
            <a class="logo" href="/">
                <img class="img-fluid" src="images/web-logo.png" alt="#">
            </a>
        </div>
        <div class="nav-btn">
            <div class="nav-links">
                <ul>
                    <li class="nav-link">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Who we Serve
                            <i class="fas fa-caret-down"></i>
                        </a>
                        <div class="dropdown">
                            <ul>
                                <li class="dropdown-link">
                                    <a href="nautone-ed-tech.html"><img src="images/icon-tech.png" alt="#"> Naut – EDtech</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="nautone-ed-com.html"><img src="images/icon-com.png" alt="#"> Naut – ECommerce</a>
                                </li>
                               
                                <li class="dropdown-link">
                                    <a href="nautone-real-estate.html"><img src="images/icon-re.png" alt="#"> Naut – Real Estate</a>
                                </li>

                            </ul>
                        </div>
                    </li>
                    <li class="nav-link">
                        <a href="https://www.blog.nautone.com/">Blog</a>
                    </li>
                    <li class="nav-link">
                        <a href="humans-of-nautone.html">Humans of Nautone</a>
                    </li>
                    <li class="nav-link">
                        <a href="contact-us.html">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="ham-menu-container">
            <div class="ham-menu">
                <div></div>
            </div>
        </div>
    </div>
        
      `;
    }
  }
  
  customElements.define('header-component', Header);