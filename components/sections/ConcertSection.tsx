"use client"
import React from 'react';
import classes from "./ConcertSection.module.scss";
import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import concert from "@/interfaces/IConcert";
const ConcertSection = ({concert} : {concert: concert}) => {
    const theme = createTheme({
        typography: {
            fontFamily: 'MyCustomFont , sans-serif'
        },
        palette: {
            secondary: {
                main: '#3c3c3c'
            }
        }
    })
    return (
        <section className={classes.container}>
            <ThemeProvider theme={theme}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={"http://localhost:4000" + concert.image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {concert.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {concert.data.toString()}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{fontSize: '1.3rem'}} color="secondary" disabled={concert.finished}>{concert.finished ? 'Ended': 'Soon'}</Button>
                    <Button  sx={{fontSize: '1.3rem'}} color="secondary" href={concert.buyTickets}>Buy tickets</Button>
                </CardActions>
            </Card>
            </ThemeProvider>
        </section>
    );
};

export default ConcertSection;