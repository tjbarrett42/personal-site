import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {IconButton} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from "@mui/material/Stack";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1}}>

                    </Typography>
                    <Stack direction="row" spacing={0.5}>
                        <IconButton color="inherit" aria-label="LinkedIn" href="https://www.linkedin.com/in/timjbarrett/" target="_blank">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton color="inherit" aria-label="Github" href="https://github.com/tjbarrett42" target="_blank">
                            <GitHubIcon/>
                        </IconButton>
                        <Button color="primary" variant="contained" size="small" href="https://github.com/tjbarrett42/resume/blob/main/TimothyBarrettResume.pdf" target="_blank">resume</Button>
                    </Stack>

                </Toolbar>
            </AppBar>
        </Box>
    );
}