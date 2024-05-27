import Image from "next/image";
import VulturesHeader from "@/components/header/VulturesHeader";
import classes from "./Main.module.scss";
import VulturesSection from "@/components/sections/VulturesSection";
import VulturesFooter from "@/components/footer/VulturesFooter";

export default function Home() {
  return (
    <div >

      <main>
        <h2 className={classes.mainTitle}> Main</h2>
      </main>
      <VulturesSection title={"News"} imageurl1={""} imageurl2={""} caption2={""} caption1={""}/>
      <VulturesSection title={"Music"} imageurl1={""} imageurl2={""} caption2={""} caption1={""}/>
      <VulturesSection title={"Merch"} imageurl1={""} imageurl2={""} caption2={""} caption1={""}/>

    </div>
  );
}


