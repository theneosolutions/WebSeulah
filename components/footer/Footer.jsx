import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Social from "../social/Social";
import footer_Illu_left from "/public/images/footer-Illu-left.png";
import footer_Illu_right from "/public/images/footer-Illu-right.png";
import Logo from "/public/images/logo.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container pt-120">
        <div className="row cus-mar pt-120 pb-120 justify-content-between wow fadeInUp">
          <div className="col-xl-3 col-lg-3 col-md-4 col-6">
            <div className="footer-box">
              <Link href="/" className="logo">
                <Image src={Logo} alt="logo" style={{height:80, width:105}} />
              </Link>
              <p>
                A modern, technology-first bank built for you and your growing
                business.
              </p>
              <div className="social-link d-flex align-items-center">
                {/* Socials links here */}
                <Social
                  items={[
                    [FaFacebookF, "/"],
                    [FaTwitter, "/"],
                    [FaLinkedinIn, "/"],
                    [FaInstagram, "/"],
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-6">
            <div className="footer-box">
              <h5>Company</h5>
              <ul className="footer-link">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/about">Awards</Link>
                </li>
                <li>
                  <Link href="/career-single">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-6">
            <div className="footer-box">
              <h5>Useful Links</h5>
              <ul className="footer-link">
                <li>
                  <Link href="/">Products</Link>
                </li>
                <li>
                  <Link href="/">Business Loan</Link>
                </li>
                <li>
                  <Link href="/">Affiliate Program</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-6">
            <div className="footer-box">
              <h5>Support</h5>
              <ul className="footer-link">
                <li>
                  <Link href="mailto:info@seulah.com">info@seulah.com</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-8">
            <div className="footer-box">
              <h5>Subscribe</h5>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Your Email address"
                    required
                  />
                  <button className="cmn-btn">Subscribe</button>
                </div>
              </form>
              <p>
                Get the latest updates via email. Any time you may unsubscribe
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <div className="left">
                <p>
                  {" "}
                  Copyright © <Link href="index">Seulah</Link> | Designed by{" "}
                  <Link href="https://theneosolutions.com">
                   The NEO Solutions
                  </Link>
                </p>
              </div>
              <div className="right">
                <Link href="/privacy-policy" className="cus-bor">
                  Privacy{" "}
                </Link>
                <Link href="terms-conditions">Terms &amp; Condition </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-area">
        <Image src={footer_Illu_left} className="left" alt="Images" />
        <Image src={footer_Illu_right} className="right" alt="Images" />
      </div>
    </div>
  );
};

export default Footer;
