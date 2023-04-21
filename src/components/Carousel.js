import { useState } from "react";

export default function ImageCarousel({images}){

    const [currentImage, setCurrentImage] = useState(0)
    
    let length = images && images.length;

    const nextSlide = () => {
        setCurrentImage(currentImage === length-1 ? 0 : currentImage + 1);
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length-1 : currentImage - 1)
    }

    console.log("images", images)
    console.log(typeof images)
    //console.log(images && images.length)
    console.log(currentImage)
    //console.log(length)
    if(images){
        return(
            <section className="imgCarouselContainer">
                <div className="imageArrow" id="imageArrowLeft" onClick={prevSlide}>&lt;</div>
                <div className="imageArrow" id="imageArrowRight" onClick={nextSlide}>&gt;</div>
                {images?.map((image, idx) => {
                    return(
                        <div className={idx === currentImage ? 'imgActive' : 'imgInactive'} key={idx}>
                            {idx === currentImage && (<img className="carouselImg" src={image.url} alt="Super awesome thing" />)}
                            
                        </div>
                        
                )
            })}
            </section>
            
        )
    }
    
}