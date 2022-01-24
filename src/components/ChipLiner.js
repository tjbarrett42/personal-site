import React from 'react';
import {Chip, Stack} from "@mui/material";
import styled from "@mui/material/styles/styled";

const CustomChip =  styled(Chip)`
    border-radius: 5px;

`;

const CustomStack = styled(Stack)`
    padding: 5px;
`;

const ChipLiner = ({chips}) => {
    console.log(chips);
    const mappedChips = chips.map((chip, index) => {
        return <CustomChip color="secondary" key={index} label={chip}/>
    });

    return <CustomStack direction="row" spacing={0.5}>{mappedChips}</CustomStack>;
}

export default ChipLiner;