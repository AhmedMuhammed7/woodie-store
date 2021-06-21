import Header from "../../components/Header/Header";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import MessageForm from "../../components/MessageForm";
import Footer from "../../components/Footer/Footer";

import "./Contact.scss";
const Contact = () => (
  <div className="contact">
    <Header text="Contact Us" />
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-lg-6 text mb-5">
          <h2 className="fw-bold">Say Hello, On Our Support</h2>
          <p className="hint my-4">
            The model is highly accurate original dimensions.
          </p>
          <p className="description mt-5">
            This dining chair is UV mapped so you can use your own
            <br />
            texture. The model also is in real world scale so you can
            <br /> drop it into any environment and with 3 fabric material
            <br /> presets inside 3dMax archive.
          </p>
          <SocialLinks type="advanced" />
        </div>
        <div className="col-lg-6">
          <MessageForm />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
