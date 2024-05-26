import {StaticImageData} from "next/image";

export  interface IVulturesSection {
    title: string
    imageurl1: string | StaticImageData
    imageurl2: string | StaticImageData
    caption1: string
    caption2: string
}