
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagramSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  return (
    <>
    
      <div className='container contact' id="contact">
        <h1>CONTACT</h1>
        <div className="socials"
        data-aos = "zoom-in-up"
        data-aos-duration = '1000'
        >
          
            <a href='https://www.linkedin.com/feed/' target='_blank' rel='noopener' className="icons">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className='icon'
              />
              </a>
              <a href='https://github.com/' target='_blank' rel='noopener' className="icons">
              <FontAwesomeIcon
                icon={faGithub}
                className='icon'
              />
              </a>
              <a href='https://www.twitter.com/' target='_blank' rel='noopener' className="icons">
              <FontAwesomeIcon
                icon={faTwitter}
                className='icon'
              />
              </a>
              <a href='https://www.instagram.com/' target='_blank' rel='noopener' className="icons">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className='icon'
              />
              </a>
              <a href='https://www.facebook.com/' target='_blank' rel='noopener' className="icons">
              <FontAwesomeIcon
                icon={faFacebook}
                className='icon'
              />
              </a>
              <a href='https://www.gmail.com/' target='_blank' rel='noopener' className="icons">
              <FontAwesomeIcon
                icon={faEnvelope}
                className='icon'
              />
            </a>          
        </div>
      </div>
      
    </>
  )
}

export default Contact