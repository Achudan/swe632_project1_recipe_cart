import React from "react";
import './contact.style.scss';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { MdCall } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa'

const Contact = () => (
    <div>
        <h1>ContactDetails</h1>
        <p>Manager</p>
        <p>5XX, Elden Street</p>
        <p>Herndon, VA</p>
        <p><MdCall /> +1 571 484 XXXX </p>
        <div className="contact-div">
                <a className="contact-list" href="https://www.twitter.com"><BsTwitter/>@tastebuds_tweet</a>
                <a className="contact-list" href="https://www.fb.com"><FaFacebook/>tastebuds</a>
                <a className="contact-list" href="https://www.instagram.com"><BsInstagram/>@tastebuds_gram</a>
        </div>
    </div>

)

export default Contact;