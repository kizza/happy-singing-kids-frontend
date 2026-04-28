"use client"

import singingKids from "@/assets/hero/happy-singing-kids.png";
import Callout from "@/components/Callout";
import Header from "@/components/Header";
import Ticks from "@/components/List/Ticks";
import Title from "@/components/Title";
import classnames from "classnames";
import Image from "next/image";
import styles from "./KindyUplift.module.scss";
import posthog from "posthog-js";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    posthog.capture("kindy_uplift_page_viewed");
  }, []);

  const ProgramHeading = ({title, subtitle}: {title: string, subtitle: string}) =>
    <Title level={2} styles={["text-grape leading-snug text-center md:text-left"]}>
      <strong className="text-2xl text-orange block">{title}</strong> <span className="text-xl">{subtitle}</span>
    </Title>

  const Divider = () => <hr className="border-dashed text-aqua mx-16 my-16" />

  return <div className={classnames(styles.Home, "")}>
    <Header>
      <section className="text-center">
        <div className={classnames("inner", "py-2 mb-16 space-y-2")}>
          <Callout>
            <Title styles={["text-teal"]}>
              Kindergarten and Daycare programs
            </Title>
          </Callout>
        </div>
      </section>
    </Header>

    <div className="text-left space-y-12">
      <section className="inner">
        <ProgramHeading title="Kindy Uplift" subtitle="Reading Through Singing" />
        <p className="text-center md:text-left"><strong>A joyful music and literacy program designed for the Kindy Uplift initiative</strong></p>
        <p>
          Give your kindy children a head start in literacy and learning through the power of music, movement, and storytelling with <strong>Kindy Uplift: Reading Through Singing</strong>—a curriculum-aligned incursion led by children’s author and award-winning musician <strong>Susie O’Leary</strong> (Happy Singing Kids).
        </p>
        <p>This engaging, interactive performance and workshop series has been developed specifically to meet <strong>Kindy Uplift priority areas</strong> including:</p>
        <Ticks className="my-4 space-y-2">
          <>Oral language and early literacy development</>
          <>Social and emotional wellbeing</>
          <>Physicality and motor coordination</>
          <>Culturally inclusive, responsive practice</>
        </Ticks>
        <p>
          Children join in through original songs, rhythmic story reading, and movement-based learning, including Susie’s popular book
          <em>Uh Oh Spaghetti-oh!</em>, which features a built-in singalong and has been featured on <strong>ABC Kids Listen</strong>.
          The program promotes phonological awareness, expressive language, confidence, and joy in a safe and inclusive environment.
        </p>
      </section>

      <Divider />

      <section className="inner">
        <ProgramHeading title="👩‍🏫 Kindy Uplift PD" subtitle="Using Music to Build Literacy, Language &amp; Joy in the Early Years" />
        <p><strong>A practical, joyful professional development session with Susie O’Leary</strong></p>
        <p>
          Empower your educators with practical tools, creative inspiration, and curriculum-aligned strategies to uplift children’s literacy and language outcomes—through the power of music and movement.
        </p>
        <p>
          Led by <strong>Susie O’Leary</strong>—a published children’s author, award-winning children’s songwriter, and creator of
          <em>Happy Singing Kids</em>—this professional development workshop is designed specifically for <strong>early childhood teams</strong>
          working within the <strong>Kindy Uplift framework</strong>.
        </p>

        <p><strong className="text-teal">🎵 What’s included:</strong></p>
        <Ticks className="my-4 space-y-2">
          <>
            <strong className="block">Practical music-based literacy strategies</strong>
            Learn how rhythm, melody, and repetition can strengthen phonological awareness, oral language, vocabulary development, and early reading skills.
          </>
          <>
            <strong className="block">Movement-based learning and brain–body connections</strong>
            Explore how whole-body engagement (action songs, movement games, dramatic play) enhances memory, coordination, and executive function—vital for preparing children to read, write, and self-regulate.
          </>
          <>
            <strong className="block">Songs and activities to take away and use immediately</strong>
            Susie shares original songs, printable lyrics, book pairings, and creative storytelling prompts that can be easily adapted into group time, transitions, or daily routines.
          </>
          <>
            <strong className="block">Inclusive and culturally responsive practice</strong>
            Strategies to make your learning environment more inclusive and engaging for children of all backgrounds and abilities—including neurodiverse learners and children with emerging speech/language needs.
          </>
        </Ticks>
      </section>

      <Divider />

      <section className="inner">
        <ProgramHeading title="📚 Uh Oh Spaghetti-oh!" subtitle="A joyful music-and-literacy resource for children aged 3–5" />
        <p>
          <em>Uh Oh Spaghetti-oh!</em> is a vibrant, sing-along picture book designed to support the learning and development of <strong>children aged 3 to 5</strong>, aligning perfectly with the goals of the <strong>Kindy Uplift program</strong>.
        </p>
        <p>
          Created by Australian musician, author, and performer <strong>Susie O’Leary</strong>, this resource combines music, movement, and storytelling to help children build foundational literacy and emotional skills—while having fun!
        </p>
        <p>
          Each book includes a <strong>QR code linking to the original song</strong>, allowing children to sing along or listen as the story is performed—building
          <strong>oral language, rhythm, vocabulary, and phonological awareness</strong> in a joyful, accessible way.
        </p>

        <p><strong className="text-teal">🎯 Why it works for 3–5 year olds:</strong></p>
        <Ticks className="my-4 space-y-2">
          <><strong>Builds early literacy skills</strong> through rhyme, repetition, and song</>
          <><strong>Strengthens oral language and expressive communication</strong></>
          <><strong>Supports social and emotional learning</strong>, with themes of resilience and bouncing back</>
          <><strong>Encourages participation</strong>, even from shy or developing speakers</>
          <><strong>Adaptable for group time, story time, or transition activities</strong></>
        </Ticks>
      </section>
    </div>

    <Divider />

    <div className="md:grid grid-cols-1 grid-rows-1">
      <section className="inner text-center md:text-left col-start-1 row-start-1">
        <div className={classnames("", "md:ml-[30%] md:mb-16 py-2 p-8 pb-12 space-y-2 bg-teal-200")}>
          <Title styles={["text-teal"]}>
            Get in touch
          </Title>
          <p>
            We'd love to talk further about what's relevant and impactful for your organisation.
            You can contact us for a free quote and conversation at <a href="mailto:contact@happysingingkids.com" onClick={() => posthog.capture("contact_email_clicked", { source: "kindy_uplift_page" })}>
              contact@happysingingkids.com
            </a>
          </p>
        </div>
      </section>

      <Image
        src={singingKids}
        className={[
          styles.Children,
          "col-start-1 row-start-1",
          "box-content",
        ].join(" ")}
        alt="Children singing music"
      />
    </div>
  </div>;
};
