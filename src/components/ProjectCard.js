import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChipLiner from "./ChipLiner";
import CardMedia from "@mui/material/CardMedia";


const ProjectCard = ({ title, desc, link, githubLink, chips, pic}) => {
    return (
        <Card sx={{ minWidth: 275, boxShadow: 0}} >
            <CardMedia
                component="img"
                height="200"
                image={pic}
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
                <Button color="primary" variant="contained" size="large" href={link} target="_blank">
                <Typography variant="subtitle1" component="div">
                    See Demo
                </Typography>
                </Button>
                <Button size="large" href={githubLink} target="_blank">
                    <Typography variant="subtitle1" component="div">
                        Repo
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;