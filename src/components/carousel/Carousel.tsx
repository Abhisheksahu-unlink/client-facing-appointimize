import React from 'react';
import { Carousel } from 'antd';
//import bannerA from "../assets/BannerA.jpg";
import bannerImageA from "../assets/BannerA.jpg"
import bannerImageB from "../assets/BannerB.jpg"
import bannerImageC from "../assets/BannerC.jpg"

// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: '225px',
//   color: '#fff',
//   lineHeight: '225px',
//   textAlign: 'center',
//   background: '#364d79',
// };
const iamgeContentStyle: React.CSSProperties = {
  margin: 0,
  height: '320px',
  width: '100%'
};

const CarouselView: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <img src={bannerImageA} style={iamgeContentStyle} alt="bannerA" />
        {/* <h3 style={contentStyle}>1</h3> */}
      </div>
      <div>
      <img src={bannerImageB} style={iamgeContentStyle} alt="bannerA" />
      </div>
      <div>
      <img src={bannerImageC} style={iamgeContentStyle} alt="bannerA" />
      </div>
    </Carousel>
  );
};

export default CarouselView;