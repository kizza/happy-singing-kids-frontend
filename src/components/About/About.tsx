import React from "react";
import styles from "./About.module.scss";
import me from "../../assets/me.jpg";

export default () => (
  <div className={styles.About}>
    <div className={styles.Inner}>
      {/* <h2>About</h2> */}
      <div className={styles.Text}>
        <p>Susanna O’Leary is an award winning composer and vocalist. Described as a musical chameleon, her latest venture “Happy Singing Kids” showcases Susanna’s lighter side as an artist, with songs that are fun loving and oftentimes silly.</p>


        <p>
          <img className={styles.Me} src={me} alt="Me" />

          Susanna describes her latest undertaking as a labour of love, with songs that manifested organically from bringing up two young daughters with her husband, Keiran. With Queensland's covid lockdown statewide last year, Susanna was among many artists who saw her performances and musical plans come to a grinding halt. In her attempt to ‘make the most of a difficult situation’ Susanna felt inspired to start recording music at home.  She jokes about her “less than ideal” recording studio which was positioned in the only room available, next to the front door of her house. There Susanna piecemealed together a studio from an old keyboard, a flute gifted to her from a musician who was moving interstate and some free software she found online. She describes the overall experience as “joyful and liberating” as she recorded and produced the songs completely by herself using midi instruments and backing vocals from daughter Mischa (aged 9) and husband Keiran.


        </p>

        <p>Although humble in it’s creation Susanna sought the expertise of Grammy nominated engineer Beau Vallis (“Happy” by Pharall Williams, Beyonce and Sia) to mix and master her tracks. Her EP “Uh oh spaghetti-oh!” is already gaining traction worldwide as a teaching resource in continents such as South America and has received high praise from Grammy Award Winning World Music composer Ricky Kej. </p>

        <p>Susanna O’Leary is no stranger to the Australian music scene with several awards under her belt as a songwriter and performances at notable venues around Australia. Last year, Susanna was awarded “highly commended” in the Queensland Music Awards 2020 for her track “Exiled” under her pseudonym “Zannah” in the World Music category. She is a sought after vocalist and teacher in her own right, with a Masters degree in Music and latest vocal performances with the Brisbane City Pops Orchestra in March this year. </p>

        <p>A testament to Susanna’s songwriting prowess, a month after its release, her title track “Uh oh spaghetti-oh!” was selected as a finalist in the Queensland Music Awards 2021 in the Children’s music category. “Uh oh spaghetti-oh!” is available on all music platforms and is on radio rotation worldwide including ABC kids listen.</p>
      </div>
    </div>
  </div>
);
