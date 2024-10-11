import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      alert('Email Sent!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="Formbody">
      <div className="Formcontainer">
        <div className="FormtextSection">
          <h1 className="Formh1">What can we help you with?</h1>
          <h2 className="Formh2">Finding the right course for your child</h2>
          <p className="Formp">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes
          </p>
          <h2 className="Formh2">Send your enquiries to us</h2>
          <p className="Formp">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes
          </p>
          <h2 className="Formh2">Refunding</h2>
          <p className="Formp">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes
          </p>
        </div>
        <div className="Formsection">
          <form className="Formform" onSubmit={handleSubmit}>
            <div className="Forminput">
              <div className="Formblock">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="Formblock">
                <input
                  type="text"
                  name="text"
                  placeholder="Type your input here..."
                  required
                />
                <input
                  type="text"
                  name="text"
                  placeholder="Type your input here..."
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
            <button className="Formbutton" type="submit">
              Send Your Message!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
