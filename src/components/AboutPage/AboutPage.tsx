import React from 'react';
import {
    ListItem, 
    List, 
    ListItemText,
    Toolbar,
    Typography,
    Button,
    CssBaseline, 
    Box
} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Home } from '../Home';
import { SignIn } from '../SignIn'
// import adventure_image from '../../assets/images/adventure.jpg';
// import snow_image from '../../assets/images/snowboarding.jpg';
// import muddy_image from '../../assets/images/muddy.jpg';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Gestra
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const myStyles = {
    toolbar_button: {
        marginLeft: 0,
        backgroundColor: theme.palette.primary.contrastText
    },
};

export const AboutPage = () => {
    const navigate = useNavigate();

    const itemsList = [
        {
            text: 'Home',
            onClick: () => navigate('/')
        },
        ]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <Typography variant="h4" color="inherit" noWrap>
                Gestra
            </Typography>

            <List>
                {itemsList.map((item, index) => {
                    const { text, onClick } = item;
                    return (
                    <ListItem button key={text} onClick={onClick}>
                        <ListItemText primary={text} />
                    </ListItem>
                    );
                })}
            </List>

        </Toolbar>
      </AppBar>
      <main>
{/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}>
          <Container maxWidth="sm">

            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom>
              About Gestra
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Gestra is a weather application with the ability to not only deliver
                current weather; but historical weather data as well. 
                <br></br><br></br>
                At Gestra we know that current trail conditions can be misleading
                for those seeking adventure. 
                <br></br><br></br>
                It may be sunny; but the trail can be degraded from recent rainfall.
                <br></br><br></br>
                There may be blue skies and fresh pow; 
                but a sheet of ice can hide beneath from a recent melt-freeze cycle.
                <br></br><br></br>
                Be prepared. Go Gestra.
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center">
              <Button variant="contained">Join Our Slack</Button>
              <Button variant="outlined">Github</Button>
            </Stack>

          </Container>
        </Box>

      </main>
{/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Contact
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p">
          domp@gestra.mail.com | 1-800-555-5555
        </Typography>
        <Copyright />
      </Box>
{/* End footer */}
    </ThemeProvider>
  );
};