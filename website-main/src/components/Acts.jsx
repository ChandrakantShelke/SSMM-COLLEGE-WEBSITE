import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { db } from "../../backend/setup";


function Acts(){

    const [images, setImages] = useState([{'link':'', 'cap': 'Something'}]);

    async function getImages(){
        await getDocs(collection(db, 'collegecoll/images/_all_images'))
        .then((res)=>{
            const docs = []
            res.forEach(doc=>{
                docs.push({id: doc.id, ...doc.data()})
            })

            setImages(docs)

        })
    }

    useEffect(()=>{
     
        getImages()

        
    },[])

    // var width = window.screen.width;
    var smol = (screen.width<767);

    return(
        <div
            style={{
                backgroundColor: '#bc8c8c82',
                minHeight: (smol)?'70vh':'92vh',
                // width: 'calc(100vw - 3.5rem)',
                width: '90%',
                border: '2px solid black', 
                borderRadius: '4px',
                // display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginTop: (smol) ? '20vh' : '4rem',
                marginBottom: (smol) ? '2rem' : '2rem'
                
            }}
        >
            <center>
            <div
                style={{
                    padding:'1rem', 
                    width: (smol) ? '70%' : '85%',
                    // backgroundColor:'black', 
                    // border: '3px solid black',
                    backgroundColor: '#800000cf',
                    color: 'white',
                    margin: '1rem',
                    marginTop: (smol)?'10vh':'1.5rem', 
                    fontSize: '1.3rem',
                    borderRadius:'10px',
                    textAlign: 'center', 
                }}
            >Campus Carnival</div></center>
            <Carousel
                        infiniteLoop={true}
                        autoPlay={true}
                        emulateTouch={false}
                        preventMovementUntilSwipeScrollTolerance={true}
                        // stopSwipingHandler={true}
                        showArrows={(smol)?false:true}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        
                    >
                        {
                            images.map((item)=>(
                                <div key={item['link']}>
                                    <img src={item['link']} style={{objectFit:'contain',width: (smol)?'100%':'50vw', height:(smol)?'50vh':'70vh', padding: (smol)?'1rem':'0rem'}}/>
                                    <div
                                        style={{
                                            padding:'1rem', 
                                            marginBottom: (smol)?'3rem':'0rem', 
                                            fontWeight: 'bolder'
                                        }}
                                    >{item['cap']}</div>
                                </div>
                            ))
                        }
                        
                    </Carousel>
        </div>
    )
}

export default Acts;