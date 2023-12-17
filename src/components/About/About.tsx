import React from "react";
import styles from "./About.module.scss";
import me from "../../assets/me.jpg";

const About = () => (
  <div className={styles.About}>
    <div className={styles.Inner}>
      <div className={[styles.Text, "space-y-8"].join(" ")}>
        <div className="space-y-6">
          <h2 className="text-3xl"><strong>Renowned composer and vocalist Susanna O'Leary is a creative powerhouse</strong>, delighting fans young and old with her incredible talent and infectious enthusiasm.</h2>
          <h4 className="text-xl">Her latest project, "Happy Singing Kids," is a delightful sonic adventure that captures Susanna's playful spirit, showcasing fun-loving and sometimes downright silly tunes that have listeners tapping their toes and singing along.</h4>
        </div>

        <p>
          <img className={styles.Me} src={me} alt="Me" />
          This exciting venture emerged from a challenging time as Susanna, like many artists, faced the unexpected halt of her music career due to Queensland's COVID lockdown in 2020. Turning adversity into inspiration, she embraced the opportunity to create music at home alongside her two young daughters and husband, Keiran. The result? A joyous and liberating experience, resulting in an album that truly reflects Susanna's warmth and creativity.</p>

        <p>Despite the project's humble beginnings, Susanna collaborated with Grammy-nominated engineer Beau Vallis to mix and master her tracks. The EP "Uh oh spaghetti-oh!" has already garnered international acclaim, with educational institutions across the globe utilizing it as a teaching resource. Grammy Award-winning composer Ricky Kej is among the many who have praised Susanna's work.</p>

        <p>A familiar and respected figure in the Australian music scene, Susanna boasts an impressive array of accomplishments, including numerous songwriting awards and performances at prestigious venues. Her vocal performances with the Brisbane City Pops Orchestra in 2021 and the Gold Coast Philharmonic Orchestra in 2022 have left audiences breathless. Her track "Exiled," released under the pseudonym "Zannah," earned "highly commended" recognition in the Queensland Music Awards' World Music category. Susanna's expertise extends beyond her own music, as she is a sought-after vocalist and teacher with a Master's degree in Music.</p>

        <p>The success of "Uh oh spaghetti-oh!" has continued to skyrocket, with the title track securing a finalist spot in the Queensland Music Awards and further tracks earning "highly commended" honors in the Children's Music category (2021, 2022 & 2023).</p>

        <p>With a whirlwind of energy and excitement, Susanna O'Leary's live performances and workshops have been captivating audiences far and wide. From a triumphant tour of Brisbane City Council libraries to headlining the Teddy Bear's Picnic, dazzling a sold-out crowd at the Moreton Kids Festival to delighting audiences at the Spark Ipswich Festival 2023, Susanna's star continues to rise.</p>

        <p>Join in on the fun and discover the music of Happy Singing Kids for yourself. Susanna’s album "Uh oh spaghetti-oh!" and latest releases "Teddy bear you're the best" and "Squished bananas" are available on all major music platforms. Be sure to catch her tunes on ABC Kids Listen, where her music has become a cherished favourite and look out for her exciting new releases with her latest collaboration with Brisbane author Lee Phethean.</p>
      </div>
    </div>
  </div>
);

export default About;
