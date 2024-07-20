// import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from "react-responsive-carousel";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import './NameSection.css'



function BOD(){

    const [bod, setBod] = useState([{'position':'df', 'name':'fd'}])

    useEffect(()=>{
        setBod([
            {'position':'Chairman', 'name': 'Shri. Sanjay. O. Wagh', 'img':'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/sowagh.jpg'}, 
            {'position':'Secretary', 'name':'Hon. Adv. Dadasaheb Mahesh Sadashivrav Deshmukh', 'img':'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/im-1.png'}, 
            {'position':'Chairman', 'name': 'Shri. V.T.Joshi', 'img':'https://ssmmcollege.ac.in/wp-content/uploads/2022/03/vtjoshi.jpg'},
            {'position':'Trustee', 'name':'Dr. Shirish B Patil', 'img':'https://ssmmcollege.ac.in/wp-content/uploads/2023/02/sbp.jpeg'}]
        )
    },[])

    var smol = (screen.width<767); 

    return(
        <div style={{
          display: 'flex', 
          flexDirection: 'column',
          // height: '110vh', 
          minHeight: 'auto',
          margin: (smol)?'0rem':'1rem',
           backgroundColor: 'transparent', 
           marginTop: '0rem', 
           border: (smol)?'none':'0px solid white',
           borderRadius: '7px',
          //  width: '100%', 
           overflowY:'scroll', scrollbarWidth: 'none'}}>
        <div style={{fontSize:'1.7rem', fontWeight: 'bold', color:'black', margin:'2rem', textAlign: screen.width>767?'center':'center', marginTop: (screen.width>767)?'4rem':'2rem', marginLeft:(screen.width>767)?'0rem':'0rem' }}>The Board of Directors</div>
        <div className="bod">

        
            
            {
                bod.map((data, index)=>(
                    <Card key={data['position']+index} sx={{ maxWidth: 225, minWidth: 220 }}>
      <CardMedia
        sx={{ height: 160 }}
        component='img'
        image={data['img']}
        // height="auto"
        // image={data['img']}
        style={{objectFit: 'contain', backgroundColor:'black'}}
      />
      <CardContent
        style={{backgroundColor:'black', color:'white'}}
      >
        <Typography gutterBottom variant="h5" component="div">
          {data['position']}
        </Typography>
        <Typography variant="body4" >
            {data['name']}
        </Typography>
      </CardContent>
    </Card>
                ))
            }
            


            {/* <Carousel
            dynamicHeight={false} 
            showThumbs={false}
            infiniteLoop={true}
            width={'80vw'}
            labels={false}
            showStatus={false}
            > */}
    
            {/* </Carousel> */}
    
    

    
    
        </div>
        </div>
    )
}

export default BOD;