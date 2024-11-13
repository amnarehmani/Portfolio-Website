import React from 'react';
import "@/app/styles/contact.css";

function Contact() {
  return (
    <section className="contact-section" id="ContactUs">
      <h2>Contact</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est in quos nulla totam voluptatibus!</p>
      <form id="Form" action="#">
        <div className="input-name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" className="btn contact-btn">SUBMIT</button>
      </form>
    </section>
  );
}

export default Contact;
