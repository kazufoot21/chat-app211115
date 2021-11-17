import React, {useState} from 'react';
import {TextField} from '@mui/material';
import {pushMessage} from '../firebase';

export const MessageField = ({name, setText, text}) => {
    const [isComposed, setIsComposed] = useState(false);

    return (
        <TextField
            value={text}
            onChange={(e) => {
                setText(e.target.value);
            }}
            variant="standard"
            fullWidth={true}
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
                    pushMessage({name: 'KAZ', text});
                    setText('');
                    e.preventDefault();
                }
            }}
        />
    );
};
