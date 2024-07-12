import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className=" container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI Dessign</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="servise__list-icon" />
              <p>Intractivity and Animations</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Prototypes</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Color Theory</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Design Patterns</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Interaction Design</p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX */}

        
        {/*End of WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="servise__list-icon" />
              <p>Delivering Websites</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Web Apps</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>eCommerce Solutions</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>APIs Development</p>
            </li>

            <li>
              <BiCheck className="servise__list-icon" />
              <p>Database Management</p>
            </li>

          </ul>
        </article>
        {/*End of Content Creation */}

      </div>
    </section>
  );
};

export default Services;
