import Footer from '../components/Footer';
import Header from '../components/Header';
import './admisssionstyles.css';
function AdmissionPage(){
    return(
        <>
        <Header/>
        <div className="work-in-progress" style={{
            position: 'fixed', 
            left: '40vw', 
            top: '40vh'
            
        }}>
            <img height={300} src="https://thumbs.dreamstime.com/b/work-progress-status-bar-warning-sign-yellow-black-poka-dots-style-painted-showed-concept-loading-paint-roller-184681186.jpg" alt="" />
        </div>
        <div className='admain'>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                flexDirection: 'column', 
                backgroundColor: '#bc8c8c82'
                }}>
                <h2 style={{padding: '2rem'}}>Admission Form</h2>
                <table style={{
                    width: 'fit-content',
                    // border: 'none'
                }}>
                    <tr>
                        <td>Name : </td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Email : </td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Permanent Addr.</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Field</td>
                        <td>
                            <select name="field" id="field">
                                <option value="arts">Arts</option>
                                <option value="sci">Science</option>
                                <option value="comm">Commerce</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <Footer/>
        </div>
        </>
    )
}


export default AdmissionPage