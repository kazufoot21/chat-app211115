import React from 'react';
import {makeStyles} from '@mui/styles';
import {Grid, Avatar} from '@mui/material';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    },
});

const MessageInputField = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid xs={1}>
                    <Avatar />
                </Grid>
                <Grid xs={10}>input</Grid>
                <Grid xs={1}>button</Grid>
            </Grid>
        </div>
    );
};

export default MessageInputField;
