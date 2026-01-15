import React from "react";
import { useYoutubeList } from "../Services/UseYoutubeList";
import Slider from "react-slick";
import { FaPlay } from "react-icons/fa";

const LatestYoutube = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data, isLoading } = useYoutubeList();

  const getYoutubeEmbedUrl = (url) => {
    // Handle different YouTube URL formats
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  if (isLoading) {
    return (
      <div className="py-24 text-center">
        <p>Loading videos...</p>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="text-center space-y-4">
        <p className="text-primary uppercase font-semibold">OUR VIDEOS</p>
        <p className="text-black font-bold text-4xl">LATEST FROM YOUTUBE</p>
        <p className="text-xs">Watch our latest videos on youtube.</p>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="slider-container">
          <Slider {...settings}>
            {data?.data?.map((video, i) => {
              const embedUrl = getYoutubeEmbedUrl(video.video_link);
              if (!embedUrl) return null;

              return (
                <div key={i} className="px-2">
                  <div className="relative group cursor-pointer">
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <iframe
                        src={embedUrl}
                        title={`YouTube video ${i + 1}`}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LatestYoutube;
