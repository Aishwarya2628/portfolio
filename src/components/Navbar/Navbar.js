import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import {
    FaUser,
    FaFolderOpen,
    FaGraduationCap,
    FaLaptopCode,
    FaMedal,
    FaEnvelope
} from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const useStyles = makeStyles(() => ({
        navMenu: {
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.primary,
            },
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: 'var(--primaryFont)',
            background: theme.secondary,
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            '&:hover': {
                color: theme.tertiary,
            },
        },
        drawerItem: {
            margin: '1.2rem auto',
            padding: '0.8rem 1rem',
            borderRadius: '40px',
            background: theme.secondary,
            border: `2px solid ${theme.primary}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '90%',
            maxWidth: '220px',
            color: theme.primary,
            gap: '1rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
        },
        drawerLinks: {
            fontSize: '1rem',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flexGrow: 1,
        },
        drawerIcon: {
            fontSize: '1.3rem',
            flexShrink: 0,
        },
    }));

    const classes = useStyles();

    const shortname = (name) => {
        return name.length > 12 ? name.split(' ')[0] : name;
    };

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    {shortname(headerData.name)}
                </h1>

                <IoMenuSharp
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>

            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavLink to='/' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <IoHomeSharp className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Home</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#about' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaUser className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>About</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#education' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaGraduationCap className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Education</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#skills' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaLaptopCode className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Skills</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#experience' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <HiDocumentText className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Experience</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#projects' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaFolderOpen className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Projects</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#achievements' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaMedal className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Achievements</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#contacts' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaEnvelope className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Contact</span>
                                </div>
                            </NavLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
