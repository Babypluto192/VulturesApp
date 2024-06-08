"use client"
import classes from "./Main.module.scss";
import VulturesSection from "@/components/sections/VulturesSection";
import {useGetTracksQuery} from "@/components/VulturesAlbum1/Vultures1Api";
import Link from "next/link";
import {useGetNewsQuery} from "@/app/news/NewsApi";
import {useGetMerchQuery} from "@/app/merch/MerchApi";
import {useDispatch, useSelector} from "react-redux";
import { setMerch} from "./admin/songsSlice"
import {useEffect, useState} from "react";

export default function Home() {

    const { data:tracks  } = useGetTracksQuery();

    const dispatch = useDispatch();

    const [merchSet, setMerchSet] = useState(false);
    const {data:Merch} = useGetMerchQuery();

    useEffect(() => {
        if (Merch && !merchSet) {
            dispatch(setMerch(Merch));
            setMerchSet(true);
        }
    }, [dispatch, Merch, merchSet]);



    let musicCaption1,musicCaption2,newsCaption1,newsCaption2, newsImage1, newsImage2, merchCaption1, merchCaption2,merchImage1,merchImage2:string = ""
    const url:string = "http://localhost:4000"
     if(tracks !== undefined) {
         musicCaption1 = tracks[Math.floor(Math.random()* tracks.length)].fileName
         musicCaption2 = tracks[Math.floor(Math.random()* tracks.length)].fileName
         while (musicCaption1 === musicCaption2) {
             musicCaption2 = tracks[Math.floor(Math.random()* tracks.length)].fileName
         }
     }
    const {data:news } = useGetNewsQuery()

    if (news !== undefined && news.length > 0 && Merch !== undefined) {
        const first = Math.floor(Math.random() * news.length);
        let second = Math.floor(Math.random() * news.length);
        while (second === first) {
            second = Math.floor(Math.random() * news.length);
        }
        merchCaption1 = Merch[first].title
        merchCaption2 = Merch[second].title
        merchImage1 = url +  Merch[first].image;
        merchImage2 = url + Merch[second].image;
        newsCaption1 = news[first].title;
        newsCaption2 = news[second].title;
        newsImage1 = news[first].image;
        newsImage2 = news[second].image;
    }

    const newsImageUrl1 = newsImage1 ? url + newsImage1 : "/placeholder.png";
    const newsImageUrl2 = newsImage2 ? url + newsImage2 : "/placeholder.png";

    return (

    <div >

      <main>
        <h2 className={classes.mainTitle}> Main</h2>
      </main>
        <Link lang="ru" href="/news"> <VulturesSection title={"News"} imageurl1={newsImageUrl1} imageurl2={newsImageUrl2} caption2={newsCaption2 || ""} caption1={newsCaption1 || ""} /> </Link>
        <Link href="/music"> <VulturesSection title={"Music"} imageurl1={"/Cover.png"} imageurl2={"/Cover.png"} caption2={musicCaption2 || ""} caption1={musicCaption1 || ""}/> </Link>
        <Link href="/merch"> <VulturesSection title={"Merch"} imageurl1={merchImage1 || '/placeholder.png'} imageurl2={merchImage2 || '/placeholder.png'} caption2={merchCaption2 || ""} caption1={merchCaption1 || ""}/></Link>

    </div>

  );
}


