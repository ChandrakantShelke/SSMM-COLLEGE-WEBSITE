import { useState, useEffect } from 'react';
import './ScrollView.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  var images = ['https://e1.pxfuel.com/desktop-wallpaper/191/521/desktop-wallpaper-memes-cat-polite-cat.jpg', 'https://e0.pxfuel.com/wallpapers/674/504/desktop-wallpaper-ceiling-cat-meme.jpg', 'https://wallpapers.com/images/hd/convicted-cat-meme-gx10ilcow7j7t45q.jpg'];
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment currentIndex to show the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval on component unmount or if the images array changes
    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    // Decrement currentIndex to show the previous image
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    // Increment currentIndex to show the next image
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='main-slider'>
    <div className="title-images">A Glimpse at our Activities</div>
    <div className="image-slider">

      <div className="nav-button prev" onClick={handlePrev}>
        &lt;
      </div>
      <div className="slider-container" style={{
        // height: '100%',
        // display: 'flex', 
        // justifyContent: 'center', 
        // alignItems: 'center',
      }}>
        {/* {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} style={{'objectFit':'contain'}} className="slide" />
        ))} */}
        {
            <img key={currentIndex} src={images[currentIndex]} alt="WHATS UPP" /> 
        }
      </div>
      
      <div className="nav-button next" onClick={handleNext}>
        &gt;
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;
