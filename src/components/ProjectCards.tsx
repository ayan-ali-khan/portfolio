import Image from "next/image";
import Slider from "react-slick";

const imageData = [
  { src: "/ai.png" },
  { src: "/zcrum.png" },
  { src: "/chat.png" },
  { src: "/weather.png" },
  { src: "/crypto.png" },
  { src: "/spotify.png" },
];

export default function ProjectCarousel() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
  };

  return (
    <div className="w-full h-full items-center">
      <div className="w-full h-full flex-1 overflow-hidden">
        <Slider {...settings}>
          {imageData.map((img, idx) => (
            <div key={idx}>
              <Image
                width={800}
                height={800}
                src={img.src}
                alt={`slide ${idx}`}
                style={{ width: '100%', height: 'auto' }}
                sizes="100vw"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
