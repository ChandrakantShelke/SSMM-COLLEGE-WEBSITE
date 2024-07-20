
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { db } from "../../backend/setup";
import Footer from "../components/Footer";
import Header from "../components/Header";


function PlacementCell(){

    // const [images, setImages] = useState([{'link':'', 'cap': 'Something'}]);

    var images = ['https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace1.jpeg?alt=media&token=6d5d7d06-0fdd-4bdf-a4c9-1a821f632ea9', 
      'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace2.jpeg?alt=media&token=79af03f5-ec46-4da4-ab3b-780454c5b5b3',
      'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace3.jpeg?alt=media&token=4b1c2823-bd09-4c4f-9871-131a44cb857a',
      'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace4.jpeg?alt=media&token=280f2c39-d073-42c1-87ec-0860f14a6384',
      'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace5.jpeg?alt=media&token=34e19a92-56d9-4ff9-b44b-723d9ee0c0d4',
      'https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace6.jpeg?alt=media&token=59cb01fe-ae4d-4837-a539-72b8925a5708',
  ];

    // async function getImages(){
    //     await getDocs(collection(db, 'collegecoll/images/_all_images'))
    //     .then((res)=>{
    //         const docs = []
    //         res.forEach(doc=>{
    //             docs.push({id: doc.id, ...doc.data()})
    //         })

    //         setImages(docs)

    //     })
    // }

    // useEffect(()=>{
     
    //     getImages()

        
    // },[])

    // var width = window.screen.width;
    var smol = (screen.width<767);

    return(
        <div>
            <Header/>
      <center>
        <div
            style={{
                backgroundColor: 'grey',
                minHeight: (smol)?'80vh':'92vh',
                // width: 'calc(100vw - 3.5rem)',
                width: '90%',
                border: '1px solid white',
                borderRadius: '10px',
                // display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginTop: (smol) ? '5vh' : '4rem',
                marginBottom: (smol) ? '2rem' : '2rem'
            }}
        >
            <center>
            <div
                style={{
                    padding:'1rem', 
                    width: (smol) ? '70%' : '85%',
                    // backgroundColor:'black', 
                    border: '3px solid black',
                    margin: '1rem',
                    marginTop: (smol)?'10vh':'1.5rem', 
                    fontSize: '1.3rem',
                    borderRadius:'10px',
                    textAlign: 'center', 
                }}
            >Placement Cell</div></center>
            <Carousel
                        infiniteLoop={true}
                        autoPlay={true}
                        emulateTouch={false}
                        preventMovementUntilSwipeScrollTolerance={true}
                        // stopSwipingHandler={true}
                        showArrows={(smol)?true:true}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        
                    >
                        {
                            images.map((item)=>(
                                <div key={item}>
                                    <img src={item} style={{objectFit:'contain',width: (smol)?'100%':'50vw', height:(smol)?'50vh':'70vh', padding: (smol)?'1rem':'0rem'}}/>
                                    
                                </div>
                            ))
                        }
                        
                    </Carousel>
        </div>
        </center>
        <Footer/>
        </div>
    )
}

export default PlacementCell;









// // PlacementCell.jsx

// // import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './placementCellStyles.css'; // Import the CSS file

// function PlacementCell  (){
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <center>
//     <div className="placement-cell-container"> 
//       <h1>Placement Cell</h1> 
//       <div className="photos">
//         <Slider {...settings}>
          
//           <div>
//             <img id='img' src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace1.jpeg?alt=media&token=6d5d7d06-0fdd-4bdf-a4c9-1a821f632ea9" alt="Photo 1"  />
//           </div>
//           <div>
//             <img src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace2.jpeg?alt=media&token=79af03f5-ec46-4da4-ab3b-780454c5b5b3" alt="Photo 2" />
//           </div>
//           <div>
//             <img src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace3.jpeg?alt=media&token=4b1c2823-bd09-4c4f-9871-131a44cb857a" alt="Photo 3" />
//           </div>
//           <div>
//             <img src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace4.jpeg?alt=media&token=280f2c39-d073-42c1-87ec-0860f14a6384" alt="Photo 4" />
//           </div>
//           <div>
//             <img src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace5.jpeg?alt=media&token=34e19a92-56d9-4ff9-b44b-723d9ee0c0d4" alt="Photo 5" />
//           </div>
//           <div>
//             <img src="https://firebasestorage.googleapis.com/v0/b/egdb-f23fd.appspot.com/o/placement_photos%2Fplace6.jpeg?alt=media&token=59cb01fe-ae4d-4837-a539-72b8925a5708" alt="Photo 6" />
//           </div>
//         </Slider>
//       </div>
//     </div>
//     </center>
//   );
// }

// export default PlacementCell;
