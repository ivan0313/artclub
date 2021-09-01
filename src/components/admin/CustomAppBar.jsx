import * as React from 'react';
import { AppBar } from 'react-admin';
import { Typography, IconButton, Tooltip } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';

// import Logo from './Logo';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});

const CustomAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <span className={classes.spacer} />

            <Tooltip title="Visit Home Page">
              <IconButton href='/'>
                <HomeIcon style={{ color: "white" }} />
              </IconButton >
            </Tooltip>
        </AppBar>
    );
};

export default CustomAppBar;