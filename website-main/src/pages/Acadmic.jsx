import React from 'react';
import './acadamic.css'; // Correct import path for acadamic.css

function Acad() {
  const calendars = [
    { year: 'Academic Calender 2022-23', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FACADEMIC-CALENDAR-2022-23.pdf?alt=media&token=50c7126f-8953-4aa8-925c-5a60599a91d1' },
    { year: 'Academic Calender 2021-22', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FACADEMIC-CALENDER-2021-2022.pdf?alt=media&token=9cec490a-4326-4379-9ca0-f572679ea50c' },
    { year: 'Academic Calender 2020-21', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FACADEMIC-CALENDAR-2020-2021.pdf?alt=media&token=a3f83226-320e-4e05-804e-0f1e262d8393' },
    { year: 'Academic Calender 2019-20', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FAcademic-Calendar-2019-2020.pdf?alt=media&token=2f62ed10-52c6-426d-8e77-cc066a5a4718' },
    { year: 'Academic Calender 2018-19', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FACADEMIC-CALENDER-2018-2019.pdf?alt=media&token=4be80bee-e44d-4272-9bf1-3a812e5d711d' },
    { year: 'Academic Calender 2017-18', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FACADEMIC-CALENDER-2017-2018.pdf?alt=media&token=a18a1a5f-c755-495c-b256-34cdc8adfec4' },
    { year: 'Academic Calender 2016-17', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FACADEMIC-CALENDER-2016-2017.pdf?alt=media&token=bb9454fd-f14d-4dcd-ac67-6588422bfc75' },
    { year: 'Academic Calender 2015-16', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FACADEMIC-CALENDER-2015-2016.pdf?alt=media&token=ce18092d-c976-4776-ba05-a8335d75252f' },
    { year: 'Academic Calender 2014-15', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FACADEMIC-CALENDER-2014-2015.pdf?alt=media&token=44cb55a7-c338-44eb-903b-c36b27a4af6f' },
    { year: 'Academic Calender 2013-14', pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/academic_calendars%2FACADEMIC-CALENDER-2013-2014.pdf?alt=media&token=962c2106-437b-424e-8aff-8547fba45f4c' },
  ];

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="calendar-container">
    <div className="c3">
    <h1 className="calendar-container2">Academic Calendars</h1>
    </div>
     <center>
      <div className="c1">
        {calendars.map((calendar) => (
          <div  key={calendar.year}>
            <div className='c2'>
            <a href={calendar.pdfUrl} target="_blank" rel="noopener noreferrer">{calendar.year}</a>
              </div>
            
          </div>
        ))}
      </div>
      </center>
    </div>
  );
}

export default Acad;
