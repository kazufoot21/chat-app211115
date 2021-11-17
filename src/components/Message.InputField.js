import React from 'react';
import {makeStyles} from '@mui/styles';
import {Grid, Avatar} from '@mui/material';
import {gravatarPath} from '../gravatar';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    },
});

const MessageInputField = ({name}) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(name); //'kazufoot21@outlook.jp'

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid xs={1}>
                    <Avatar src={avatarPath} />
                </Grid>
                <Grid xs={10}>input</Grid>
                <Grid xs={1}>button</Grid>
            </Grid>
        </div>
    );
};

export default MessageInputField;
