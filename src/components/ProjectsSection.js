import React, {Fragment} from 'react';
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import {Typography} from "@mui/material";
import SectionHeader from "./SectionHeader";

const ProjectSection = () => {
    return (
        <Fragment>
            <SectionHeader header="projects" variant={"h2"}/>
            <br/>
            <Grid container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="stretch" spacing={6}>
                <Grid item xs={12} md={5}>
                    <ProjectCard title={"FindMyForecast"} desc={"A forecasting application for finding the time and place of the perfect intersections of your favorite weather ranges."} link={"https://findmyforecast.vercel.app/"} chips={["Angular", "Express", "MongoDB", "Node.js", "Leaflet.js"]} githubLink={"https://github.com/tjbarrett42/too-hot"} pic={require('../images/fmf.png')}/>
                </Grid>
                <Grid item xs={12} md={5}>
                    <ProjectCard title={"ExerciseShare"} desc={"Exercise sharing web app where you can upload and favorite custom exercises."} link={"https://exercise-share.vercel.app/"} chips={["React", "Express", "MongoDB", "Node.js"]} githubLink={"https://github.com/tjbarrett42/exercise-share"} pic={require('../images/es.png')}/>
                </Grid>
                <Grid item xs={12} md={5}>
                    <ProjectCard title={"Workout Split Planner"} desc={"Interactive workout routine builder designed for optimizing and visualizing weekly volume and timing with over 1300 exercises from the  ExerciseDB API."} link={"https://exercise-planner.vercel.app/"} chips={["React", "Material UI", "react-beautiful-dnd", "recharts"]} githubLink={"https://github.com/tjbarrett42/exercise-planner"} pic={require('../images/Demo2.png')}/>
                </Grid>
                <Grid item xs={12} md={5}>
                    <ProjectCard title={"Total Daily Expenditure Estimator"} desc={"Calculate your basal metabolic rate, body mass index, and macronutrient splits for maintenance, cutting, and bulking."} link={"https://tdee-calculator.vercel.app/"} chips={["React", "Material UI"]} githubLink={"https://github.com/tjbarrett42/react-tdee-calculator"} pic={require('../images/tdee.png')}/>
                </Grid>
            </Grid>
        </Fragment>

    )
}

export default ProjectSection;