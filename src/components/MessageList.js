import React, {useState, useEffect} from 'react';
import List from '@mui/material/List';
import {makeStyles} from '@mui/styles';
import {messagesRef} from '../firebase';
import {MessageItem} from './MessageItem';

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        width: '100%',
        overflow: 'auto',
    },
});

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        messagesRef
            .orderByKey()
            .limitToLast(15)
            .on('value', (snapshot) => {
                const messages = snapshot.val();
                console.log(messages);
                if (messages === null) return;

                const entries = Object.entries(messages);
                const newMessage = entries.map((entry) => {
                    const [key, nameAndText] = entry;
                    return {key, ...nameAndText};
                });
                setMessages(newMessage);
            });
    }, []);

    return (
        <List className={classes.root}>
            {messages.map(({key, name, text}) => {
                return (
                    <MessageItem key={key} name={name} text={text}>
                        item
                    </MessageItem>
                );
            })}
        </List>
    );
};

export default MessageList;
