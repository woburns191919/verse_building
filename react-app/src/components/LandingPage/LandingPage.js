import "./landingPageStyles.css";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";

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
        <div className="aib-description-wrapper2">
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
          <div className="footer-top-left">
            <h4 className="contact-us">CONTACT US</h4>
            <p className="join-us">JOIN US TODAY!</p>
            <p className="lorem">Other text</p>
          </div>
          <div className="footer-top-right">
            <div className="search-and-sign-up">
              <input placeholder="Email Address"></input>
              <OpenModalButton
                imageSrc="../SignUpButton.png"
                buttonText="Sign up button"
                modalComponent={<SignupFormModal />}
              />
            </div>
          </div>
        </div>

        <div className="footer-mid">
          <div className="footer-mid-left">
            <div className="first-in-footer-mid-left">
              <h5>The Verse</h5>
              <p>AiB Team Members</p>
            </div>

            <div className="second-in-footer-mid-left">
              <h5>Information</h5>
              <p>Privacy & Terms</p>
            </div>

            <div className="third-in-footer-mid-left">
              <h5>Resources</h5>
              <p>Contact</p>
            </div>
          </div>
          <div className="footer-mid-right">{/* empty div for spacing */}</div>
        </div>

        <div className="footer-bottom">
          <div className="logos-footer-bottom">
            <img src="../X.png"></img>
            <img src="../IG.png"></img>
            <img src="../LinkedIn.png"></img>
          </div>

          <div className="copyright-footer-bottom">
            <p>Copyright @ The Verse 2024</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
