import {IMySection} from "@/components/sections/IMySection";

export interface IMySection2 extends Omit<IMySection, 'title' | 'imageurl2' | 'caption2'> {
    description1: string,

}