import "./landingPageStyles.css";

const LandingPage = () => {
  return (
    <main className="landing-page-wrapper">
      <div className="aib-description-wrapper">
        <article className="aib-description">
          <h4>ADVENTURES IN BREATH</h4>
          <h2>EXPLORE THE LAND, AIR, AND SEA</h2>
          <p>other text</p>
        </article>
      </div>

      <div className="map-wrapper">
        <img src="../MapPlaceholder.png"></img>
      </div>
      <div className="aib-description-wrapper">
      <article className="aib-description">
      <h4>ABOUT US</h4>
      <h2>ADVENTURES IN BREATH TEAM MEMBERS</h2>

      </article>
      </div>
      <footer>
      </footer>
    </main>
  );
};

export default LandingPage;
