import React from "react";
import Hero from "./Hero";
import Content from "./Content";

import TimPhoto from "../Resources/images/timabout2.jpg";
import MikePhoto from "../Resources/images/mikeboston.jpg";

function Bio(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <div className="mikeBio">
          <img id="mikePhoto" src={MikePhoto} alt="headshot of Mike Boston" />
          <p>
            Mike Boston established his home in Charlotte 25 years ago. He comes
            from a high level tennis background playing for The College of
            Charleston, SC and for a short time on the Pro satellite tour where
            he established many friends in that world before moving into
            coaching and management level.
          </p>

          <p>
            Having operated several of the country's finest tennis clubs Mike is
            the epitome of "a people person" with a tremendous ability to watch
            and listen. Skills which suit him perfectly in connecting people to
            their goals, real estate needs and lifestyle.
          </p>
        </div>
        <hr id="borderBio" />
        <div className="timBio">
          <img
            id="timPhoto"
            src={TimPhoto}
            alt="ntim wilkison playing tennis"
          />
          <p>
            Tim Wilkison played professional tennis for over 25 years on the ATP
            Tour and the Senior Tennis Professional Tour.
          </p>

          <p>
            He won 6 ATP singles titles and 9 ATP doubles titles along with the
            US Open and Wimbledon Senior doubles titles.
          </p>
          <p>
            Tim was the US national 16 and under champion in 1975 and turned
            professional the next year.
          </p>
          <p>
            He was able to play with and against the greatest players in tennis
            history including Ken Rosewall, Rod Laver, Arthur Ashe, Stan Smith,
            Roscoe Tanner, Raul Ramirez, Bjorn Borg, Guillermo Vilas, Jimmy
            Connors, John McEnroe, Ivan Lendl, Yannick Noah, Mats Wilander,
            Boris Becker, Pete Sampras, Andre Agassi, Michael Chang and Jim
            Courier.
          </p>
          <p>
            Since his playing career Tim has gone into the tennis facility and
            tennis coaching business.
          </p>
          <p>
            He is the Managing Partner of Wilkison Partners which owns and
            manages two successful tennis, swim and fitness private clubs: The
            Brightleaf Club in Durham, NC and the Palisades Country Club in
            Charlotte, NC.
          </p>
          <p>
            Tim has coached all ages and skill levels for over 20 years,
            including Nike Tennis Camps.
          </p>
          <p>
            He also has a long term relationship with the Shanghai, China Tennis
            Team and is part of the coaching staff that has developed the top
            two Chinese men’s players in history; Zhang, Zhizhen and Wu, Di who
            are both currently playing on the ATP Tour.
          </p>
        </div>
        <hr id="borderBio" />
      </Content>
    </div>
  );
}

export default Bio;
