//concepts
// useState (storing and updating state)
// Conditionals (ternaries)
// Lists, keys, and .map()

import React from "react";
import { useState } from "react";
import "./Slider.css"

const images = [
    { title: "Boy", url: "https://images.pexels.com/photos/13623247/pexels-photo-13623247.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    { title: "Girl", url: "https://images.pexels.com/photos/13265923/pexels-photo-13265923.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" },
    { title: "City", url: "https://images.pexels.com/photos/15245702/pexels-photo-15245702.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" }
]


export const Slider = () => {
    const [currentIndex, setIndex] = useState(0)

    const prevSlide = () =>{
        setIndex(currentIndex == 0 ? images.length -1 : currentIndex -1 )
    }

    const nextSlide = () =>{
        setIndex(currentIndex == images.length -1 ? 0 : currentIndex +1 )
    }
    
    return (
        <div>
            <div className="title">Project 1: Slider</div>
            <div className="slider">
                <div className="left-arrow arrow" onClick={prevSlide}> ⬅ </div>
                {
                    images.map((image, index) => 
                        currentIndex === index &&
                            (
                                <figure key={image.title}>
                                    <img className="image" src={image.url} />
                                    <figcaption>{image.title}</figcaption>
                                </figure>
                            )
                    )
                }

                <div className="right-arrow arrow" onClick={nextSlide}>  ⮕ </div>
            </div>
        </div>

    )
}