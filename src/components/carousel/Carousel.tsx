import "./Carousel.css";
import Arrow from "./subcomponents/Arrow";
import React, { useState, useEffect, ReactNode, CSSProperties } from "react";

interface CarouselProps {
  children: ReactNode[];
}

function Carousel({ children }: CarouselProps): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [maxNumberOfVisibleCards, setMaxNumberOfVisibleCards] = useState<number | null>(null);
  const [carouselPosition, setCarouselPosition] = useState<number>(0);
  const [carouselTranformation, setCarouselTranformation] = useState<CSSProperties>({ transform: "translateX(0px)" });
  const [windowJustification, setWindowJustification] = useState<CSSProperties>({ justifyContent: "flex-start" });
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  let countChildren = 0;

  const getCurrentCardWidth = (): number => {
    const card = document.querySelector(".carousel-card") as HTMLElement;

    const cardComputedStyle = getComputedStyle(card);
    const width = parseInt(cardComputedStyle.width);
    const lateralWidth = parseInt(cardComputedStyle.margin.split(" ")[1]);
    return 2 * lateralWidth + width;
  };

  const calculateMaxNumberOfVisibleCards = (): number => {
    const carouselWindow = document.querySelector(".carousel-window") as HTMLElement;

    const windowWidth = parseInt(getComputedStyle(carouselWindow).width);
    setMaxNumberOfVisibleCards(windowWidth / getCurrentCardWidth());
    return windowWidth / getCurrentCardWidth();
  };

  const calculateFixedPosition = (currentIndex: number): number => {
    return -currentIndex * getCurrentCardWidth();
  };

  const getForwardLimit = (): number => calculateFixedPosition(children.length - 1);

  const disrespectsForwardLimit = (value: number): boolean => value <= getForwardLimit();

  const disrespectsBackwardLimit = (value: number): boolean => value > 0;

  const isAllowedToMoveForward = (): boolean => {
    const maxVisible = maxNumberOfVisibleCards ?? 0;
    return children.length > maxVisible && index + 1 <= children.length - maxVisible;
  };

  const isAllowedToMoveBackward = (): boolean => {
    return index - 1 >= 0;
  };

  const moveForward = (): void => {
    if (!isAllowedToMoveForward()) return;
    setCarouselPosition(calculateFixedPosition(index + 1));
    setIndex(index + 1);
  };

  const moveBackward = (): void => {
    if (!isAllowedToMoveBackward()) return;

    setCarouselPosition(calculateFixedPosition(index - 1));
    setIndex(index - 1);
  };

  const handleTouchStart = (event: React.TouchEvent): void => {
    setTouchPosition(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent): void => {
    if (touchPosition === null) return;

    const displacement = touchPosition - event.touches[0].clientX;
    setTouchPosition(event.touches[0].clientX);

    const calculatedPosition = carouselPosition - displacement;
    const calculatedIndex = Math.trunc(-calculatedPosition / getCurrentCardWidth());

    setCarouselPosition(calculatedPosition);

    if (calculatedIndex !== index && 0 <= calculatedIndex && calculatedIndex < children.length) {
      setIndex(calculatedIndex);
    }
  };

  const handleTouchEnd = (): void => {
    if (touchPosition === null) return;

    if (disrespectsBackwardLimit(carouselPosition)) {
      setCarouselPosition(0);
    }

    if (disrespectsForwardLimit(carouselPosition)) {
      setCarouselPosition(getForwardLimit());
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    setMaxNumberOfVisibleCards(calculateMaxNumberOfVisibleCards());
    setCarouselPosition(calculateFixedPosition(index));
  }, [index]);

  useEffect(() => {
    setWindowJustification({
      justifyContent: children.length > (maxNumberOfVisibleCards ?? 0) ? "flex-start" : "center",
    });
  }, [maxNumberOfVisibleCards, children]);

  useEffect(() => {
    setCarouselTranformation({ transform: `translateX(${carouselPosition}px)` });
  }, [carouselPosition]);

  return (
    <div className="carousel">
      <Arrow action={moveBackward} direction="backward" clickability={isAllowedToMoveBackward()} />
      <div
        className="carousel-window"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel" style={{ ...carouselTranformation, ...windowJustification }}>
          {children.map((child) => (
            <div key={++countChildren} className="carousel-card">
              {child}
            </div>
          ))}
        </div>
      </div>
      <Arrow action={moveForward} direction="forward" clickability={isAllowedToMoveForward()} />
    </div>
  );
}

export default Carousel;
