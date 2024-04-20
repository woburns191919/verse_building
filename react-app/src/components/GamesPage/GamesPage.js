import "./gamesPageStyles.css";
import GameCard from "../GameCard/GameCard";

const games = [
  {
    backgroundImage: "sb-assets/Wave_Pattern.png",
    gameImages: ["../sb-assets/sb-Images.png"],
    gameTitle: "../sb-assets/sb-Title.png",
    gameDescription: `Sail through captivating seas, as the guiding force behind a small boat with every breath. Overcome challenges like storms, rogue waves, and maelstroms by mastering the art of breath control. Experience the thrill of navigating diverse environments in this unique adventure.`,
  },
  {
    backgroundImage: "kg-assets/Card_BG.png",
    gameImages: ["../kg-assets/kg-Images.png"],
    gameTitle: "../kg-assets/kg-Title.png",
    gameDescription: `Feel the exhilaration as you soar through stunning landscapes, each more breathtaking than the last. Control the height of your kite with your breath and unlock hidden realms with mystical beings and captivating environments beyond imagination.

    Immerse yourself in a world where every breath takes you higher, every moment filled with wonder and discovery.`,
  },
  {
    backgroundImage: "bs-assets/CherryBlossom_Background.png",
    gameImages: ["../bs-assets/bs-Images.png"],
    gameTitle: "../bs-assets/bs-Title.png",
    gameDescription: `Embark on an epic journey through a mystical world where breathing practices and aikido techniques hold the key to restoring balance.

    Enter a captivating visual novel experience where you'll harness the power of the Kiai (気合), a powerful shout from Aikido, to free the Corrupted and guide them back to their true selves.`,
  },
  {
    backgroundImage: "bg-assets/Feather_Pattern.png",
    gameImages: ["../bg-assets/BirdSelection_Sample.png"],
    gameTitle: "../bg-assets/bg-Title.png",
    gameDescription: `Take the role of a majestic bird and journey through enchanting landscapes, all while learning fascinating facts along the way. As you hum, watch the world transform—the sky clears, the sun shines brighter, and vibrant scenery unfolds around you. But beware, should your humming cease, gloomy weather looms and obstacles emerge!

    Dive into a musical odyssey where every hum shapes your journey and every note unlocks new wonders.`,
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
