
import Footer from '../components/Footer';
import Header from '../components/Header';
import './vs.css';

const VissionMisson = () => {
  var smol = (screen.width < 767)
    return (
      <div>
        <Header/> 
      <div className="vsmain" style={{
        marginTop: (smol) ? '0rem' : '0rem'
      }}>
        <h2>Vision & Mission</h2>
        <p style={{width: (smol)?'80vw':'50vw', lineHeight: '2rem', textAlign: 'center'}}>
          To Aim At Spreading And Imparting Qualitative Value-Based Education To The Young Generation Of The Rural Society (The Wards Of Farming Community Nearby Pachora & From Pachora), Developing Their Abilities To Accept The Challenges In The 21st Century, Inculcation Perfect Discipline In Terms Of Punctuality, Honesty, Sincerity & Making Them Excellent Academicians Along With ICT Base And Intellectuals, To Play A Role Of Responsible Citizen And Creating The Perfect Leadership For Socio-Economical, Agro-Industrial And Eco-Cultural Development Of Our Country.
        </p>
      </div>
      <Footer/>
      </div>
    );
}

export default VissionMisson;
