import React from 'react';
import './RandomDuo.scss';
const RandomDuo = () => {
  return (
    <article className="random-container">
      <section id="about">
        <h2>Duo Randomiser</h2>
        <h5>
          You can use this tool to get a random, well synergised duo with quick
          steps on why the two champions work well together and the general
          playstyle
        </h5>
        <h5>
          If you don't like the champions, simply click re-generate to get a new
          duo!
        </h5>
      </section>
      <section className="champions">
        <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"></img>
        <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"></img>
      </section>
    </article>
  );
};

export default RandomDuo;
