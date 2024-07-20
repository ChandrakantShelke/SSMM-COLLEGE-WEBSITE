// import react from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../components/admissions.css'

function Feedback(){
    return(
        <>
        <Header/>
        <div className='admission-main'>
            <div className='admission'>
 
                <div style={{
                    fontSize: '1.6rem',
                    textAlign: 'center',
                    margin: '2rem'
                }}>
                    All Feedbacks 
                </div>
                <div style={{textAlign: 'center'}}>
                    <table style={{width: '50vw'}}>
                        <tr>
                        <th>Feedback</th>
                        <th>PDF Link</th>
                        </tr>

                        <tr>
                            <td>Feedback by Students</td>
                            <td><a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2FFeedback-Analysis.pdf?alt=media&token=b6a5dbdf-e63f-46f0-b57c-179fa43a4f57">Check</a></td>
                        </tr>

                        <tr>
                            <td>Feedback by Teachers</td>
                            <td><a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2FFeedback-analysis-teachers.pdf?alt=media&token=4ecfc9b5-6d52-4ec5-b5d0-79d02f498150">Check</a></td>
                        </tr>

                        <tr>
                            <td>Satisfaction Survey 2020-21</td>
                            <td><a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2FStudent_Satisfaction_Survey2019-20.-Criteria-2.7.1.pdf-2.pdf?alt=media&token=94c6d0a0-dfc6-4e0f-86c6-ce62830bb271">Check</a></td>
                        </tr>

                        <tr>
                            <td>Satisfaction Survey 2021-22</td>
                            <td><a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2FStudent_Satisfaction_Survey..pdf?alt=media&token=3f050568-5dca-4eb7-94ed-3f3ec21842fb">Check</a></td>
                        </tr>

                        <tr>
                            <td>Satisfaction Survey 2022-23</td>
                            <td><a target="_blank" href="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2FSSS-Report-Naac-2022-23.pdf?alt=media&token=e3d9d853-1e42-4ec7-9f18-23d68bf1595c">Check</a></td>
                        </tr>

                        {/* <tr>
                            <td>Feedback Analysis 2022-23</td>
                            <td><a target='_blank' href="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/assets%2FFEEDBACK-ANALYSIS-2022-23.pdf?alt=media&token=9c3a260f-24c3-4e2b-8f56-474d1abbf613">Click Here</a></td>
                        </tr> */}

                    </table>
                </div>
                
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Feedback