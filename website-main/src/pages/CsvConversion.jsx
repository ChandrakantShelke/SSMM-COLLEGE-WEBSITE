import React, { useState } from 'react';
// import {ref, uploadBytes, getDownloadURL, deleteObject} from 'firebase/storage';
// import {storage, db} from '../../backend/setup.js'
// import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';

// import firebase from 'firebase/app';
// import 'firebase/firestore';

const Results = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
  };

  const handleUpload = async () => {
    try {
      if (!csvFile) {
        setErrorMessage('Please select a CSV file.');
        alert('Please select a file !')
        return;
      }

      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        const rows = text.split('\n');

        // Assuming the CSV has a header row
        const headers = rows[0].split(',');

        // Initialize Firebase
        // const db = firebase.firestore();

        // Parse CSV data and add to Firestore
        for (let i = 1; i < rows.length; i++) {
          const values = rows[i].split(',');
          const data = {};
          for (let j = 0; j < headers.length; j++) {
            data[headers[j].trim()] = values[j].trim();
          }
        //   await db.collection('your_collection_name').add(data);
        // document.write(data);
        console.log(data)
        }
        alert('CSV data uploaded successfully!');
        
      };

      reader.readAsText(csvFile);
    } catch (error) {
      console.error('Error uploading CSV:', error);
      setErrorMessage('An error occurred while uploading the CSV.');
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};


export default Results;