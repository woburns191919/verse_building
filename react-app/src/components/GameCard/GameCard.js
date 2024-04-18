import "./gameCardStyles.css";
import OpenModalButton from "../OpenModalButton";
import ViewTrailer from "../ViewTrailer/ViewTrailer";
import { Link } from "react-router-dom";

const GameCard = ({
  gameImages,
  gameTitle,
  gameDescription,
  backgroundImage,
}) => {
  const defaultBackground = "bs-assets/CherryBlossom_Background.png";

  const cardStyle = {
    backgroundImage: `url(${backgroundImage || defaultBackground})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    width:'100%',
    maxWidth:'800px'
  };

  const isTwoByTwoGrid = gameImages.length === 4;
  console.log("blossom length", gameImages, isTwoByTwoGrid);

  return (
    <main className="game-card">
      <div
        style={cardStyle}
        className="game-images-wrapper"
      >
        {gameImages &&
          gameImages.map((src, i) => (
            <div key={i} className="game-image">
              <img src={src} alt={`Game Screenshot ${i}`} />
            </div>
          ))}
      </div>
      <div className="game-info-and-buttons-wrapper">
        <article className="game-info">
          {gameTitle && <img src={gameTitle} alt="Game Title" />}
          <img
            className="description-only"
            src={gameDescription}
            alt="Game Description"
          />
        </article>
        <div className="game-buttons-wrapper">
          <Link to="/learn-more">
            <img src="/LearnMore_Button.png" alt="Learn More" />
          </Link>
          <OpenModalButton
            imageSrc="./ViewTrailer_Button.png"
            buttonText="View Trailer"
            modalComponent={<ViewTrailer />}
          />
        </div>
      </div>
    </main>
  );
};

export default GameCard;
