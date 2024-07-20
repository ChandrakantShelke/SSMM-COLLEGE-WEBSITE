
import React, { useEffect, useState } from 'react';
import './admiss.css'; // Make sure the CSS file path is correct
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../backend/setup';

const AdmissionPanel = () => {

    const [fromDate, setFrom] = useState('')
    const [toDate, setTo] = useState('')

    const docRef = doc(db, "collegecoll","dates")

    async function getDates(){
        const docSnap =  getDoc(docRef);
        if((await docSnap).exists()){
            console.log((await docSnap).data())
            setFrom((await docSnap).data().fromDate)
            setTo((await docSnap).data().toDate)
            // console.log((await docSnap).data().fromDate)
            // console.log((await docSnap).data().toDate)
        }else{
            alert('db error !')
        }
    }

    useEffect(()=>{
        getDates();
    },[])
    
  return (
    <div className="admission-panel">
      <h4>ADMISSIONS</h4> 
      <img src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/deskview.png?alt=media&token=77757565-e372-413d-9dc1-75d834972f66" alt="College Admission" className="admission-image" />
      {/* <img height={500} src="src\pages\OIG4.jpeg" alt="College Admission" className="admission-image" /> */}
      <h3>ADMISSION OPEN </h3>
      <p>Empowering students to create solutions for tomorrows challenges. </p>
      <p>From: {fromDate} To: {toDate}</p>
      {/* <button className="apply-button">APPLY</button> */}
      <a href="https://ssmmcollege.ac.in/wp-content/uploads/2024/03/ACADEMIC-CALENDAR-2022-23.pdf" target="_blank" rel="noopener noreferrer">
        <button className="click-here-button">Click for the detailed PDF</button>
      </a>
    </div>
  );
};

export default AdmissionPanel;
