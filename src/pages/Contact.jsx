import React, {useRef} from 'react'
import "../styles/Contact.css"
import emailjs from '@emailjs/browser';
function Contact() {
const form = useRef()
const sendEmail = (e) => {
  e.preventDefault();
 emailjs.sendForm('service_xk4p3oy', 'template_9h0zgb3', form.current, 'EjhJoJLzwi7zV3z3n')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();

  };
  return (
    <div id = "contactContainer">
         <h1 id ="greeting">Send Me An Email!</h1>
      <form ref = {form} onSubmit = {sendEmail}>

            <input type= "text" 
                   id = "user_name" 
                   name= "user_name"
                   placeholder= "Full Name"
                   required
            />
<br></br>
            <input type= "email" 
                   id = "email" 
                   name= "user_email"
                   placeholder = "Email"
                   required
            />
<br></br>
            <input type= "text" 
                   id = "subject" 
                   name= "subject"
                   placeholder = "Subject"
                   required
            />
  <br></br>
            <textarea
                    cols="50"
                   rows="7" 
                   id = "message" 
                   name= "message"
                  placeholder="Message goes here"
                   required
            />
  <br></br>
          <button className = "button" type="submit">Send Message</button>

      </form>
    </div>
  )
}

export default Contact