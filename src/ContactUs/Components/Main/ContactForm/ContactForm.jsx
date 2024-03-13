import React from 'react'
import './App.css'
import ButtonComp from "../../Button/ButtonComp";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import main from "../../Images/main.png";

const ContactForm = () => {
  return (
    <div className='main'>
      <div className="contactForm">
          <div className="top_buttons">
            <ButtonComp text="VIA SUPPORT CHAT" icon={MdMessage} />

            <ButtonComp text="VIA CALL" icon={FaPhoneAlt} />
          </div>
          
          <ButtonComp isOutline={true} text="VIA EMAIL FORM" icon={HiMail} />
          <form>
            <div className='form_control'>

            <label htmlFor='name'>Name</label>
            <input type='text' name='name'/>
            </div>
          </form>
        {/* <div>
          <img src={main} alt="Main" />
        </div> */}
      </div>
    </div>
  )
}

export default ContactForm
