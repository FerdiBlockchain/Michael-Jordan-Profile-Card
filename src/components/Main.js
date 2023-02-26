import react from "react";
import emailLogo from "../images/mail-icon.png";
import linkedinLogo from "../images/linkedin-icon.png";

export default function Main() {
  return (
    <div className="main--container">
      <h3 className="main--heading main--content">Basketball Player</h3>
      <h4 className="main--h4--one main--content">NBA Legend</h4>
      <span className="main--span--two main--content">
        michaeljordansworld.com
      </span>
      <div className="btn--class">
        <button className="main--btn btn--email">
          <img src={emailLogo} className="email" />
          Email
        </button>
        <button className="main--btn btn--linkedin">
          <img src={linkedinLogo} className="linkedin" />
          Linkedin
        </button>
      </div>
      <div className="main--about--interest">
        <h3>About</h3>
        <p>
          Michael Jordan, (born February 17, 1963, Brooklyn, New York, U.S.),
          American professional basketball player widely considered to be one of
          the greatest all-around players in the history of the game. He led the
          Chicago Bulls to six National Basketball Association (NBA)
          championships (1991–93, 1996–98).
        </p>

        <h3>Interests</h3>
        <p>
          When Michael Jordan retired in 2003, he started pursuing other
          ventures in life to keep him occupied. But in a recent interview with
          Golden State Warriors star Stephen Curry, Jordan admitted that golf is
          the only hobby that keeps his competitive spirit running and keeps him
          “sane” in retirement.
        </p>
      </div>
    </div>
  );
}
