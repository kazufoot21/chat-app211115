import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import {display, maxWidth, width} from '@mui/system';
import React from 'react';
import {makeStyles} from '@mui/styles';

import {gravatarPath} from '../gravatar';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));

export const MessageItem = ({name, text}) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(name);
    return (
        <>
            <ListItem>
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
