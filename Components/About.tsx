import React from 'react';
import { FaPaperPlane, FaPhoneAlt, FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import "@/app/styles/about.css";

export default function About() {
  return (
    <section id="about-section">

      <div className="about-right">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat a dolorem at similique maxime dolorum
          dolore enim dicta voluptatibus, illum recusandae, vel optio tempore ipsum incidunt eum. Aspernatur, repellendus.
        </p>

        <div className="address">
          <ul>
            <li>
              <span className="address-logo">
                <FaPaperPlane />
              </span>
              <p>Address</p>
              <span className="saprater">:</span>
              <p>Karachi Pakistan</p>
            </li>
            <li>
              <span className="address-logo">
                <FaPhoneAlt />
              </span>
              <p>Phone No</p>
              <span className="saprater">:</span>
              <p>+92 1234567890</p>
            </li>
            <li>
              <span className="address-logo">
                <HiOutlineMail />
              </span>
              <p>Email ID</p>
              <span className="saprater">:</span>
              <p>jeonamnaaa@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="expertise">
          <h3>My Expertise</h3>
          <ul>
            <li>
              <span className="expertise-logo">
                <FaHtml5 />
              </span>
              <p>HTML</p>
            </li>
            <li>
              <span className="expertise-logo">
                <FaCss3Alt />
              </span>
              <p>CSS</p>
            </li>
            <li>
              <span className="expertise-logo">
                <FaNodeJs />
              </span>
              <p>JavaScript</p>
            </li>
            <li>
              <span className="expertise-logo">
                <FaReact />
              </span>
              <p>React Js</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
