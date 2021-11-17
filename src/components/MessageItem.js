import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import {display, maxWidth, width} from '@mui/system';
import React, {useRef, useEffect} from 'react';
import {makeStyles} from '@mui/styles';

import {gravatarPath} from '../gravatar';

const useStyles = makeStyles(() => ({
    inline: {
        display: 'inline',
    },
}));

export const MessageItem = ({name, text, isLastItem}) => {
    const ref = useRef(null);
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    useEffect(() => {
        if (isLastItem) {
            //scroll
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [isLastItem]);
    return (
        <>
            <ListItem ref={ref}>
                <ListItemAvatar>
                    <Avatar src={avatarPath} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {text}
                        </Typography>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
};
