import React from 'react';
import { FaGlobe, FaCode, FaCamera } from 'react-icons/fa'; 
import "@/app/styles/services.css"; 

function ServicesSection() {
  return (
    <section className="services_section" id="services">
      <h2>
        My <span>Services</span>
      </h2>
      <div className="row fadein">
        <div className="card">
          <FaGlobe className="icon" />
          <h2>Website Creation</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illo facere nam recusandae beatae, mollitia aperiam sunt natus, tempore erro
            r veritatis placeat maxime saepe eveniet delectus!
          </p>
        </div>

        <div className="card">
          <FaCode className="icon" /> 
          <h2>App Building</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illo facere nam recusandae beatae, mollitia aperiam sunt natus, tempore erro
            r veritatis placeat maxime saepe eveniet delectus!
          </p>
        </div>

        <div className="card">
          <FaCamera className="icon" />
          <h2>Content Creation</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illo facere nam recusandae beatae, mollitia aperiam sunt natus, tempore erro
            r veritatis placeat maxime saepe eveniet delectus!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
