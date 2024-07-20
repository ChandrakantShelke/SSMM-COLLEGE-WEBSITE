// import sbp from "../assets/sbp.jpeg";
import Footer from '../components/Footer';
import Header from '../components/Header';
import './PrincipalMessage.css';

const PrincipalMessage = () => {
  return (
    <>
    <Header/>
    <center>
        <div className="container-pm d-flex ">
        <div className="col-md-8 m-4 flex-fill">
          <h2 id = "text">Dear Friends...</h2>
          <p>
            I would like to give the credit of these achievements to my students, teachers, and administrative staff. SSMM is a Pachora-based college run by PTCES. SSMM is amongst the most well-known colleges of the District with NAAC 'B' grade & the UGC recognition of college. The college was established in the year 1970 & the 39-year journey has been a story of hard work, sincere effort toward quality enhancement, quantitative growth & expansion.
          </p>
          <ul>
            <li>During this short span, the number of students has increased considerably & characteristically almost 50% of the students have been girl students. Vice versa, there's been growth in infrastructure - a large campus with Gymkhana, Auditorium, a large Playground, Boatclub, Health center, well-equipped Departments, Science Lab, Computer Lab, and Spoken English Lab and experienced a qualified faculty.</li>
            <li>Our college is forging ahead academically in all three streams, reinventing itself in terms of the add-on courses, suited to meet contemporary needs of the youth. While acknowledging the imperatives of pragmatism, it ensures that knowledge does not get drowned in a sea of information. For this, its dedicated staff strive to inculcate in the students a love for knowledge and encourage them “to seek, to strive and never to yield” in its pursuit. A very well-endowed library and excellent laboratory facilities are additional assets. It is little wonder, and then, that SSMM College has positioned itself firmly on the map of North Maharashtra University and figures on its merit lists with unfailing regularity.</li>
            <li>The infrastructure increase has resulted in visible improvement in results. The percentage of overall passing, the number of university rankers, state & national sports persons are growing from year to year. Apart from looking after 
            their academics the college also tries to inculcate among students a sense of social commitment through various research projects & co-curricular programs, thus trying to reach out the masses in various ways.</li>
            <li>The new millennium underscored the need for the whole world to work together. One important means to togetherness is communication and by launching this website, the college has displayed the modern way of mass communication.</li>
            <li>Without exaggeration, I can claim that SSMM College is a point of excellence and commitment, molding young minds and shaping our youth for a bright tomorrow.</li>
            <li>Our commitment is for the rural students, wards of the farming community & residents of Pachora town.</li>
          </ul>
          <p>Thanking You !!</p>
          <p><strong>Profile Details Download</strong></p>
          <p id="Principle"><strong>Dr. Shirish B Patil</strong><br>

          </br>        Principal</p>
        </div>
            <div className="col-md- mt-5">

                <img src="" className="img-fluid" />
            </div>
            
        </div>
        </center>
        <Footer/>
    </>
  );
}

export default PrincipalMessage;