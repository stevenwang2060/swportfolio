import React from 'react';
import './Contact.css'

function Contact(){
        return(
            <div className="contact">
                <h1>Contact Me</h1>
                <form>
                    <label>Name</label>
                    <input type="name" name="name"></input>
                    <label>Email</label>
                    <input type="email" name="email"></input>
                    <label>Message</label>
                    <textarea type="text" name="message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
}

export default Contact;