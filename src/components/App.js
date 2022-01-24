import React, { Fragment } from'react';
import Container from "@mui/material/Container";
import ButtonAppBar from "./ButtonAppBar";
import Grid from "@mui/material/Grid";
import './App.css';
import ProjectCard from "./ProjectCard";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import createTypography from "@mui/material/styles/createTypography";
import theme from './theme';
import { CssBaseline } from "@mui/material";
import IntroSection from "./IntroSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";

const App = () => {
  return (
      <Fragment>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Container>
                  <ButtonAppBar ></ButtonAppBar>
                  <IntroSection/>
                  <AboutSection/>
                  <Divider sx={{m: 5 }}/>
                  <ProjectsSection/>
                  <Divider sx={{m: 5}}/>
                  <ContactSection/>
                  <Footer/>
              </Container>
          </ThemeProvider>

      </Fragment>
  );
}

export default App;
