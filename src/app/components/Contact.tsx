import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SocialMedia } from "../utils/Objects";
const Contact = () => {

    return (<>
        <h3 className="text-center my-5">Contact Me</h3>
        <div className="contact-section d-flex flex-column flex-sm-row flex-md-row justify-content-center justify-content-sm-between justify-content-md-between">
            <form className="form d-flex flex-column gap-3 p-4 rounded-4 position-relative">
                <label>
                    <input className="input" type="text" placeholder="" required />
                    <span>Name</span>
                </label>

                <label>
                    <input className="input" type="email" placeholder="" required />
                    <span>Email</span>
                </label>

                <label>
                    <input className="input" type="password" placeholder="" required />
                    <span>Subject</span>
                </label>

                <label>
                    <textarea className="input" placeholder="" required />
                    <span>Message</span>
                </label>
                <button className="submit   my-3">Submit</button>
            </form>
            <div className="d-flex align-items-center flex-column contact-info gap-3 justify-content-center">
                <h5>Contact Info</h5>
                <div className="d-flex align-items-center justify-content-between flex-column gap-4 ">
                    <div className="d-flex align-items-between justify-content-between flex-row gap-3">
                        <HiOutlineMail className="contact-icon rounded-circle p-1 " />
                        <div>
                            <p>Email</p>
                            <a href="#" ><p>eloymohamedalimansor@gmail.com </p></a>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-row gap-3">
                        <FaPhoneAlt className="contact-icon rounded-circle p-1 " />
                        <div>
                            <p>Phone</p>
                            <p>+201278922209</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-row gap-3">
                        <FaLocationDot className="contact-icon rounded-circle p-1 " />
                        <div>
                            <p>Address</p>
                            <a href="#" >eloy</a>
                        </div>
                    </div>
                    <div className="">
                        <p>Visit My Social Media </p>
                        <div className="socials d-flex gap-3 justify-content-center my-4 ">
                            {SocialMedia.map((social, i) => (
                                <a className="social fs-3" key={i} target="__blink" href={social.link} >{social.logo}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Contact