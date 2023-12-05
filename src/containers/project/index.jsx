import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/pageHeaderContent";
import ImageONe from "../../image/IMAGES/imag1.jpg";
import ImageTWO from "../../image/IMAGES/imag2.jpg";
import ImageThree from "../../image/IMAGES/imag3.jpg";
import ImageFour from "../../image/IMAGES/imag4.jpg";
import ImageFive from "../../image/IMAGES/imag5.jpg";
import ImageSix from "../../image/IMAGES/image6.jpg";
import ImageSeven from "../../image/IMAGES/imag7.jpg";

import "./styles.scss";

const projectData = [
  {
    id: 3,
    name: "Guess Number",
    image: ImageONe,
    link: "https://github.com/zahraHasanzada/Guess-Number",
  },
  {
    id: 3,
    name: "Color Game",
    image: ImageTWO,
    link: "https://github.com/zahraHasanzada/color-game",
  },
  {
    id: 3,
    name: "Dice Game",
    image: ImageThree,
    link: "https://github.com/zahraHasanzada/Dice2",
  },
  {
    id: 3,
    name: "Password Show",
    image: ImageFour,
    link: "https://github.com/zahraHasanzada/show-message",
  },
  {
    id: 3,
    name: "Show Model",
    image: ImageFive,
    link: "https://github.com/zahraHasanzada/show-modal",
  },
  {
    id: 2,
    name: "Car Store",
    image: ImageSix,
    link: "https://github.com/zahraHasanzada/Car-Store",
  },
  {
    id: 2,
    name: "Project Timer",
    image: ImageSeven,
    link: "https://github.com/zahraHasanzada/project-timer",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "React",
  },
  {
    filterId: 3,
    label: "Js",
  },
 
];

const Portfolio = () => {
  const [filteredvalue, setFiteredValue] = useState(1);
  const[hoveredValue,setHoverValue] = useState(null)
  function handleFiter(currentId) {
    setFiteredValue(currentId);
  }
function handleHover (index){
  setHoverValue(index)
}


  console.log("======================");
  console.log(hoveredValue);
  console.log("======================");
  const filteredItems =
    filteredvalue === 1
      ? projectData
      : projectData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Project"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFiter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio_content_cards">
          {filteredItems.map((item,index) => (
            <div
              className="portfolio_content_cards_item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
            >
              <div className="portfolio_content_cards_item_img-wrapper">
                <a>
                  <img alt="dummy Data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {
                  index === hoveredValue && (
                    <div>
                      <p>{item.name}</p><br></br><br></br>
                      <a className="button" href={item.link} target="_blank" rel="noopener no referre">Visit</a>
                    </div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
