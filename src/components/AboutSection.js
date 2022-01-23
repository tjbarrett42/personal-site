import React, {Fragment} from 'react';
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import styled from "@mui/material/styles/styled";
import Image from "mui-image";

const ProfileBox = styled(Box)`
    background-image: '../images/skiier.png';
`;

const AboutSection = () => {
    return (
        <Fragment>
            {/*<SectionHeader header="About" variant={"h2"}/>*/}
            <br/>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch" spacing={3}>
                <Grid item xs={12} md={3}>
                    <Image sx={{ borderRadius: 1, maxWidth: 200, maxHeight: 200}} src={require('../images/skiier.png')}/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box>
                        <Typography component="span" variant="body2">
                            <p>Hi there, my name is Tim.</p>
                            <p>I'm a recent Computer Science graduate with a love for the gym, skiing, and culinary pursuits. </p>
                            <p>As a believer that health is for everyone, I am building tools that make optimizing diet and strength potential easy.</p>
                            <p> </p>

                        </Typography>

                    </Box>
                </Grid>
            </Grid>


        </Fragment>
    )
}

export default AboutSection;