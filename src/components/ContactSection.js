import React, {Fragment} from 'react';
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
    return (
        <Fragment>
            <SectionHeader header="contact" variant={"h2"}/>
            <Typography sx={{m:6}}align="center" variant="body1">
                Email: timothy@jamesbarrett.us
            </Typography>
        </Fragment>
    )
}

export default ContactSection;