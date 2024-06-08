"use client"
import React from 'react';
import classes from "@/components/sections/VulturesMerchSection.module.scss";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const VulturesMerchSection = ({title, imageurl1}: {title: string, imageurl1: string}) => {
    const theme = createTheme({
        typography: {
            fontFamily: 'MyCustomFont , sans-serif'
        },
    })
    return (
        <section className={classes.container}>
            <ThemeProvider theme={theme}>
            <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={"http://localhost:4000" + imageurl1}
                        alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </ThemeProvider>
        </section>
    );
};

export default VulturesMerchSection;