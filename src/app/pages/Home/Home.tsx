"use client"

import classnames from "classnames";
import Image from "next/image";
import Button from "@/components/Button";
import LogoLink from "@/components/LogoLink";
import YouTube from "@/components/YouTube";
import React, { useState } from "react";
import singingKids from "@/assets/hero/happy-singing-kids.png";
import abcKids from "@/assets/logos/abc-kids-listen.png";
import amazon from "@/assets/logos/amazon.png";
import apple from "@/assets/logos/apple.png";
import fringe from "@/assets/logos/fringe.png";
import spotify from "@/assets/logos/spotify.png";
import youtube from "@/assets/logos/youtube.png";
import Photo5 from "@/assets/polaroids/five.jpg";
import Photo4 from "@/assets/polaroids/four.jpg";
import Photo from "@/assets/polaroids/one.jpg";
import Photo3 from "@/assets/polaroids/three.jpg";
import Photo2 from "@/assets/polaroids/two.jpg";
import bookCover from "@/assets/uh-oh-spaghetti-oh-cover.png";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Polaroid from "@/components/Polaroid";
import Title from "@/components/Title";
import { ABC_KIDS_URL, AMAZON_URL, APPLE_URL, SPOTIFY_URL, YOUTUBE_URL } from "@/consts";
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
                If you're in town for this exciting event come say hi!  <a href="https://www.pleasance.co.uk/events/location/Edinburgh">Tickets available</a> via Pleasance Theatre
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

            {false && <div>
              <Title styles={["text-grape"]}>
                Another title
              </Title>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>}
          </div>

          <div className={classnames(styles.Right, "mt-4 md:mt-0 mb-4")}>
            <div className={styles.Book}>
              <Title styles={["text-orange whitespace-nowrap"]}>
                Get the book!
              </Title>
              <Image src={bookCover} className="shadow-lg rotate-[3deg] mb-4" alt="Uh Oh Spaghetti-oh out now!" />
              <p className="mb-2">Sing along as happy little readers! <br /><a href="/uh-oh-spaghetti-oh">Learn more.</a></p>
              {false && <Button
                label="Learn more"
                url="/uh-oh-spaghetti-oh"
              />}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={classnames("inner", "space-y-2")}>
          <Title styles={["text-aqua"]}>
            Watch the latest videos
          </Title>
          <p>And check out <a href={YOUTUBE_URL}>the full collection</a> on YouTube.</p>
          <div className="md:grid md:grid-cols-2 md:gap-6 md:gap-y-10 !mt-4">
            <YouTube src="https://www.youtube.com/embed/videoseries?si=EF44vLkT0Vy_6MR0&amp;list=PL9mOhnHTMV-FdwyAe35qQnawNUcfu8GKm" title="Mystery Alphabet Reveal Series" />
            <YouTube src="https://www.youtube.com/embed/videoseries?si=JodT8qCQ1gOCbyIR&amp;list=PL9mOhnHTMV-G_oTvYfDZYFvQxs5gHQDrx" title="Happy Highlights: Fun Favourites from Happy Singing Kids" />
            <YouTube id="ffcZOl1QKMc" title="Teddy Bear you're the best!" />
            <YouTube id="fdd5Wd6mDB4" title="Uh oh spaghetti-oh!" />
          </div>
          <p>Want more? There are <a href={YOUTUBE_URL}>more videos here</a>.</p>
        </div>
      </section>

      <div className="mt-10">
        <section className="feature">
          <div className={classnames("inner", "space-y-2")}>
            <Title styles={["text-orange"]}>
              Latest happy snaps...
            </Title>
            <p>Some photos from recent performances - so many fun and happy times</p>
          </div>
          <div className={[
            styles.Polaroids,
            styles.FullBleed,
            "flex flex-wrap ml-[14%] pt-[6%]",
          ].join(" ")}>
            <Polaroid src={Photo} />
            <Polaroid src={Photo2} rotation={-5} />
            <Polaroid src={Photo3} rotation={2} />
            <Polaroid src={Photo4} />

            <Polaroid src={Photo5} rotation={-3} />
            <Polaroid src={Photo2} rotation={-3} />
            <Polaroid src={Photo3} rotation={2} />
            <Polaroid src={Photo4} />
          </div>

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
