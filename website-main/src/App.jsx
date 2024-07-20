/* eslint-disable no-unused-vars */
// import React from 'react';
import './App.css';
// import Exp from './pages/Exp';
import HomePage from './components/HomePage';
// import ImageSlider from './pages/ScrollView';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './pages/Admin';
import Results from './pages/Results';
import AboutUs from './pages/AboutUs';
import History from './pages/History';
import CoreValues from './pages/CoreValues';
import VissionMisson from './pages/VissionMisson';
import PrincipalMessage from './pages/PrincipalMessage';
import Admissions from './components/Admissions';
import Staff from './pages/Staff';
import Feedback from './pages/Feedback';
import Acad from './pages/Acadmic';
import PlacementCell from './pages/placement';
import Stud_Supp from './pages/Studentsupport';
import AdmissionPage from './pages/AdmissionPage';
import Courses from './pages/Courses';
import Dept from './pages/Dept';
import Colltt from './pages/Colltt';
import ResInv from './pages/ResInv';
// import CoreValues from './pages/CoreValues';

// import Results from './pages/CsvConversion';
// import { IQAC_Memb } from './components/IQAC_memb';


const App = () => {
 
  return (
    <div className="">
      {/* <HomePage/> */}
      <BrowserRouter>
      <Routes>
      
         {/* <Route path='/:uname/venture/:name' element={<VenturePage/>}/> */}
         <Route path='/students_support' element={<Stud_Supp/>}/>
         <Route path='/placement_cell' element={<PlacementCell/>}/>
         <Route path='courses' element={<Courses/>} />
         <Route path='/departments' element={<Dept/>} />
         <Route path='/timetable' element={<Colltt/>} />
         <Route path='/academics' element={<Acad/>}/>
         <Route path='/feedbacks' element={<Feedback/>}/>
         <Route path='/research_and_innovations' element={<ResInv/>} />
         <Route path='/admission' element={<AdmissionPage/>} /> 
         <Route path='/staff' element={<Staff/>} /> 
        <Route path='/vision_mission' element={<VissionMisson/>} />
        <Route path='/principal_message' element={<PrincipalMessage/>} />
        <Route path='/corevalues' element={<CoreValues/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/results' element={<Results/>}/>   
        {/* <Route path='/admissions' element={<Admissions/>} /> */}
        {/* <Route path='/iqac' element={<IQAC_Memb/>} /> */}
        <Route path='/admin' element={<Admin/>} /> 
        <Route path='/' element={<HomePage/>} />
        {/* <Route path='/' element={<Results/>} /> */}
      </Routes>
    </BrowserRouter>
      
      {/* <Exp/> */}

    </div>
  );
};

export default App;
