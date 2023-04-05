import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const HeroSlider = ({ products }) => {
  return (
    <Slider {...settings} className="my-6">
      {products.map((product) => (
        <div key={product.name} className="relative">
          <img
            src={product.image}
            className="w-full h-[24rem] object-cover rounded-lg"
            alt={product.name}
          />
          <div className="w-1/2 absolute top-1/2 -translate-y-1/2 text-2xl md:text-4xl ml-8">
            <h3 className="text-red-500 font-bold">{product.name}</h3>
            <p className="mt-4 text-white text-2xl">{product.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
