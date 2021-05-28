import React from "react";
import Hero from "./Hero";
import Content from "./Content";

import suncity2Image from "../Resources/images/sun_city2.jpg";
import suncityImage from "../Resources/images/sun_city.jpg";
import timSig from "../Resources/images/coreLogo.png";
import brightleaf from "../Resources/images/blblack.png";
import palisades from "../Resources/images/palisadesblack.png";
import suncityLogo from "../Resources/images/suncitylogo.png";
import twFacility from "../Resources/images/twFacility.png";

// const divStyle = {
//   backgroundImage: 'url("../Resources/images/tennisheader2.jpg")',
//   backgroundSize: "cover",
// };

function AboutPage(props) {
  return (
    <div id="aboutMediaQuery">
      <Hero title={props.title} />

      <Content>
        <div className="contentParagraph">
          <p>
            Tim Wilkison and Mike Boston have combined their vast experience in
            active lifestyle events and facilities to develop Lifestyle
            Communities where “The best is yet to come!”
          </p>

          <p>
            Mike and Tim have a long and close friendship that has become a
            business relationship based on their core beliefs. Both Tim and Mike
            played and coached at a high level of athletics. Tim played for
            twenty-five years on the international professional tennis tour
            where he competed at events such as Wimbledon and the US Open. After
            his playing career Tim moved into tennis coaching where he has
            trained players of all ages and skill levels including multiple
            players currently competing on the professional tennis tours. Mike
            played Division 1 college tennis and went on to finance, build and
            manage some of the finest active lifestyle facilities in the US
            before adding residential real estate development to his business
            experience.
          </p>

          <p>
            Mike and Tim have two core values that are central to every
            relationship they enter. The first is to demand the very highest
            level of performance from themselves and their team that is involved
            in that project. Their second core value is to sincerely put the
            benefit of their clients, partners and associates in the forefront
            of all decisions that are made. There are countless references from
            Wilkison Partners relationships that can attest to that.
          </p>

          <p>
            Wilkison Partners encourages you to contact us to explore the
            possibility of working together.
          </p>

          <p>The best is yet to come!</p>
        </div>
        <img id="timSig" src={timSig} alt="tim signature" width="20%" />
        <h2>Tim Wilkison</h2>
        <hr id="borderBio" />
        <div className="aboutContainer">
          <img
            className="aboutImages aboutImagesOne"
            src={suncity2Image}
            alt="tim posing at sun city tennis courts"
          />
          <img
            className="aboutImages"
            src={suncityImage}
            alt="bright leaf club construction"
          />
        </div>
      </Content>

      <hr id="borderBio" />
      <div className="clubs">
        <a
          className="clubsA"
          href="http://www.thepalisadescc.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="clubImg"
            src={palisades}
            alt="palisades logo + link"
          />
        </a>
        <a
          className="clubsA"
          href="https://www.brightleafclub.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="clubImg"
            src={brightleaf}
            alt="brightleaf logo + link"
          />
        </a>
        <a
          className="clubsA"
          href="https://www.suncitycharlotte.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="clubImg"
            src={suncityLogo}
            alt="suncity logo + link"
          />
        </a>
        <a
          className="clubsA"
          href="http://timwilkisonacademies.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="clubImg"
            src={twFacility}
            alt="TW Facilities logo + link"
          />
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
