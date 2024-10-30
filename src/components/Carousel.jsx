import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  position: relative;

  button {
    height: 40px;
    width: 40px;

    background-color: #0008;
    border-radius: 100%;
    border: none;
    color: #fff;
    cursor: pointer;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .left {
    left: 16px;
  }
  .right {
    right: 16px;
  }
`;

const Carousel = () => {
  const [cats, setCats] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchCats = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
      );
      const data = await response.json();
      setCats(data);
    } catch (error) {
      console.log(`API error ${error}`);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cats.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cats.length - 1 ? 0 : prev + 1));
  };

  return (
    <StyledOuterContainer>
      <StyledContainer>
        {cats.length > 0 && (
          <img
            src={cats[currentIndex].url}
            alt={`cat ${currentIndex}`}
            width="600px"
            height="550px"
          />
        )}
        <button className="left" onClick={handlePrev}>
          {"<"}
        </button>

        <button className="right" onClick={handleNext}>
          {">"}
        </button>
      </StyledContainer>
    </StyledOuterContainer>
  );
};

export default Carousel;
