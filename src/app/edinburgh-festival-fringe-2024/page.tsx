import HappySnaps from "@/app/pages/Home/HappySnaps";
import LatestVideos from "@/app/pages/Home/LatestVideos";
import singingKids from "@/assets/hero/happy-singing-kids.png";
import fringe from "@/assets/logos/fringe.png";
import posterReading from "@/assets/posters/edinburgh-festival-2024-reading.jpg";
import posterSinging from "@/assets/posters/edinburgh-festival-2024-singing.jpg";
import Header from "@/components/Header";
import IconLink from "@/components/IconLink";
import Title from "@/components/Title";
import classnames from "classnames";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We're performing at the Edinburgh Festival Fringe 2024",
  description: "Looking to find vibrant Kids shows and family fun? We've got two of them! Come see us at the Edinburgh Festival Fringe 2024 at Pleasance Theatre",
};

export default function UhOhSpaghettiOhRoute() {
  return <div className="flex flex-col min-h-full">
    <Header>
      <section>
        <div className="inner">
          <Image src={fringe} className="max-w-[9rem] m-auto md:float-right" alt="Performing at the Edinburgh Festival Fringe 2024" />
          <Title layout={false} styles={["text-orange text-center mt-4 mb-6 md:text-left"]} >
            We're performing at the <span className="text-grape md:block">Edinburgh Festival Fringe 2024!</span>
          </Title>
          <p className="">
            Looking for fun family activities and shows at the Edinburgh Festival Fringe this year?
            Come sing along with Happy Singing Kids
            at the <Link href="https://www.pleasance.co.uk/events?keywords=happy%20singing%20kids">Pleasance Theatre</Link> from the 31st of July till 13th August.
          </p>
          <p>
            <IconLink href="https://www.pleasance.co.uk/events/location/Edinburgh?keywords=happy%20singing%20kids">
              Book your tickets
            </IconLink>
          </p>
        </div>
      </section>
    </Header>

    <section className="">
      <div className="inner mt-10 mb-2 md:text-center">
        <Title level={3} styles={["text-aqua"]}>
          We'll be performing two different shows daily...
        </Title>
        <p>So come and enjoy the variety - we'd love to see you at both!</p>
      </div>

      <div className="inner md:text-center">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8">
          <div className="">
            <Title level={2} layout={true} styles={["text-pink"]} >
              Uh Oh Spaghetti-Oh!
            </Title>
            <p>
              Step into an unforgettable family-friendly musical adventure that brings a slice of Australian sunshine to the stage.
            </p>
            <a className="block" href="https://www.pleasance.co.uk/event/uh-oh-spaghetti-oh">
              <Image src={posterSinging} className="p-4" alt="Uh Oh Spaghetti-Oh! poster" />
            </a>
            <p><b>Where</b>: Pleasance Courtyard, The Green</p>
            <p><b>When</b>: 10:00am and 11:30 daily <br />31st of July till 13th August</p>
            <p>
              <IconLink href="https://www.pleasance.co.uk/event/uh-oh-spaghetti-oh">
                Tickets available here
              </IconLink>
            </p>
          </div>
          <div className="">
            <Title level={2} layout={true} styles={["text-teal-500"]} >
              Reading through singing time
            </Title>
            <p>
              An enchanting blend of award-winning music and storytelling designed to spark young imaginations and enhance literacy.
            </p>
            <a className="block" href="https://www.pleasance.co.uk/event/reading-through-singing-time">
              <Image src={posterReading} className="p-4" alt="Reading through singing time poster" />
            </a>
            <p><b>Where</b>: Pleasance Courtyard, The Green</p>
            <p><b>When</b>: 10:45am daily <br />31st of July till 13th August</p>
            <p>
              <IconLink href="https://www.pleasance.co.uk/event/reading-through-singing-time">Tickets available here</IconLink>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-8 md:-mb-8">
      <div className={classnames("inner")}>
        <Title styles={["text-orange"]}>
          Happy snaps from the shows...
        </Title>
        <p>Some photos from recent performances - so many fun and happy times</p>
      </div>

      <HappySnaps />
    </section>

    <section className="sm:mt-4">
      <LatestVideos />

      <Image
        src={singingKids}
        className="box-content"
        alt="Children singing music"
      />
    </section>
  </div>
}
