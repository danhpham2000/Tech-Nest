import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form action="/">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" required />

        <label htmlFor="message">Content</label>
        <textarea
          name="message"
          id="message"
          cols="70"
          rows="30"
          required
        ></textarea>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
