import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Here you would handle sending the email, either via a service or API call
    try {
      // Call your email service or backend here
      alert("Email Sent!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="Formbody">
      <div className="Formcontainer">
        <div className="FormtextSection">
          <h1 className="Formh1">What can we help you with?</h1>
          <h2 className="Formh2">Questions about the programs</h2>
          <p className="Formp">
            The programs will vary from different schools. If you would like to
            know more detail feel free to reach out!
          </p>
          <h2 className="Formh2">Inquire to us</h2>
          <p className="Formp">
            Got a question? Check out our FAQs or send us a message!
          </p>
          <h2 className="Formh2">Request a refund</h2>
          <p className="Formp">
            You can request a refund by completing our form. We will process the
            refund according to the rules of your fare at the time of you
            booking.
          </p>
          <div className="Formfaqbtn">FAQs</div>
        </div>
        <div className="Formsection">
          <form className="Formform" onSubmit={handleSubmit}>
            <div className="Forminput">
              <div className="Formblock">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="Formblock">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="FormButtonContainer">
              <button className="Formbutton" type="submit">
                Send Your Message!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
