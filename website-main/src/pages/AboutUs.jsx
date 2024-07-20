
import Footer from '../components/Footer';
import Header from '../components/Header';
import './AboutUs.css'; // Import the CSS file for styles

function AboutUs ()  {
  var smol = (screen.width < 767) 
  return (
    <>
    <Header/>
    <center style={{marginTop: (smol)?'3rem':'0rem'}}>
    <div className="container-full animate__animated animate__fadeIn">
      <div className="content">
        <center><h2 className="he">About SSMM College</h2></center>
        <p>
          Shri Sheth Murlidharji Mansingka College of Arts, Science & Commerce is affiliated to North Maharashtra University, Jalgaon. It is granted by University Grants Commission (UGC) & Accredited by National Assessment and Accreditation Council (NAAC). SSMM College was established in 1970 by the erstwhile Pachora Taluka Co-operative Education Society as Pachora’s first college. SSMM has emerged as one of the premier colleges of Arts, Science & Commerce in North Maharashtra.
        </p>
        <p>
          SSMM College is a flagship institution of PTCES. Pachora Taluka Co-operative Education Society’s roots go back to 1936. The establishment & running of various institutions of Pachora Taluka Co-operative Education Society was only possible with zealous and ardent efforts of Late.Shri.D.M.Paranjpe, Late.Shri.Atamaram B. Wani, Late.DR.D.B.Kulkarni, Late.Shri.Babubhai Rawal, Late.Shri.Bhonekar, Late Shri.T.V.Joshi, Late.Shri.S.B.Patil (Ex.MLA), Late.Shri.R.S.Thepade, Late.Shri.Mahavirprasad Mansingaka, Late.Shri.K.M.Patil & Shri.O.N.Wagh (Ex.MLA). SSMM College was established in 1970, When some local corporate leaders had come together for future projection. These great personalities sown a seed of this success before 75 years ago in 1936.
        </p>
        <p>
          Day by day this tree out of the seed is growing bigger & bigger with flourishing and spreading its branches with the holy blessings of Goddess Saraswati in all over the district. It was their fervor and commitment that has made PTCES as what we see today. Their vision of things was unparalleled and so was their practical and hands-off approach, which helped the next generation of equally capable leadership to develop at PTCES. Their legacy endures; PTCES continues to offer broad-based and student-oriented courses ranging from Arts to Science & Technology. The same efforts are nourished by its successive directors for its maximum output. The society’s new chairman with young & dynamic personality Mr. Sanjay Onkar Wagh [Chairman] of PTCES, Pachora. The Blessings of Shri. O.N.Wagh (Ex.MLA) & the full support of Shri. D.O.Wagh (Hon.MLA) is also an important asset.
        </p>
        <p>
          A sprawling 13-acre campus, in the heart of the city, provides space for residential facilities, sports, games, and cultural facilities, which contribute to the well-rounded development of a more than 3500 strong student population.
        </p>
      </div>
    </div>
    </center>
    <Footer/>
    </>
  );
}

export default AboutUs;
