import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [warning, setWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    regex.test(email) ? setWarning(false) : setWarning(true);
  };

  return (
    <section className="contact" id="contact">
      <p>35.000+ already joined</p>
      <h3>Stay up-to-date with what we're doing</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-email">
          <input
            className={`email ${warning ? "warning" : ""}`}
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {warning && (
            <div className="warning-email">
              <p>Whoops, make sure it's an email</p>
            </div>
          )}
        </div>
        <input className="submit" type="submit" value="Contact Us" />
      </form>
    </section>
  );
};

export default Contact;
