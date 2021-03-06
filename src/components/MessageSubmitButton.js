import React from 'react';
import IconButton from '@mui/material/IconButton';
import {pushMessage} from '../firebase';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import {StylesContext} from '@mui/styles';

export const MessageSubmitButton = ({name, setText, text, inputEl}) => {
    console.log({text});
    return (
        <IconButton
            disabled={text === ''}
            onClick={() => {
                pushMessage({name, text});
                setText('');
                inputEl.current.focus();
            }}
        >
            <SendSharpIcon />
        </IconButton>
    );
};
