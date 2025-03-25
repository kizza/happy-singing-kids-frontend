import Success from "@/components/Success"
import Header from "@/components/Header";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Image from "next/image";
import singingKids from "@/assets/hero/happy-singing-kids.png";
import Title from "@/components/Title";

export const metadata: Metadata = {
  title: "Success",
  description: "Purchase successful",
};

export default function BuyBookRoute() {
  const fallback = <Loading label="One moment..." styles={["w-8", "h-8"]}/>

  return <>
    <Header clouds={false} />
    <div className="inner min_h-screen">
      <div className={`text-center flex flex-col items-center my-6 mb-10
        `}>
        <Title styles={["text-grape"]}>
          Thank you!
        </Title>
        <div className="my-6 md:w-1/2 flex flex-col items-center">
          <Suspense fallback={fallback}>
            <Success />
          </Suspense>
        </div>
      </div>
    </div>
    {false && <Image
      src={singingKids}
      className="box-content -mb-[1rem] -mt-[5rem] md:-mt-[10rem]"
      alt="Children singing music"
    />}
  </>
}
