import React from 'react';

import MySection2 from "@/components/sections/MySection2";
import {IMySection2} from "@/interfaces/IMySection2";

const VulturesNewsSection = ({description1, imageurl1, caption1, id}:IMySection2) => {
    return (
      <div lang="ru">
        <MySection2 description1={description1}   imageurl1={"http://localhost:4000" + imageurl1}  caption1={caption1} id={id} />
      </div>
    );
};

export default VulturesNewsSection;