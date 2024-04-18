import "./gamesPageStyles.css";
import GameCard from "../GameCard/GameCard";

const games = [
  {
    backgroundImage: "sb-assets/Wave_Pattern.png",
    gameImages: [
      "../sb-assets/sb-Images.png"
    ],
    gameTitle: "../sb-assets/sb-Title.png",
    gameDescription: "../sb-assets/sb-Description.png",
  },
  {
    backgroundImage: "kg-assets/Card_BG.png",
    gameImages: ["../kg-assets/kg-Images.png"],
    gameTitle: "../kg-assets/kg-Title.png",
    gameDescription: "../kg-assets/kg-Description.png",
  },
  {
    backgroundImage: "bs-assets/CherryBlossom_Background.png",
    gameImages: [
      "../bs-assets/bs-Images.png"
    ],
    gameTitle: "../bs-assets/bs-Title.png",
    gameDescription: "../bs-assets/bs-Description.png",
  },
  {
    backgroundImage: "bg-assets/Feather_Pattern.png",
    gameImages: ["../bg-assets/BirdSelection_Sample.png"],
    gameTitle: "../bg-assets/bg-Title.png",
    gameDescription: "../bg-assets/bg-Description.png",
  },
];

const GamesPage = () => {
  return (
    <main className="games-page-wrapper">
      <div className="game-cards">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </main>
  );
};

export default GamesPage;
