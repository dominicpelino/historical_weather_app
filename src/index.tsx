import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, AboutPage, SignIn, NewDash} from './components';
import './styles.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { FirebaseAppProvider } from 'reactfire'; 
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
    palette: {
    mode: 'dark'
    }
  })

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store ={store}>
        <ThemeProvider theme = {theme}>
          <Router>
            <Routes>
              <Route path="/" element = { <Home title = {"Gestra -- Yesterday's Weather, Today."}/>}/>
              <Route path="/dashboard" element = { <NewDash />}/>
              <Route path="/signin" element = { <SignIn />}/>
              <Route path="/about" element = { <AboutPage/>}/>
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>
);

reportWebVitals();