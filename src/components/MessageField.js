import React, {useState} from 'react';
import {TextField} from '@mui/material';
import {pushMessage} from '../firebase';

export const MessageField = ({name, setText, text, inputEl}) => {
    const [isComposed, setIsComposed] = useState(false);

    return (
        <TextField
            autoFocus
            value={text}
            onChange={(e) => {
                setText(e.target.value);
            }}
            variant="standard"
            fullWidth={true}
            inputRef={inputEl}
            onCompositionStart={() => {
                setIsComposed(true);
            }}
            onCompositionEnd={() => {
                setIsComposed(false);
            }}
            onKeyDown={(e) => {
                if (isComposed) return;
                const text = e.target.value;
                if (text === '') return;
                if (e.key === 'Enter') {
                    pushMessage({name, text});
                    setText('');
                    e.preventDefault();
                }
            }}
        />
    );
};
