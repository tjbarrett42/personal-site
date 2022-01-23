import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChipLiner from "./ChipLiner";
import {Divider} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import temp from '../images/temp1.jpeg';


const ProjectCard = ({ title, desc, link, githubLink, chips, pic}) => {
    return (
        <Card sx={{ minWidth: 275, boxShadow: 0}} >
            <CardMedia
                component="img"
                height="140"
                image={pic}
                alt="green iguana"
            >

            </CardMedia>
            <CardContent>
                <Typography variant="h3" component="div">
                    {title}
                </Typography>

                <Typography variant="body1" sx={{m: 1}}>
                    {desc}
                </Typography>
                <ChipLiner chips={chips}/>
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" size="small" href={link} target="_blank">See Demo</Button>
                <Button size="small" href={githubLink} target="_blank">Repository</Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;