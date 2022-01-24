import React from 'react';
import {Typography} from "@mui/material";

const SectionHeader = ({header, variant}) => {
    return (
        <Typography sx={{mt: 2}} align="center" variant={variant}>{header}</Typography>
    );
}

export default SectionHeader;