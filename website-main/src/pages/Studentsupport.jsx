import React from 'react';
import "./studrepport.css";
import Footer from '../components/Footer';
import Header from '../components/Header';

const ComponentWithPDF = ({ component, pdfUrl }) => {
  const handleClick = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <center>
    <div className='c2ss' style={{width: '70vw'}}>
    <div className="component" style={{cursor: 'pointer', width: '70vw'}} onClick={handleClick}>
      {component}
    </div>
    </div>
    </center>
  ); 
};

const Stud_Supp = () => {
  return (
    <div>
      <Header/>
      <center>
    <div className="stud-supp" style={{marginBottom: '4rem'}}>
      <div className="c3ss" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1 className="stud-supp2" style={{fontSize: '1.2rem'}}>Student Support</h1>
      </div>
      
      <div className="c1ss">
       <a> <ComponentWithPDF component="Anti-Ragging Cell" pdfUrl="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2Fantiraggingcell.pdf?alt=media&token=8c70d53d-8375-4cc8-bda2-71bb024adf54" /></a>
       {/* <a> <ComponentWithPDF component="Scholarships" pdfUrl="path_to_scholarships_pdf.pdf" /> </a>  */}
       <a> <ComponentWithPDF component="Student's Grievance Cell" pdfUrl="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2Fgrievancecell.pdf?alt=media&token=63e4c951-1c25-41a1-a81b-07605a612f33" /> </a> 
       <a> <ComponentWithPDF component="Student's Welfare" pdfUrl="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2Fwelfare.pdf?alt=media&token=b7b5d920-1440-48b0-b592-532d1311e462" /></a>
       <a> <ComponentWithPDF component="Student Adoption Scheme" pdfUrl="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2Fadoption.pdf?alt=media&token=df987ab7-e8b6-4725-9e2d-040f1c05a1e5" /></a>
      </div>
    </div>
    </center>
    <Footer/>
    </div>
  );
};

export default Stud_Supp;
