'use client'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SocialMedia } from "../utils/Objects";

import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
    const [state, handleSubmit] = useForm("meoqrzvq");
    return (<>
        <h3 className="text-center my-5">Contact Me</h3>
        <div className="contact-section d-flex flex-column flex-sm-row flex-md-row justify-content-center justify-content-sm-around  justify-content-md-around" id="contact">
            <form className="form d-flex flex-column gap-3 p-4 rounded-4 position-relative" onSubmit={handleSubmit}>
                <label>
                    <input className="input" type="email" id="email" name="email" placeholder="" required />
                    <span>Email</span>
                </label>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label>
                    <textarea className="input" placeholder="" id="message"
                        name="message" required />
                    <span>Message</span>
                </label>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button className="submit my-3" disabled={state.submitting}>Submit</button>
                {state.succeeded && <p>Thanks for joining</p>}
            </form>
            <div className="d-flex align-items-center flex-column contact-info gap-3 justify-content-center">
                <h5>Contact Info</h5>
                <div className="d-flex align-items-center justify-content-between flex-column gap-4 ">
                    <div className="d-flex w-100 align-items-center justify-content-around flex-row gap-3">
                        <FaPhoneAlt className="contact-icon rounded-circle p-1 " />
                        <div>
                            <p>Phone</p>
                            <p>+201278922209</p>
                        </div>
                    </div>
                    <div className="d-flex w-100 align-items-center justify-content-around flex-row ">
                        <FaLocationDot className="contact-icon rounded-circle p-1 " />
                        <div>
                            <p>Address</p>
                            <p>Egypt , portsaid</p>
                        </div>
                    </div>
                    <div className=" text-center">
                        <p>Visit My Social Media </p>
                        <div className="socials d-flex gap-3 justify-content-around my-4 ">
                            {SocialMedia.map((social, i) => (
                                <a className="social d-flex align-items-center justify-content-center rounded-1" key={i} target="__blink" href={social.link} >{social.logo}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Contact