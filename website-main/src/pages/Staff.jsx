// import react from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './staffstyles.css'

function Staff(){
    return(
        <div>
            <div><Header/></div>
        <div className='staff-main'>
            <div className='admission'>
            <center>

                <div className="staff-title">
                    Teaching Staff
                </div>
                <div style={{
                    // width: '70vw'
                }}>
                    <table>
                        <tr>
                            {/* <th>Sr</th> */}
                        <th>Name</th>
                        <th>Designation</th>
                        </tr>


                        
                        <tr>
                            {/* <td>01</td> */}
                            <td>Prof. DR. SHIRISH B. PATIL</td>
                            <td>PRINCIPAL</td>
                            {/* <td>
                                <img width={120} height={110} src="https://www.shutterstock.com/image-photo/portrait-young-mixed-race-child-600nw-509909488.jpg" alt="" />
                            </td> */}
                        </tr>
                        <tr>
                            {/* <td>02</td> */}
                            <td>DR.W.S.WALE</td>
                            <td>VICE-PRINCIPAL</td>
                            {/* <td>
                                <img width={120} height={110} src="https://www.shutterstock.com/image-photo/portrait-young-mixed-race-child-600nw-509909488.jpg" alt="" />
                            </td> */}
                        </tr>
                        <tr>
                            {/* <td>03</td> */}
                            <td>DR.J.V.PATIL</td>
                            <td>VICE-PRINCIPAL</td>
                            {/* <td>
                                <img width={120} height={110} src="https://www.shutterstock.com/image-photo/portrait-young-mixed-race-child-600nw-509909488.jpg" alt="" />
                            </td> */}
                        </tr>
                        <tr>
                            {/* <td>04</td> */}
                            <td>SHRI J.D.GOPAL</td>
                            <td>ASSO. PROF.</td>
                            {/* <td>
                                <img width={120} height={110} src="https://www.shutterstock.com/image-photo/portrait-young-mixed-race-child-600nw-509909488.jpg" alt="" />
                            </td> */}
                        </tr>
                        <tr>
                            {/* <td>05</td> */}
                            <td>PROF.S.T.SURYAWANSHI</td>
                            <td>ASST. PROF.</td>
                            {/* <td>
                                <img width={120} height={110} src="https://www.shutterstock.com/image-photo/portrait-young-mixed-race-child-600nw-509909488.jpg" alt="" />
                            </td> */}
                        </tr>
                        <tr>
                            {/* <td>06</td> */}
                            <td>PROF.K.S.INGALE</td>
                            <td>ASST. PROF.</td>
                            {/* <td>
                                <img width={120} height={110} src="https://www.shutterstock.com/image-photo/portrait-young-mixed-race-child-600nw-509909488.jpg" alt="" />
                            </td> */}
                        </tr>
                        <tr>
                            {/* <td>07</td> */}
                            <td>PROF.P.M.DONGARE</td>
                            <td>LIBRARIAN</td>
                            {/* <td>
                                <img width={120} height={110} src="https://www.shutterstock.com/image-photo/portrait-young-mixed-race-child-600nw-509909488.jpg" alt="" />
                            </td> */}
                        </tr>
                        <tr>
                            {/* <td>08</td> */}
                            <td>PROF.S.B.TADAVI</td>
                            <td>ASSO. PROF.</td>
                            {/* <td>
                                <img width={120} height={110} src="https://www.shutterstock.com/image-photo/portrait-young-mixed-race-child-600nw-509909488.jpg" alt="" />
                            </td> */}
                        </tr>
                        <tr>
                            {/* <td>09</td> */}
                            <td>PROF.Y.B.PURI</td>
                            <td>ASST. PROF.</td>
                        </tr>
                        <tr>
                            {/* <td>10</td> */}
                            <td>PROF.R.B.VALVI</td>
                            <td>ASST. PROF.</td>
                        </tr>
                        <tr>
                            {/* <td>11</td> */}
                            <td>Mrs. Dr. Kranti V. Sonawane</td>
                            <td>ASST. PROF.</td>
                        </tr>
                        <tr>
                            {/* <td>12</td> */}
                            <td>Prof. Atul S. Patil</td>
                            <td>ASST. PROF.</td>
                        </tr>
                        <tr>
                            {/* <td>13</td> */}
                            <td>Dr. Sharad B. Patil</td>
                            <td>ASST. PROF.</td>
                        </tr>
                        <tr>
                            {/* <td>14</td> */}
                            <td>Dr. Manik P. Patil</td>
                            <td>ASST. PROF.</td>
                        </tr>
                        <tr>
                            {/* <td>15</td> */}
                            <td>Mrs. Dr. Sharada D. Shirole</td>
                            <td>Asst. Professor</td>
                        </tr>
                        <tr>
                            {/* <td>16</td> */}
                            <td>Prof. Swapnil Y. Bhosale</td>
                            <td>ASST. PROF.</td>
                        </tr>
                        <tr>
                            {/* <td>17</td> */}
                            <td>Prof. Pradip L. Rudraswad</td>
                            <td>ASST. PROF.</td>
                        </tr>
                        <tr>
                            {/* <td>18</td> */}
                            <td>Prof. Amit S. Gayakwad</td>
                            <td>ASST. PROF.</td>
                        </tr>

                    </table>
                </div>
                

                {/* <div className="space"></div> */}



                {/* <div className="staff-title">
                    Non-Teaching Staff
                </div>
                <div style={{
                    width: '70vw'
                }}>
                    <table>
                        <tr>
                            <th>Sr</th>
                        <th>Name</th>
                        <th>Designation</th>
                        </tr>

                        <tr>
                            <td>1.</td>
                            <td>Teacher 1</td>
                            <td>Designation 1</td>
                        </tr>

                    </table>
                </div> */}
                


                <div className="space"></div>



                <div className="staff-title">
                    Office Staff
                </div>
                <div style={{
                    width: '70vw'
                }}>
                    <table>
                        <tr>
                            {/* <th>Sr</th> */}
                        <th>Name</th>
                        <th>Designation</th>
                        </tr>

                        

                        <tr>
                            {/* <td>01</td> */}
                            <td>SHRI N.P.PATIL</td>
                            <td>SR. CLERK</td>
                        </tr>
                        <tr>
                            {/* <td>02</td> */}
                            <td>SHRI R.S.THAKUR</td>
                            <td>JR. CLERK</td>
                        </tr>

                    </table>
                </div>
                


                <div className="space"></div>



                <div className="staff-title">
                    Library Staff
                </div>
                <div style={{
                    width: '70vw'
                }}>
                    <table>
                        <tr>
                            {/* <th>Sr</th> */}
                        <th>Name</th>
                        <th>Designation</th>
                        {/* <th>Education</th> */}
                        </tr>


                        

                        <tr>
                            {/* <td>01</td> */}
                            <td>PRAVIN M DONGARE</td>
                            <td>LIBRARIAN</td>
                            {/* <td>BBA CLB BLISC MLIR NET</td> */}
                        </tr>
                        <tr>
                            {/* <td>02</td> */}
                            <td>V. P. PATIL</td>
                            <td>ASST. LIBRARIAN</td>
                            {/* <td>B.COM B.LIB.</td> */}
                        </tr>
                        <tr>
                            {/* <td>03</td> */}
                            <td>SATISH DESHMUKH</td>
                            <td>LIBRARY CLERK</td>
                            {/* <td>B.A.</td> */}
                        </tr>
                        <tr>
                            {/* <td>04</td> */}
                            <td>VIJAY J. SONJE</td>
                            <td>LIBRARY ATTENDANT</td>
                            {/* <td>B.COM. B.LIB.</td> */}
                        </tr>
                        <tr>
                            {/* <td>05</td> */}
                            <td>D. A. CHAUDHARI</td>
                            <td>LIBRARY ATTENDANT</td>
                            {/* <td>HSC</td> */}
                        </tr>
                        <tr>
                            {/* <td>06</td> */}
                            <td>Smt.Pramila P. Chaudhari</td>
                            <td>LIBRARY ATTENDANT</td>
                            {/* <td>B.A.</td> */}
                        </tr>
                        <tr>
                            {/* <td>07</td> */}
                            <td>N. V. PATIL</td>
                            <td>LIBRARY ATTENDANT</td>
                            {/* <td>B.A.</td> */}
                        </tr>
                        <tr>
                            {/* <td>08</td> */}
                            <td>R. W. PATIL</td>
                            <td>LIBRARY ATTENDANT</td>
                            {/* <td>HSC</td> */}
                        </tr>
                        <tr>
                            {/* <td>09</td> */}
                            <td>S. D. PAWAR</td>
                            <td>LIBRARY ATTENDANT</td>
                            {/* <td>B.A. B.LIB.</td> */}
                        </tr>
                        <tr>
                            {/* <td>10</td> */}
                            <td>U. G. MALI</td>
                            <td>LIBRARY ATTENDANT</td>
                            {/* <td>B.A.</td> */}
                        </tr>

                    </table>
                </div>
                



                </center>
            </div>
            
        </div>
                        <div>
                        <Footer/>
                        </div>

                        </div>
        
    );
}

export default Staff