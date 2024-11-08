import React from "react";
import { FolderGit2 } from "lucide-react";
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
    .filter((item) => item.project_name === null)
    .map((item) => ({
      ...item,
      project_name: "Free Servers",
    }));

  const OtherProjects = data.filter((item) => item.project_name !== null);

  // Slider settings
  const settings = {
    
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-10">
      {/* Free Server card - fixed width */}
      <div className="w-1/4">
        {FreeServer.map((item, index) => (
          <CardTop key={`free-${index}`} data={item} index={index} />
        ))}
      </div>

      {/* Slider for other project cards */}
      <div className="w-3/4 wx-auto ">
        <Slider {...settings}>
          {OtherProjects.map((item, index) => (
            <div key={index} className="px-2">
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
