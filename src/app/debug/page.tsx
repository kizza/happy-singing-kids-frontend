import BuyBook from "@/app/pages/BuyBook"
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debug",
  description: "",
};

export default function BuyBookRoute() {
  return <div className="test">
    <Header clouds={false} />
    <div className="inner min-h-screen">
      <p>Stage: {process.env.STAGE}</p>
      <p>React app stage: {process.env.REACT_APP_STAGE}</p>
      <p>Next public stage: {process.env.NEXT_PUBLIC_STAGE}</p>
    </div>
  </div>
}
