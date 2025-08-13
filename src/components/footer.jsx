import React from "react";
import "../css/footer.css";

export default function footer() {
  const currentYear = new Date().getFullYear();
  const languages = [
    { name: "UAE", flag: "/Brand/flags/UAE.png" },
    { name: "Australia", flag: "/Brand/flags/AU.png" },
    { name: "China", flag: "/Brand/flags/CN.png" },
    { name: "Germany", flag: "/Brand/flags/GE.png" },
    { name: "Denmark", flag: "/Brand/flags/DK.png" },
    { name: "France", flag: "/Brand/flags/FR.png" },
    { name: "UK", flag: "/Brand/flags/UK.png" },
    { name: "Italy", flag: "/Brand/flags/IT.png" },
    { name: "Russia", flag: "/Brand/flags/RU.png" },
    { name: "USA", flag: "/Brand/flags/US.png" },
  ];
  return (
    <div>
      <footer id="footer" className="foot">
        <section id="subscription">
          <h2>Subscribe on our newsletter</h2>
          <p>Get daily news on upcoming offers from many suppliers all over the world</p>
          <div>
            <input type="email" placeholder="✉︎ Email" required/>
            <p>Subscribe</p>
          </div>
        </section>
        <div className="footerAbove">
          {" "}
          <div className="info">
            <img src="/Brand/logo-colored.png" alt="Logo" className="logoImg" />
            <p className="para">
              Best information about the company gies here but now lorem ipsum is
            </p>
            <div className="socialIcons">
              <img src="/Brand/icons/social/facebook.png" alt="" className="socialIcon" />
              <img src="/Brand/icons/social/x.png" alt="" className="socialIcon" />
              <img src="/Brand/icons/social/linkedin.png" alt="" className="socialIcon" />
              <img src="/Brand/icons/social/insta.png" alt="" className="socialIcon" />
              <img src="/Brand/icons/social/youtube.png" alt="" className="socialIcon" />
            </div>
          </div>
          <div className="footCol">
            <h2 className="heading" id="colHeading">
              About
            </h2>

            <li className="colList">About Us</li>
            <li className="colList">Find Store</li>
            <li className="colList">Categories</li>
            <li className="colList">Blogs</li>
          </div>
          <div className="footCol">
            <h2 className="heading" id="colHeading">
              Partnership
            </h2>

            <li className="colList">About Us</li>
            <li className="colList">Find Store</li>
            <li className="colList">Categories</li>
            <li className="colList">Blogs</li>
          </div>
          <div className="footCol">
            <h2 className="heading" id="colHeading">
              Information
            </h2>

            <li className="colList">Help Center</li>
            <li className="colList">Money Refund</li>
            <li className="colList">Contact us</li>
            <li className="colList">Shipping</li>
          </div>
          <div className="footCol">
            <h2 className="heading">For Users</h2>

            <li className="colList">Login</li>
            <li className="colList">Register</li>
            <li className="colList">Settings</li>
            <li className="colList">My Orders</li>
          </div>
          <div className="footCol">
            <h2 className="heading">Get App</h2>
            <button className="btn btnLink">
              <img src="/Brand/icons/social/apple.png" alt="" className="socialIcon" />
              <div className="btnTxt">
                <p className="btnPara">
                  <small className="txtSmall">Download on</small>
                  <br /> App Store
                </p>
              </div>
            </button>
            <button className="btn btnLink">
              <img src="/Brand/icons/social/playstore.png" alt="" className="socialIcon" />
              <div className="btnTxt">
                <p className="btnPara">
                  <small className="txtSmall transform">GET IT ON</small>
                  <br /> Play Store
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="footerBottom">
          <p className="copyRight">&copy;{currentYear} Ecommerce.</p>

          <div className="lang">
            <div className="dropdown listItems">
              <li className="dropbtn">
                English,
                <img className="flag-icon" src="/Brand/flags/US.png" alt="Expand" />
                <img className="icon" src="/Brand/icons/upArrow.png" alt="Expand" />
              </li>
              <div className="dropdown-footer">
                {languages.map((lang, index) => (
                  <div key={index} className="dropdown-item">
                    <img src={lang.flag} alt={lang.name} className="flag-icon" />
                    {lang.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
