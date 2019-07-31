import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Navbar.sass';

const Navbar = ({ isAuthenticated }) => (
    <div className="root">
        <AppBar color="inherit" position="static">
            <Toolbar className="toolbar">
                <Link to="">
                    <Typography edge="start" variant="h6" className="towel">
                        BetterProfessor
                    </Typography>
                </Link>

                <div>
                    {isAuthenticated ?
                        <Link to="/">
                            <Button color="inherit">Log Out</Button>
                        </Link> :
                        <>
                            <Link to="/signin">
                                <Button color="inherit">Log In</Button>
                            </Link>
                            <Link to="/register">
                                <Button color="inherit">Sign Up</Button>
                            </Link>
                        </>
                    }

                </div>
            </Toolbar>
        </AppBar>
    </div >
);

export default Navbar;