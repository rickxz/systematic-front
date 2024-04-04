import React, { useState, useEffect, ReactNode } from "react";
import Arrow from "./subcomponents/Arrow";

interface CarouselProps {
  children: ReactNode[];
}

function Carousel({ children }: CarouselProps): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  const [maxNumberOfVisibleCards, setMaxNumberOfVisibleCards] = useState<number | null>(null);
  const [carouselPosition, setCarouselPosition] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const getCurrentCardWidth = (): number => {
    const card = document.querySelector(".carousel-card") as HTMLElement;
    if (!card) return 0;

    const cardComputedStyle = window.getComputedStyle(card);
    const width = parseInt(cardComputedStyle.width);
    const lateralWidth = parseInt(cardComputedStyle.marginRight) + parseInt(cardComputedStyle.marginLeft);
    return width + lateralWidth;
  };

  const calculateMaxNumberOfVisibleCards = (): number => {
    const carouselWindow = document.querySelector(".carousel-window") as HTMLElement;
    if (!carouselWindow) return 0;

    const windowWidth = carouselWindow.clientWidth;
    const cardWidth = getCurrentCardWidth();
    return Math.floor(windowWidth / cardWidth);
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

  return (
    <div className="carousel">
      <Arrow action={moveBackward} direction="backward" clickability={isAllowedToMoveBackward()} />
      <div
        className="carousel-window"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ overflowX: "hidden" }} // Adicionado para garantir que os itens não causem rolagem horizontal
      >
        <div
          className="carousel"
          style={{
            display: "flex",
            flexDirection: "row", // Renderiza os itens em uma linha
            transition: "transform 0.5s ease", // Adiciona uma transição suave ao mover o carrossel
            transform: `translateX(${carouselPosition}px)`,
          }}
        >
          {children.map((child, index) => (
            <div key={index} className="carousel-card">
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
