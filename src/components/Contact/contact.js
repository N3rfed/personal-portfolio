import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
        emailjs.sendForm('service_ctdicq2', 'template_3i6dfoo', form.current, {publicKey: 'rgVcAUsQyQMqseaUT',})
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Email sent!");
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me!</h1>
                <span className='contactDesc'>Please fill out the form below to contact me.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name="your_name"/>
                    <input type="email" className="email" placeholder='Your Email' name="your_email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                </form>
            </div>
        </section>

    )
}

export default Contact