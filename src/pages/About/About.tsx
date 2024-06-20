import React from "react";
import styles from "./About.module.scss";
import me from "../../assets/me.jpg";
import singingKids from "../../assets/hero/happy-singing-kids.png";
import Header from "components/Header";

const About = () => (
  <div className={styles.About}>
    <Header clouds={false} />
    <div className={styles.Inner}>
      <div className={[styles.Text, "space-y-8"].join(" ")}>
        <div className="space-y-6">
          <h2 className="text-2xl"><strong>Renowned composer and vocalist Susanna O’Leary is a creative powerhouse</strong>, delighting fans young and old with her incredible talent and infectious enthusiasm.</h2>
          <h4 className="text-xl">Her latest project, "Happy Singing Kids," is a delightful sonic adventure that captures Susanna’s playful spirit, showcasing fun-loving and sometimes downright silly tunes that have listeners tapping their toes and singing along.</h4>
        </div>

        <p>
          <img className={styles.Me} src={me} alt="Me" />
        This exciting venture emerged from a challenging time as Susanna, like many artists, faced the
        unexpected halt of her music career due to Queensland’s COVID lockdown in 2020. Turning adversity into
        inspiration, she embraced the opportunity to create music at home alongside her two young daughters and
        husband, Keiran. The result? A joyous and liberating experience, resulting in an album that truly reflects
        Susanna’s warmth and creativity.</p>

        <p>Despite the project’s humble beginnings, Susanna collaborated with Grammy-nominated engineer Beau Vallis
        to mix and master her tracks. The EP "Uh oh spaghetti-oh!" has already garnered international acclaim,
        with educational institutions across the globe utilizing it as a teaching resource. Grammy Award-winning
        composer Ricky Kej is among the many who have praised Susanna’s work.</p>

        <p>A familiar and respected figure in the Australian music scene, Susanna boasts an impressive array of
        accomplishments, including numerous songwriting awards and performances at prestigious venues.
        Her vocal performances with the Brisbane City Pops Orchestra in 2021 and the Gold Coast
        Philharmonic Orchestra in 2022 have left audiences breathless. Her track "Exiled," released under
        the pseudonym "Zannah," earned "highly commended" recognition in the Queensland Music
        Awards’ World Music category (2020). Susanna’s expertise extends beyond her own music, as she is
        a sought-after vocalist and teacher with a Master’s degree in Music. She was also recently selected
        to adjudicate the regional finals for the Queensland Choral Fanfare 2023.
        The popularity of "Uh oh spaghetti-oh!" continues to soar, with its lead song clinching a finalist
        position at the Queensland Music Awards and additional tracks receiving "highly commended"
        accolades in the Children’s Music category for three consecutive years (2021, 2022, and 2023).</p>

        <p>Susanna O’Leary has been stirring up a storm of enthusiasm with her dynamic live shows and
        workshops, captivating audiences everywhere. Her achievements range from a successful tour
        through Brisbane City Council libraries to being the main act at the Teddy Bear’s Picnic. She has also
        thrilled a full house at the Moreton Kids Festival (2023, 2024), entertained at the Spark Ipswich
        Festival 2023, the Pine Rivers’ Teddy Bear’s Picnic, and the highly anticipated Redcliffe Kite Fest,
        continuously elevating her profile.</p>

        <p>Dive into the joyful world of Happy Singing Kids. Experience the acclaimed "Uh oh spaghetti-oh!"
        album and Susanna’s newest songs, all available on major streaming services. Be sure to catch her
        tunes on ABC Kids Listen, where she has become a beloved name. Susanna has also expanded her
        international reach as a performer and educator with her educational videos on Youtube, their
        popularity are on the rise with 6.5k subscribers.</p>

        <p>Susanna is set to add to her list of accomplishments by launching her first children’s book, inspired
        by her popular song "Uh oh spaghetti-oh!" The book preview was recently unveiled during her
        interactive, literacy-focused music show tour across Brisbane libraries over the Christmas holidays.
        She is eagerly anticipating the release of her new book in the near future, as well as her forthcoming
        performances at the Edinburgh Fringe Festival this coming July.</p>
      </div>

    </div>
    <img
      src={singingKids}
      className={[styles.Children, "box-content"].join(" ")}
      alt="Children singing music"
    />
  </div>
);

export default About;
