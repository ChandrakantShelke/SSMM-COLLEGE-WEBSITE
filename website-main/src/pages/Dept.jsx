import { useState } from 'react';
import './dept.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const SubmenuDropdown = ({ submenu }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="submenu"> {/* Add class name for submenu */}
      <select value={selectedOption} onChange={handleOptionChange} className="menu-option"> {/* Add class name for select */}
        <option value="">Select Field</option>
        {submenu.map((item) => (
          <option key={item.id} value={item.url}>
            {item.label}
          </option>
        ))}
      </select>
      <div>{selectedOption && <a target='_blank' href={selectedOption} className="submenu-link">Go</a>} {/* Add class name for submenu link */}</div>
    </div>
 );
};

const Dept = () => {
  const menuOptions = [
    {
      id: 1,
      label: 'ARTS',
      submenu: [
        { id: 11, label: 'Economics', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/economics.pdf' },
        { id: 12, label: 'English', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/english.pdf' },
        { id: 13, label: 'Geography', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/geography.pdf' },
        { id: 14, label: 'Hindi', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/hindi.pdf' },
        { id: 15, label: 'History', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/history.pdf' },
        { id: 16, label: 'Marathi', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/marathi.pdf' },
        { id: 17, label: 'Political Science', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/politicalscience.pdf' },
        { id: 18, label: 'Psychology', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/psychology.pdf' },
      ],
    },
    {
      id: 2,
      label: 'COMMERCE',
      submenu: [
        { id: 21, label: 'Commerce', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/commerce.pdf' },
      ],
    },
    {
      id: 3,
      label: 'SCIENCE',
      submenu: [
        { id: 31, label: 'Botany', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/botany.pdf' },
        { id: 32, label: 'Chemistry', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/chemistry.pdf' },
        { id: 33, label: 'Computer Science', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/computers.pdf' },
        { id: 34, label: 'Mathematics & Statistics', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/mathstat.pdf' },
        { id: 35, label: 'Physics', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/physics.pdf' },
        { id: 36, label: 'Zoology', url: 'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/zoology.pdf' },
      ],
    },
  ];
  return (
    <>
    <Header/>
    <div className="college-webpage"> {/* Add class name for main menu */}
      <h1 className='c1'>COLLEGE DEPARTMENTS</h1> 
      <div className="menu-container"> {/* Add class name for menu container */}
        {menuOptions.map((option) => (
          <div key={option.id} className="menu-item"> {/* Add class name for menu item */}
            <h2>{option.label}</h2>
            <SubmenuDropdown submenu={option.submenu} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dept;
