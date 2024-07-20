import Footer from '../components/Footer';
import Header from '../components/Header';
import './CoreValues.css';

function CoreValues  () {
    return (
        <>
        <Header/>
        <div className='cvs'>
            <center>
            <h2 style={{fontSize: '1.7rem'}}>Core Values of the Institution</h2>
            </center>
            <div >
                <div className='core-values-list'>
                    <ul> 
                        <li>To provide quality higher education to the wards of the farming community nearby Pachora town.</li>
                        <li>To bring the rural youth to the mainstream of society.</li>
                        <li>To develop educational, social & community values & a sense of commitment among the male & female students.</li>
                        <li>To provide better opportunities to the students for higher education & career development.</li>
                        <li>To improve the rural youth & their involvement in building a better society & stronger nation.</li>
                        <li>To motivate the rural students & students from Pachora town to use technology & its use in different sectors.</li>
                        <li>To develop the rural students completely & make them ready to face the challenges of the 21st century.</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default CoreValues;
