import {createTheme} from "@mui/material/styles";

const theme = createTheme ({
    palette: {
        type: 'dark',
        primary: {
            main: '#bf360c',
            contrastText: '#e0e0e0',
        },
        secondary: {
            main: '#424242',
            contrastText: '#f0f0f0',
        },
        background: {
            paper: '#0f0f0f',
            default: '#0f0f0f',
        },
        text: {
            secondary: '#e0e0e0',
            primary: '#fafafa',
        },
        divider: '#bf360c',
    },
    typography: {
        fontFamily: 'Raleway',
        h1: {
            fontSize: '4rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '3rem',
        },
        button: {
            fontWeight: 300,
        },
        h3: {
            fontSize: '2.5rem',
            fontWeight: 300,
        },
        body2: {
            fontSize: '1.7rem',
            fontWeight: 300,
        },
        body1: {
            fontWeight: 300,
        },
    },
    props: {
        MuiAppBar: {
            color: 'transparent',
        },
    },
});

export default theme;