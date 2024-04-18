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


      <div className="description-and-pic-wrapper">
        <div className="aib-description-wrapper">
          <article className="aib-description">
            <h4>ADVENTURES IN BREATH</h4>
            <h2>EXPLORE THE LAND, AIR, AND SEA</h2>
            <p>other text</p>
            <img src="../PrimaryButton.png"></img>
          </article>
        </div>
        <div className="landing-page-right-pic">
            <img src="Right.png"></img>
        </div>
      </div>

        <div className="aib-description-wrapper">
          <article className="aib-description">
            <h4>ABOUT US</h4>
            <h2>ADVENTURES IN BREATH TEAM MEMBERS</h2>
          </article>
        </div>

      <footer>
        <div className="footer-top">
          <h4 className="contact-us">
            CONTACT US
          </h4>

        </div>
        <div className="footer-mid">

        </div>
        <div className="footer-bottom">

        </div>

      </footer>
    </main>
  );
};

export default LandingPage;
