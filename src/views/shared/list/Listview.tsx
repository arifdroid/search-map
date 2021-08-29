import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Cardview from '../card/Cardview';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '36ch',
            backgroundColor:'rgba(234,240,240,0.40)',
        },
        inline: {
            display: 'inline',
        },
    }),
);

export default function Listview(props) {
    const {text} = props
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="contacts">
            <ListItem button>
                <ListItemText inset primary={text} />
            </ListItem>
        </List>
    );
}