"use client"
import React from "react";
import CardTop from "../Cards/CardTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  project_name: string | null;
  active_count: number;
  inactive_count: number;
}

interface DataStatsProps {
  data: Project[];
}

const DataStatsOne: React.FC<DataStatsProps> = ({ data }) => {
  // Separate Free Server and other projects
  const FreeServer = data
    .filter((item) => item.project_name == null)
    .map((item) => ({
      ...item,
      project_name: "Free Servers",
    }));

  const OtherProjects = data.filter((item) => item.project_name !== null);

  // Slider settings with breakpoints
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,  
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600, // Medium screens (tablet)
        settings: {
          slidesToShow: 2, // Show 2 cards on tablets
        },
      },
      {
        breakpoint: 768, // Small screens (mobile)
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
        },
      },
    ],
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
      {/* Free Server card section */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 z-30 justify-items-center">
        {FreeServer.map((item, index) => (
          <CardTop key={`free-${index}`} data={item} index={index} />
        ))}
      </div>

      {/* Slider for other project cards */}
      <div className="w-full sm:w-1/2 md:w-2/3  lg:w-3/4 ">
        <Slider {...settings}>
          {OtherProjects.map((item, index) => (
            <div key={index} className="justify-items-center">
              <CardTop
                data={{
                  ...item,
                  project_name: item.project_name ?? "Free Servers",
                }}
                index={index}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DataStatsOne;
