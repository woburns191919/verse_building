import "./gameCardStyles.css";

const GameCard = ({ gameImages, gameTitle, gameDescription, backgroundImage }) => {

  const defaultBackground = "bs-assets/CherryBlossom_Background.png"

  const cardStyle = {
    backgroundImage: `url(${backgroundImage || defaultBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width:'20px'
  };
 

  const isTwoByTwoGrid = gameImages.length === 4;
  console.log('blossom length', gameImages, isTwoByTwoGrid)

  return (
    <main className="game-card" >
      <div className={`game-images-wrapper ${isTwoByTwoGrid ? 'two-by-two-grid' : ''}`}>
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
          <img src={gameDescription} alt="Game Description" />
        </article>
        <div className="game-buttons-wrapper">
          <img src="/LearnMore_Button.png" />
          <img src="./ViewTrailer_Button.png" />
        </div>
      </div>
    </main>
  );
};

export default GameCard;
