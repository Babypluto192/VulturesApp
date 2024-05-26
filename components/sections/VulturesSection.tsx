import React from 'react';
import {IVulturesSection} from "@/components/sections/IVulturesSection";
import MySection from "@/components/sections/MySection";
import PlaceHolder from "@/public/placeholder.png"
const VulturesSection = ({title, imageurl1, imageurl2, caption1 ,caption2}:IVulturesSection)=> {
    return (
       <>
           <MySection title={title} imageurl1={ imageurl1 || PlaceHolder}  imageurl2={ imageurl2 || PlaceHolder} caption1={caption1 || "Placedoler Caption"} caption2={caption2 || "Placedoler Caption"}  />
       </>
    );
};

export default VulturesSection;