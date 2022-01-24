import React, {Fragment} from 'react';
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const ContactSection = () => {
    return (
        <Fragment>
            <SectionHeader header="Contact" variant={"h2"}/>
            <Typography sx={{m:6}}align="center" variant="body2">
                timothy@jamesbarrett.us
            </Typography>
        </Fragment>
    )
}

export default ContactSection;