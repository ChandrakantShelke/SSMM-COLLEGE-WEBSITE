import React from 'react';
import './coursesstyle.css'; // Import CSS file for styling
import Footer from '../components/Footer';
import Header from '../components/Header';

function Courses() {
  return (
    <>
    <Header/>
    <center>
    <div className="container-crs" style={{
      backgroundColor: 'transparent', 
      border: '1px solid black', 
      margin: '1rem', 
      borderRadius: '10px'
    }}> 
       
      
        <h1 className='c1' style={{color: 'black'}}>University Courses</h1>
      
      <section>
        <h2 className='u1'>Under-Graduate Courses</h2>
        <ul>
          <li>
            <strong>B.A. (Special)</strong> – English, Marathi, Hindi, History, Economics, Political Science, Geography is taught at general level
          </li>
          <li>
            <strong>B.A. (Special)</strong> – Psychology (Non Grant)
          </li>
          <li>
            <strong>B.Com</strong> – Commerce
          </li>
          <li>
            <strong>B.Sc (Special)</strong> – Chemistry, Physics, Zoology, Mathematics & Statistics is taught at general level
          </li>
          <li>
            <strong>B.Sc</strong> – Computer Science, Botany (Sp.) (Non Grant)
          </li>
        </ul>
      </section>
      <section>
        <h2 className='u2'>Post-Graduate Courses</h2>
        <ul>
          <li>
            <strong>M.A.</strong> – English, History (Non Grant)
          </li>
          <li>
            Recognized Ph.D. guides for the following subjects are guiding research students in the subjects English, Marathi, Hindi, History
          </li>
        </ul>
      </section>
      <section>
        <h2 className='u3'>YCMOU (Distance Education Centre)</h2>
        <ul>
          <li>
            <strong>B.A.</strong> – Marathi, Hindi, English, Psychology, Economics, History, Political Science
          </li>
          <li>
            <strong>B.Com</strong> – Commerce
          </li>
          <li>
            <strong>M.A.</strong> – Marathi, Hindi
          </li>
          <li>
            <strong>M. Com</strong>
          </li>
        </ul>
      </section>
      <section>
        <h2 className='u4'>Certificate Courses</h2>
        <ul>
          <li>Spoken English</li>
          <li>Hindi Sanwad & Anuwad Kaushalya</li>
          <li>Introduction to Indian Constitution</li>
          <li>Introduction to Banking System</li>
          <li>Travels & Tourism</li>
        </ul>
      </section>
    </div>
    </center>
    <Footer/>
    </>
  );
}

export default Courses;
