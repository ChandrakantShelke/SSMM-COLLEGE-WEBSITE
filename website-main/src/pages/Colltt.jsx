import React, { useState } from 'react';
import './collttstyle.css'; // Import CSS file
import Footer from '../components/Footer';
import Header from '../components/Header';

const SubmenuDropdown = ({ submenu }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown" style={{marginBottom: '2rem'}}> {/* Add class name for dropdown */}
      <select value={selectedOption} onChange={handleOptionChange} className="select"> {/* Add class name for select */}
        <option value="">Select Year</option>
        {submenu.map((item) => (
          <option key={item.id} value={item.url}>
            {item.label}
          </option>
        ))}
      </select>
      {selectedOption && <a target='_blank' href={selectedOption} className="go-button">Go</a>} {/* Add class name for go-button */}
    </div>
  );
};

const Colltt = () => {
  const menuOptions = [
    {
      id: 1,
      label: 'ARTS ',
      submenu: [
        { id: 11, label: 'ARTS 2018-19 TT', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/arts1819.pdf' },
      ],
    },
    {
      id: 2,
      label: 'COMMERCE ',
      submenu: [
        { id: 21, label: 'COMMERCE 2018-19', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/commerce1819.pdf' },
      ],
    },
    {
      id: 3,
      label: 'SCIENCE ',
      submenu: [
        { id: 31, label: 'SCIENCE 2018-19', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/science1819.pdf' },
      ],
    },
    {
      id: 4,
      label: 'PRACTICAL ',
      submenu: [
        { id: 41, label: 'PRACTICAL SESSION ', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/pscience1819.pdf' },
      ],
    },
    {
      id: 5,
      label: 'COLLEGE TIMETABLE ',
      submenu: [
        { id: 51, label: 'College TT', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/College-Time-Table-2020-2021.pdf' },
      ],
    },
  ];

  return (
    <>
    <Header/>
    <center>
    <div className="container-ctt"> {/* Add class name for container */}
      <h1 className="title" style={{fontSize: '1.5rem', marginBottom: '3rem'}}>College Time-Table</h1> {/* Add class name for title */}
      <div className="menu-container"> {/* Add class name for menu container */}
        {menuOptions.map((option) => ( 
          <div key={option.id} className="menu-item"> {/* Add class name for menu item */}
            <h2 style={{margin: '1rem'}}>{option.label}</h2>
            <SubmenuDropdown submenu={option.submenu} />
          </div>
        ))}
      </div>
    </div>
    </center>
    <Footer/>
    </>
  );
};

export default Colltt;
