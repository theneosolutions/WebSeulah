import Image from "next/image";
import feature_item_1 from "/public/images/feature-item-1.png";
import feature_item_2 from "/public/images/feature-item-2.png";
import check from "/public/images/icon/check.png";
import notification from "/public/images/icon/notification.png";
import sheled from "/public/images/icon/sheled.png";

const Features = () => {
  return (
    <>
      <section className="features-section">
        <div className="overlay pt-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6">
                <div className="top-section">
                  <span className="head-icon d-flex justify-content-center align-items-center">
                    <Image src={notification} alt="icon" />
                  </span>
                  <h5 className="sub-title">Digital Banking</h5>
                  <h3 className="title">Optimal Financial Partner </h3>
                  <p>
                  We are committed to providing top-tier financial services in full compliance with Islamic Sharia principles.
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Instant approvals</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>
                      Safe and Secure payment
                      </span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>
                      Fully digital solution
                      </span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>
                      Quick, easy and Hassle-Free
                      </span>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <div className="img-area">
                  <Image src={feature_item_1} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section second">
        <div className="overlay pt-120 pb-120">
          <div className="container wow fadeInUp">
            <div className="row">
              <div className="col-lg-6 text-start cus-ord">
                <div className="img-area">
                  <Image src={feature_item_2} alt="image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="top-section">
                  <span className="head-icon d-flex justify-content-center align-items-center">
                    <Image src={sheled} alt="icon" />
                  </span>
                  <h5 className="sub-title">Digital Finance</h5>
                  <h className="title">Instant Loans at Your Fingertips</h>
                  <p>
                  Sauleh is a forward-thinking fintech organization committed to advancing financial inclusion in Saudi Arabia. The core purpose of our service is to provide a convenient and accessible platform for individuals and businesses to access various types of loans, such as.
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Personal loans</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Business loans</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Education loans</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
