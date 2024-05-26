import React from 'react';
import classes from "./LeaksStyle.module.scss";
import VulturesHeader from "@/components/header/VulturesHeader";
const Page = () => {
    return (
        <div >
            <VulturesHeader/>
            <h3 className={classes.title}> IN DEVELOPMENT</h3>
        </div>
    );
};

export default Page;