import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
    return (
        <footer >
            <Box className="footer-box" textAlign="center" >
                <Typography variant="body1">
                    Timothy Barrett &copy; {new Date().getFullYear()}
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer;