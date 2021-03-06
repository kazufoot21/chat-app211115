import React, {useState, useRef} from 'react';
import {makeStyles} from '@mui/styles';
import {Grid, Avatar} from '@mui/material';
import {gravatarPath} from '../gravatar';
import {MessageField} from './MessageField';
import {MessageSubmitButton} from './MessageSubmitButton';

const useStyles = makeStyles({
    root: {
        gridRow: 2,
        margin: '26px',
    },
});

const MessageInputField = ({name}) => {
    const inputEl = useRef(null);
    const [text, setText] = useState('');
    const classes = useStyles();
    const avatarPath = gravatarPath(name); //'kazufoot21@outlook.jp'

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar src={avatarPath} />
                </Grid>
                <Grid item xs={10}>
                    <MessageField name={name} setText={setText} text={text} />
                </Grid>
                <Grid item xs={1}>
                    <MessageSubmitButton
                        name={name}
                        setText={setText}
                        text={text}
                        inputEl={inputEl}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default MessageInputField;
