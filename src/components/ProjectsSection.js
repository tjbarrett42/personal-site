import React, {Fragment} from 'react';
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import {Typography} from "@mui/material";
import SectionHeader from "./SectionHeader";

const ProjectSection = () => {
    return (
        <Fragment>
            <SectionHeader header="Projects" variant={"h2"}/>
            <br/>
            <Grid container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="stretch" spacing={6}>
                <Grid item xs={12} md={5}>
                    <ProjectCard title={"Workout Split Planner"} desc={"Interactive workout routine builder designed for optimizing and visualizing weekly volume and timing with over 1300 exercises from the  ExerciseDB API."} link={"url"} chips={["React", "API", "Material UI", "react-beautiful-dnd", "recharts"]} githubLink={"github"} pic={require('../images/tdee.png')}/>
                </Grid>
                <Grid item xs={12} md={5}>
                    <ProjectCard title={"Total Daily Expenditure Estimator"} desc={"Calculate your basal metabolic rate, body mass index, and macronutrient splits for maintenance, cutting, and bulking."} link={"https://tdee-calculator.vercel.app/"} chips={["React", "Material UI"]} githubLink={"https://github.com/tjbarrett42/react-tdee-calculator"} pic={require('../images/tdee.png')}/>
                </Grid>
            </Grid>
        </Fragment>

    )
}

export default ProjectSection;