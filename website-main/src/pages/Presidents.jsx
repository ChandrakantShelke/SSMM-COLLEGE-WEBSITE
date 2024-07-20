import residents from "../assets/residents.jpg";
import './Presidents.css';

const Presidents = () => {
    return (
        <div className="container d-flex">
            <div className="col-md- m-4 flex-fill">
                <br></br>
                <h2 className="text"> President Message</h2>
                <p>
                    Dear Friends... It gives me immense pleasure to introduce Pachora Taluka Co-Operative Education Society's (PTCES) Shri Sheth Muralidharji Mansingaka College of Arts, Commerce & Science. Here, academic institutes have a great role to play in enabling young people to have a grand vision and to equip them with overall ability and precise skill to change the vision into a reality. Our college offers various academic courses in almost all the streams. Our learned, concerned and responsible teaching staff endeavors to unleash the deeply embedded rational power in the mind of the students. Various extra-curricular and cultural activities happening in our college are aimed at total personality development of the students. We help students to develop an intelligent mind with analytical ability, to take on worldly challenges and a strong will power to assume social responsibility. In other words, we help in creating progressive and positive citizens.
                </p>
                <p>
                    Finally, I must express my gratitude to my entire team, Office bearers, Committee members, Principals, Faculty, Officers, Staff and Workforce. After I took over at SSMM, I was also invited to join various educational organizations, where I have charge of education and related portfolios. I have endeavored to bring this wider perspective to bear on the many opportunities and challenges that lie ahead of SSMM. The world is opening up. We have plans for further modernization and you will soon see some of Ten Thousand square feet of additional construction taking shape. But more important than all this is the pride and commitment which we all carry into our daily responsibilities. It is this teamwork and loyalty to PTCES which will I believe; take the Society to even greater heights. Our cover is a subtle expression of the combined skill and dedication which wilt help us to shape PTCES into well-known globally acknowledged institution.
                </p>
                <p id="chairman">
                    Shri. Sanjay O. Wagh <br />
                    Chairman
                </p>
            </div>
            <div className="col-md-4 mt-5">
                <img src={residents} className="img-fluid president-image" alt="President" />
                <p className="chairman-name">  Shri. Sanjay O. Wagh</p> {/* Added name below the image */}
            </div>
        </div>
    );
}

export default Presidents;
