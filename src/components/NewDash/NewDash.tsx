import React, {useState} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { 
    Drawer as MUIDrawer,
    ListItem, 
    List, 
    ListItemText,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline, 
    Box,
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle 
} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme/themes";
import { WeatherForm} from '../WeatherForm';
import {DataTable} from '../DataTable';
import {LocationForm} from '../LocationForm';
import { DataCard } from '../DataCard';
import { WeatherResponseData, PhotoResponseData } from '../WeatherForm';
import { weatherCalls } from '../../api'



function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {'Copyright © '}
      <Link color="primary" href="https://mui.com/">
        Gestra
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const drawerWidth: number = 240;

const myStyles = {
    hide: {
        display: 'none',
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    toolbar_button: {
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.contrastText
    },
    drawerHeader: {
        display: 'flex',
        width: drawerWidth,
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const mdTheme = createTheme();

export const NewDash= () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const [ weatherData, setWeatherData ] = useState< WeatherResponseData | null>(null);
    const [ photoData, setPhotoData ] = useState< PhotoResponseData | null>(null);


    const onSubmit = async (data:any, event:any) => {

        await weatherCalls.getWeather(data.latitude, data.longitude, data.date)
        .then(response => {
            setWeatherData(response)
            console.log(response);
        });

        await weatherCalls.getPhoto(data.name)
        .then(responsePhoto => {
            setPhotoData(responsePhoto)
            console.log({responsePhoto});
        });
    }

    const toggleDrawer = () => {
    setOpen(!open);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
    setOpen(false);
    };

    const handleDialogOpen = () => {
    setDialogOpen(true);
    };

    const handleDialogClose = () => {
    setDialogOpen(false);
    };

    const itemsList = [
    {
        text: 'Home',
        onClick: () => navigate('/')
    },
    {
        text: 'Sign In',
        onClick: () => navigate('/signin')
    },
    {
      text: 'About',
      onClick: () => navigate('/about')
    }
    ]

  return (
    <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                    pr: '24px', 
                    }}>

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        component="h1"
                        variant="h4"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}>
                        Gestra
                    </Typography>

                    <Button sx={myStyles.toolbar_button} onClick={handleDialogOpen}>Add Location</Button>

                    {/*Dialog Pop Up begin */}
                    <Dialog open={dialogOpen} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Add Location</DialogTitle>
                        <DialogContent>
                        <DialogContentText>Add Location</DialogContentText>
                        <LocationForm />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick = {handleDialogClose} color="primary">Cancel</Button>
                        <Button onClick={handleDialogClose} color = "primary">Done</Button> 
                        </DialogActions>
                    </Dialog>

                </Toolbar>

            </AppBar>
            <MUIDrawer
                sx={open ? myStyles.drawer : myStyles.hide}
                variant="persistent"
                anchor="left"
                open={open}
                style={{width:drawerWidth}}>

                <Box
                    sx={myStyles.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </Box>

                <Divider />

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

            </MUIDrawer>

              <Box
                  component="main"
                  sx={{
                      backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                          ? theme.palette.grey[100]
                          : theme.palette.grey[900],
                      flexGrow: 1,
                      height: '100vh',
                      overflow: 'auto',
                  }}>
                  <Toolbar />
                  <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                      <Grid container spacing={2}>
{/*DataCard*/}
                      <Grid item xs={12} md={8} lg={9}>
                          <Paper
                          sx={{
                              p: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              height: 500,
                          }}>
                            <Grid item sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                }}>
                                <DataCard weatherData={weatherData} photoData={photoData}/>
                            </Grid>                             
                          </Paper>
                      </Grid>
{/* WeatherForm */}
                      <Grid item xs={12} md={4} lg={3}>
                          <Paper
                          sx={{
                              p: 2,
                              display: 'flex',
                              flexDirection: 'column',
                              height: 500,
                          }}>
                          <WeatherForm onSubmitHandler={onSubmit}/>
                          </Paper>
                      </Grid>
{/* DataTable */}
                      <Grid item xs={12}>
                          <Paper 
                              sx={{ 
                                p: 2, 
                              display: 'flex', 
                              flexDirection: 'column', 
                              height: 500,
                              }}>
                          <DataTable />
                          </Paper>
                      </Grid>
                      </Grid>
                      <Copyright sx={{ pt: 4 }} />
                  </Container>
              </Box>
        </Box>
      </ThemeProvider>
  )
};

