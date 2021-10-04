import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";import styled, { ThemeProvider } from 'styled-components';
import Banner from './Components/Home/Banner';
import Plans from './Components/Home/Plans/Plans';
import { selectAppState, setTheme } from './features/appSlice';
import { getPlansFromStripe } from './features/thunkMiddleware';
import Layout from './Layout/Layout';
import GlobalStyles from './styles/globals';
import {whiteTheme,darkTheme} from './themes/default'
function App() {
  const dispatch = useDispatch()
  const mode = useSelector(selectAppState)
//get appTheme from localStorage
useEffect(()=>{
  localStorage.getItem("mode") && dispatch(setTheme(localStorage.getItem("mode")))
},[])

//fetch plans with reduxthunk action
useEffect(()=>{
dispatch(getPlansFromStripe())
},[])
return (
<ThemeProvider theme={mode==='dark'?darkTheme:whiteTheme}>
    <GlobalStyles />

 <Router>
    <Layout>
           <Switch>
            <Route exact path="/"><Banner /> <Plans /> </Route>
            {/* unknown route */}
          </Switch>
    </Layout>
    </Router>
    </ThemeProvider>

  );
}

export default App;
