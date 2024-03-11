import React from "react";
import main from "../Images/main.png";
import "./Hero.css";
import ButtonComp from "../Button/ButtonComp";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <div className=" contact-section">
      <h1>CONTACT US</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
      <div className="contactForm">
        <div>
          <ButtonComp text="VIA SUPPORT CHAT" icon={MdMessage} />

          <ButtonComp text="VIA CALL" icon={FaPhoneAlt} />
        </div>
        <div>
          <img src={main} alt="Main" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
