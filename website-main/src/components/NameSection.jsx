import { useEffect, useState } from 'react';
import './NameSection.css'
import { Carousel } from 'react-responsive-carousel';

function NameSection(){
    const collegeNameEng = "SHRI. SHETH MURLIDHARJI MANSINGKA ARTS, SCIENCE & COMMERCE COLLEGE, PACHORA";
  const collegeNameMar = "श्री. शेठ मुरलीधरजी मानसिंगका साहित्य, विज्ञान आणि वाणिज्य महाविद्यालय, पाचोरा.";
  const acc = "NAAC RE-ACCREDITED 'C' GRADE";
  

  const aa = "slkdhlskdugh";

  let width = screen.width;

  var smol = (screen.width<767)


    return(
        
        <div className='name'>
            {console.log(width)}
              <center>  <div style={{width:'97vw', height:'65vh', marginBottom: '1rem'}}>
                    <Carousel
                        infiniteLoop={true}
                        autoPlay={true}
                        preventMovementUntilSwipeScrollTolerance={true}
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        
                    >
                        <center><div className="namecont">
                            {(smol)?collegeNameEng:<></>}
                        </div></center>
                        <center><div className="namecont">
                        {(smol)?collegeNameMar:<></>}
                        </div></center>
                    </Carousel>
                </div>
                </center>
        </div>

        // <div className="namesection">
        //     <div className= {(flipped)? "namecard":"behind"} >
        //         <div className="front">{collegeNameEng}</div>
        //         <div className="back">{collegeNameMar}</div>
        //     </div>
        //     <div className="nameimage">sd;ofujsdoifhsd;ovlnsd;lsdhfilsdufhsdivkhskvsd;ofujsdoifhsd;ovlnsd;lsdhfilsdufhsdivkhskvsd;ofujsdoifhsd;ovlnsd;lsdhfilsdufhsdivkhskv</div>



        //     <script>
        //         {
        //             setInterval(()=>{
        //                 // setFlipped(!flipped)
        //                 if(flipped==true){
        //                     setFlipped(false);
        //                 }else{
        //                     setFlipped(true);
        //                 }
        //             },7000)
        //         }
        //     </script>
        // </div>
    )

}

export default NameSection;