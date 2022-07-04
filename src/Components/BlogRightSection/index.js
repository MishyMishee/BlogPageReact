import { Button, Input } from "antd";
import "./styles.css";
const TextArea = Input.TextArea;
const BlogRightSection = () => {
  return (
    <div className="right-section">
      <section className="submenu">
        <h2>Submenu</h2>
        <ul>
          <li>Home</li>
          <li>Example</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </section>
      <section>
        <div className="profile-card-container">
          <div className="profile-top-card">
            <img src="http://placekitten.com/100/100" />
          </div>
          <div className="contact-card">
            <div>
              <p>Name</p>
              <p>Email</p>
              <p>Phone</p>
            </div>
            <div>
              <p>Apoorva Mishra</p>
              <p>apoorvam.5star@gmail.com</p>
              <p>+91-9999999999</p>
            </div>
          </div>
          <div className="form-card">
            <h2>Send me a message</h2>
            <div>
              <label for="subject">Subject</label>
              <br />

              <Input id="subject" name="subject" />
            </div>
            <div>
              <label for="message">Message:</label>
              <br />

              <TextArea maxLength={100} style={{ height: 120 }}></TextArea>
            </div>
            <br />
            <Button
              id="sendMessage"
              style={{ width: "100%" }}
              type="primary"
              size={"large"}
            >
              Send
            </Button>
          </div>
          <div className="office-card">
            <h2 style={{ padding: "20px", textAlign: "center" }}>
              Or meet me at the office
            </h2>

            <div>
              <iframe
                title="office"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                width="100%"
                height="200"
                frameborder="0"
                // style="border:0"
              ></iframe>
            </div>

            <address style={{ padding: "20px" }}>
              <p>
                ONE MIDTOWN <br /> 31 Hoi Shing Rd <br /> Tuson Wen
              </p>
            </address>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogRightSection;
