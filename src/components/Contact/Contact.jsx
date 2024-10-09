

"use client";
import { FaMapMarkerAlt, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdWifiCalling3, MdMarkEmailRead } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div id="contact-section" className="w-screen bg-[#f9fafe] mt-72 md:mt-12 py-2">
        <div className="max-w-maxContent w-[96%] lg:w-[80%] mx-auto mt-1 flex flex-col gap-3">
          <p className="text-4xl font-bold xl:text-6xl text-[#22C55E] text-center scroll-element">
            GET IN TOUCH
          </p>

          <h2 className="text-2xl font-bold text-center text-gray-400 scroll-element">Contact Us To Get Better Information</h2>
          <p className="text-xl text-center text-gray-400 mb-4 scroll-element">We’re here to help. Contact us with any questions, and our team will respond promptly with the information and support you need.</p>

          <div className="flex flex-col md:flex-row bg-[#f9fafe] p-8 rounded-lg shadow-sm gap-8">
            {/* Left Section */}
            <div className="md:w-1/2 pr-8">
              <div className="mb-6">
                <div className="flex items-center mb-4 scroll-element">
                  <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center">
                    <FaMapMarkerAlt className="text-green-500" />
                  </div>
                  <div className="ml-4 text-gray-400">
                    <p className="font-semibold text-gray-600">Location</p>
                    <p>#69, 4th Cross, Lingarajapuram</p>
                    <p>Bengaluru: 560084 Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-center mb-4 scroll-element">
                  <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center">
                    <MdWifiCalling3 className="text-green-500" />
                  </div>
                  <div className="ml-4 text-gray-400">
                    <p className="font-semibold text-gray-600">Call Us</p>
                    <p>+1 (832) 924 6805</p>
                    <p>+91 9845316308</p>
                  </div>
                </div>
                <div className="flex items-center mb-4 scroll-element">
                  <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center">
                    <MdMarkEmailRead className="text-green-500" />
                  </div>
                  <div className="ml-4 text-gray-400">
                    <p className="font-semibold text-gray-600">Email Address</p>
                    <p>info@securethread.io</p>
                  </div>
                </div>
                <div className="flex items-center mb-4 scroll-element">
                  <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center">
                    <FaPaperPlane className="text-green-500" />
                  </div>
                  <div className="ml-4 text-gray-400">
                    <p className="font-semibold text-gray-600">Office Open</p>
                    <p>24 x 7</p>
                  </div>
                </div>
              </div>
              <div className="font-semibold text-gray-600 scroll-element">Follow us on</div>
              <div className="flex space-x-4 mt-4 text-gray-500">
                <a href="https://twitter.com/securethread" target="_blank" className="hover:text-gray-400">
                  <FaTwitter size={24} />
                </a>
                <a href="https://www.linkedin.com/company/people-maketh/" target="_blank" className="hover:text-gray-400">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="form__original flex flex-col space-y-4 scroll-element">
                <input type="text" name="user_name" id="name" placeholder="Name" className="p-3 border rounded-md" required />
                <input type="email" name="user_email" id="email" placeholder="Email" className="p-3 border rounded-md" required />
                <input type="text" name="number" id="number" placeholder="Number" className="p-3 border rounded-md" required />
                <textarea placeholder="Message" name="message" id="message" className="p-3 border rounded-md h-32" required></textarea>
                <div className="flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" required />
                  <label htmlFor="terms" className="text-sm text-gray-400">I agree to the <a href="#" className="text-amber-500">terms and privacy policy</a></label>
                </div>
                <button type="submit" className="p-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
