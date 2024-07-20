// import React from 'react';
// import Footer from './Footer';
import './HomePageStyle.css';
// import ImageSlider from './ScrollView';
// import SectionOne from './SectionOne';
// import Drawer from './Drawer'
// import { useEffect, useState } from 'react';
import NameSection from './NameSection';
// import axios from 'axios' 
import BOD from './BOD';
import SwipeableTemporaryDrawer from './Drawer';
import Acts from './Acts';
import NoticeBoard from './NoticeBoard';
import Admissions from './Admissions';
// import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import AdmissionPanel from '../pages/AdPanel';

// const urlPrefix = 'https://endpoint-ssmm.vercel.app';
// const urlPrefix = 'http://localhost:3000';
const HomePage = () => {
  const chipArray = ["Home", "Admission", "Notice", "News", "Contact"];
  const go = ['#', '#admission', '#notice', '#news', '#contact'];

  const collegeNameEng = "SHRI. SHETH MURLIDHARJI MANSINGKA ARTS, SCIENCE & COMMERCE COLLEGE, PACHORA";
  const collegeNameMar = "श्री. शेठ मुरलीधरजी मानसिंगका साहित्य, विज्ञान आणि वाणिज्य महाविद्यालय, पाचोरा.";

  var smol = (screen.width<767);


  return (
    <div className="college-website" id='mm' >
            
      <div className="header" id='headd'>
        <div className="logo" id='sdf'>
          <img className='logoimg' src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/logoo_copy.png?alt=media&token=44f50c71-415e-40b5-bb3d-d7af73810204" alt="" />
          
          {/* <img className='logoimg' src="src\assets\logoo.png" alt="" /> */}
          </div> 

        <div>

        <div className='header-name'>
          {collegeNameEng}
        </div>

        <div className="chips-container">
        {chipArray.map((chip, index) => (
          <a key={index} href={go[index]} style={{textDecoration: 'none'}}>
          <div className="chip">
            {chip}
          </div>
          </a>
        ))}
        
        {/* <NameSection/> */}
        

        
        </div>

        </div>


          {/*  THIS IS THE WORKING DRAWER  */}
          <SwipeableTemporaryDrawer/>
        
      
      </div>

      <NameSection/>

      {/* <ImageSlider/> */}

      <div id="acts"></div>    
      <Acts id="acts"/>

      {/* <div id="admission"><Admissions /></div> */}

      <div id="admission"><AdmissionPanel /></div>



      <div style={{
        display: 'flex',
        minHeight: 'auto', 
        flexWrap: (screen.width<767)?'wrap':'nowrap',
        // backgroundColor: 'green',
        border: (smol)?'none':'1px solid black',
        borderRadius: '7px',
        padding: '1rem', 
        margin: '1rem',
        marginBottom: '5rem',
        backgroundColor: 'white'
        // width: '100%'
      }} id="notice">
       <NoticeBoard/>
        <div id="news"><BOD/></div>
        <div id='news'></div>
      </div>
      {/* <SectionOne/> */}


      {/* <div  id="contact">
        <Footer/>
      </div> */}




<footer id='contact' className="footer" style={{
  width:'93vw', 
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






    </div>
  );
};

export default HomePage;
