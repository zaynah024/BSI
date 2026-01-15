import React from "react";
import ceo from "../assets/Main/ceo.png";
import Slider from "react-slick";

const SuccessStory = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-24">
      <div className="text-center space-y-4">
        <p className="text-primary uppercase font-semibold">SUCCESS STORIES</p>
        <p className="text-black font-bold text-4xl">
          What Our Clients Say About Us
        </p>
        <p className="text-xs">
          Hear the kind words said by our clients who have benefited from our
          services
        </p>
      </div>
      <div className="flex w-[90%] md:w-[70%] mx-auto mt-10">
        <div className="w-full">
          <img src={ceo} alt="" className="w-96 hidden md:block" />
        </div>
        <div className="w-full">
          <div className="bg-primary space-y-9 rounded-3xl text-white px-10 py-20">
            <div className="md:w-[400px] mx-auto">
              <Slider {...settings}>
                <div>
                  <p className="text-base md:text-xl leading-10">
                    I have been living in UK for a few years now and wanted my
                    Family to move to UK with me. BSI Consultancy has helped me
                    making this a reality. The process was very smooth and I’m
                    very thankful for their guidance and services.
                  </p>
                  <div className="flex w-full   items-center my-3 gap-4">
                    <div className=" rounded-full overflow-hidden  ">
                      <img src={ceo} className="w-10" alt="" />
                    </div>
                    <div className="text-sm font-medium text-white">
                      <p className="font-semibold">M. Aurangzeb</p>
                      <p className="font-thin">UK Work Visa Holder</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl leading-10">
                    I have been living in UK for a few years now and wanted my
                    Family to move to UK with me. BSI Consultancy has helped me
                    making this a reality. The process was very smooth and I’m
                    very thankful for their guidance and services.
                  </p>
                  <div className="flex w-full   items-center my-3 gap-4">
                    <div className=" rounded-full overflow-hidden  ">
                      <img src={ceo} className="w-10" alt="" />
                    </div>
                    <div className="text-sm font-medium text-white">
                      <p className="font-semibold">M. Aurangzeb</p>
                      <p className="font-thin">UK Work Visa Holder</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl leading-10">
                    I have been living in UK for a few years now and wanted my
                    Family to move to UK with me. BSI Consultancy has helped me
                    making this a reality. The process was very smooth and I’m
                    very thankful for their guidance and services.
                  </p>
                  <div className="flex w-full   items-center my-3 gap-4">
                    <div className=" rounded-full overflow-hidden  ">
                      <img src={ceo} className="w-10" alt="" />
                    </div>
                    <div className="text-sm font-medium text-white">
                      <p className="font-semibold">M. Aurangzeb</p>
                      <p className="font-thin">UK Work Visa Holder</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl leading-10">
                    I have been living in UK for a few years now and wanted my
                    Family to move to UK with me. BSI Consultancy has helped me
                    making this a reality. The process was very smooth and I’m
                    very thankful for their guidance and services.
                  </p>
                  <div className="flex w-full   items-center my-3 gap-4">
                    <div className=" rounded-full overflow-hidden  ">
                      <img src={ceo} className="w-10" alt="" />
                    </div>
                    <div className="text-sm font-medium text-white">
                      <p className="font-semibold">M. Aurangzeb</p>
                      <p className="font-thin">UK Work Visa Holder</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl leading-10">
                    I have been living in UK for a few years now and wanted my
                    Family to move to UK with me. BSI Consultancy has helped me
                    making this a reality. The process was very smooth and I’m
                    very thankful for their guidance and services.
                  </p>
                  <div className="flex w-full   items-center my-3 gap-4">
                    <div className=" rounded-full overflow-hidden  ">
                      <img src={ceo} className="w-10" alt="" />
                    </div>
                    <div className="text-sm font-medium text-white">
                      <p className="font-semibold">M. Aurangzeb</p>
                      <p className="font-thin">UK Work Visa Holder</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl leading-10">
                    I have been living in UK for a few years now and wanted my
                    Family to move to UK with me. BSI Consultancy has helped me
                    making this a reality. The process was very smooth and I’m
                    very thankful for their guidance and services.
                  </p>
                  <div className="flex w-full   items-center my-3 gap-4">
                    <div className=" rounded-full overflow-hidden  ">
                      <img src={ceo} className="w-10" alt="" />
                    </div>
                    <div className="text-sm font-medium text-white">
                      <p className="font-semibold">M. Aurangzeb</p>
                      <p className="font-thin">UK Work Visa Holder</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
