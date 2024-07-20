import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  var smol = (screen.width<767)
  return (
    // <footer className="footer">
    //   <center>
    //   <div className="footer-content">
    //     <div className="footer-info">
    //       <center>
    //       <h4>Shri Sheth Muralidharji Mansingaka College</h4><br/>
    //       <p>SSMM Campus, Bhadgaon Road, Pachora-424201, (Dist)-Jalgaon, Maharashtra, India.</p><br/>
    //       <p>Contact: +91-2596-245314</p><br/>
    //       <p>Fax:  +91-2596-245203</p>
    //       <p>Email: info@ssmmcollege.ac.in</p>
    //       </center>
    //     </div>
       
    //     <div className="useful-links">
    //       <ul>
    //         <li><a href="/">Home</a></li>
    //         <li><a href="/aboutus">About Us</a></li>
    //          <li><a href="/students_support">Student Corner</a></li>
    //         <li><a href="staff">News</a></li>
    //       </ul>
    //     </div>
    //      <p>Connect with us:</p>
    //     <div className="social-media">
    //       <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
    //       <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
    //       <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
    //     </div>
    //   </div>
    //   <div className="copyright">
    //     <p>Copyright &copy; SSMM College</p>
    //   </div>
    //   </center>
    // </footer>
    <footer id='contact' className="footer" style={{
      width:(smol)?'100vw':'99vw', 
      backgroundColor: '#800000cf', 
    
    }}>
          <center>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', gap: (smol)?'1rem':'0rem'}}>
          {/* <div className="footer-content" style={{display: 'flex'}}> */}
            <div className="footer-info" style={{ border: '1px solid white', padding: '1rem', borderRadius: '10px'}}>
              <center>
              <h3>Shri Sheth Muralidharji Mansingaka College</h3>
              <p>SSMM Campus, Bhadgaon Road, Pachora-424201, (Dist)-Jalgaon, Maharashtra, India.</p>
              <p>Contact: +91-2596-245314</p>
              <p>Fax:  +91-2596-245203</p>
              <p>Email: info@ssmmcollege.ac.in</p>
              </center>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid white', paddingBottom: '1rem', borderRadius: '10px'}}>
            <div className="useful-links" style={{marginTop: '.6rem'}}>
              <h4>Useful Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                 <li><a href="/students_support">Student Corner</a></li>
                <li ><a href="#news">News</a></li>
              </ul>
              {/* <hr /> */}
            </div>
            <p style={{marginTop: '1rem'}}>Connect with us:</p>
            <div className="social-media">
              <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
              
            </div>
            </div>
          {/* </div> */}
          
          </div>
          <div className="copyright">
            <p>Copyright &copy; SSMM College</p>
          </div>
          </center>
        </footer>
  );
}

export default Footer;











