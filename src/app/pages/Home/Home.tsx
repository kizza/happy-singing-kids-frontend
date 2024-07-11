"use client"

import HappySnaps from "@/app/pages/Home/HappySnaps";
import LatestVideos from "@/app/pages/Home/LatestVideos";
import singingKids from "@/assets/hero/happy-singing-kids.png";
import abcKids from "@/assets/logos/abc-kids-listen.png";
import amazon from "@/assets/logos/amazon.png";
import apple from "@/assets/logos/apple.png";
import fringe from "@/assets/logos/fringe.png";
import spotify from "@/assets/logos/spotify.png";
import youtube from "@/assets/logos/youtube.png";
import bookCover from "@/assets/uh-oh-spaghetti-oh-cover.png";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Header from "@/components/Header";
import IconLink from "@/components/IconLink";
import LogoLink from "@/components/LogoLink";
import Title from "@/components/Title";
import { ABC_KIDS_URL, AMAZON_URL, APPLE_URL, SPOTIFY_URL } from "@/consts";
import classnames from "classnames";
import Image from "next/image";
import { useState } from "react";
import styles from "./Home.module.scss";

const Home = () => {
  const [_showing, setShowing] = useState<boolean>(false);
  return <div className={styles.Home}>
    <Header>
      <section>
        <Banner onShow={() => setShowing(true)}/>
      </section>
    </Header>

    {<div className="flex flex-col space-y-8">
      <section>
        <div className={classnames("flex flex-col  lg:flex-row lg:space-x-6", "inner")}>
          <div className={classnames(styles.Left, "space-y-8 md:space-y-12")}>
            <div className={styles.Edinburgh}>
              <Title styles={["text-aqua"]}>
                Edinburgh Festival Fringe
              </Title>
              <Image src={fringe} alt="Performing at the Edinburgh Festival Fringe 2024" />
              <p>
                So excited to be performing at the Edinburgh Festival Fringe 2024.
                If you're in town for this exciting event come say hi! {" "}
                <a href="https://www.pleasance.co.uk/events/location/Edinburgh?keywords=happy%20singing%20kids">Tickets available now</a> via Pleasance Theatre
              </p>
              <p>
                <IconLink href="/edinburgh-festival-fringe-2024/">Learn more</IconLink>
              </p>
            </div>

            <div>
              <Title styles={["text-grape"]}>
                Sing along with...
              </Title>
              <div className="flex flex-wrap gap-4 mt-2 md:mt-4 mb-4">
                <LogoLink label="ABC Kids Listen" logo={abcKids} url={ABC_KIDS_URL} styles={["basis-[35%]"]}/>
                <LogoLink label="YouTube" logo={youtube} url="https://www.youtube.com/@happysingingkids" styles={["basis-[28%]"]}/>
                <LogoLink label="Spotify" logo={spotify} url={SPOTIFY_URL} styles={["basis-[25%]"]}/>
                <LogoLink label="Apple Music" logo={apple} url={APPLE_URL} styles={["basis-[25%]"]}/>
                <LogoLink label="Amazon Music" logo={amazon} url={AMAZON_URL} styles={["basis-[35%]"]}/>
              </div>
            </div>
          </div>

          <div className={classnames(styles.Right, "mt-4 md:mt-0 mb-4")}>
            <div className={styles.Book}>
              <Title styles={["text-orange whitespace-nowrap"]}>
                Get the book!
              </Title>
              <Image src={bookCover} className="shadow-lg rotate-[3deg] mb-4" alt="Uh Oh Spaghetti-oh out now!" />
              <p>Sing along as happy little readers! <br /><a href="/uh-oh-spaghetti-oh/">Learn more.</a></p>
              {false && <Button
                label="Learn more"
                url="/uh-oh-spaghetti-oh"
              />}
            </div>
          </div>
        </div>
      </section>

      <section>
        <LatestVideos />
      </section>

      <div className="mt-10">
        <section className="feature">
          <div className={classnames("inner")}>
            <Title styles={["text-orange"]}>
              Latest happy snaps...
            </Title>
            <p>Some photos from recent performances - so many fun and happy times</p>
          </div>

          <HappySnaps />

          <Image
            src={singingKids}
            className={[styles.Children, "box-content"].join(" ")}
            alt="Children singing music"
          />
        </section>
      </div>
    </div>}
  </div>
};

export default Home;
