import React, { useEffect, useState } from 'react'

function Contactme() {
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState();
    const [webiste, setWebsite] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Your Form Has Been Submitted ")
    }
  return (
    <div>
    <section class="w3l-contact py-5" id="contact">
        <div class="container py-lg-5 py-4">
            <div class="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 class="title-small">Get In Touch</h5>
                <h3 class="title-style">Contact Me</h3>
            </div>
            <div class="row contact-block">
                <div class="col-md-6 contact-left pe-lg-5">
                    <h3 class="mb-sm-4 mb-3">Contact Info</h3>
                    <p class="cont-para mb-sm-5 mb-4">I enjoy discussing new projects and design challenges. Please
                        share as
                        much info, as possible so
                        we can get the most out of our first catch-up.</p>
                    <div class="cont-details">
                        <p><i class="fas fa-map-marker-alt"></i>192232, House Number 86, Paniwah Kulgam Kashmir .</p>
                        <p><i class="fas fa-phone-alt"></i><a href="tel:+916006287541">+91 6006287541</a></p>
                        <p><i class="fas fa-envelope-open-text"></i><a href="mailto:khandaymudabir@mail.com"
                                class="mail">khandaymudabir@gmail.com</a></p>
                    </div>
                    <h4 class="mb-3 mt-5">Follow Me</h4>
                    <ul class="social-icons-contact">
                        {/* <li>
                            <a href="#twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li> */}
                        <li>
                            <a href="https://www.linkedin.com/in/mudabir-kowsar-34783a256/" target='_blank'>
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/mudabirkowsar" target='_blank'>
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/xain_khanday?igsh=bXQxaW9ocmF6aDRu" target='_blank'>
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 contact-right mt-md-0 mt-5 ps-lg-0">
                    <form onSubmit={handleSubmit}  class="signin-form">
                        <div class="input-grids">
                            <input
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                             type="text" name="w3lName" id="w3lName" placeholder="Your Name*"
                                class="contact-input" required="" />
                                
                            <input
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                             type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*"
                                class="contact-input" required="" />
                                
                            <input
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }}
                             type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*"
                                class="contact-input" required="" />
                                
                            <input 
                            onChange={(e) => {
                                setWebsite(e.target.value)
                            }}
                            type="text" name="w3lWebsite" id="w3lWebsite" placeholder="Website URL*"
                                class="contact-input" required="" />
                                
                        </div>
                        <div class="form-input">
                            <textarea
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            name="w3lMessage" id="w3lMessage" placeholder="Type your message here*"
                                required=""></textarea>
                        </div>
                        <button type='submit' class="btn btn-style">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    {/* <div class="map-iframe">
        <iframe

src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
            width="100%" height="400" frameborder="0" style="border: 0px;" allowfullscreen=""></iframe>
    </div> */}
    </div>
  )
}

export default Contactme
