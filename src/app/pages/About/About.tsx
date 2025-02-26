import singingKids from "@/assets/hero/happy-singing-kids.png";
import me from "@/assets/me.jpg";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./About.module.scss";

const About = () => (
  <div className={styles.About}>
    <Header clouds={false} />
    <div className="inner min-h-screen">
      <div className={[styles.Text, "space-y-8"].join(" ")}>
        <div className="space-y-6">
          <h2 className="text-2xl"><strong>Renowned composer and vocalist Susanna O’Leary is a creative powerhouse</strong>, delighting fans young and old with her incredible talent and infectious enthusiasm.</h2>
          <h4 className="text-xl">Her latest project, Happy Singing Kids, is a joyful musical adventure that captures her playful spirit, featuring fun-loving and sometimes downright silly tunes that have listeners tapping their toes and singing along.</h4>
        </div>

        <p>
          <Image className={styles.Me} src={me} alt="Me" />
          This exciting venture was born from a challenging time when Susanna, like many artists, faced the
          unexpected halt of her music career due to Queensland’s COVID lockdown in 2020. Instead of
          stepping away from music, she embraced the opportunity to create at home alongside her two
          young daughters and husband, Keiran. What started as a homegrown project soon became a joyous
          and liberating experience, culminating in an album that reflects her warmth, creativity, and deep
          connection to family.</p>

        <p>Despite its humble beginnings, Happy Singing Kids quickly gained momentum. Susanna
        collaborated with Grammy-nominated engineer Beau Vallis to mix and master her tracks, and her
        EP &quot;Uh Oh Spaghetti-oh!&quot; has since earned international acclaim. Used as an educational resource
        worldwide and praised by Grammy Award-winning composer Ricky Kej, the music continues to
        inspire young audiences and educators alike.</p>

        <p>A well-respected figure in the Australian music scene, Susanna has an impressive list of accolades,
        including numerous songwriting awards and performances at prestigious venues. Her soaring
        vocals have enchanted audiences with the Brisbane City Pops Orchestra (2021) and the Gold
        Coast Philharmonic Orchestra (2022), and her track &quot;Exiled&quot; (released under the pseudonym
        &quot;Zannah&quot;) earned highly commended recognition in the Queensland Music Awards&#39; World Music
        category (2020). She is also a sought-after vocalist, music educator, and adjudicator, most recently
        selected for the Queensland Choral Fanfare 2023 regional finals.</p>

        <p>The popularity of &quot;Uh Oh Spaghetti-oh!&quot; continues to grow, with its title song named a finalist at
        the Queensland Music Awards, and additional tracks receiving highly commended accolades in
        the Children’s Music category for three consecutive years (2021, 2022, and 2023). Susanna’s
        presence in children’s entertainment has expanded further, with Happy Singing Kids featured on
        ABC Kids Listen, Funky Kids Radio, Lollipops Radio, and more. Her high-energy live shows and
        workshops have captivated audiences at major children’s festivals across Queensland, including
        the Moreton Kids Festival, Spark Ipswich Festival, and Redcliffe Kite Fest.</p>

        <p>Beyond live performances and streaming platforms, Happy Singing Kids’ presence on YouTube
        continues to grow, with their educational videos gaining popularity around the globe. Families
        and educators worldwide have embraced Susanna’s fun and engaging approach to music and
        learning, making her content a go-to resource for young audiences.</p>

        <p>In addition to her success in music, Susie has now expanded her creative journey with the
        release of her first children’s book, adapted from the hit song &quot;Uh Oh Spaghetti-oh!&quot; The book
        was previewed during her interactive, literacy-based music tour across Brisbane libraries, where it
        delighted young readers and families with its playful and engaging storytelling.</p>

        <p>Fresh from the <a href="/edinburgh-festival-fringe-2024/">Edinburgh Festival Fringe 2024</a> tour, where they received two four-star reviews,
        Happy Singing Kids are here to bring the joy of music, movement, and storytelling to life. With
        upcoming shows and national tours in the pipeline, 2025 is shaping up to be a huge year for
        Susanna and her growing audience.</p>
      </div>

    </div>
    <Image
      src={singingKids}
      className="box-content -mb-[1rem]"
      alt="Children singing music"
    />
  </div>
);

export default About;
