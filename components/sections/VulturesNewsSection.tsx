import React from 'react';
import VulturesSection from "@/components/sections/VulturesSection";
import MySection2 from "@/components/sections/MySection2";
import {IMySection2} from "@/components/sections/IMySection2";

const VulturesNewsSection = ({description1, imageurl1, caption1}:IMySection2) => {
    return (
      <div>
        <MySection2 description1={description1}   imageurl1={imageurl1}  caption1={caption1} />
      </div>
    );
};

export default VulturesNewsSection;