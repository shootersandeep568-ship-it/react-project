import React, { useEffect, useState } from "react";
import imges from '../imges/s.webp'
import imgs from '../imges/s1.webp'
import imgsg from '../imges/s2.webp'
import imgg from '../imges/s3.webp'

const bannerImages = [
    imges, imgs, imgsg, imgg
];

const Slider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % bannerImages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="slider">
            <img src={bannerImages[index]} alt="banner" />
            <button className="leftt" onClick={() => setIndex(index === 0 ? bannerImages.length - 1 : index - 1)}>
                ❮
            </button>
            <button className="rightt" onClick={() => setIndex((index + 1) % bannerImages.length)}>
                ❯
            </button>
        </div>
    );
};

export default Slider;
