import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import ContentColumn from "./components/ContentColumn/ContentColumn";
import NavColumn from "./components/NavColumn/NavColumn";

// IMAGES
import baseApparel from "./projectImgs/base_apparel.png";
import sunnySide from "./projectImgs/Sunnyside_agency.png";

const AppGrid = styled.div`
  display: flex;
  flex-direction: column;

  grid-gap: 1.25rem;

  @media screen and (min-width: 501px) {
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 1.25rem;
    // margin: 0 8rem 0 8rem;
    margin: auto;
    padding: 1rem 0;
  }
  button {
    border: none;
    align-self: center;
    font-size: 1.25rem;
    padding: 0.255em 0.5em;
  }
`;

function App() {
  // state
  const [cardData, setCardData] = useState([{}]);
  const [progressBarData, setProgessBar] = useState([{}]);
  // helper
  const getProjectCardData = () => {
    setCardData([
      {
        title: "Base Apparel",
        img: baseApparel,
        demoUrl: "https://dwayne-b.github.io/FEM-BaseApparel/",
        gitUrl: "https://github.com/Dwayne-B/FEM-BaseApparel",
      },
      {
        title: "Sunnyside Agency",
        img: sunnySide,
        demoUrl: "https://dwayne-b.github.io/FEM-sunnysideAgency/",
        gitUrl: "https://github.com/Dwayne-B/FEM-BaseApparel",
      },
      { title: "Base Apparel", img: baseApparel, url: "TEMP URL" },
    ]);
  };

  const getProgressBarData = () => {
    setProgessBar([
      {
        title: "HTML/CSS(sass & bootstrap)",
        percentage: 90,
      },
      {
        title: "Javascript",
        percentage: 85,
      },
      {
        title: "React",
        percentage: 78,
      },
      {
        title: "Next.js/Gatsby,js",
        percentage: 74,
      },
      {
        title: "Figma/AdobeXD",
        percentage: 91,
      },
      {
        title: " Wordpress/PHP",
        percentage: 70,
      },
      {
        title: "Multi-tasking",
        percentage: 93,
      },
      {
        title: "Responsibility",
        percentage: 100,
      },
    ]);
  };
  useEffect(() => {
    getProjectCardData();
    getProgressBarData();
  }, []);

  return (
    <BrowserRouter>
      <AppGrid className="app-grid">
        <NavColumn />
        <ContentColumn progressBarData={progressBarData} cardData={cardData} />
      </AppGrid>
    </BrowserRouter>
  );
}

export default App;
