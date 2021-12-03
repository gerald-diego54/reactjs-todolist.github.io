import React from "react";
import {AppBar, Toolbar,CssBaseline,Typography, makeStyles, useTheme, useMediaQuery,} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
    navlink: {
        marginLeft: theme.spacing(5),
        display: 'flex',
    },
    logo: {
        flexGrow: 1,
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        marginLeft: theme.spacing(10),
        '&:hover': {
            color: 'yellow',
            borderBottom: '1px solid white'
        }
    }
}));
export default function Navbar(){
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (

    <AppBar position="static">
        <CssBaseline />
        <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              Faceshield
            </Typography>
            {isMobile ? <DrawerComponent /> : 
            <div className={classes.navlink}>
                <Link to="/" className={classes.link}>Home</Link>
                <Link to="/" className={classes.link}>About</Link>
                <Link to="/contact" className={classes.link}>Contact</Link>
                <Link to="/" className={classes.link}>FAQs</Link>
                <Link to="/Portfolio" className={classes.link}>Portfolio</Link>
                <Link to="/example" className={classes.link}>Example</Link>
                <Link to="/to-do-list" className={classes.link}>To Do List</Link>
           </div>
            }
        </Toolbar>
    </AppBar>

  );
}