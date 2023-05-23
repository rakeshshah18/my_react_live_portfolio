import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bh5wmtc', 'template_gmhylfb', form.current, 'WuE3npXKHSy9XUHBw')
      e.target.reset()
        
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>21amtics464@gmail.com</h5>
            <a href="mailto:dumiemail101@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin  className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Rakesh Shah</h5>
            <a href="https://www.linkedin.com/in/rakeshkumar-shah-1b48a1250" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8511276458</h5>
            <a href="https://api.whatsapp.com/send?phone=918511276458&text=Hello this is the starting message" target='_blank'>Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT */}

        <form Ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
